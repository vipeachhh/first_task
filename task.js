const data = [
  {
    name: "Misha",
    age: 31,
  },
  {
    name: "Vika",
    age: 19,
  },
];

//1. add({ name: '...'})

function add(userName, userAge) {
  //userName: userName;
  //userAge: userAge;
  return data.push({ name: userName, age: userAge });
}

let user1 = add("Anton", 21);
console.log(data);

//2. update(0, 'Valera')

function update(searchIndex, newName, newAge) {
  for (var i = 0; i <= data.length; i++) {
    if (i == searchIndex) {
      data[i].name = newName;
      data[i].age = newAge;
    }
  }
}

let username2 = update(1, "Mark", "хз");
console.log(data);

//3. delete(1)

function remove(index) {
  for (var i = 0; i <= data.length; i++) {
    if (i == index) {
      delete data[i];
    }
  }
}

let user3 = remove(1);
console.log(data);
