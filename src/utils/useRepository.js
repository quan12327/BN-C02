import { connectToDatabase } from "../configDatabase.js";

const db = await connectToDatabase();

class blogRepo{
    constructor(){
        this.db = db;
    }

    async getBlog(){
        const [result] = await this.db.query("select * from blogs");
        return result;
    }

    async getFirstBlog(){
        const [result] = await this.db.query("select * from blogs where id = 1");
        return result;
    }
}


export default new blogRepo();