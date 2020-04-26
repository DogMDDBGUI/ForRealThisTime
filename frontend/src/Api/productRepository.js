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

  getVet(id) {
    return new Promise((resolve, reject) => {
      axios.get(`${this.url}/api/vets/${id}`, this.config)
           .then(x => resolve(x.data))
           .catch(x => {
              alert(x);
              reject(x);
          })
    })
  }

  getVets() {
    return new Promise((resolve, reject) => {
      axios.get(`${this.url}/api/vets`, this.config)
           .then(x => resolve(x.data))
           .catch(x => {
              alert(x);
              reject(x);
          })
    })
  }

  getUserByEmail(email) {
    return new Promise((resolve, reject) => {
      axios.get(`${this.url}/api/users/email/${email}`, this.config)
           .then(x => resolve(x.data))
           .catch(x => {
              alert(x);
              reject(x);
          })
    }) 
  }

  addVet(form) {
    return new Promise((resolve, reject) => {
      axios.post(`${this.url}/api/vets`, form, this.config)
           .then(x => resolve(x.data))
           .catch(x => {
              alert(x);
              reject(x);
          })
    })
  }

  updateUser(form) {
    return new Promise((resolve, reject) => {
      axios.put(`${this.url}/api/users`, form, this.config)
           .then(x => resolve(x.data))
           .catch(x => {
              alert(x);
              reject(x);
          })
    })
  }

  getAppointments(id) {
    return new Promise((resolve, reject) => {
      axios.get(`${this.url}/api/appointments/${id}`, this.config)
           .then(x => resolve(x.data))
           .catch(x => {
              alert(x);
              reject(x);
          })
    })
  }

  addAppointment(form) {
    return new Promise((resolve, reject) => {
      axios.post(`${this.url}/api/appointments`, form, this.config)
           .then(x => resolve(x.data))
           .catch(x => {
              alert(x);
              reject(x);
          })
    })
  }

  // get dogs of user
  getDogs(userId) {
    return new Promise((resolve, reject) => {
      axios.get(`${this.url}/api/users/dogs/${userId}`, this.config)
           .then(x => resolve(x.data))
           .catch(x => {
              alert(x);
              reject(x);
          })
    })  
  }

  // update appointment status
  updateStatus(apptId, form) {
    return new Promise((resolve, reject) => {
      axios.put(`${this.url}/api/appointments/status/${apptId}`, form, this.config)
           .then(x => resolve(x.data))
           .catch(x => {
              alert(x);
              reject(x);
          })
    })
  } 
}