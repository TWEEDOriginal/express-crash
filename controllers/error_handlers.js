import createError from "http-errors";

const catch_404 = function (req, res, next) {
  next(createError(404));
};

const error_handler = function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
};

export default {
  catch_404,
  error_handler,
};
