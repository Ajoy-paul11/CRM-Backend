import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}/Marketing`)

        console.log(`\n MongoDB connected, DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("ERROR while connecting to DB ", error)
    }
}


export default connectDB;