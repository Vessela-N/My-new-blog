import { save as userSave, userExist } from '../models/user';
import { save as authSave } from '../models/auth';
import md5 from 'md5';

export function createUser(req, res) {
    const user = req.body;
    const passHash = md5(user.password);
    console.log(passHash);

    userExist(user.userName)
        .then((result) => {
            console.log(result);

            if (result !== null) {
                return res.status(400).json({
                    status: 'error',
                    message: 'User already exist!',
                });
            }

            return Promise.all([
                userSave({
                    fullName: user.fullName,
                    email: user.email,
                    _id: user.userName,
                }),
                authSave({
                    _id: user.userName,
                    passHash,
                }),
            ])
            .then(() => res.json({ status: 'ok' }));
        })
        .catch((err) => res.status(400).json(err));
}
