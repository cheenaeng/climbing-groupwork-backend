import db from './models/index.mjs';

// import your controllers here
import initRoutesController from './controllers/routes.mjs';
import initTripsController from './controllers/trips.mjs';

export default function bindRoutes(app) {
  // pass in the db for all items callbacks
  const RoutesController = initRoutesController(db);
  const TripsController = initTripsController(db);

  app.get('/routes', RoutesController.index);
  app.get('/trips', TripsController.index);
  app.post('/createTrip', TripsController.addTrip);
  app.post('/createRoute', RoutesController.addRoute);
  app.post('/findRoutes', RoutesController.findRoutes);
}
