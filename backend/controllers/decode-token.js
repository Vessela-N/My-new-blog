import jwt from 'jsonwebtoken';

function decodeToken(req, res, next) {
    const { authorization } = req.headers;

    if (authorization === undefined) {
        return next();
    }

    // const secret = process.env.SECRET;
    // for educational purposes the secret is set.
    const secret = 'vessela and lyubo secret'

    const token = authorization.split(' ')[1];
    console.log({authorization, token});

    try {
        const decoded = jwt.verify(token, secret);
        req.token = decoded;
        next();
    } catch (error) {
        res.status(401).json(error);
    }
}

export default decodeToken;
