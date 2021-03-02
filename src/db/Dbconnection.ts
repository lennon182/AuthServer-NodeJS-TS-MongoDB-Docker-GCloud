import mongoose from 'mongoose';

export class DbConnection {
  private URI_DB: string = `${process.env.DB_URI}`;
  constructor() {}

  async dbStart() {
    try {
      console.log(`🔥 DB starting`);
      const dbCnx = await mongoose.connect(`${this.URI_DB}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      });
      console.log(`🔥 DB is Connected...`);
      return dbCnx;
    } catch (e) {
      return console.log(`🔥 ERRROR, DB no connected...`, e.message);
    }
  }
}
