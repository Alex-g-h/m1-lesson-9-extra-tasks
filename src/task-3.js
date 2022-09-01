const DIM_VER = 3;
const DIM_HOR = 5;


const array = [];

for (let i = 0; i < DIM_VER; i++) {
  const rowArray = [];
  for (let j = 0; j < DIM_HOR; j++)
    rowArray.push(j + 1);
  array.push(rowArray);
}

console.log(array);
