module.exports.argsGrinder = () => {
	const allArgs = process.argv.slice(2);

	console.log("all arguments from grinder:", allArgs);

	return allArgs;
}
