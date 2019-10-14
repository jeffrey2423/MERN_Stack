const { Router } = require('express');
const router = Router();

router.route('/')
    //obtener datos
    .get((req, res) => res.send('Notes routes'))
    //guardar 
    .post()

router.route('/:id')
    //actualizar un dato
    .put()
    //borrar un dato
    .delete()
    //actualizar un un dato en especifico
    .patch()


module.exports = router;