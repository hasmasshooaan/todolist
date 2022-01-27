var AddModal = document.getElementById("myAddModal");
let BtnAdd = document.getElementById("myAddBtn");
let CLoseBtnAdd = AddModal.querySelector("#close");
function OpenAddModel(){
  AddModal.style.display = "block";
}
function CloseAddModel(){
  AddModal.style.display = "none";
}
AddBtn.addEventListener("click", function(){
  let NewData = InputAddModol.value;
  InputAddModol.value=""
  ImportItem(NewData);
  CloseAddModel();
});
BtnAdd.onclick = function() {
  OpenAddModel();
}
CLoseBtnAdd.onclick = function() {
  CloseAddModel();
}

window.onclick = function(event) {
  if (event.target == AddModal) {
    CloseAddModel();
  }
}