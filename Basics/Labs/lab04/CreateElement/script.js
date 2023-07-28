function addItem() {
    var tagNameInput = document.getElementById('tag-name');
    var bgColorInput = document.getElementById('bg-color');
    var itemTextInput = document.getElementById('item-text');
    var output = document.getElementById('output');

    var tagName = tagNameInput.value;
    var bgColor = bgColorInput.value;
    var itemText = itemTextInput.value;

    if (!tagName || !bgColor || !itemText) {
        alert('Please fill all the fields.');
        return;
    }

    var item = document.createElement(tagName);
    item.className = 'item';
    item.innerText = itemText;
    item.style.backgroundColor = bgColor;

    output.appendChild(item);

  
}
