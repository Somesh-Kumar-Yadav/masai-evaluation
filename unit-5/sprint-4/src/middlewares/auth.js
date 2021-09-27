const auth = () => {
	return function (req, res, next) {
		const { user } = req.user;
		const roles = req.roles;
		if (roles === "admin" || roles === "instructor") {
			next();
		} else {
			return res
				.status(401)
				.send({ status: "failed", message: "Something went wrong" });
		}
	};
};
module.exports = auth;
