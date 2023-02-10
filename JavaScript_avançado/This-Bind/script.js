
const cat = {
    soundAnimal: 'Miau',
    speak: function  () {
        return this.soundAnimal;
     }
     
}

const dog = {
    soundAnimal: 'Au Au',
    speak: function  () {
        return this.soundAnimal;
     }
     
}

// Correto
const speakDog = dog.speak.bind(dog);
const speakCat = cat.speak.bind(cat);
console.log(speakDog())
console.log(speakCat())

// Errado ( Vai retronar Undefined )
const speakDogExample = dog.speak;
const speakCatExample = cat.speak;
console.log(speakDogExample())
console.log(speakCatExample())


console.log('')
console.log('')
console.log('')

const module = {
    x: 42,
    getX: function() {
      return this.x;
    }
  };
  
  const unboundGetX = module.getX;
  console.log(unboundGetX()); // The function gets invoked at the global scope
  // Expected output: undefined
  
  const boundGetX = unboundGetX.bind(module);
  console.log(boundGetX());
  // Expected output: 42
  