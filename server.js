const express = require("express");
const { seeder, User } = require("./db");
const path = require("path");
const app = express();

app.use("/dist", express.static("dist"));
app.use("/assets", express.static("assets"));

app.use(express.json());

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.get("/api/users", async (req, res, next) => {
  try {
    res.send(
      await User.findAll(
    //     {
    //     attributes: {
    //       exclude: ["adj", "vehicle", "bio"],
    //     },
    //   }
      )
    );
  } catch (ex) {
    next(ex);
  }
});

app.get(`/api/users/:id`, async(req, res, next) => {
    try {
        res.send(await User.findByPk(req.params.id));
    } catch (ex) {
        next(ex);
    }
});

app.post('/api/users', async(req, res, next) => {
    try {
        res.status(201).send(await User.create(req.body));
    } catch (ex) {
        next(ex);
    }
});

app.delete(`/api/users/:id`, async(req, res, next) => {
    try {
        const user = await User.findByPk(req.params.id);
        await user.destroy();
        res.sendStatus(201);
    } catch (ex) {
        next(ex);
    }
});

app.use((err, req, res, next) => {
  res.status(500).send({ error: err.message });
});

const init = async () => {
  try {
    await seeder();
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`listening on port ${port}`));
  } catch (ex) {
    console.log(ex);
  }
};

init();
