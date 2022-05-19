// db is an argument to this function so
// that we can make db queries inside
export default function initRoutesController(db) {
  const index = (request, response) => {
    db.Route.findAll()
      .then((routes) => {
        response.send({ routes });
      })
      .catch((error) => console.log(error));
  };

  const addRoute = async (request, response) => {
    try {
      const { routeName, difficulty, tripId } = request.body;
      const newRoute = await db.Route.create({
        name: routeName,
        difficulty,
        tripId,
      });
      response.send({ newRoute });
    }
    catch (error) {
      console.log(error);
    }
  };

  // return all methods we define in an object
  // refer to the routes file above to see this used
  return {
    index, addRoute,
  };
}
