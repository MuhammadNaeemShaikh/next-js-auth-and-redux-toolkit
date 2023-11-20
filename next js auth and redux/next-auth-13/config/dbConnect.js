import mongoose from 'mongoose';

const dbConnect = async () => {
  try {
    if (mongoose.connection.readyState >= 1) return;
    await mongoose.connect(
      'mongodb+srv://root:1234@demo.opycalj.mongodb.net/nextAuth?retryWrites=true&w=majority'
    );
  } catch (error) {
    console.log('error in db', error);
  }
};

export default dbConnect;
