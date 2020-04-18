import React from 'react'
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';
import { NavBar } from '../HomePage'  
import { Appointment } from '../../Models'

import './dashboard.css';

export class AppointmentDashboard extends React.Component {
  appointments = [
    new Appointment(
      '20:00pm',
      new Date('2020-5-4'),
      1,
      'Tom',
      1,
      'Phuoc Dinh Le',
      'Cancelled',
    ),
    new Appointment(
      '20:00pm',
      new Date('2020-5-14'),
      1,
      'Jerry',
      2,
      'Nicholas Lu',
      'Upcoming',
    ),
    new Appointment(
      '20:00pm',
      new Date('2020-3-4'),
      1,
      'Tom',
      1,
      'Phuoc Dinh Le',
      'Passed',
    ),
    
  ];

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
      ],
      rows: [],
    },
  }

  render() {
    return(
      <>
        <NavBar />
        <div id="content">
          <MDBDataTable collapsed striped hover data={this.state.tableData} />
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
    this.state.appointments.map(appointment => {
      let linkVet = '/vet/profile/' + appointment.vetId;
      let linkDog = 'dog/' + appointment.dogId;

      let row = {
        date: this.formatDate(appointment.date),
        time: appointment.time,
        dog: <Link to={linkDog}>{appointment.dogName}</Link>,
        vet: <Link to={linkVet}>{appointment.vetName}</Link>,
        status: appointment.status,
      };

      this.state.tableData.rows.push(row);
    })
  }

  componentDidMount() {
    this.createRows();
  }

}