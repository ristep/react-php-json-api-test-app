import axios from "axios";

const axParams = {
  // baseURL: "https://arso.us.to/php-json-api/",
  baseURL:"https://php-json-api.sman.cloud/",
  headers: {
    Authorization: "dummy-key",
    "Content-type": "application/json",
  },
};

const Axios = axios.create(axParams);

export default Axios;