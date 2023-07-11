import express from "express";
import bootstrap from "./src/index.router.js";
import connectDB from "./DB/connection.js";
const app = express();
const port = 5000;

bootstrap(app, express);

connectDB();

app.listen(port, () => {
  console.log(`Server started on port.... ${port}`);
});
