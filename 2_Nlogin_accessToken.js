//코드 동작하게 최소한만 수정한 코드

const fetch = require("node-fetch");

var express = require("express");
var app = express();
var client_id = "vzaCBhI3kCgvN9TIf1YN";
var client_secret = "2pO3T09zTK";
var state = "RAMDOM_STATE-anyword";
var redirectURI = encodeURI("http://127.0.0.1:3000/callback");
var api_url = "";
app.get("/naverlogin", function (req, res) {
  api_url =
    "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=" +
    client_id +
    "&redirect_uri=" +
    redirectURI +
    "&state=" +
    state;
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
  res.end(
    "<a href='" +
      api_url +
      "'><img height='50' src='http://static.nid.naver.com/oauth/small_g_in.PNG'/></a>"
  );
});
app.get("/callback", async function (req, res) {
  const code = req.query.code;
  const state = req.query.state;
  const api_url =
    "https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=" +
    client_id +
    "&client_secret=" +
    client_secret +
    "&redirect_uri=" +
    redirectURI +
    "&code=" +
    code +
    "&state=" +
    state;

  // var request = require("request");
  // var options = {
  //   url: api_url,
  //   headers: {
  //     "X-Naver-Client-Id": client_id,
  //     "X-Naver-Client-Secret": client_secret,
  //   },
  // };

  // request.get(options, function (error, response, body) {
  //   if (!error && response.statusCode == 200) {
  //     res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });

  //     res.end(body);
  //     console.log("body", body);
  //   } else {
  //     res.status(response.statusCode).end();
  //     console.log("error = " + response.statusCode);
  //   }
  // });

  const response = await fetch(api_url, {
    headers: {
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret,
    },
  });

  const tokenRequest = await response.json();

  return res.send(tokenRequest);
});

app.listen(3000, function () {
  console.log("http://127.0.0.1:3000/naverlogin app listening on port 3000!");
});
