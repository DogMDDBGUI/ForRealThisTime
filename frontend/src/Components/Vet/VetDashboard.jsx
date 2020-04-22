import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';
import { NavBar } from '../HomePage';
import { Vet } from '../../Models';
import './dashboard.css';


export class VetDashboard extends React.Component {
  vets = [
    new Vet(
      1,
      'Phuoc Dinh',
      'Le',
      'lephuocdinh99@gmail.com',
      3,
      1,
      4.5,
      []
    ),
    new Vet(
      2,
      'Nicholas',
      'Lu',
      'nicholasl@smu.edu',
      15,
      10,
      5,
      []
    ),
    new Vet(
      3,
      'Best',
      'Vet',
      'bestvet@smu.edu',
      1,
      4,
      0.5,
      []
    ),  
  ];

  

  state = {
    vets: this.vets,
    tableData: {
      columns: [
        {
          label: 'First Name',
          field: 'firstName',
          sort: 'asc',
        },
        {
          label: 'Last Name',
          field: 'lastName',
          sort: 'asc',
        },
        {
          label: 'Exp. Year',
          field: 'yearExp',
          sort: 'asc',
        },
        {
          label: 'Area',
          field: 'areaId',
          sort: 'asc',
        },
        {
          label: 'Ratings',
          field: 'ratings',
          sort: 'asc',
        },
        {
          label: 'Profile Page',
          field: 'profile',
          sort: 'disabled',
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
      </>
    )
  }

  createRows() {
    this.state.vets.map(vet => {
      let linkTo = '/vet/profile/' + vet.id;
      let row = {
        firstName: vet.first_name,
        lastName: vet.last_name,
        yearExp: vet.year_exp,
        areaId: vet.zipcode,
        ratings: vet.ratings,
        profile: <Link className='btn btn-info btn-sm' 
                       to={linkTo}> 
                       View 
                 </Link>
      };

      this.state.tableData.rows.push(row);
    })
  }

  componentDidMount() {
    this.createRows();
  }
}