require("dotenv").config({ path: "./config.env" });
const express = require("express");
var cors = require("cors");
const app = express();
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");

connectDB();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res, next) => {
  res.send("Api running");
});
app.post("/submit", (req, res) => {
  if (req.body) {
    console.log(req.body.name, req.body.level);
    return res.status(201).send("Post Data Successfully !!");
  }
  return res.status(500).send("No Data Received !!");
});

// Connecting Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));

// Error Handler Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Sever running on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});
