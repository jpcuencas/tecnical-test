
import Sim, {ISim} from '../../../common/src/models/sim';

const simService = {

  getSimById: async (id: string) => {
    return await Sim.findById(id);
  },

  createSim: async (newSim: ISim) => {
      return await newSim.save();
  },

  updateSim: async (sim: ISim) => {
      return await Sim.findByIdAndUpdate(
        sim.id,
        sim,
        { new: true }
      );
  },

  deleteSim: async (id: string) => {
      return await Sim.findByIdAndDelete(id);
  },
};

export default simService;
