const data = [
  {
    name: "Misha",
    test: {
      test: { a: [1, 2, { haha: true }] },
    },
  },
  {
    haha: {
      test: {
        test: { a: [1, 2, { haha: [1, 2, 3, 4, 5, 6, 7, 9, 10] }] },
      },
    },
    test: {
      test: { a: [1, 2, { haha: false }] },
    },
  },
];

console.log(data[0]);
console.log(data[0].name);
console.log(data[0].test);
console.log(data[0].test.test.a);
console.log(data[1]);
console.log(data[1].haha.test.test.a);

const types = Object.keys(data);
console.log(types);
const entries = Object.entries(data);
console.log(entries);

//giveMeSum(data) // sum of all elements of haha array

function getProperty(data, test) {
  for (var i = 0; i < test.length; i++) {
    data = data[test[i]];
    if (!data) {
      break;
    }
    return data;
  }
}

console.log(getProperty(data, ["haha", "test"]));

function giveMeSum(elements) {
  for (var i = 0; i <= elements.length; i++) {
    for (var j = 0; j <= elements[i].length; j++) {
      console.log(elements[j]);
    }
  }
}

let pjrabotay = giveMeSum(data);
console.log(pjrabotay);
console.log(data);

//findValue(data, 2) // false or true

function findValue(element, index) {
  for (var i = 0; i <= element.length; i++) {
    if (i == index) {
      for (var j = 0; j <= data[i].length; j++) {
        console.log(data[j]);
      }
    }
  }
}

let something = findValue(data, 0);
console.log(data);
