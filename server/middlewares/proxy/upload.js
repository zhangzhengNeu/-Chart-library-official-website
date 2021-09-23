var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

const assert = require('assert')
const fs = require('fs')
const http = require('http')

const _ = require('lodash')
const axios = require('axios')
const formidable = require('formidable')
const FormData = require('form-data')

class Uploader {
    constructor(options) {
        const _options = Object.assign({ axios, formidable: {} }, options)

        assert(_.isFunction(_options.axios), 'arguments options.axios must be function!')

        this.axios = _options.axios
        this.formidable = _options.formidable
    }

    // 上传文件
    upload(url, formData, options) {
        assert(url, 'arguments url is required!')
        assert(formData, 'arguments formData is required!')

        assert(formData instanceof FormData, 'arguments formData must be instance of FormData!')

        // TODO: node8 async/await
        return this.axios
            .post(
                url,
                formData,
                _.defaults(
                    {
                        headers: formData.getHeaders()
                    },
                    options
                )
            )
            .then(response => response.data)
    }

    // 基于 request 上传文件
    uploadRequest(url, request, options) {
        assert(url, 'arguments url is required!')
        assert(request, 'arguments request is required!')
        assert(
            request instanceof http.IncomingMessage,
            'arguments request muset be instance of IncomingMessage!'
        )

        // TODO: node8 async/await
        return this.parseRequest(request).then(({ fields, files }) => {
            const formData = this.getFormData({ fields, files })
            return this.upload(url, formData, options)
        })
    }

    // 转为 formData
    getFormData({ fields, files }) {
        const form = new FormData()

        _.isObject(fields) &&
        Object.keys(fields).forEach(field => {
            form.append(field, fields[field])
        })

        _.isObject(files) &&
        Object.keys(files).forEach(fileName => {
            let file = files[fileName]
            // 当多文件上传时 file 是一个数组
            if (!Array.isArray(file)) {
                file = [file]
            }

            file.forEach(f => {
                form.append(fileName, fs.createReadStream(f.path), f.name)
            })
        })

        return form
    }

    // 从 request 对象获取文件和字段信息
    parseRequest(request) {
        assert(request, 'arguments request is required!')
        assert(
            request instanceof http.IncomingMessage,
            'arguments request muset be instance of IncomingMessage!'
        )

        const form = new formidable.IncomingForm(this.formidable)

        Object.keys(this.formidable)
            .filter(key => key.startsWith('on'))
            .forEach(key => {
                const enent = _.lowerFirst(key.slice(2))
                form.on(enent, this.formidable[key])
            })

        return new Promise((resolve, reject) => {
            form.parse(request, (err, fields, files) => {
                if (!err) {
                    resolve({ fields, files })
                } else {
                    reject(err)
                }
            })
        })
    }
}

// 上传
module.exports = opts => {
    const uploader = new Uploader(opts);
    const { axios, formidable } = opts,
        uploadOpts = _objectWithoutProperties(opts, ['axios', 'formidable']);
    return (() => {
        var _ref = _asyncToGenerator(function* ({ map, ctx }) {
            const uploadUrl = map(ctx.path);
            const options = _extends({ params: ctx.query }, uploadOpts);

            return uploader.uploadRequest(uploadUrl, ctx.req, options);
        });

        return function (_x) {
            return _ref.apply(this, arguments);
        };
    })();
};
