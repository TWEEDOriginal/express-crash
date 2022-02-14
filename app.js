import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import cors from 'cors';
import logger from "morgan";
import router from "./routes/routes.js";
import error_handlers from "./controllers/error_handlers.js";
import connect_db from './database/connect_db.js'

connect_db()

const port = 3000;

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(router);
// catch 404 and forward to error handler
app.use(error_handlers.catch_404);
// error handler
app.use(error_handlers.error_handler);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// module.exports = app;
