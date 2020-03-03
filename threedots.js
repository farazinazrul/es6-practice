const ages = [15, 24, 54, 6];
const ages2 = [12, 20, 23, 56];
const concatSystem = [...ages, ...ages2];
console.log(concatSystem);
const maximum = Math.max (...concatSystem);
console.log(maximum);