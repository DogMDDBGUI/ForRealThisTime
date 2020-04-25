import React from 'react';
import { ProductRepository } from '../../Api/productRepository'
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';
import { NavBar } from '../HomePage';
import { Vet } from '../../Models';
import './dashboard.css';


export class VetDashboard extends React.Component {
  api = new ProductRepository();
  state = {
    vets: [],
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
          label: 'Zipcode',
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
          <MDBDataTable striped hover data={this.state.tableData} />
        </div>
      </>
    )
  }

  componentDidMount() {
    this.api.getVets()
      .then(data => {
        this.setState({vets: data});
        this.createRows();    
      });
  }
  createRows() {
    let cols = this.state.tableData.columns;
    let rows = this.state.tableData.rows;
    this.state.vets.map(vet => {
      let linkTo = '/user/' + vet.id;
      let row = {
        firstName: vet.first_name,
        lastName: vet.last_name,
        yearExp: vet.years_experience,
        areaId: vet.zipcode,
        ratings: vet.ratings,
        profile: <Link className='btn btn-info btn-sm' 
                       to={linkTo}> 
                       View 
                 </Link>
      };

      rows.push(row);
    });
    this.setState({tableData: {columns: cols, rows: rows}});
  }

}