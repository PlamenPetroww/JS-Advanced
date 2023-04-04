function solve() {

  let inputType = document.getElementById('text').value;
  let command = document.getElementById('naming-convention').value;

  let inputArr = inputType.split(" ");
  let res = "";
  switch (command) {
    case "Camel Case":
      inputArr.forEach((e, i) => {
        if (i === 0) {
          return res += e.toLowerCase();
        }
        return res += e[0].toUpperCase() + e.substring(1).toLowerCase();
      });
      break;
    case "Pascal Case":
      inputArr.forEach((e, i) => {
        e = e.toLowerCase();
        res += e[0].toUpperCase() + e.substring(1);
      })
      break;

    default: res = 'Error!';
      break;
  }
  document.getElementById('result').textContent = res;
}