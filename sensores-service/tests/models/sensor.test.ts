import sensorMother from './sensor-mother';

describe('sensor', () => {
  it('should create a sensor', ()=> {
    const sensorCode = '040';
    const state = 'enabled';
    const sensor = sensorMother.sensorComplete(sensorCode, state);

    expect(sensor).not.toBeNull();
    expect(sensor.sensorId).toEqual(sensorCode);
  });
});
