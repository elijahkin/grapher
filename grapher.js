function clearPlane() {
  var canv = document.getElementById("canv");
  var ctx = canv.getContext("2d");
  ctx.clearRect(0, 0, canv.width, canv.height);
  ctx.strokeStyle = "gray";
  ctx.beginPath();
  ctx.moveTo(0, canv.height / 2);
  ctx.lineTo(canv.width, canv.height / 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(canv.width / 2, 0);
  ctx.lineTo(canv.width / 2, canv.height);
  ctx.stroke();
}

function graph() {
  var canv = document.getElementById("canv");
  var ctx = canv.getContext("2d");
  clearPlane();
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;
  document.getElementById("aValue").innerHTML = a;
  document.getElementById("bValue").innerHTML = b;
  document.getElementById("cValue").innerHTML = c;
  document.getElementById("roots").innerHTML =
    (-b + (b ** 2 - 4 * a * c) ** 0.5) / (2 * a) +
    " and " +
    (-b - (b ** 2 - 4 * a * c) ** 0.5) / (2 * a);
  var x;
  var color = document.getElementById("color");
  for (x = -canv.width / 2; x < canv.width / 2; x += 0.01) {
    y = a * x ** 2 + x * b;
    ctx.fillStyle = color.value;
    ctx.fillRect(x + canv.width / 2, canv.height / 2 - y - c, 1, 1);
  }
}

/*
Features to add
- Adjustible View Size / Better Input
- Axis labels
- Roots
- Derivative/integral
*/
