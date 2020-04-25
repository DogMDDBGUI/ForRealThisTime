import React from 'react'
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';
import { NavBar } from '../HomePage';
import { ProductRepository } from '../../Api/productRepository';


import './dashboard.css';

export class AppointmentDashboard extends React.Component {
  api = new ProductRepository();
  
  state = {
    appointments: this.appointments,
    tableData: {
      columns: [
        {
          label: 'Date',
          field: 'date',
          sort: 'asc',
        },
        {
          label: 'Time',
          field: 'time',
          sort: 'asc',
        },
        {
          label: 'Dog',
          field: 'dog',
          sort: 'asc',
        },
        {
          label: 'Veterinarian',
          field: 'vet',
          sort: 'asc',
        },
        {
          label: 'Status',
          field: 'status',
          sort: 'asc',
        },
        {
          label: 'Update',
          field: 'update',
          sort: 'disabled',
        },
      ],
      rows: [],
    },
  }

  updateStatus(id, status) {
    this.api.updateStatus(id, {status: status})
      .then(data => {
        alert(data.msg);
        window.location.reload(false);
      })
  }

  render() {
    return(
      <>
        <NavBar />
        <div id="content">
          <MDBDataTable striped hover data={this.state.tableData} />
        </div>
      </>
    )
  }

  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) 
      month = '0' + month;
    if (day.length < 2) 
      day = '0' + day;

    return [year, month, day].join('-');
  }

  createRows() {
    let rows = this.state.tableData.rows;
    let columns = this.state.tableData.columns;

    this.state.appointments.map(appointment => {
      let linkVet = '/user/' + appointment.vet_id;
      let linkDog = '/user/' + appointment.owner_id;
      let updateField = 
        (
          <select className="custom-select custom-select-sm"
                  onChange={e => this.updateStatus(appointment.id, e.target.value)}>
            <option selected>Choose status</option>
            <option value="BOOKED">BOOKED</option>
            <option value="PASSED">PASSED</option>
            <option value="CANCELLED">CANCELLED</option>
          </select>
        )

      let row = {
        date: this.formatDate(appointment.date),
        time: appointment.time,
        dog: <Link to={linkDog}>{appointment.dog_name}</Link>,
        vet: <Link to={linkVet}>{appointment.vet_first_name} {appointment.vet_last_name}</Link>,
        status: appointment.status,
        update: updateField
      };

      rows.push(row);
      return true;
    })
    this.setState({tableData: {columns: columns, rows: rows}});
  }

  componentDidMount() {
    this.api.getAppointments(localStorage.getItem('id'))
      .then(
        data => {
          this.setState({appointments: data});
          this.createRows();  
        }
      )
  }

}