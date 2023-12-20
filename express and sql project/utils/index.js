const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


module.exports.GenerateSalt = async () => {
    return await bcrypt.genSalt()
}
module.exports.GeneratePassword = async (password, salt) => {
    return await bcrypt.hash(password, salt)
}

module.exports.validPassword = async (enteredPassword, savedPassword, salt) => {
    return await (this.GeneratePassword(enteredPassword, salt)) === savedPassword
}

module.exports.GenerateSignature = async (payload) => {
    return await jwt.sign(payload, process.env.APP_SECRET, {
        expiresIn: "3d"
    })
}

module.exports.validateSignature = async (req) => {
    try {
        const signature = req.get("authorization")
        if (signature) {
            const payload = await jwt.verify(signature.split(" ")[1], process.env.APP_SECRET);
            req.user = payload;
            return true
        } else {
            return false
        }
    } catch (err) {
        console.log(`Error in Validating Signature`, err);
        return false
    }
}


module.exports.validateisAdmin = async (req) => {
    try {
        const validate = await this.validateSignature(req);
        if (validate) {
            if (req.user.isAdmin === "ADMIN") {
                return true
            } else {
                return false
            }

        } else {
            return false
        }
    } catch (err) {
        console.log(`Error in Validating Signature`, err);
        return false
    }
}
