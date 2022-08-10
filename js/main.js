const form = document.getElementById("novoItem");
const list = document.getElementById("lista");
const items = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = event.target.elements["nome"];
  const amount = event.target.elements["quantidade"];

  createElement(name.value, amount.value);

  name.value = "";
  amount.value = "";
});

function createElement(name, amount) {
  console.log(name);
  console.log(amount);

  const newItem = document.createElement("li");
  newItem.classList.add("item");

  const itemNumber = document.createElement("strong");
  itemNumber.innerHTML = amount;

  newItem.appendChild(itemNumber);
  newItem.innerHTML += name;

  list.appendChild(newItem);

  const currentItem = {
    nome: name,
    quantidade: amount,
  };

  items.push(currentItem);

  localStorage.setItem("item", JSON.stringify(items));
}
