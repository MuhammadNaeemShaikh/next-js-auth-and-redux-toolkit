const bcrypt = require('bcrypt')

module.exports.GenerateSalt = async () => {
    return await bcrypt.genSalt()
}


module.exports.GeneratePassword = async (password, salt) => {
    return await bcrypt.hash(password, salt)
}