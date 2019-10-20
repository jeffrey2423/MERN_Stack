const userController = {};
userController.getUsers = (req, res) => res.json({ response: 'GET MESSAGE' });
userController.createUser = (req, res) => res.json({ response: 'POST MESSAGE' });
userController.deleteUser = (req, res) => res.json({ response: 'DELETE MESSAGE' });


module.exports = userController;