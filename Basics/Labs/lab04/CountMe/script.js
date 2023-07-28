var countButton = document.getElementById("countButton");
countButton.addEventListener("click", countPageContent);
function countPageContent() {
  var tagName = document.querySelector('.tag').value;
  var className = document.querySelector('.className').value;
  var id = document.querySelector('.id').value;
  var name = document.querySelector('.name').value;
  var elements = document.getElementsByTagName(tagName);
  var classElements = document.getElementsByClassName(className);
  var idExists = document.getElementById(id) != null;
  var nameElements = document.getElementsByName(name);

  var output = {
    allTags: elements.length,
    className: classElements.length,
    id: idExists,
    name: nameElements.length
  };
  document.getElementById("output").innerText = JSON.stringify(output);
}
