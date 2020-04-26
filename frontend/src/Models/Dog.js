export class Dog {
    constructor(id, breed, owner_id, name, age, gender, conditions, imageURL) {
      this.name = name;
      this.id = id;
      this.gender = gender;
      this.breed_id = breed;
      this.age = age;
      this.conditions = conditions;
      this.owner_id = owner_id;
      this.imageURL = imageURL;
    }
}