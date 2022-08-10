const form = document.getElementById("novoItem");
const list = document.getElementById("lista");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  createElement(
    event.target.elements["nome"].value,
    event.target.elements["quantidade"].value
  );
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
}
