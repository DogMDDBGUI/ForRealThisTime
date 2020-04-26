import React from 'react'
import { Redirect } from 'react-router-dom'
import { ProductRepository } from '../../Api/productRepository'
import { NavBar } from '../HomePage'

export class AppointmentEditor extends React.Component {
  api = new ProductRepository();
  
  state = {
    dog_id: null,
    vet_id: null,
    vet: "",
    redirect: false,
    status: "BOOKED",
    dogs: []
  };

  submit() {
    if (!this.state.date
      ||!this.state.time
      ||!this.state.dog_id
      ) {
      alert("Invalid information!");
      return;
    }
    this.api.addAppointment(this.state)
      .then(
        setTimeout(() => this.setState({redirect: true}), 100)
      )
      .catch(e => alert(e));
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/appointments" />
    }
    return(
      <>
        <NavBar/>
        
        <div className="content">
          <div className="title mb-3">
            <h3>
              Book Appointment with {this.state.vet.first_name} {this.state.vet.last_name}
            </h3>
          </div>
          <div className="container d-block pl-5 pr-5">    
            <form>
              <div className="form-group">
                <label htmlFor="date" >Date: </label>
                <input type="date" 
                       id="date" 
                       className="form-control"
                       onChange={e => this.setState({date: e.target.value})}/>
              </div>
              <div className="form-group">
                <label htmlFor="time" >Time: </label>
                <input type="time" 
                       id="time" 
                       className="form-control"
                       onChange={e => this.setState({time: e.target.value})}/>
              </div>
              <div className="form-group">
                <label htmlFor="dog" >Dog: </label>
                <select id="dog" className="custom-select" 
                        onChange={e => this.setState({dog_id: e.target.value})}>
                  <option selected>Choose a dog</option>
                  {
                    this.state.dogs.map((dog, id) => (
                      <option value={dog.id} key={id}>{dog.name}</option>
                    ))
                  }
                </select>
              </div>
              <button type="button" 
                      onClick={() => this.submit()}
                      className="mt-5 btn btn-block btn-success">
                Book appointment
              </button>
            </form>
          </div>      
        </div>        
      </>
    )
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    this.api.getUser(id)
      .then(user => this.setState({vet: user, 'vet_id':user.id}));
    this.api.getDogs(localStorage.getItem('id'))
      .then(dogs => this.setState({dogs: dogs}));
  }
}