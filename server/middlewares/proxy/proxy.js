var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

const assert = require('assert');

const upload = require('./upload');
const request = require('./request');

// 代理中间件
module.exports = options => {
    assert(options, 'arguments options is required!');
    const { map } = options,
        uploadOpts = _objectWithoutProperties(options, ['map']);
    assert(typeof map === 'function', 'arguments map must be function!');
    return (() => {
        var _ref = _asyncToGenerator(function* (ctx, next) {
            const { axios } = ctx;
            assert(typeof axios === 'function', 'ctx.axios invaild. proxy is depend on axios!');

            const isUpload = ctx.is('multipart/form-data');
            const func = isUpload ? upload : request;
            const opts = isUpload ? _extends({ axios }, uploadOpts) : { axios };
            ctx.body = yield func(opts)({ map, ctx });

            if (typeof next === 'function') {
                yield next();
            }
        });

        return function (_x, _x2) {
            return _ref.apply(this, arguments);
        };
    })();
};
