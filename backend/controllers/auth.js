import { getById } from '../models/auth';
import jwt from 'jsonwebtoken';
import md5 from 'md5';

export function login(req, res) {
    const { userName, password } = req.body;
    const passHash = md5(password);
    const secret = process.env.SECRET;

    getById(userName)
        .then((result) => {
        // console.log({result});
            if (result === null || passHash !== result.passHash) { //if user or password is incorrect
                return res.status(401).json({
                    status: 'error',
                    message: 'Wrong username or password!',
                });
            }

            const maxTime = 3 * 24 * 60 * 60;
            const token = jwt.sign(
                { userName}, // exp: Math.floor(Date.now() / 1000) + 60 * 60
                secret,
                {expiresIn: maxTime}
            );

            res.json({token});
        })
        .catch((err) => res.status(400).json(err.message));
}
