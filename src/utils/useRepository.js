import { connectToDatabase } from "../configDatabase.js";

const db = await connectToDatabase();

class blogRepo {
  constructor() {
    this.db = db;
  }

  async getBlog() {
    const [result] = await this.db.query("select * from blogs");
    return result;
  }

  async getBlogById(param) {
    const result = await this.db.query("select * from blogs where id="+param);
    return result;
  }

  async getClientInfo(body) {
    const { name, email, subject, description } = body;
    console.log(name.length,subject);
    if (name.length > 3 && subject.length > 5) {
        const [result] = await db.query(
            "insert into clients (name, email, subject, description, createdDate) values(?,?,?,?,?)",
            [name, email, subject, description, new Date()]
          );
          return result;
    }
    return null;
  }
}

export default new blogRepo();
