let historyVisible = false;

function append(val) {
  document.getElementById("display").value += val;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function backspace() {
  let d = document.getElementById("display");
  d.value = d.value.slice(0, -1);
}

function factorial() {
  let d = document.getElementById("display");
  let n = parseInt(d.value);
  if (isNaN(n) || n < 0) {
    d.value = "Error";
    return;
  }
  let fact = 1;
  for (let i = 1; i <= n; i++) fact *= i;
  d.value = fact;
}

function calculate() {
  try {
    let exp = document.getElementById("display").value;
    let result = eval(exp);
    document.getElementById("display").value = result;
    addHistory(exp + " = " + result);
  } catch {
    document.getElementById("display").value = "Error";
  }
}

function toggleHistory() {
  historyVisible = !historyVisible;
  document.getElementById("history").style.display = historyVisible
    ? "block"
    : "none";
}

function addHistory(text) {
  let p = document.createElement("p");
  p.textContent = text;
  document.getElementById("historyList").prepend(p);
}
