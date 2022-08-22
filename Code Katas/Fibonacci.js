// op basis van 1 input getal de eerste volgende 5 cijfers
// berekenen en afprinten vd fibonaci code.
// Indien het input getal niet behoort tot de fibonaci reeks,
//  het dichtsbijzijnde getal dat wel behoort tot de reeks.

// f0 = 0
// f1 = 1
// f2 = f1 + f0 = 1
// f3 = f2 + f1 = 3
// f4 = f3 + f2 = 5
// f5 = f4 + f3 = 8

const input = 13

let f = [0, 1]

// generate first 50 fibonacci numbers
for (let n = 2; n < 50; n++) {
  // generate next 5 numbers
  for (let i = 0; i < 5; i++) {
    f[n + i] = f[n + i - 1] + f[n + i - 2]
  }

  // if fn > input: display next 5 numbers
  if (f[n] > input) {
    for (let i = 0; i < 5; i++) {
      console.log(f[n + i])
    }
    // stop at 5 numbers displayed
    break
  }
}
