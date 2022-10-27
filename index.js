// элементы в DOM можно получить при помощи функции querySelector
const fruitsList = document.querySelector('.fruits__list'); // список карточек
const shuffleButton = document.querySelector('.shuffle__btn'); // кнопка перемешивания
const minWeightInput = document.querySelector('.minweight__input'); // поле мин массой
const maxWeightInput = document.querySelector('.maxweight__input'); // поле макс массой
const filterButton = document.querySelector('.filter__btn'); // кнопка фильтрации
const sortKindLabel = document.querySelector('.sort__kind'); // поле с названием сортировки
const sortValueLabel = document.querySelector('.sort__value'); // поле с названием параметра сортировки
const sortTimeLabel = document.querySelector('.sort__time'); // поле с временем сортировки
const sortChangeButton = document.querySelector('.sort__change__btn'); // кнопка смены сортировки
const sortChangeValueButton = document.querySelector('.sort__changeValue__btn'); // кнопка смены параметра для сортировки
const sortChangeSortDirectionButton = document.querySelector('.sort__changeSortDirection__btn'); // кнопка смены направления сортировки
const sortActionButton = document.querySelector('.sort__action__btn'); // кнопка сортировки
const kindInput = document.querySelector('.kind__input'); // поле с названием вида
const colorInput = document.querySelector('.color__input'); // поле с названием цвета
const weightInput = document.querySelector('.weight__input'); // поле с весом
const addActionButton = document.querySelector('.add__action__btn'); // кнопка добавления

// список фруктов в JSON формате
let fruitsJSON = `[
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "красный", "weight": 17},
  {"kind": "Ананас", "color": "желтый", "weight": 80},
  {"kind": "Банан", "color": "желтый", "weight": 120},
  {"kind": "Папайя", "color": "красный", "weight": 30},
  {"kind": "Кешью", "color": "белый", "weight": 2},
  {"kind": "Саподилла", "color": "голубой", "weight": 8},
  {"kind": "Джекфрут", "color": "зеленый", "weight": 70},
  {"kind": "Авокадо", "color": "зеленый", "weight": 30},
  {"kind": "Гранадилла", "color": "белый", "weight": 27},
  {"kind": "Рамбутан", "color": "красный", "weight": 15},
  {"kind": "Лонган", "color": "черный", "weight": 32},
  {"kind": "Манго", "color": "желтый", "weight": 40},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Тамаринд", "color": "черный", "weight": 22},
  {"kind": "Питахайя", "color": "красный", "weight": 130},
  {"kind": "Маракуйя", "color": "черный", "weight": 30},
  {"kind": "Кокос", "color": "белый", "weight": 90}
]`;

// преобразование JSON в объект JavaScript
let fruits = JSON.parse(fruitsJSON);

/*** ОТОБРАЖЕНИЕ ***/

// отрисовка карточек
const display = () => {
  // TODO: очищаем fruitsList от вложенных элементов,
  // чтобы заполнить актуальными данными из fruits
  fruitsList.innerHTML = "";

  for (let i = 0; i < fruits.length; i++) {
    // TODO: формируем новый элемент <li> при помощи document.createElement,
    // и добавляем в конец списка fruitsList при помощи document.appendChild
    var newLi = CreateFruitLi(i, fruits[i])

    fruitsList.appendChild(newLi);
  }
};

function CreateFruitLi(index, fruit) {
  var newLi = document.createElement('li');

  var newInfoDiv = document.createElement('div');
  newInfoDiv.className = "fruit__info";
  switch (fruit.color) {
    case "красный":
      newLi.className = "fruit__item fruit_red";
      break;
    case "оранжевый":
      newLi.className = "fruit__item fruit_orange";
      break;
    case "желтый":
      newLi.className = "fruit__item fruit_yellow";
      break;
    case "зеленый":
      newLi.className = "fruit__item fruit_green";
      break;
    case "голубой":
      newLi.className = "fruit__item fruit_cyan";
      break;
    case "синий":
      newLi.className = "fruit__item fruit_blue";
      break;
    case "фиолетовый":
      newLi.className = "fruit__item fruit_violet";
      break;
    case "белый":
      newLi.className = "fruit__item fruit_white";
      break;
    default:
      newLi.className = "fruit__item fruit_black";
      break;
  }
  newInfoDiv.innerHTML = `<div>index: ${index}</div><div>kind: ${fruit.kind}</div><div>color: ${fruit.color}</div><div>weight (кг): ${fruit.weight}</div>`;
  newLi.appendChild(newInfoDiv);
  return newLi;
}

// первая отрисовка карточек
display();

/*** ПЕРЕМЕШИВАНИЕ ***/

// генерация случайного числа в заданном диапазоне
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// перемешивание массива
const shuffleFruits = () => {
  let result = [];
  for (let i = 0; i < fruits.length; i++) {
    let rnd = getRandomInt(0, fruits.length - 1);
    result.push(fruits[rnd]);
  }
  fruits = result;
  display();
};

shuffleButton.addEventListener('click', () => {
  shuffleFruits();
});

/*** ФИЛЬТРАЦИЯ ***/

// фильтрация массива по мин и макс значению
const filterFruits = (arr, valueName, minVal, maxVal) => {
  var arr2 = arr.filter((item) => {
    const val = item[valueName];
    if (val >= minVal && val <= maxVal) {
      return true;
    } else {
      return false;
    }
  });
  return arr2;
};

filterButton.addEventListener('click', () => {
  const minWeight = minWeightInput.value;
  const maxWeight = maxWeightInput.value;
  fruits = filterFruits(fruits, "weight", minWeight, maxWeight);
  display();
});

/*** СОРТИРОВКА ***/

const comparationAPI = {
  color(a, b) {
    if (!direction) [a, b] = [b, a];
    if (a.color > b.color) {
      return true;
    } else {
      return false;
    }
  },
  weight(a, b) {
    if (!direction) [a, b] = [b, a];
    if (a.weight > b.weight) {
      return true;
    } else {
      return false
    }
  }
};


function partition(arr, left, right) {
  var pivot = arr[Math.floor((right + left) / 2)];
  var i = left;
  var j = right;
  while (i <= j) {
    while (comparer(pivot, arr[i])) {
      i++;
    }
    while (comparer(arr[j], pivot)) {
      j--;
    }
    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }
  return i;
}

const sortAPI = {
  bubbleSort() {
    let n = fruits.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (comparer(fruits[j], fruits[j + 1])) {
          [fruits[j], fruits[j + 1]] = [fruits[j + 1], fruits[j]];
        }
      }
    }
  },

  quickSort(left, right) {
    var index;
    if (fruits.length > 1) {
      left = typeof left != "number" ? 0 : left;
      right = typeof right != "number" ? fruits.length - 1 : right;
      index = partition(fruits, left, right);
      if (left < index - 1) {
        sort(left, index - 1);
      }
      if (index < right) {
        sort(index, right);
      }
    }
  },

  // выполняет сортировку и производит замер времени
  startSort() {
    const start = new Date().getTime();
    sort();
    const end = new Date().getTime();
    sortTime = `${end - start} ms`;
  },
};

// инициализация полей
let sortKind = 'bubbleSort'; // инициализация состояния вида сортировки
let sortValue = 'color'; //color, weight
let sortTime = '-'; // инициализация состояния времени сортировки
sortKindLabel.textContent = sortKind;
sortValueLabel.textContent = sortValue;
sortTimeLabel.textContent = sortTime;
let sort = sortAPI[sortKind];
let comparer = comparationAPI[sortValue];
let direction = true;


//смена алгоритма сортировки
sortChangeButton.addEventListener('click', () => {
  if (sortKind == 'bubbleSort') {
    sortKind = 'quickSort';
  } else {
    sortKind = 'bubbleSort';
  }
  sortKindLabel.textContent = sortKind;
  sort = sortAPI[sortKind];
});

//смена параметра сортировки
sortChangeValueButton.addEventListener('click', () => {
  if (sortValue == 'color') {
    sortValue = 'weight';
  } else {
    sortValue = 'color';
  }
  sortValueLabel.textContent = sortValue;
  comparer = comparationAPI[sortValue];
});

//смена направления сортировки
sortChangeSortDirectionButton.addEventListener('click', () => {
  if (direction) {
    direction = false;
    sortChangeSortDirectionButton.innerHTML = "По убыванию";
  } else {
    direction = true;
    sortChangeSortDirectionButton.innerHTML = "По возрастанию";
  }

});

sortActionButton.addEventListener('click', () => {
  sortTimeLabel.innerHTML = "sorting...";

  sortAPI.startSort();

  display();
  sortTimeLabel.innerHTML = sortTime;
});

/*** ДОБАВИТЬ ФРУКТ ***/

addActionButton.addEventListener('click', () => {
  if (kindInput.value == "" || colorInput.value == "" || weightInput.value == "") {
    alert("Некорректные данные");
    return;
  }
  var newFruit = { "kind": kindInput.value, "color": colorInput.value, "weight": weightInput.value };
  var newLi = CreateFruitLi(fruits.length, newFruit);
  fruits.push(newFruit);
  fruitsList.appendChild(newLi);
  //display();
});