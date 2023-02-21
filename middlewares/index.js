const { creatingSchema } = require('../schemas/validation');

module.exports.validateUser = async (req, res, next) => {
    try {
        await validationSchema.validate(req.body);
        return next();
    } catch (err) {
        res.send(err.message);
    }
}