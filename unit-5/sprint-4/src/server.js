const express = require("express");
const connect = require("./configs/db");
const userController = require("./controllers/user.controller");
const lectureController = require("./controllers/lecture.controller");

const app = express();

app.use(express.json());
app.use("/users", userController);
app.use("/lectures", lectureController);

app.listen(2345, async function () {
	await connect();
	console.log("listening to port 2345");
});
