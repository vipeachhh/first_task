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

//giveMeSum(data) // sum of all elements of haha array

function giveMeSum(search, id) {
  for (var i = 0; i <= search.length; i++) {
    if (i == id) {
      Object.keys(search[i]).forEach((key) => {
        if (key == "test" || key == "haha") {
          Object.keys(search[i][key]).forEach((item) => {
            if (Object.keys(search[i][key][item]) == "a") {
              for (var j = 0; j <= search[i][key][item].a.length - 1; j++) {
                Object.keys(search[i][key][item].a[j]).forEach((el) => {
                  if (typeof search[i][key][item].a[j][el] != "boolean") {
                    let sum = 0;
                    Object.keys(search[i][key][item].a[j][el]).forEach(
                      function (elem) {
                        sum += Number(elem);
                      }
                    );
                    console.log(sum);
                  }
                });
              }
            }
            if (Object.keys(search[i][key][item]) == "test") {
              Object.keys(search[i][key][item]).forEach((element) => {
                if (Object.keys(search[i][key][item][element]) == "a") {
                  for (
                    var j = 0;
                    j <= search[i][key][item][element].a.length - 1;
                    j++
                  ) {
                    Object.keys(search[i][key][item][element].a[j]).forEach(
                      (el) => {
                        if (
                          typeof search[i][key][item][element].a[j][el] !=
                          "boolean"
                        ) {
                          let sum = 0;
                          Object.keys(
                            search[i][key][item][element].a[j][el]
                          ).forEach(function (elem) {
                            sum += Number(elem);
                          });
                          console.log(sum);
                        }
                      }
                    );
                  }
                }
              });
            }
          });
        }
      });
    }
  }
}

giveMeSum(data, 1);
giveMeSum(data, 0);

//findValue(data, 2) // false or true

function findValue(search, id) {
  for (var i = 0; i <= search.length; i++) {
    if (i == id) {
      Object.keys(search[i]).forEach((key) => {
        if (key == "test" || key == "haha") {
          Object.keys(search[i][key]).forEach((item) => {
            if (Object.keys(search[i][key][item]) == "a") {
              for (var j = 0; j <= search[i][key][item].a.length - 1; j++) {
                Object.keys(search[i][key][item].a[j]).forEach((el) => {
                  if (el == "haha") {
                    console.log(search[i][key][item].a[j][el]);
                  }
                });
              }
            }
            if (Object.keys(search[i][key][item]) == "test") {
              Object.keys(search[i][key][item]).forEach((element) => {
                if (Object.keys(search[i][key][item][element]) == "a") {
                  for (
                    var j = 0;
                    j <= search[i][key][item][element].a.length - 1;
                    j++
                  ) {
                    Object.keys(search[i][key][item][element].a).forEach(
                      (el) => {
                        if (el == "haha") {
                          console.log(search[i][key][item][element].a[j][el]);
                        }
                      }
                    );
                  }
                }
              });
            }
          });
        }
      });
    }
  }
}

findValue(data, 1);
findValue(data, 0);
