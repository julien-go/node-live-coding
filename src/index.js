const express = require("express");
const dataSource = require("./utils").dataSource;
const WilderController = require("./controller/wilder");
const SkillController = require("./controller/skill")

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/wilder/read", WilderController.read)
app.post("/api/wilder/create", WilderController.create)
app.post("/api/wilder/update", WilderController.update)
app.post("/api/wilder/delete", WilderController.delete)


app.get("/api/skill/read", SkillController.read)
app.post("/api/skill/create", SkillController.create)
app.post("/api/skill/update", SkillController.update)
app.post("/api/skill/delete", SkillController.delete)

app.use((req, res, next) => {
  res.status(404).send("Erreur 404 ! URL not found")
})


const start = async () => {
  await dataSource.initialize()
  app.listen(3000, () => console.log("Server started on 3000"));
}

start();

