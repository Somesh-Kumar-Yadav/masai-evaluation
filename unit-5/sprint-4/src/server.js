const express = require("express");
const connect = require("./configs/db");
const userController = require("./controllers/user.controller");

const app = express();

app.use(express.json());
app.use("/users", userController);

app.listen(2345, async function () {
	await connect();
	console.log("listening to port 2345");
});
