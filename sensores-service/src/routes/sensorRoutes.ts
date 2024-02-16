import express from 'express';
import sensorController from '../controllers/sensorController';

const router = express.Router();

router.get('/:idCar', sensorController.getAllSensores);
router.get('/:id', sensorController.getSensorById);
router.post('/', sensorController.createSensor);
router.put('/:id', sensorController.updateSensor);
router.patch('/updateState/:id', sensorController.changeStateSensor);
router.delete('/:id', sensorController.deleteSensor);

export default router;
