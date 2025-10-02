import mongoose from "mongoose"

const connectDb=async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connected to dB")
    } catch (error) {
        console.log(error)
    }
}

export default connectDb