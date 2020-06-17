let findTheOldest = function(people) {
    let now = new Date().getFullYear();
    let age = () => {
        for (let person of people){ 
            if (person.yearOfDeath == undefined){
                person.age = now - person.yearOfBirth; //Age if alive
            }
         
            person.age = person.yearOfDeath - person.yearOfBirth; //Age if dead
    }


    }

    console.table("table 1 " + people.age);
    console.log(people.age)

    people.sort((a,b) => a.age > b.age ? 1 : -1);

    console.table(people);
    console.log(people[0].name)
};

module.exports = findTheOldest
