export default class SensorMother {
  public static sensorComplete(id: string, state: 'enabled' | 'disabled') {
    return {
      sensorId: id,
      carId: '1',
      simId: '1',
      state: state
    };
  }
}
