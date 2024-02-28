import server from './presentation/server'
import dbConnection from './infrastructure/database/dbConnection';
//  test
(async() => {
    try {
        server;
        await dbConnection()
        .catch((error: any) => {
            console.log(error?.message);
            process.exit();
        })
    } catch (error: any) {
        console.log(error?.message)
    }
})();
