const initLocalDB = require('../src/db/initLocalDB.js');

(async () => {
	try {
		await initLocalDB();
	} catch (error) {
		console.log({ error });
	}
	process.exit(1);
})();