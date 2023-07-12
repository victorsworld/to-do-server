const mongoose = require("mongoose");

const mongooseConnect = async () => {
	try {
		await mongoose.connect(process.env.ATLAS_URI);
		console.log("connected to mongodb");
	} catch (error) {
		console.log(error);
	}
};

module.exports = { mongooseConnect };