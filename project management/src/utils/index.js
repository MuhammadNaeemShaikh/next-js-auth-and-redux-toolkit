const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


module.exports.validPassword = async (enteredPassword, savedPassword, salt) => {
    return (await this.GeneratePassword(enteredPassword, salt)) === savedPassword;
};

module.exports.GenerateSalt = async () => {
    return await bcrypt.genSalt();
}

module.exports.GeneratePassword = async (password, salt) => {
    return await bcrypt.hash(password, salt)
}

module.exports.FormatData = async (data) => {
    if (data) {
        return {
            success: 1,
            data
        }
    } else {
        throw new Error("Data Not Found!")
    }
}


module.exports.GenerateSignature = async (payload) => {
    try {
        return await jwt.sign(payload, process.env.JWT_SEC, { expiresIn: '3d' })
    } catch (error) {
        console.log(error);
        return error
    }
}



// module.exports.ValidateSignature = async (req) => {
//     try {
//         const signature = req.get("Authorization");
//         if (signature) {

//             const payload = await jwt.verify(signature.split(" ")[1], APP_SECRET);
//             req.user = payload;
//             return true;
//         } else {
//             return false
//         }
//     } catch (error) {
//         console.log(error);
//         return false;
//     }
// }