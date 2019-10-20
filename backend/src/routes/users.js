const { Router } = require('express');
const router = Router();

const userController = require('../controllers/users.controller');

router.route('/')
    //obtener datos
    .get(userController.getUsers)
    //guardar
    .post(userController.createUser)

router.route('/:id')
    //borrar un dato
    .delete(userController.deleteUser)


module.exports = router;