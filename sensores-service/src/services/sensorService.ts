
import Sensor, {ISensor} from '../../../common/src/models/sensor';

const sensorService = {
  getAllSensores: async (idCar: string) => {
    return await Sensor.find({idCar});
  },

  getSensorById: async (id: string) => {
    return await Sensor.findById(id);
  },

  createSensor: async (newSensor: ISensor) => {
      return await newSensor.save();
  },

  updateSensor: async (sensor: ISensor) => {
      return await Sensor.findByIdAndUpdate(
        sensor.id,
        sensor,
        { new: true }
      );
  },

  deleteSensor: async (id: string) => {
      return await Sensor.findByIdAndDelete(id);
  },
  changeStateSensor: async (id: string, state: string) => {
      return await Sensor.findByIdAndUpdate(
        id,
        {
          status:state
        }
      );
  },
};

export default sensorService;
