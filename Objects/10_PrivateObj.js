//10. Simulate private members in JavaScript objects.

function createAnimal(name, job) {
    // "Private" variables here
    let _name = name;
    let _job = job;
  
    // Public variables here
    return {
      // Getter Methods
      getName() {
        return _name;
      },
      getJob() {
        return _job;
      },
      // Setter Methods
      setName(newName) {
        _name = newName;
      },
      setJob(newJob) {
        _job = newJob;
      }
    };
  }


  // These properties will be inaccessible
console.log(presto._name); // undefined
console.log(presto._job); // undefined
console.log(fluffykins._name); // undefined
console.log(fluffykins._job); // undefined

// Getter methods have access to the closure
console.log(presto.getName()); // 'Presto'
console.log(presto.getJob()); // 'Digger'
console.log(fluffykins.getName()); // 'Fluffykins'
console.log(fluffykins.getJob()); // 'Jumper'

// Setter methods can mutate the variables in the closure
presto.setName('Quick');
presto.setJob('Bone Finder');
fluffykins.setName('Mittens');
fluffykins.setJob('Fish Eater');

console.log(presto.getName()); // 'Quick'
console.log(presto.getJob()); // 'Bone Finder'
console.log(fluffykins.getName()); // 'Mittens'
console.log(fluffykins.getJob()); // 'Fish Eater'