import { User } from "../../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const generateToken = (user: any) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET!, { expiresIn: "7d" });
};

export const userResolvers = {
  Query: {
    me: async (_: any, __: any, { user }: any) => {
      if (!user) throw new Error("Not authenticated");
      return await User.findById(user.id);
    }
  },

  Mutation: {
    register: async (_: any, { username, email, password }: any) => {
      const existing = await User.findOne({ email });
      if (existing) throw new Error("Email already exists");

      const hashedPassword = await bcrypt.hash(password, 12);

      const user = new User({
        username,
        email,
        password: hashedPassword
      });

      await user.save();
      const token = generateToken(user);

      return { token, user };
    },

    login: async (_: any, { email, password }: any) => {
      const user = await User.findOne({ email });
      if (!user) throw new Error("User not found");

      const valid = await bcrypt.compare(password, user.password!);
      if (!valid) throw new Error("Invalid credentials");

      const token = generateToken(user);

      return { token, user };
    }
  }
};
