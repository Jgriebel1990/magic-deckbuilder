const express = require("express");
const axios = require("axios");


//creation
const serverApp = express();
const port = process.env.PORT || 5000;

serverApp.use(express.static("client/build"));

serverApp.get("/cards", function(request, response) {
  const { pages } = request.params;
  const url = `https://api.magicthegathering.io/${pages}`;
  axios
    .get(url)
    .then(res => {
      response.status(200).json(res.data);
    })
    .catch(err => {
      response.status(500).json({
        msg: "error"
      });
    });
});

serverApp.get("*", (request, response) => {
  response.sendFile("index.html", { root: path.resolve("client/build") });
});

serverApp.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
