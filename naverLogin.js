const fetch = require("node-fetch");

var express = require("express");
var app = express();
var client_id = "vzaCBhI3kCgvN9TIf1YN";
var client_secret = "2pO3T09zTK";
var state = "RAMDOM_STATE";
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

  const tokenRequest = await (
    await fetch(api_url, {
      method: "POST",
      headers: {
        "X-Naver-Client-Id": client_id,
        "X-Naver-Client-Secret": client_secret,
        Accept: "application/json",
      },
    })
  ).json();

  if ("access_token" in tokenRequest) {
    const { access_token } = tokenRequest;
    const apiUrl = "https://openapi.naver.com/v1/nid/me";
    const userData = await (
      await fetch(apiUrl, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
    ).json();
    // console.log("access_token", access_token);

    console.log("userData", userData);
  }
  return res.redirect("/naverlogin");
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
});
app.listen(3000, function () {
  console.log("http://127.0.0.1:3000/naverlogin app listening on port 3000!");
});
