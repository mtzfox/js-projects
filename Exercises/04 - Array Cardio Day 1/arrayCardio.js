// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

export const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
]

export const people = [
  'Bernhard, Sandra',
  'Bethea, Erin',
  'Becker, Carl',
  'Bentsen, Lloyd',
  'Beckett, Samuel',
  'Blake, William',
  'Berger, Ric',
  'Beddoes, Mick',
  'Beethoven, Ludwig',
  'Belloc, Hilaire',
  'Begin, Menachem',
  'Bellow, Saul',
  'Benchley, Robert',
  'Blair, Robert',
  'Benenson, Peter',
  'Benjamin, Walter',
  'Berlin, Irving',
  'Benn, Tony',
  'Benson, Leana',
  'Bent, Silas',
  'Berle, Milton',
  'Berry, Halle',
  'Biko, Steve',
  'Beck, Glenn',
  'Bergman, Ingmar',
  'Black, Elk',
  'Berio, Luciano',
  'Berne, Eric',
  'Berra, Yogi',
  'Berry, Wendell',
  'Bevan, Aneurin',
  'Ben-Gurion, David',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bennington, Chester',
  'Bierce, Ambrose',
  'Billings, Josh',
  'Birrell, Augustine',
  'Blair, Tony',
  'Beecher, Henry',
  'Biondo, Frank'
]
export const boul = [
  'Boulevards of Paris', 'City walls of Paris', 'Thiers wall', 'Wall of Charles V', 'Wall of Philip II Augustus', 'City gates of Paris', "Haussmann's renovation of Paris",' Boulevards of the Marshals', 'Boulevard Auguste-Blanqui','Boulevard Barbès', 'Boulevard Beaumarchais',
  "Boulevard de l'Amiral-Bruix", 'Boulevard Mortier',
  'Boulevard Poniatowski', 'Boulevard Soult', 'Boulevard des Capucines',
  'Boulevard de la Chapelle','Boulevard de Clichy',
  'Boulevard du Crime', "Boulevard du Général-d'Armée-Jean-Simon",'Boulevard Haussmann', "Boulevard de l'Hôpital", 'Boulevard des Italiens', 'Boulevard Lefebvre', 'Boulevard de la Madeleine', 'Boulevard de Magenta',
   'Boulevard Malesherbes', 'Boulevard Marguerite-de-Rochechouart',
   'Boulevard Montmartre', 'Boulevard du Montparnasse', 'Boulevard Raspail',
   'Boulevard Richard-Lenoir', 'Boulevard Saint-Germain', 'Boulevard Saint-Michel',
  'Boulevard de Sébastopol', 'Boulevard de Strasbourg', 'Boulevard du Temple','Boulevard Voltaire', 'Boulevard de la Zone'
]

export const boul2 = [
  
]

export const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck']


// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
export const bornFirst = inventors.filter((inventor) => (inventor.year >= 1500 && inventor.year < 1600))

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const fullNames = inventors.map((inventor) => [inventor.first, inventor.last]) 



// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const birthdaySort = inventors.sort(({ year: a }, { year: b }) => b - a )  
//Alt -- names only
const ordered = inventors.sort((a,b) => (a.year > b.year) ? 1 : -1 ); 
// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const findYears = function() {
    let bornFirst = inventors.map((inventor) => inventor.year).sort((a, b) => a - b)
    let diedLast = inventors.map((inventor) => inventor.passed).sort((b, a) => a - b)
    return diedLast[0] - bornFirst[0] + ' years'
}
//findYears(inventors) // 506 --- should be 523!!!

// 5. Sort the inventors by years lived
// My answer - incorrect
const yearsSort = inventors.sort((a, b) => a.passed - a.year - (b.passed - b.year)) 
// Solution
const oldest = inventors.sort(function(a,b) {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  
  return lastGuy > nextGuy ? -1 : 1;
});



// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const containsWord = boul.filter((contains) => contains.indexOf('de') != -1)

// 7. sort Exercise
// Sort the people alphabetically by last name
// My answer - it just seemed to reverse it, wrong answer
const sortByLastName = () => {
  let peopleObj = people.sort((a, b) => {
    let textA = a.toUpperCase()
    let textB = b.toUpperCase()
    return textA < textB ? -1 : textA > textB ? 1 : 0
  })
  return peopleObj ?? Error("no people");
}


// his 
const alpha = people.sort(function(lastOne, nextOne) {
  //split the names first, then destructure
  const [aLast, aFirst] = lastOne.split(', ')
  const [bLast, bFirst] = lastOne.split(', ')
  return aLast > bLast ? 1 : -1;
})
console.table(alpha)



// 8. Reduce Exercise
// Sum up the instances of each of these

const sumItems = () => {

  let itemInstance = data.reduce((items, item) => {
    if (item in items) {
      items[item]++
    } else {
      items[item] = 1
    }
    return items
  }, {})

  return itemInstance //{ car: 5, truck: 3, bike: 2, walk: 2, van: 2 }
}



