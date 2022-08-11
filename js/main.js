const form = document.getElementById("novoItem");
const list = document.getElementById("lista");
const items = JSON.parse(localStorage.getItem("itens")) || [];

items.forEach((element) => {
  createElement(element);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = event.target.elements["nome"];
  const amount = event.target.elements["quantidade"];

  const currentItem = {
    nome: name.value,
    quantidade: amount.value,
  };

  createElement(currentItem);

  items.push(currentItem);

  localStorage.setItem("itens", JSON.stringify(items));

  name.value = "";
  amount.value = "";
});

function createElement(item) {
  const newItem = document.createElement("li");
  newItem.classList.add("item");

  const itemNumber = document.createElement("strong");
  itemNumber.innerHTML = item.quantidade;
  newItem.appendChild(itemNumber);

  newItem.innerHTML += item.nome;

  list.appendChild(newItem);
}
