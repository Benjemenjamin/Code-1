let b: number=100000000000000000
let a: number=50000000000000000


for (let i: number = b; i > 1; i/=2) {
  if (i == 3)
    continue;
  if (i == a)
    break;
  console.log(i);
}

