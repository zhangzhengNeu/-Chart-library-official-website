// 代理中间件
module.exports = ({ axios }) => async ({ map, ctx }) => {
  const { method, path, request: { body }, query } = ctx;

  const opts = {
      method,
      url: map(path),
      params: query,
      data: body
  };

  const contentType = ctx.get('content-type');
  if (contentType) {
      opts.headers = {
          'content-type': contentType,
          ...ctx.request.headers
      };
  }

  // 文件下载标识
  const isDownload = ctx.get('xmly-download') === 'download' ||
    !contentType && ctx.request.url.indexOf('figure') > 0 && ctx.request.method === 'GET';
  // console.log('isDownload', isDownload)
  if (isDownload) {
      opts.responseType = 'stream';
  }

  const res = await axios(opts);

  // console.log('=====res', res);

  if (isDownload) {
      // 设置服务端返回的文件名和文件类型
      const fileContentDisposition = res.headers['content-disposition'];
      const fileContentType = res.headers['content-type'];

      if (fileContentDisposition) {
          ctx.set('content-disposition', fileContentDisposition);
      }
      if (fileContentType) {
          ctx.set('content-type', fileContentType);
      }
  }

  return res.data;
};
