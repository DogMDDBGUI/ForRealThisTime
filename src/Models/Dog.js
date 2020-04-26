export class Dog {
    constructor(id, breed, owner_id, name, age, gender, conditions, imageURL) {
      this.Name = name;
      this.id = id;
      this.gender = gender;
      this.Breed = breed;
      this.Age = age;
      this.conditions = conditions;
      this.ownerId = owner_id;
      this.pic = imageURL;
    }
}