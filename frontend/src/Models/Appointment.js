export class Appointment {
  constructor(time, date, dogId, name, vetId, firstName, lastName, ownerId, status) {
    this.time = time;
    this.date = date;
    this.dog_id = dogId;
    this.dog_name = name;
    this.vet_id = vetId;
    this.vet_first_name = firstName;
    this.vet_last_name = lastName;
    this.owner_id = ownerId;
    this.status = status;
  }
}