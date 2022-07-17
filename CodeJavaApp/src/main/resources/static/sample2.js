function location2(){
    var myDiv = document.getElementById("myDiv");          
    var label = document.createElement('label');
    label.htmlFor = "id";
    label.appendChild(document.createTextNode('This is the label for checkbox.'));
    myDiv.appendChild(label);
}