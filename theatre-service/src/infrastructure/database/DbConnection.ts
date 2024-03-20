import mongoose from "mongoose";

export default async () => {
    require('dotenv').config()
    console.log(process.env.MONGO_URL)
    try {

        await mongoose.connect(String(process.env.MONGO_URL).trim())

        console.log(`🍃🍃🍃🍃🍃🍃 Database connected with MongoDB 🍃🍃🍃🍃🍃🍃`);  

    } catch (error: any) {
        console.error(`🍁🍁🍁🍁🍁 Database Connection failed 🍁🍁🍁🍁🍁`);
        console.error(error.message);
        process.exit(1)
    }
};