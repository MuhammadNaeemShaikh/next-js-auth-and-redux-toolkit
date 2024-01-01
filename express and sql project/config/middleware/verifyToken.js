const { validateSignature,validateisAdmin } = require("../../utils");


module.exports.userAuth = async (req, res, next) => {
    try {

        const isAuthorized = await validateSignature(req)

        if (isAuthorized) {
            next()
        } else {
            return res.status(403).json({
                success: 0,
                message: "You are not Authenticated"
            })
        }

    } catch (error) {
        console.log(`Error in Authorization`, error);
        return res.status(403).json({
            success: 0,
            message: "Error in Authorization"
        })
    }
}

module.exports.adminAuth = async (req, res, next) => {
    try {

        const isAuthorized = await validateisAdmin(req)

        if (isAuthorized) {
            next()
        } else {
            return res.status(403).json({
                success: 0,
                message: "You are not Allowed to do this"
            })
        }

    } catch (error) {
        console.log(`Error in Authorization`, error);
        return res.status(403).json({
            success: 0,
            message: "Error in Authorization"
        })
    }
}