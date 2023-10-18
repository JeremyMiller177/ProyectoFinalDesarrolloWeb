const express = require("express");
const app = express();
const cors = require("cors");
const crypto = require("crypto");
const fetch = require("node-fetch");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Methods", "PUT");
  res.setHeader("Access-Control-Allow-Methods", "DELETE");

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

const publicKey = process.env.PUBLIC_KEY;
const privateKey = process.env.PRIVATE_KEY;

app.get("/heroes", async (req, res) => {
  try {
    const ts = new Date().getTime();
    const hashString = ts + privateKey + publicKey;

    const hash = crypto.createHash("md5").update(hashString).digest("hex");

    const response = await fetch(
      `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    );

    const data = await response.json();

    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los héroes");
  }
});

app.get("/heroes/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const ts = new Date().getTime();
    const hashString = ts + privateKey + publicKey;

    const hash = crypto.createHash("md5").update(hashString).digest("hex");

    const response = await fetch(
      `https://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    );

    const data = await response.json();

    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener el héroe");
  }
});

app.get("/heroes/:id/comics", async (req, res) => {
  try {
    const id = req.params.id;
    const ts = new Date().getTime();
    const hashString = ts + privateKey + publicKey;

    const hash = crypto.createHash("md5").update(hashString).digest("hex");

    const response = await fetch(
      `https://gateway.marvel.com/v1/public/characters/${id}/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    );

    const data = await response.json();

    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los cómics del héroe");
  }
});

app.get("/heroes/:id/series", async (req, res) => {
  try {
    const id = req.params.id;
    const ts = new Date().getTime();
    const hashString = ts + privateKey + publicKey;

    const hash = crypto.createHash("md5").update(hashString).digest("hex");

    const response = await fetch(
      `https://gateway.marvel.com/v1/public/characters/${id}/series?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    );

    const data = await response.json();

    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener las series del héroe");
  }
});

app.listen(3001, () => {
  console.log("La aplicación está corriendo en el puerto 3001");
});
