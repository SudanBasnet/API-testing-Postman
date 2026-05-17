import express from "express";

const app = express();
const PORT = 8000;
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
  {
    id: 3,
    fName: "sudan3",
    lname: "basnet",
  },
  {
    id: 4,
    fName: "sudan4",
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
  //   console.log({ ...req.query });
  //   fakeDB.push(req.query);
  console.log("server is hit");
  res.json({
    message: "to do get method",
    users: fakeDB,
  });
});

//!post method
app.post("/", (req, res) => {
  console.log("server is hit");
  res.json({
    message: "to do post method",
  });
});

//!put method
app.put("/", (req, res) => {
  console.log("server is hit");
  res.json({
    message: "to do put method",
  });
});

//!delete method
app.delete("/", (req, res) => {
  console.log("server is hit");
  res.json({
    message: "to do deletemethod",
  });
});
