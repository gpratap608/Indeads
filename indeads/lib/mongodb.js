import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI_AUTH)

        console.log("Auth DataBase Connected Successfully")
    } catch (error) {
        console.log("Error Connecting Auth Database",error)
    }
}