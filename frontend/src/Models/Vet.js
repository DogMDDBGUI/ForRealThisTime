export class Vet {
  constructor(id, firstName, lastName, email, yearExp, areaId, ratings, skills) {
    this.id = id;
    this.first_name = firstName;
    this.last_name = lastName;
    this.email = email;
    this.years_experience = yearExp;
    this.zipcode = areaId;
    this.ratings = ratings;
    this.skills = skills;
  }
}