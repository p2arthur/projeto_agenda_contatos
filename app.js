const form = document.querySelector(".add-contact_form");
const nameInput = document.getElementById("input-name")
const numberInput = document.getElementById("input-number")
const emailInput = document.getElementById("input-email")
const contactsTable = document.querySelector("tbody");
const contactsTableQuantity = document.querySelector("span")

console.log(contactsTable)
console.log(form)

const contatos = [];


const addContact = function(nameValue, numberValue, emailValue){
  contatos.push({nome:nameValue, telefone:numberValue, email:emailValue});
}

const updateContactTable = function(nameValue,numberValue,emailValue){

const tableRowTemplate = ` 
<tr>
<td class="contact-main-info">
    <div class="contact-image-container">
        <div class="contact-image">${nameValue.slice(0,1).toUpperCase()+nameValue.slice(1,2).toLowerCase()}</div>
    </div>
    <div class="contact-name">${nameValue}</div>
</td>
<td>${numberValue}</td>
<td>${emailValue}</td>
</tr>`

contactsTableQuantity.innerHTML = contatos.length;

contactsTable.insertAdjacentHTML("beforeend", tableRowTemplate)
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addContact(nameInput.value, numberInput.value, emailInput.value);
  updateContactTable(nameInput.value, numberInput.value, emailInput.value);
  console.log(contatos);
});
