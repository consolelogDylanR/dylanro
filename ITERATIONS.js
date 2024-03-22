// mass printing with forEach. Repeating function
let fruits = ['mango', 'papaya', 'pineapple', 'apple'];
fruits.forEach(fruit => console.log(`I want to eat a ${fruit}.`))


// Displaying first letter of each element in array in a new array. 
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
const secretMessage = animals.map(characterNum => characterNum[0])
// not having a space in between hello and world was annoying so
let messageEdit = secretMessage.slice(0,-5).join('') + ' ' + secretMessage.slice(-5).join('')
console.log(messageEdit)


//more basic mapping
const bigNumbers = [100, 200, 300, 400, 500];
const smallerNumbers = bigNumbers.map(num => num / 100)
console.log(smallerNumbers)



// finding position of specific element in an array
const moreAnimals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = moreAnimals.findIndex(animal => {
  return animal === 'elephant';
});
console.log(foundAnimal)
//finding specific element based off starting letter
const startsWithT = moreAnimals.findIndex(animal => animal[0] === 't')
console.log(moreAnimals[startsWithT])

// filtering arrays
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers = randomNumbers.filter(num => num < 250)
console.log(smallNumbers)

// ""
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

 const longFavoriteWords  = favoriteWords.filter(words => words.length > 7)
 console.log(longFavoriteWords)


 // name triangle with .reduce()
 const food = ['dried mango', 'yogurt', 'lemons', 'apples', 'nachos'];
const name = food.reduce((acc, currVal) => {
const nameTri = (acc + currVal[0]).toUpperCase()
console.log(nameTri)
return acc + currVal[0]
},'')

// proofing example array with .some
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
console.log(words.some(word => word.length < 6 ));

// filtering and checking new array with .every
const interestingWords = words.filter( word => word.length > 5)
console.log(interestingWords.every(word => word.length > 5 ));


