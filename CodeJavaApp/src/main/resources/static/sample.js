var count=0
var inner_count=0
function sayhello(){
    if( chktick.checked)
        count++
    else 
        count--
}
function sayhello1(){
    if(chktick1.checked)
        count++
    else
        count--
}
function sayhello2(){
    if(chktick2.checked)
        count++
    else 
        count--
}
function remove(){
    var ul=document.getElementById("list")
    while(ul.hasChildNodes()){
        ul.removeChild(ul.firstChild);
    }
}   

function location1(){
    if (inner_count>0){
        remove()
    }
    if (count==0){
        alert("No items selected")
    }

    var ul=document.getElementById("list")
    var li=document.createElement("li")
    li.appendChild(document.createTextNode("Total= "+ count))
    ul.appendChild(li)
    if(chktick.checked){
        var li=document.createElement("li")
        li.appendChild(document.createTextNode(chktick.name))
        ul.appendChild(li)
    }
    if(chktick1.checked){
        var li=document.createElement("li")
        li.appendChild(document.createTextNode(chktick1.name))
        ul.appendChild(li)
    }
    if(chktick2.checked){
        var li=document.createElement("li")
        li.appendChild(document.createTextNode(chktick2.name))
        ul.appendChild(li)
    }
    inner_count++
}
