const args = process.argv.slice(2);
const sum = (a, b) => parseInt(a) + parseInt(b);
console.log(args.reduce(sum, 0));