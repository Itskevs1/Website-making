import { createUserService, getUserService } from "../services/user.service.js";

export const createUserController = async (req, res) => {
    try {
        const users = await createUserService(req.body)
        res.status(201).json({ status: 'success', users });
    } catch (error) {
        res.status(500).json({ status: 'fail', error: error.message });
    }
}

export const getUserController = async (req, res) => {
    try {
        const user = await getUserService(req.body);
        res.status(200).json({ status: 'success', user });
    } catch (error) {
        res.status(500).json({ status: 'fail', error: error.message });
    }
}