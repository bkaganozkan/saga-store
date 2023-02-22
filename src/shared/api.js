import axios from "axios";

// axios.defaults.baseURL = "https://berat-static-data.onrender.com";
axios.defaults.baseURL = "https://berat-static-data.onrender.com";

class API {
  constructor() {}
  get = async (urLString) => {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await axios.get(urLString));
      } catch (error) {
        reject("Some Error Occuried!");
      }
    });
  };
}

export default new API();
