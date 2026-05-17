import express from "express";
const router = express.Router();
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

//!get method
router.get("/", (req, res) => {
  try {
    console.log(req.query);
    console.log("server is hit for get method");
    res.json({
      message: "to do get method",
      users: fakeDB,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: "error", //success
      message: "Error" + error.message,
    });
  }
});

//!post method
router.post("/", (req, res) => {
  try {
    console.log("server is hit");
    res.json({
      message: "New user is added",
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      message: "Error" + error.message,
    });
  }
  //   fakeDB.push(req.body);
});

//!put method
router.put("/", (req, res) => {
  console.log(req.body, req.headers.authorization, "server is hit for put");
  res.json({
    message: "to do put method",
  });
});

//!delete method
router.delete("/:id", (req, res) => {
  console.log(req.params, "server is hit for delete");
  res.json({
    message: "to do delete method",
  });
});

export default router;
