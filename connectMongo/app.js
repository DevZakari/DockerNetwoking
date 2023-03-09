const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

// trust app to app :
app.use(cors());
app.options("*", cors());

// midleware :
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


//mongodb://localhost:27017/todosDB

const ConnectionDB = "mongodb+srv://DevZakari:iUzlCQFX8jv5hvFQ@cluster0.jydtk.mongodb.net/todosDB?retryWrites=true&w=majority";
const { Todo } = require("./models/todo");



app.post(`/submit`, (req, res) => {

  console.log(req.body);
  
  let newTodo = new Todo({
    name: req.body.todo,
  });
  console.log(newTodo);

  newTodo =   newTodo.save();
  if (!newTodo) {
    return res.status(500).json({
      error: err,
      success: false,
    });
  }
 

  return res.send("Data has sent successfully")
  //return res.send(newTodo);
});


mongoose
  .connect(ConnectionDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "todosDB",
  })
  .then(( ) => {
    console.log("Database connection is ready..");
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(27017, () => {
  console.log("listening for requests on port 27017");
});
