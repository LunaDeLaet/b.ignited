// Neo has a complex matrix script. The matrix script
// is a N x M grid of strings. It consists of alphanumeric
// characters, spaces, and symbols (!,@,#,$,%,&).

// To decode the script, Neo needs to read each column
// and select only the alphanumeric characters and connect them.
// Neo reads the column from top to bottom and starts reading
// from the leftmost column. If there are symbols or spaces
// between two alphanumeric characters of the decoded script,
// then Neo replaces them with a single space '' for better readability.
// Alphanumeric characters consist of: [A-Z, a-z, and 0-9].
// Test case examples
// input
// 7 3
// Tsi
// h%x
// i #
// sM
// $a
// #t%
// ir!
// output
// This is Matrix
// explanation
// 7 rows - 3 cols
// This$#is% Matrix#  %!
// This is Matrix --> final message

const matrix = [
  ['T', 's', 'i'],
  ['h', '%', 'x'],
  ['i', '', '#'],
  ['s', 'M', ''],
  ['$', 'a', ''],
  ['#', 't', '%'],
  ['i', 'r', '!'],
]

console.log(matrix)

// make string from matrix read in direction of columns
let string = ''

// kan ook in loop? maar weet niet hoe?
for (let i = 0; i < matrix.length; i++) {
  string += matrix[i][0]
}
for (let i = 0; i < matrix.length; i++) {
  string += matrix[i][1]
}
for (let i = 0; i < matrix.length; i++) {
  string += matrix[i][2]
}

// krijg hier fout antwoord : Tsih xi sM a t ir : matrix wordt fout gelezen
// for ( let i=0 ; i<matrix.length ; i++) {
//     for ( let j=0 ; j<matrix[0].length ; j++) {
//         string += matrix[j][i]
//     }
// }

console.log(string)

//replace non-alphabetical characters with a space
let replaced = string.replace(/[^A-Za-z\s]/g, ' ')
console.log(replaced)

// is dit valsspelen? :

// remove triple spaces and replace double spaces with single space
const fin = replaced.replace(/\s\s/g, ' ')
const final = fin.replace(/\s\s/g, '')

console.log(final)
