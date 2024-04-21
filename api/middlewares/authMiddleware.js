const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    if(!token) {
        return res.status(401).json({error: 'Unauthorized'});
    }

    try {
        const decoded = jwt.verify(token, 'secretKey');
        req.user = decoded;
        next();
    } catch (error) {
        console.error('Error occurred while verifying token', error);
        res.status(403).json({error: 'Forbidden'});
    }
}


module.exports = verifyToken;
