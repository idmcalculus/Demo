import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'YAY! Congratulations! Your first endpoint is working'});
})

app.listen(3000)
console.log('app running on port ', 3000);

/* import User from '../src/controllers/user';

app.post('/api/v1/users', User.create);
app.get('/api/v1/users', User.getAll);
app.get('/api/v1/users/:id', User.getOne);
app.put('/api/v1/users/:id', User.update);
app.delete('/api/v1/users/:id', User.delete);

import Bus from '../src/controllers/bus';

app.post('/api/v1/buses', Bus.create);
app.get('/api/v1/buses', Bus.getAll);
app.get('/api/v1/buses/:id', Bus.getOne);
app.put('/api/v1/buses/:id', Bus.update);
app.delete('/api/v1/buses/:id', Bus.delete);

import Trip from '../src/controllers/trip';

app.post('/api/v1/trips', Trip.create);
app.get('/api/v1/trips', Trip.getAll);
app.get('/api/v1/trips/:id', Trip.getOne);
app.put('/api/v1/trips/:id', Trip.update);
app.delete('/api/v1/trips/:id', Trip.delete);

import Booking from '../src/controllers/booking';

app.post('/api/v1/bookings', Booking.create);
app.get('/api/v1/bookings', Booking.getAll);
app.get('/api/v1/bookings/:id', Booking.getOne);
app.put('/api/v1/bookings/:id', Booking.update);
app.delete('/api/v1/bookings/:id', Booking.delete); */