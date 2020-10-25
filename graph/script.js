/************* Поиск в ширину на примере друзей из соц. сети***************/
const users = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const relationship = [
  [0, 3],
  [1, 3],
  [1, 4],
  [2, 5],
  [3, 6],
  [4, 6],
  [4, 7],
  [4, 10],
  [5, 7],
  [6, 8],
  [6, 10],
  [7, 8],
  [7, 9],
  [8, 10],
  [10, 11],
];

const matrix4 = getMatrix(users, relationship);
const friends = getFriends(matrix4, 8, 2);

console.log('matrix4', matrix4);
console.log('friends', friends);

/**
** Ищем друзей юзера по его индексу и в каком круге param round
** param {array} matrix
** param {number} friendIndex
** param {number} round
**/
function getFriends(matrix, friendIndex, round){
  if(round === 0 ) return;
  const friends = [];
  for(let i = 0; matrix[friendIndex].length > i; i++){
    if(matrix[friendIndex][i]){
      friends.push(i);
    }
  }
  if(round === 1) return friends;

  if(round === 2){
    let friends2 = [];
    for (const friend of friends){
      friends2.push(...getFriends(matrix, friend, 1));
    }
    friends2 = friends2.filter(friend => {
      if(friend === friendIndex) return false;
      if(friends.includes(friend)) return false;
      return true;
    });
    return [...new Set(friends2)];
  }
}

// Строим матрицу
function getMatrix(nodes, edges){
  const matrix = [];
  for(let i = 0; i < nodes.length; i++){
    const row = [];
    matrix.push(row);
    for(let j = 0; j < nodes.length; j++){
      matrix[i].push(0);
    }
  }

  for(const [a, b] of edges){
    matrix[a][b] = 1;
    matrix[b][a] = 1;
  }

  return matrix;
};

searchByWidth(matrix4, 8, (x) => {
  console.log('searchByWidth', x);
});

function searchByWidth(matrix, index, callback){

};
/************* Поиск в ширину на примере друзей из соц. сети***************/



/********************************tree***************************************/
// Дерево это подмножемтво графов

/********************************tree***************************************/


/********************************4***************************************/
const nodes = [0, 1, 2];
// 3й элемент это вес ребра
const edges = [
  [0, 1, 3],
  [0, 2, 1],
  [2, 3, 1],
];

// матрица смежности 1st row 2th col граф с весом ребра
const matrix3 = [
  [0, 3, 1],
  [0, 0, 0],
  [0, 0, 1],
]
/********************************3***************************************/
// const nodes = [0, 1, 2, 3];
// const edges = [
//   [0, 1],
//   [1, 3],
//   [0, 2],
//   [3, 2],
// ];
// смежгая таблица 1st row 2th col направленный граф
const matrix2 = [
  [0, 1, 1, 0],
  [0, 0, 0, 1],
  [1, 0, 0, 0],
  [0, 0, 1, 0],
]
/********************************2***************************************/
// 2 ex
// const nodes = [0, 1, 2, 3, 4, 5, 6];
// const edges = [
//   [1, 2],
//   [3, 5],
//   [4, 6],
// ];
// смежгая таблица 1st row 2th col и в обратную сторону
const matrix = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0],
]
/*********************************1**************************************/
// 1 ex
// const nodes = [1, 2, 3, 4, 5, 6];
// const edges = [
//   [1, 2],
//   [2, 3],
//   [2, 4],
//   [2, 5],
//   [3, 4],
//   [4, 5],
//   [5, 6],
// ];
