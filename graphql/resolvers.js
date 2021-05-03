import axios from 'axios';

export default {
  Query: {
    async launches() {
      try {
        const launches = await axios
          .get('https://api.spacexdata.com/v4/launches')
          .then((res) => res.data);
        return launches;
      } catch (error) {
        throw new Error(error);
      }
    },
    async getLaunch(_, { id }) {
      try {
        const launch = await axios
          .get(`https://api.spacexdata.com/v4/launches/${id}`)
          .then((res) => res.data);
        const rocket = await axios
          .get(`https://api.spacexdata.com/v4/rockets/${launch.rocket}`)
          .then((res) => res.data);
        launch.rocket = rocket;
        return launch;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
