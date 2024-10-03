import express from "express";
import { engine } from "express-handlebars";
import { connectToDatabase } from "./configDatabase.js";
import blogsRepo from "./utils/useRepository.js";
const app = express();

const db = await connectToDatabase();

app.use(express.static("src/public"));

app.engine(
  "hbs",
  engine({
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "src/views");

app.get("/", async (req, res) => {
  const result1 = await blogsRepo.getFirstBlog();
  const result2 = await blogsRepo.getBlog();
  res.render("index", { blog: result1, blogs: result2 });
});

app.get("/lifestyle", (req, res) => {
  res.render("lifestyle");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/culture", (req, res) => {
  res.render("culture");
});

app.listen(3000);
