const express = require("express");
const mongoose = require("mongoose");
// const CONNECTION_STRING =
//   "mongodb+srv://laman:laman2004@cluster0.mbrvjt8.mongodb.net/";
// const DB_PASSWORD = "laman2004";
// const DB_USERNAME = "laman";
const PORT = 5050;
const cors = require("cors");
const app = express();
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.json());
const demoSchema = new mongoose.Schema(
  {
    imgSrc: String,
    price: Number,
    name: String,
    title: String,
  },
  { timestamps: true }
);

const Model = mongoose.model("Demo", demoSchema);

app.get('/demo', async (req, res) => {
  const found = await Model.find()
  try { res.send(found) }
  catch { res.send("cannt get") }
})
app.get('/demo/:id', async (req, res) => {
  const { id } = req.params
  const found = await Model.findById(id)
  try { res.send(found) }
  catch { res.send("cannt get") }
})
app.post('/demo', async (req, res) => {
  const newItem = new Model(req.body)
  newItem.save()
  try { res.send(newItem) }
  catch { res.send("cannt get") }
})
app.delete('/demo/:id', async (req, res) => {
  const { id } = req.params
  const delit = await Model.findByIdAndDelete(id)
  try { res.send(delit) }
  catch { res.send("cannt del") }
})




// app.get("/demo", async (req, res) => {
//   const demos = await DemoModel.find();
//   if (demos.lenght > 0) {
//     res.send({
//       message: "succes",
//       data: demos,
//     });
//   } else {
//     res.send({
//       message: "not found",
//       data: null,
//     });
//   }
// });

// app.get("/demo/:id", async (req, res) => {
//   const { id } = req.params;
//   let demos;
//   try {
//     demos = await DemoModel.findById(id);
//     res.send({
//       message: "succes",
//       data: demos,
//     });
//   } catch (error) {
//     res.send({ error: error });
//   }
// });

// app.delete("/demo/:id", async (req, res) => {
//   const { id } = req.params;
//   const demos = await DemoModel.findByIdAndDelete(id);

//   res.send({
//     message: "deleted",
//     data: demos,
//   });
// });

// app.post("/demo", async (req, res) => {
//   const demos = new DemoModel(req.body);
//   await demos.save();
//   res.send({
//     message: "post",
//     response: demos,
//   });
// });

app.patch("/demo/:id", async (req, res) => {
  const { id } = req.params;
  await Model.findByIdAndUpdate(id, req.body);
  const demos =  await Model.findById(id);
  res.send({
    message: "posted",
    data: demos,
  });
});

mongoose
  .connect("mongodb+srv://laman:laman123@data.66kt1cu.mongodb.net/")
  .then(() => console.log("connected"));

// mongoose.connect(CONNECTION_STRING).then(() => console.log("Connected!"));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
