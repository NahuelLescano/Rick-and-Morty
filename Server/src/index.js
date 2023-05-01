const server = require('./app');
const { conn } = require('./db');
const { PORT } = process.env;

conn.sync({ force: true }).then(() => {
	server.listen(PORT, () => {
		console.log(`Listening on port ${PORT}`);
	});
});