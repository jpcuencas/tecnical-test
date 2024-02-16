import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import sensorRoutes from './routes/sensorRoutes';

const mongoURI = 'mongodb://localhost:27017/sensores';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
mongoose.connect(mongoURI, {
});
app.use('/sensores', sensorRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


export default app;