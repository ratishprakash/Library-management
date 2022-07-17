// var username = new Array(100)
// var password= new Array(100)
function check(){
    if(reg.value=="admin" && pass.value=="admin"){
        window.location= "college_library.html"
    }
    else if(username.indexOf(reg.value)==-1 || password.indexOf(pass.value)==-1){
        alert("Wrong Credentials")
    }
    else if(username.indexOf(reg.value)==password.indexOf(pass.value)){
        window.location= "college_library.html"
    }
    else{
        alert("Wrong Credentials")
    }

}
function add_student(){
    // var new_username=new_username.value
    // var new_password=new_password.value
    // var a =username.push(new_username.value)
    // var b =password.push(new_password.value)
    localStorage.setItem(new_username.value,new_password.value)
    // var a=new_username.value
    alert("document sent")

}
function display_arr(){
    for(var i=0;username.length;i++){
        document.write(username[i]);
    }
}