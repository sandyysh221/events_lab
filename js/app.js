document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#new-item-form");
  form.addEventListener("submit", handleFormSubmit);
  form.addEventListener("submit", handleFormReset);

  const deleteList = document.querySelector("#delete-btn");
  deleteList.addEventListener("click", handleDelete);
});

const handleFormSubmit = function (event) {
  event.preventDefault();
  const resultForm = document.querySelector("#reading-list");
  const formItem = document.createElement("li");
  formItem.innerHTML = `${event.target.title.value}<br> ${event.target.author.value}<br> ${event.target.category.value}`;
  resultForm.appendChild(formItem);
};

const handleFormReset = function (event) {
  event.preventDefault();
  const resetForm = document.querySelector("#new-item-form");
  resetForm.reset();
};

const handleDelete = function (event) {
  const deleteList = document.querySelector("#reading-list");
  deleteList.textContent = `You've deleted the list!`;
};
