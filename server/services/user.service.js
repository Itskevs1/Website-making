import { createUserModel, getUserModel } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'

export const createUserService = async (userData) => {
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const newUser = {
        username: userData.username,
        password: hashedPassword,
        fullname: userData.fullname
    }

    return await createUserModel(newUser);
}

export const getUserService = async (userData) => {
    const user = await getUserModel(userData.username, userData.password);

    const token = jwt.sign({ id: user.id, user: user}, process.env.JWT_SECRET, { expiresIn: '1h' });

    return { token, user };
}