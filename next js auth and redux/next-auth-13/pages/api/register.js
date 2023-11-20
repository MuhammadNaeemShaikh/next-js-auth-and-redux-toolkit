import userSchema from '../../models/userSchema';
import dbConnect from '../../config/dbConnect';

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      await dbConnect();
      const { name, email, password } = req.body;

      const user = await userSchema.create({
        name,
        email,
        password,
      });

      res.status(200).json({
        success: true,
        user,
      });
    }
  } catch (error) {
    console.log('error in register.js', error);
  }
}
