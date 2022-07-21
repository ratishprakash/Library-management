var uni_count=0
async function get_meaning(query){
const api_url="https://www.googleapis.com/books/v1/volumes?q="+query+"&printType=books"
const response = await fetch(api_url)
const myJson= await response.json()
// console.log(myJson.items[9])
console.log(myJson.items[5].volumeInfo)

for(var i=0;i<10;i++){

    const div1=document.createElement("div")
    div1.setAttribute("id","div1"+i)
    div1.className="col-md-4 mt-2"
    // document.getElementById("cards").appendChild(div1)
    document.body.appendChild(div1)

    const div2=document.createElement("div")
    div2.setAttribute("id","div2"+i)
    div2.className="card"
    document.getElementById("div1"  +i).appendChild(div2)

    const div3=document.createElement("div")
    div3.className="card-body"
    div3.setAttribute("id","div3"+i)
    document.getElementById("div2"+i).appendChild(div3)

    const div4=document.createElement("div")
    div4.className="card-img-actions"
    div4.setAttribute("id","div4"+i)
    document.getElementById("div3"+i).appendChild(div4)

    const img1=document.createElement("img")
    try{
        var image1=myJson.items[i].volumeInfo.imageLinks.smallThumbnail
        img1.setAttribute("src",image1)
        document.getElementById("div4"+i).appendChild(img1)
    }
    catch(err){
        img1.setAttribute("alt","No Image Found")
        document.getElementById("div4"+i).appendChild(img1)

    }
    uni_count+=1 
        }}
    

function getname(){
    const query=textbox.value
    get_meaning(query).catch(error =>{
        console.log("error")
        console.error(error)
    })
}      


