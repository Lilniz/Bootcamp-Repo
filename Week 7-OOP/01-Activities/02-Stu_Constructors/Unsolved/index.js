// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'
function Developer(name, tech) {
    this.name = name;
    this.tech = tech;
    this.introduction = () => {
        console.log("Here is " + this.name + ", and their favorite tech is " + this.tech + "!")
    }
}
// TODO: Include a method called 'introduction()' that introduces tloper with their name anhe Deved favorite tech

// TODO: Create a new object using the 'Developer' constructor
const newObj = Developer('Lee', 'keyboard-mouse')
// TODO: Call the 'introduction()' method on the new object
introduction();