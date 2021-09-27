const jwt = require("jsonwebtoken");
const verifyToken = (token) => {
	return new Promise((resolve, reject) => {
		jwt.verify(token, "Somesh", (err, user) => {
			if (err) return reject(err);
			if (user) return resolve(user);
		});
	});
};
const protect = async function (req, res, next) {
	const bearerToken = req.headers?.authorization;

	if (!bearerToken || !bearerToken.startsWith("Bearer ")) {
		return res.status(400).send({
			status: "failed",
			message: "bearer token error",
		});
	}
	const token = bearerToken.split(" ")[1];
	let user;
	try {
		user = await verifyToken(token);
		req.user = user;
		next();
	} catch (e) {
		return res.status(400).send({
			status: "failed",
			message: "Something wrong in protect",
		});
	}
};

module.exports = protect;
