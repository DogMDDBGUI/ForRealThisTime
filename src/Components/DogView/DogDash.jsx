import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';
import { NavBar } from '../HomePage';
import { Dog } from '../../Models';
import './dashboard.css';


export class DogDash extends React.Component {
  dogs = [//get the list based on ownerid - id, breed, owner_id, name, age, gender, conditions, imageURL

  ];

  

  state = {
    dogs: this.dogs,
    tableData: {
      columns: [
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
          field: 'conditions',
          sort: 'asc',
        },
        {
            label: 'img',
            field: 'img',
            sort: 'asc',
          },
      ],
      rows: [],
    },
  }

  render() {
    return (
      <>
        <NavBar />
        <div id="content">
          <MDBDataTable collapsed striped hover data={this.state.tableData} />
        </div>
        <button type="button" className="btn btn-info btn-block mt-2">
                Edit Dogs
        </button>
      </>
    )
  }

  createRows() {
      //id, breed, owner_id, name, age, gender, conditions, imageURL
    this.state.dogs.map(dog => {
      let row = {
        Name: dog.name,
        Breed: dog.breed,
        Age: dog.age,
        Gender: dog.gender,
        Conditions: dog.conditions,
        img: <img src= {dog.imageURL} class="img-responsive"/>
      };

      this.state.tableData.rows.push(row);
    })
  }

  componentDidMount() {
    this.createRows();
  }
}