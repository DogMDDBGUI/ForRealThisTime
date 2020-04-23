import axios from 'axios'

export class ProductRepository {
  url = 'http://localhost:8000';

  config = {

  }

  login(form) {
    return new Promise((resolve, reject) => {
      axios.post(`${this.url}/api/login`, form, this.config)
          .then(x => resolve(x.data))
          .catch(x => {
              alert(x);
              reject(x);
          })
    })
  }


  register(form) {
    return new Promise((resolve, reject) => {
      axios.post(`${this.url}/api/login/register`, form, this.config)
           .then(x => resolve(x.data))
           .catch(x => {
              alert(x);
              reject(x);
          })
    })
  }

  getUser(id) {
    return new Promise((resolve, reject) => {
      axios.get(`${this.url}/api/users/${id}`, this.config)
           .then(x => resolve(x.data))
           .catch(x => {
              alert(x);
              reject(x);
          })
    })
  }
}