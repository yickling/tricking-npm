module.exports = function(obj) {
	obj.schema = schema
	return obj
}

schema = {
	createTable: createTable,
	then: then,
	map: map
}

function createTable(cb) { return schema }
function then(cb) { return schema }
function map(cb) {
	console.log("RUNNING STUB")
	return schema 
}

module.exports.schema = schema
module.exports.schema.createTable = createTable