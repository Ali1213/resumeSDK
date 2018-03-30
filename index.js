const fs = require('fs');
const path = require('path');
const request = require('request');
const util = require('util');
const fileType = require('file-type');
// request.debug = true;
const settings = require('./settings.json');
const debug = require('debug');

const headers = {
  // 'cache-control': 'no-cache',
  'content-type': 'application/json',
}

const convertFileToBase64 = (filepath)=>{
  const buf = fs.readFileSync(filepath);
  return buf.toString('base64');
}

const generateOptions = (filePath) => ({
  method: 'POST',
  url: settings.url,
  headers: headers,
  auth: settings.auth,
  body: JSON.stringify({
    fname: path.basename(filePath),
    uid: settings.uid,
    pwd: settings.pwd,
    base_cont: convertFileToBase64(filePath),
  })
});

const requestWrap = async({
  url = settings.url,
  filePath
}) => {
  fs.statSync(filePath);
  return new Promise((rs,rj)=>{
    request(generateOptions(filePath),(error, response, body) => {
      if (error) return rj(error);
      let result;
      try {
        result = JSON.parse(body);
      } catch (e) {
        debug("error",e);
        result = {
          err: '请求错误',
          code: 404,
        };
      }
      debug("request body",result);
      return rs(result);
    });
  })
}

const resumeParse = async( filePath ) => {
  return requestWrap({ 
    url : settings.url,
    filePath,
  });
}

module.exports = resumeParse;



