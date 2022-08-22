// Vind de anagrammen van deze reeks getallen:
// 5, 23, 15, 30, 32, 3, 50, 100, 41, 51, 17, 19, 405, 230, 560, 140, 71, 490

// de gevonden anagrammen geef je weer
// (e.g. console output: '23 is een anagram van 32')

const reeksStr =
  '5, 23, 15, 30, 32, 3, 50, 100, 41, 51, 17, 19, 405, 230, 560, 140, 71, 490'

// array van reeks getallen
const reeksArray = reeksStr.split(', ')

// elk getal in reeks checken
for (let i in reeksArray) {
  let getal_1 = reeksArray[i]

  // maak array van getal om te sorteren en terug in string zetten
  let getalGesorteerd = getal_1.split('').sort().join('')

  // elk getal in reeks checken met elk ander getal in reeks
  for (let j in reeksArray) {
    // als beide gesorteerde getallen hetzelfe -> anagram && getal zelf overslaan
    let getal_2 = reeksArray[j]
    if (getalGesorteerd === getal_2.split('').sort().join('') && i !== j) {
      console.log(getal_1 + ' is een anagram van ' + getal_2)
    }
  }
}
