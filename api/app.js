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

// const io = require("socket.io")(8000);

io.on("connection", (socket) => {
  console.log(" **************************************** "),
    console.log(" A DEEP MEANINGFUL CONNECTION HAS BEEN MADE "),
    console.log(" **************************************** ");
  // makes a stable id for each client every time that doesn't change
  const id = socket.handshake.query.id;
  console.log(" WHO ARE YOU ******* YOUR ID IS UNDEFINED*****", id);
  socket.join(id);
  socket.emit(
    "Hey you",
    console.log("THERE IS SOMETHINGS I HAVE TO TELL YOU LUKE ")
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
//App Initializer
const app = express();
// connect to atlas

//Model Routes
const Task = require("./DB/models/Task");
const Grocery = require("./DB/models/Grocery");
const Family = require("./DB/models/Family");
const Calender = require("./DB/models/Calender");

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

// Calender.insertMany(calenderItems)
//   .then(() => {
//     console.log(`new Date()`, new Date("2021-08-24T16:30:00.000Z")),
//       console.log("seeded");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//Route Config
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/calender", calenderRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

app.get("");

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
