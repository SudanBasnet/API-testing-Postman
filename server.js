import express from "express";

const app = express();
const PORT = 8000;
//!make post data available in req.body
app.use(express.json());
let fakeDB = [
  {
    id: 1,
    fName: "sudan",
    lname: "basnet",
  },
  {
    id: 2,
    fName: "sudan2",
    lname: "basnet",
  },
];

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`server is running at http://localhost:${PORT}`);
  }
});

//!get method
app.get("/", (req, res) => {
  console.log(req.query);
  //   fakeDB.push(req.query);
  console.log("server is hit for get method");
  res.json({
    message: "to do get method",
    users: fakeDB,
  });
});

//!post method
app.post("/", (req, res) => {
  //   fakeDB.push(req.body);
  console.log("server is hit");
  res.json({
    message: "New user is added",
  });
});

//!put method
app.put("/", (req, res) => {
  console.log(req.body, req.headers.authorization, "server is hit for put");
  res.json({
    message: "to do put method",
  });
});

//!delete method
app.delete("/:id", (req, res) => {
  console.log(req.params, "server is hit for delete");
  res.json({
    message: "to do delete method",
  });
});
