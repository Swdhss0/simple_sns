const express = require("express");
const app = express();
app.use(express.json());
const authRoute = require("./routes/auth");
const postsRoute = require("./routes/posts");
const usersRoute = require("./routes/user");
const PORT = 8181;
app.listen(PORT, () => console.log('server is runnning PORT=8181'));

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const bcrypt = require('bcrypt');

const jwt = require("jsonwebtoken");

const cors = require("cors");

require("dotenv").config();

app.use(cors());

//auth
app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);
app.use("/api/users", usersRoute);
