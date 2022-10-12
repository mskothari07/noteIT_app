const path = require("path");
const express = require("express");

require("./db/mongoose.js");

const noteRouter = require("./routers/note-routers.js");
const userRouter = require("./routers/user-routers.js");

const app = express();

app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "*");
  res.set("Access-Control-Allow-Methods", "*");
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  next();
});

app.use(express.json());

app.use(noteRouter);
app.use(userRouter);

//-----------Deployment-------------
const __dirname1 = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running successfully");
  });
}
//-----------Deployment-------------
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
