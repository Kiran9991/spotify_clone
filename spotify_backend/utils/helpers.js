const jwt = require('jsonwebtoken');

exports = {}

exports.getToken = async (email, user) => {
    // Assume this code is complete
    const payload = { identifier: user._id };
    const secretKey = process.env.JWT_SECRET_KEY;

    const token = jwt.sign(payload, secretKey);
    return token;
};

module.exports = exports