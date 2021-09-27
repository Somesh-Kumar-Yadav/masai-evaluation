const authorise = () => {
	return function (req, res, next) {
		const { user } = req.user;
		const roles = user.roles;
		if (roles === "admin" || req.user._id === req.body.user._id) {
			next();
		} else {
			return res
				.status(401)
				.send({ status: "failed", message: "Not permitted" });
		}
	};
};
module.exports = authorise;
