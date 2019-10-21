const userController = {};
const userModel = require('../models/User');

userController.getUsers = async (req, res) => {
    const users = await userModel.find();
    res.json(users);
}
userController.createUser = async (req, res) => {
    const { username } = req.body;
    const newUser = new userModel({
        username: username,
    });
    await newUser.save((err, user) => {
        if (err) {
            res.json({ response: 'User already exists' });
        } else {
            res.json({ response: 'User saved' });
        }
    });


}
userController.deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        await userModel.findByIdAndDelete(id);
        res.json({ response: 'user deleted' })
    } catch (error) {
        res.json({ response: 'error' });;
    }

}


module.exports = userController;