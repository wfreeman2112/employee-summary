// TODO: Write code to define and export the Employee class
class Employee{
    constructor(name, id, email){
        this.name = name
        this.id = id
        this.email = email
    }
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return 'Employee'
    }
}
module.exports = Employee
// var dog={
//     name:"wolfy",
//     haircolor:"brown"
// }

// var cat={
//     name:"meow",
//     haircolor:"black"
// }

// class Breed{
//     constructor(type) {
//         this.type = type
//     }
//     getType(){
//         return this.type 
//     }
// }

// class Animal extends Breed{
//      constructor(name, haircolor, type) {
//          //how to import another constructor into main constructor
//          super(type)
//          this.name = name
//          this.haircolor = haircolor

//      }

//      getName(){
//          return this.name
//      }

//      getHaircolor(){
//          return this.haircolor
//      }

// }

// var dog = new Animal ("wolfy", "brown", "poodle")
// var cat = new Animal ("meow", "black", "siamese")