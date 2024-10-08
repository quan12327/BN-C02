import express from "express";
import { engine } from "express-handlebars";
import { connectToDatabase } from "./configDatabase.js";
import blogsRepo from "./utils/useRepository.js";
const app = express();

const db = await connectToDatabase();

app.use(express.static("src/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine(
  "hbs",
  engine({
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "src/views");

app.get("/", async (req, res) => {
  const blogs = await blogsRepo.getBlog();
  const bigBlog = blogs[0];
  const sideBlogs = blogs.splice(1);
  res.render("index", { bigBlog: bigBlog, sideBlogs: sideBlogs });
});

app.get("/lifestyle", (req, res) => {
  res.render("lifestyle");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.post("/contact", async (req, res) => {
  const result = await blogsRepo.getClientInfo(req.body);
  console.log(result);
  if (result === null) {
    return res.status(401).send({
      message: "Can't create information",
    });
  }
  if (result.affectedRows !== 0) {
    return res.status(201).send({
      message: "User created successfully",
    });
  }

  res.statusCode(400).send({
    message: "Data can't insert into database",
  });
});

app.get("/culture", (req, res) => {
  res.render("culture");
});

app.get("/blog/:id", async (req, res) => {
  const blogs = await blogsRepo.getBlogById(req.params.id);
  const ablog = blogs[0]
  res.render("blog", { blog: ablog });
});
app.listen(3000);
