// Get the modal
var EditModal = document.getElementById("myEditModal");
let Cancel = EditModal.querySelector("#close");
let InputEditModol = EditModal.querySelector("input");
let CLoseBtnEdit = EditModal.querySelector("#EditBtn");
function CloseEditModel(){
    EditModal.style.display = "none";
}
function OpenEditModel(){
    EditModal.style.display = "block";
}
function SelectEditBtn(){
    let EditBtns = document.querySelectorAll("#myEditBtn");
    EditBtns.forEach((EditIcon)=>{
        EditIcon.addEventListener('click', function(){
            let EditBtnModal = document.querySelector("#EditBtn");
            let RightSection = EditIcon.parentNode;
            let TodoItem =  RightSection.parentNode;
            let EditText = TodoItem.querySelector(".subtitle");
            OpenEditModel();
            EditBtnModal.addEventListener('click', function(){
                let NewParament = InputEditModol.value;
                EditText.textContent =  NewParament;
                NewParament ="";
              })
        })
    })}
CLoseBtnEdit.onclick = function() {
  CloseEditModel();
}
Cancel.onclick = function() {
    CloseEditModel();
  }

window.onclick = function(event) {
  if (event.target == EditModal) {
    CloseEditModel();
  }
};