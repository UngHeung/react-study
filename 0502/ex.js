let n = 3;
let m = 12;

const solution = (n, m) => [gcd(n, m), lcm(n, m)];
const gcd = (n, m) => (!(n % m) ? m : gcd(m, n % m));
const lcm = (n, m) => (n * m) / gcd(n, m);

console.log(solution(n, m));
