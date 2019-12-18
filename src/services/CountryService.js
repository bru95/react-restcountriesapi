/* eslint-disable class-methods-use-this */
import Axios from 'axios';
import Config from '../Config';

export default class CountryService {
  async getAllCountriesFromApi() {
    return Axios.get(`${Config.URL_API}/all/`);
  }
}
