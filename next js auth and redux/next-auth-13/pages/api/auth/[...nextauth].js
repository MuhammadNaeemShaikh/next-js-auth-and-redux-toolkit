import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers';
import userSchema from '../../../models/userSchema';
import bcrypt from 'bcryptjs';
import dbConnect from '../../../config/dbConnect';

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      async authorize(credientials, req) {
        dbConnect();

        const { email, password } = credientials;
        console.log(email, password);
        const user = await userSchema.findOne({ email });
        if (!user) {
          throw new Error('Invalid Email or Password');
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password);

        if (!isPasswordMatched) {
          throw new Error('Invalid Email or Password');
        }

        return user;
      },
    }),
  ],
});
