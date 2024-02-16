import { Request, Response } from 'express';
import Sim from '../../../common/src/models/sim';
import simService from '../services/simService';

const simController = {
  getSimById: async (req: Request, res: Response) => {
    try {
      const sim = await simService.getSimById(req.params.id);
      res.json(sim);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createSim: async (req: Request, res: Response) => {
    try {
      const newSim = new Sim(req.body);
      const senserSaved = await simService.createSim(newSim);
      res.json(senserSaved);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateSim: async (req: Request, res: Response) => {
    try {
      const simUpdated = await simService.updateSim(req.body);
      res.json(simUpdated);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteSim: async (req: Request, res: Response) => {
    try {
      await simService.deleteSim(req.params.id);
      res.json({ message: 'Sim deleted' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

export default simController;
