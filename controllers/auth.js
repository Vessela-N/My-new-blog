import { save } from '../models/session';
import { getById } from '../models/auth';
import md5 from 'md5';

export function login(req, res) {
    const { userName, password } = req.body;
    const passHash = md5(password);

    getById(userName)
        .then((result) => {
        if (result === null || passHash !== result.passHash) {
            return res.status(401).json({
                status: 'error',
                message: 'Wrong username or password!',
            });
        }

        return save({ userName })
        .then(session => {
            console.log({session});
            res.json(session);
        });
    })
    .catch((err) => res.status(400).json(err.message));
}
