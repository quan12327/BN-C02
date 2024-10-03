import mysql from 'mysql2/promise';

async function connectToDatabase(params) {
    try{
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Quanga123',
            database: 'blogpage',
        })
        console.log("Connect to database")
        return connection;
    }catch(error){
        console.error("error connecting to the database", error);
        process.exit(1);
    }
}

export {connectToDatabase};