module.exports = {

	connect: function(io, PORT) {

		io.on('connection', (socket) => {
			console.log('ooga booga');

		})
	}
}
