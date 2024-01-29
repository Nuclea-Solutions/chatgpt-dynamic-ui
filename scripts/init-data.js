const initLocalDB = require('../src/db/initLocalDB.js');

(async () => {
	try {
		await initLocalDB();
	} catch (error) {
		console.log('Init data script error:', { error });
	}
	process.exit(1);
})();