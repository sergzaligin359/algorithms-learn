console.log('Relativelist');
const arr2 = [
  {
    id: 1,
    title: 'cat',
    parentId: 0,
  },
  {
    id: 2,
    title: 'dog',
    parentId: 0,
  },
  {
    id: 3,
    title: 'bear',
    parentId: 0,
  },
  {
    id: 4,
    title: 'mouse',
    parentId: 0,
  },
  {
    id: 5,
    title: 'cat2',
    parentId: 1,
  },
  {
    id: 6,
    title: 'cat3',
    parentId: 5,
  },
  {
    id: 7,
    title: 'cat4',
    parentId: 5,
  },
  {
    id: 8,
    title: 'mouse2',
    parentId: 4,
  },
  {
    id: 9,
    title: 'mouse3',
    parentId: 4,
  },
]
const arr = [
  {
    id: 1,
    title: 'MainCategory',
    parentId: 0,
  },

  {
    id: 2,
    title: 'SubCategory',
    parentId: 1,
  },

  {
    id: 3,
    title: 'SubSubCategory',
    parentId: 2,
  },

  {
    id: 4,
    title: 'SubSubSubCategory',
    parentId: 3,
  },
]
const subCat = (item, arr) => {
  if(!item) return;
  for(val of arr) {
    if(item.id === val.parentId){
      if(!item.childrens){
        item.childrens = [];
      }
      item.childrens.push(val);
    }
  }
};

const categories = (arr) => {
  let cats = [];
  for(cat of arr){
    if(cat.parentId === 0){
      if(!cat.childrens){
        cat.childrens = [];
      }
      subCat(cat, arr);
      cats.push(cat);
    }else{
      if(!cat.childrens){
        cat.childrens = [];
      }
      subCat(cat, arr);
    }
  }
  return cats;
};

console.log('categories', categories(arr));