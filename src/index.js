const express = require("express");
const dataSource = require("./utils").dataSource;
const WilderController = require("./controller/wilder");
const SkillController = require("./controller/skill")

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/wilder", WilderController.read)
app.post("/api/wilder", WilderController.create)
app.put("/api/wilder", WilderController.update)
app.delete("/api/wilder", WilderController.delete)

app.post("/api/wilder/addSkill", WilderController.addSkill)


app.get("/api/skill", SkillController.read)
app.post("/api/skill", SkillController.create)
app.put("/api/skill", SkillController.update)
app.post("/api/skill", SkillController.delete)

app.use((req, res, next) => {
  res.status(404).send("Erreur 404 ! URL not found")
})


const start = async () => {
  await dataSource.initialize()
  app.listen(3000, () => console.log("Server started on 3000"));
}

start();

