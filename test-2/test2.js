var unirest = require("unirest");

var req = unirest("POST", "https://api.youyun.com/v1/balance");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
req.headers({
  "postman-token": "ecfe30c6-f199-87bc-6fa0-1f9df08f3290",
  "cache-control": "no-cache",
  "content-type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW"
});

req.multipart([
  {
    "body": "Gu2H7uZfpq4M31Q6REUSuwia2nR7r900000449ff"
  }
]);

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
