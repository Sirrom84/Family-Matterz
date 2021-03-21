//Module Imports
require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

///////////////////////////////////////////
//                                       //
//          websocket chats              //
//                                       //
///////////////////////////////////////////
const http = require("http").createServer();
http.listen(
  8000,
  () => console.log(" **************************************** "),
  console.log(" LUKE I AM YOUR FATHER SPEAK TO ME ON PORT 8000 "),
  console.log(" **************************************** ")
);

const io = require("socket.io")(http, {
  cors: { origin: "*" },
});
io.on("connection", (socket) => {
  console.log(" A DEEP MEANINGFUL CONNECTION HAS BEEN MADE "),
    console.log(" **************************************** ");
  // makes a stable id for each client every time that doesn't change
  const id = socket.handshake.query.id;
  console.log(" WHO ARE YOU ******* ", socket.handshake.query.id);
  socket.join(id);
  socket.emit(
    "Hey you",
    console.log(
      "THERE IS SOMETHINGS I HAVE TO TELL YOU ",
      socket.handshake.query.id
    )
  );
  socket.on("send-message", ({ recipients, text }) => {
    // each persons gets the message
    recipients.forEach((recipient) => {
      // remove the current sender from the list of recipients
      const newRecipients = recipients.filter((r) => r !== recipient);
      newRecipients.push(id);
      // sends the message back to the room/recipent
      socket.broadcast.to(recipient).emit("receive-message", {
        recipients: newRecipients,
        sender: id,
        text,
      });
    });
  });
});

///////////////////////////////////////////
//                                       //
//        End  websocket chats           //
//                                       //
///////////////////////////////////////////

// const seedDB = require('./DB/seeds');

//Route Modules
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const calenderRouter = require("./routes/calenderRoutes");
const taskRouter = require("./routes/tasksRoutes");
const groceryRouter = require("./routes/groceryRoutes");
const surveyRouter = require("./routes/surveyRoutes");
//App Initializer
const app = express();
// connect to atlas

//Model Routes
const Task = require("./DB/models/Task");
const Grocery = require("./DB/models/Grocery");
const Family = require("./DB/models/Family");
const Calender = require("./DB/models/Calender");
const Survey = require("./DB/models/Survey");
const { query } = require("express");

//Database Config
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@familymatterz.ixxbf.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Your Database is Connected"))
  .catch((err) => {
    console.log("Error", err.message);
  });

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Route Config
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/calender", calenderRouter);
app.use("/tasks", taskRouter);
app.use("/survey", surveyRouter);
app.use("/groceries", groceryRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
