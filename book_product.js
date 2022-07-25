var uni_count=0
var temp_count=0
function remove(){
    var ul=document.getElementById("cards")
    while(ul.hasChildNodes()){
        ul.removeChild(ul.firstChild);
    }
}   

async function get_meaning(query){
const api_url="https://www.googleapis.com/books/v1/volumes?q="+query+"&printType=books&maxResults=12"
const response = await fetch(api_url)
const myJson= await response.json()
// console.log(myJson.items[0])
console.log(myJson.items[5].volumeInfo)
temp_count+=1
// console.log(temp_count)

for(var i=0;i<12;i++){

    const div1=document.createElement("div")
    div1.setAttribute("id","div1"+i)
    div1.className="col-md-4 mt-2"
    document.getElementById("cards").appendChild(div1)
    // document.body.appendChild(div1)

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
        img1.setAttribute("src","https://islandpress.org/sites/default/files/default_book_cover_2015.jpg")
        img1.setAttribute("height","225")
        img1.setAttribute("width","150")
        document.getElementById("div4"+i).appendChild(img1)
    }
    const div5=document.createElement("div")
    div5.className="card-body bg-light text-center"
    div5.setAttribute("id","div5"+i)
    document.getElementById("div2"+i).appendChild(div5)

    const div6=document.createElement("div")
    div6.className="mb-2"
    div6.setAttribute("id","div6"+i)
    document.getElementById("div5"+i).appendChild(div6)

    const h_1=document.createElement("h6")
    h_1.className="font-weight-semibold mb-2"
    h_1.setAttribute("id","h_1"+i)
    document.getElementById("div6"+i).appendChild(h_1)

    const a1=document.createElement("a")
    var title=myJson.items[i].volumeInfo.title
    var book_link=myJson.items[i].volumeInfo.canonicalVolumeLink
    // console.log(myJson.items[i].volumeInfo)
    a1.className="text-default mb-2"
    a1.setAttribute("href",book_link)
    a1.setAttribute("target","_blank")
    a1.setAttribute("data-abc","true")
    a1.setAttribute("id","a1"+i)
    document.getElementById("h_1"+i).appendChild(a1)
    document.getElementById("a1"+i).textContent=title

    const p1=document.createElement("p")
    p1.className="text-muted"
    p1.setAttribute("data-abc","true")
    p1.setAttribute("id","p1"+i)
    document.getElementById("div6"+i).appendChild(p1)
    var author=myJson.items[i].volumeInfo.authors
    document.getElementById("p1"+i).textContent=author

    var review=myJson.items[i].volumeInfo.averageRating
    const div7=document.createElement("div")
    div7.className="text-muted mb-3"
    div7.setAttribute("id","div7"+i)
    document.getElementById("div5"+i).appendChild(div7)
    document.getElementById("div7"+i).textContent="Rating = "+review

    uni_count+=1 
        }
    }
    

function getname(){
    const query=textbox.value
    if(temp_count>=1){
        remove()
    }

    get_meaning(query).catch(error =>{
        console.log("error")
        console.error(error)
    })
}      


