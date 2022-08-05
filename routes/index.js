const { Router } = require('express')
const controllers = require('../controllers')
const router = Router();
//in seed file, folder will be imported not specific files

router.get('/', (req, res) => res.send('This is the root!'))

router.post('/plants', controllers.createPlant)

router.get('/plants',controllers.getAllPlants)

router.get('/plants/:id',controllers.getPlantById)

router.put('/plants/:id',controllers.updatePlant)

router.delete('/plants/:id',controllers.deletePlant)
module.exports = router;