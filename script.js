function openForm() {
  document.getElementById("my-form").style.display = "block";
}

function closeForm() {
  document.getElementById("my-form").style.display = "none";
}

const inputs = document.querySelectorAll("input");
const submitBtn = document.querySelector(".submit-btn");
const bookGrid = document.querySelector("#grid");
// const bookCard = document.querySelector(".book-card");
const title = document.querySelector("#book-title");
const pages = document.querySelector("#book-pages");
const author = document.querySelector("#book-author");
const addBtn = document.querySelector(".add-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const currentStatus = document.querySelector("#read-status");

addBtn.addEventListener("click", () => {
  openForm();
});

cancelBtn.addEventListener("click", () => {
  closeForm();
});

submitBtn.addEventListener("click", () => {
  let details = document.createElement("div");
  details.className = "book-card";
  details.innerHTML = `<p><span>Title:</span> ${title.value}</p><p><span>Pages:</span> ${pages.value}</p><p><span>Author:</span> ${author.value}</p><p><span>Did you read?:</span> ${currentStatus.value}</p>`;
  bookGrid.appendChild(details);
  closeForm();
});
