import { Request, Response } from 'express';
import Sensor from '../../../common/src/models/sensor';
import sensorService from '../services/sensorService';

const sensorController = {
  getAllSensores: async (req: Request, res: Response) => {
    try {
      const sensores = await sensorService.getAllSensores(req.params.idCar);
      res.json(sensores);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getSensorById: async (req: Request, res: Response) => {
    try {
      const sensor = await sensorService.getSensorById(req.params.id);
      res.json(sensor);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createSensor: async (req: Request, res: Response) => {
    try {
      const newSensor = new Sensor(req.body);
      const senserSaved = await sensorService.createSensor(newSensor);
      res.json(senserSaved);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateSensor: async (req: Request, res: Response) => {
    try {
      const sensorUpdated = await sensorService.updateSensor(req.body);
      res.json(sensorUpdated);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteSensor: async (req: Request, res: Response) => {
    try {
      await sensorService.deleteSensor(req.params.id);
      res.json({ message: 'Sensor deleted' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  changeStateSensor: async (req: Request, res: Response) => {
    try {
      const sensorUpdated = await sensorService.changeStateSensor(
        req.params.id, req.body.status);
      res.json(sensorUpdated);
      res.json({ message: 'Sensor state shanged' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

export default sensorController;
