const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");

const todoSchema = new mongoose.Schema({
    id: { type: String, default: uuid },
	title: { type: String, required: true },
	description: { type: String, required: true },
	isComplete: {type: Boolean, default: false },
	priority: { type: String, enum: ["low", "medium", "high"], default: "medium"} ,
	creationDate: { type: Date, default: Date.now },
	lastModified: { type: Date, default: Date.now },
	completedDate: { type: Date}
})

const ToDo = mongoose.model("ToDo", todoSchema);

module.exports = ToDo;