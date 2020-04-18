export class Appointment {
  constructor(time, date, dogId, dogName, vetId, vetName, status) {
    this.time = time;
    this.date = date;
    this.dogId = dogId;
    this.dogName = dogName;
    this.vetId = vetId;
    this.vetName = vetName;
    this.status = status;
  }
}