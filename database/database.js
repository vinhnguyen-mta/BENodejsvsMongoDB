import mongoose from "mongoose";

async function connect() {
  try {
    let connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("connect mongoose successfull");
    return connection
  } catch (err) {
    let errorMessage = err.code

    throw new Error('can t not connect to mongoo')
  }
}

// 2:26:38
// https://www.youtube.com/watch?v=7XwPmI811H8&t=3730s

export default connect 
