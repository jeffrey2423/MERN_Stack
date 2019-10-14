const { Router } = require('express');
const router = Router();

router.route('/')
    //obtener datos
    .get((req, res) => res.json({response: 'GET MESSAGE'}))
//     //guardar
    .post((req, res) => res.send({response: 'POST MESSAGE'}))

// router.route('/:id')
//     //obtener datos
//     .get()
//     //actualizar un dato
//     .put()
//     //borrar un dato
//     .delete()
//     //actualizar un un dato en especifico
//    .patch()


module.exports = router;