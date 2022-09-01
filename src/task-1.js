const goals = [8, 1, 1, 3, 2, -1, 5];


// most result match
const maxValue = Math.max(...goals);
const indexMax = goals.indexOf(maxValue);
alert(`Самый результативный матч был под номером ${indexMax + 1}.\
 В нем было забито ${maxValue} гол(ов).`);


// most fail matches
const nonNegativeArray = goals.filter(goal => goal >= 0);
const minValue = Math.min(...nonNegativeArray);
let minValueIndexArray = [];
let minValueIndex = goals.indexOf(minValue);
do {
  minValueIndexArray.push(minValueIndex + 1);
  minValueIndex = goals.indexOf(minValue, minValueIndex + 1);  
} while (minValueIndex !== -1);

alert(`Самые не результативные матчи были под номерами ${minValueIndexArray.join(', ')}. \
В каждом из них было забито по ${minValue} мячу(а).`);



// goals sum
let goalsSum = nonNegativeArray.reduce((prev, curr) => prev + curr, 0);
alert(`Общее количество голов за сезон равно ${goalsSum}`);



// automatic lose
const commonStr = 'Были автоматические поражения:';
let resultStr = (goals.length === nonNegativeArray.length) ? 'нет' : 'да';
alert(`${commonStr} ${resultStr}`);



// average goals
const goalsMean = goalsSum / nonNegativeArray.length;
alert(`Среднее количество голов за матч равно ${goalsMean.toFixed(1)}`);


// sort goals
nonNegativeArray.sort((a, b) => a - b);
alert(`${nonNegativeArray.join(', ')}`);