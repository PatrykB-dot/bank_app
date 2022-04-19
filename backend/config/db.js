const mongoose = require('mongoose');


const connectDB = async () => {
    try {
       // const conn = await mongoose.connect(process.env.MONGO_URI);
       const conn = await mongoose.connect("mongodb+srv://patrykb:patrykb@cluster0.otpbg.mongodb.net/bankapp?retryWrites=true&w=majority");
        console.log(`MongoDB connected ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
module.exports = connectDB