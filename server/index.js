const express = require("express");
const app = express();
const mongoose = require("mongoose");
var cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());
const CONNECTION_STRING ="mongodb+srv://Mustafazade:laman2002@demoss.3dxyirf.mongodb.net/"
const DB_PASSWORD = "laman2002";
const DB_USERNAME = "Mustafazade";
const PORT = 5050;

const DemoSchema = new mongoose.Schema(
  {
    imgSrc: String,
    price: Number,
    name: String,
    title: String,
  },
  { timestamps: true }
);

const DemoModel = mongoose.model("Demo", DemoSchema);

app.use("/demo", async (req, res) => {
  const demos = await DemoModel.find();
  if (demos.lenght > 0) {
    res.send({
      message: "succes",
      data: demos,
    });
  } else {
    res.send({
      message: "not found",
      data: null,
    });
  }
});

app.use("/demo/:id", async (req, res) => {
  const { id } = req.params;
  let demos;
  try {
    demos = await DemoModel.findById(id);
    res.send({
      message: "succes",
      data: demos,
    });
  } catch (error) {
    res.send({ error: error });
  }
});

app.delete("/demo/:id", async (req, res) => {
  const { id } = req.params;
  const demos = await DemoModel.findByIdAndDelete(id);

  res.send({
    message: "deleted",
    data: demos,
  });
});

app.post("/demo",async(req,res) => {
  const demos = new DemoModel(req.body);
  await demos.save();
  res.send({
    message: "post",
    response: demos,
  });
});

app.patch("/demo/:id", async (req, res) => {
    const {id} =req.params
   await  DemoModel.finByIdAndUpdate(id,req.body)
const demos = DemoModel.findById(id)
    res.send({
      message: "posted",
      data: demos,
    });
  });
  





mongoose.connect(CONNECTION_STRING).then(() => console.log("Connected!"));

app.listen(PORT, function () {
  console.log(`connected ${PORT}`);
});
