import React from 'react'
import { Redirect } from 'react-router-dom'
import { NavBar } from '../HomePage'
import { ProductRepository } from '../../Api/productRepository'

export class DogEditor extends React.Component {
  api = new ProductRepository();

  state = {
    isOwner: true,
    redirect: false,
    breeds: [],
  };

  submit() {
    if (!this.state.name
      ||!this.state.conditions
      ||!this.state.age
      ||!this.state.imageURL
      ) {
      alert("Invalid information!");
      return;
    }
    this.api.updateDog(this.state)
      .then(
        setTimeout(() => this.setState({redirect: true}), 100)
      )
      .catch(e => alert(e));
  }

  delete() {
    let ans = window.confirm("Are you sure to delete this dog?");
    if (!ans) return;
    this.api.deleteDog(this.props.match.params.id)
      .then(
        setTimeout(() => this.setState({redirect: true}), 100)
      )
      .catch(e => alert(e));
  }

  render() {
    if (!this.state.isOwner) {
      return <Redirect to='/'/>
    }
    if (this.state.redirect) {
      return <Redirect to={`/dogs/${localStorage.getItem('id')}`} />
    }
    return(
      <>
        <NavBar/>
        
        <div className="content">
          <div className="title mb-3">
            <h3>
              Editor
            </h3>
          </div>
          <div className="container d-block pl-5 pr-5">    
            <form>
              <div className="form-group">
                <label htmlFor="dogName" >Dog Name: </label>
                <input type="text" 
                       id="dogName" 
                       className="form-control"
                       value={this.state.name} 
                       onChange={e => this.setState({name: e.target.value})}/>
              </div>
              <div className="form-group">
                <label htmlFor="gender" >Gender: </label>
                <select 
                       id="gender" 
                       className="custom-select"
                       value={this.state.gender} 
                       onChange={e => this.setState({gender: e.target.value})}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="age" >Age: </label>
                <input type="number" 
                       id="age" 
                       className="form-control"
                       value={this.state.age} 
                       onChange={e => this.setState({age: e.target.value})}/>
              </div>
              <div className="form-group">
                <label htmlFor="breed" >Breed: </label>
                <select 
                       id="breed" 
                       className="custom-select"
                       value={this.state.breed_id}
                       onChange={e => this.setState({breed_id: e.target.value})}>
                  {
                    this.state.breeds.map((breed, id) => (
                      <option value={breed.id} key={id}>{breed.name}</option>
                      ))
                  }
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="conditions" >Conditions: </label>
                <input type="text" 
                       id="conditions" 
                       className="form-control"
                       value={this.state.conditions} 
                       onChange={e => this.setState({conditions: e.target.value})}/>
              </div>
              <div className="form-group">
                <label htmlFor="imageURL">Image URL: </label>
                <input type="text" 
                       id="imageURL" 
                       className="form-control"
                       value={this.state.imageURL} 
                       onChange={e => this.setState({imageURL: e.target.value})}/>
              </div>
              <button type="button" 
                      onClick={() => this.submit()}
                      className="mt-5 btn btn-block btn-success">
                Update
              </button>
              <button type="button" 
                      onClick={() => this.delete()}
                      className="mt-3 btn btn-block btn-danger">
                Delete
              </button>
            </form>
          </div>      
        </div>        
      </>
    )
  }

  componentDidMount() {
    this.api.getDog(this.props.match.params.id)
      .then(dog => {
        this.setState(dog)
        if (dog.owner_id != localStorage.getItem('id')) {
          this.setState({isOwner: false});
        }
      });
    
    this.api.getBreeds()
      .then(breeds => this.setState({breeds: breeds}));
  }
}