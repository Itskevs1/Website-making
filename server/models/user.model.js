import { db } from "../database/connection.js";
import bcrypt from 'bcrypt';

export const createUserModel = (user) => {
    return new Promise((resolve, reject) => {
        const q = 'INSERT INTO users (username, password, fullname) VALUES (?, ?, ?)';
        db.query(q, [user.username, user.password, user.fullname], (err, result) => {
            if (err) return reject(err);
            resolve({ id: result.insertId, ...user });
        })
    })
}

export const getUserModel = (username, pPassword) => {
    return new Promise((resolve, reject) => {
        const q = 'SELECT * FROM users WHERE username = ? LIMIT 1';
        db.query(q, [username], async (err, result) => {
            if (err) return reject(err);
            if (result.length === 0) return reject(new Error('User not found'));

            const user = result[0];
            const passwordMatch = await bcrypt.compare(pPassword, user.password);

            if (!passwordMatch) return reject(new Error('Incorrect Password'));

            delete user.password;
            resolve(user);
        })
    })
}