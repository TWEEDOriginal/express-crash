import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const URI = process.env.DATABASE_URI;

const options = {
  useNewUrlParser: true,
};

const connect_db = async () => {
  mongoose.connect(URI, options);
  console.log("Db connection initiated");
  const db = mongoose.connection;
  db.on("error", (error) => 
  {   console.log('errorrrrrrr')
      console.log(error)});
  await db.once("open", () => console.log("Connected to database"));
};



export default connect_db;
