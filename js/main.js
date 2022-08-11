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

  const exists = items.find((element) => element.nome === name.value);

  const currentItem = {
    nome: name.value,
    quantidade: amount.value,
  };

  if (exists) {
    currentItem.id = exists.id;

    updateElement(currentItem);

    items[items.findIndex((element) => element.id === exists.id)] = currentItem;
  } else {
    currentItem.id = items[items.length - 1]
      ? items[items.length - 1].id + 1
      : 0;

    createElement(currentItem);

    items.push(currentItem);
  }

  console.log(exists);

  localStorage.setItem("itens", JSON.stringify(items));

  name.value = "";
  amount.value = "";
});

function createElement(item) {
  const newItem = document.createElement("li");
  newItem.classList.add("item");

  const itemNumber = document.createElement("strong");
  itemNumber.innerHTML = item.quantidade;
  itemNumber.dataset.id = item.id;
  newItem.appendChild(itemNumber);

  newItem.innerHTML += item.nome;

  newItem.appendChild(deleteButton(item.id));

  list.appendChild(newItem);
}

function updateElement(item) {
  document.querySelector("[data-id='" + item.id + "']").innerHTML =
    item.quantidade;
}

function deleteButton(id) {
  const buttonElement = document.createElement("button");
  buttonElement.innerText = "x";

  buttonElement.addEventListener("click", function () {
    deleteElement(this.parentNode, id);
  });

  return buttonElement;
}

function deleteElement(tag, id) {
  tag.remove();

  items.splice(
    items.findIndex((element) => element.id === id),
    1
  );

  localStorage.setItem("itens", JSON.stringify(items));
}
