const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sellers_schema = new Schema({
	username: 
	{
		type: String,
		required: true,
		index: {unique: true}
	},
	password:
	{
		type: String,
		required: true,
	},
	name:
	{
		type: String,
		index: {unique: true}
	},
	mailid:
	{
		type: String,
		index: {unique: true}
	}
},{timestamps: true});

const buyers_schema = new Schema({
	username: 
	{
		type: String,
		required: true,
		index: {unique: true}
	},
	password:
	{
		type: String,
		required: true,
	},
	name:
	{
		type: String,
		index: {unique: true}
	},
	mailid:
	{
		type: String,
		index: {unique: true}
	}
},{timestamps: true});

const sellers = mongoose.model('sellers', sellers_schema);
const buyers = mongoose.model('buyers', buyers_schema);

module.exports = buyers;
module.exports = sellers;