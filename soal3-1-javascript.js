let input = [
  { username: "ali", hair_color: "brown", height: 1.2 },
  { username: "marc", hair_color: "blue", height: 1.4 },
  { username: "joe", hair_color: "brown", height: 1.7 },
  { username: "zehua", hair_color: "black", height: 1.8 }
];

function simplifiedJSON(arr) {
  let output = {
    h: [],
    d: []
  };

  if (input.length < 1) {
    return output;
  }

  output.h = Object.keys(arr[0]);
  arr.forEach((e) => {
    let tmp = [];
    output.h.forEach((key) => {
      tmp.push(e[key]);
    });
    output.d.push(tmp);
  });
  return output;
}

console.log(simplifiedJSON(input));
