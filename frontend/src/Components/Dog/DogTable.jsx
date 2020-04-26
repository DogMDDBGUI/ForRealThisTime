import React from 'react';
import { ProductRepository } from '../../Api/productRepository'
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';
import { NavBar } from '../HomePage';
import { Dog } from '../../Models';
// import './dashboard.css';


export class DogTable extends React.Component {
  api = new ProductRepository();

  state = {
    dogs: this.dogs,
    tableData: {
      columns: [
        {
          label: 'Picture',
          field: 'img',
          sort: 'disabled',
        },
        {
          label: 'Name',
          field: 'Name',
          sort: 'asc',
        },
        {
          label: 'Breed',
          field: 'Breed',
          sort: 'asc',
        },
        {
          label: 'Age',
          field: 'Age',
          sort: 'asc',
        },
        {
          label: 'Gender',
          field: 'Gender',
          sort: 'asc',
        },
        {
          label: 'Conditions',
          field: 'Conditions',
          sort: 'asc',
        },
        {
          label: '',
          field: 'Edit',
          sort: 'disabled'
        }
      ],
      rows: [],
    },
  }

  addDog() {
    let newDog = {
      name: "New Dog",
      owner_id: localStorage.getItem('id'),
      imageURL: "https://www.netclipart.com/pp/m/6-64795_dog-bone-clip-art-black-and-white-anime.png",
      breed_id: 1,
      age: 100,
      gender: 'male',
      conditions: 'no information',
    }
    this.api.addDog(newDog)
      .then(resp => {
        alert(resp.msg);
        window.location.reload(false);
      })
  }

  render() {
    return (
      <>
        <NavBar />
        {this.props.match.params.id == localStorage.getItem('id') && 
          <button type="button" onClick={() => this.addDog()} className="btn btn-success mt-3">
            Add a new dog
          </button>
        }
        <div id="content">
          <MDBDataTable striped hover data={this.state.tableData} />
        </div>
        
      </>
    )
  }

  createRows() {
    let cols = this.state.tableData.columns;
    let rows = this.state.tableData.rows;
    
    this.state.dogs.map(dog => {
      let editor = (localStorage.getItem('id') == this.props.match.params.id 
        && <Link to={`/dogs/edit/${dog.id}`} className="btn btn-primary">Edit</Link>)
      
      let row = {
        Name: dog.name,
        Breed: dog.breed_name,
        Age: dog.age,
        Gender: dog.gender,
        Conditions: dog.conditions,
        img: <img src= {dog.imageURL} width="100" className="img-responsive"/>,
        Edit: editor
      };

      rows.push(row);
    });
    this.setState({tableData: {columns: cols, rows: rows}});
  }

  componentDidMount() {
    let id = this.props.match.params.id;

    this.api.getDogs(id)
      .then(data => {
        this.setState({dogs: data});
        this.createRows();    
      });
  }
}