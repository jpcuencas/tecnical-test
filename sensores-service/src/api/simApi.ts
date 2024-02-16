
import Sim, {ISim} from '../../../common/src/models/sim';

const URL_API =new URL('https://example.com/api/sim');
const simService = {

  updateSim: async (sim: ISim) => {
    return await fetch(URL_API, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sim),
    });
  },

  deleteSim: async (id: string) => { 
    const response = await fetch(URL_API, {
      method: 'DELETE',
      headers: {},
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  }
}

export default simService;
