import request from 'supertest';
import mongoose from 'mongoose';
import app from '../../src/server';

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/test_db', {
  });
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('Sensor Controller Tests', () => {
  let testSensorId: string;

  it('should create a new sensor', async () => {
    const response = await request(app)
      .post('/sensor')
      .send({
        sensor: 'Test001',
        estado: 'enabled',
      });

    expect(response.status).toBe(200);
    expect(response.body.sensor).toBe('Test Country');

    testSensorId = response.body._id; 
  });

  it('should get all sensores', async () => {
    const response = await request(app).get('/sensor');

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should get a sensor by ID', async () => {
    const response = await request(app).get(`/sensor/${testSensorId}`);

    expect(response.status).toBe(200);
    expect(response.body._id).toBe(testSensorId);
  });

  it('should update a sensor', async () => {
    const response = await request(app)
      .put(`/sensor/${testSensorId}`)
      .send({
        estado: 'disabled',
      });

    expect(response.status).toBe(200);
    expect(response.body.estado).toBe('disabled');
  });

  it('should delete a sensor', async () => {
    const response = await request(app).delete(`/sensor/${testSensorId}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Sensor deleted');
  });
});
