// import esm from "esm";
const express = require("express");
const logger = require("morgan");
const expressFileUpload = require("express-fileupload");
const app = express();
var port = process.env.PORT || 3000;

import applyRouter from "./routes/user.js";

// const router = express.Router();
app.use(applyRouter);

app.use(json());
app.use(logger("dev"));
app.use(expressFileUpload({ useTempFiles: true }));

app.get("/", function (req, res) {
  res.json({ message: "hooray! welcome to our api!" });
});

app.listen(port, () => {
  console.log(`listening at Port ${port}`);
});
