// arr= "Sale ahmed ali".split(" ")
// console.log(arr)

// age=prompt("What is your age ? ");

// age >= 18?

//     document.write("good")
//     :document.write("bad")

// let x = function(){
//     return 0;
// }

// console.log(x())

// let x = ()=> 1;

// console.log(x()*5)


// let car = {
//     "name":"Salem",
//     "age":17,
//     "address":"Giza"
// }

// console.log(car.name)

// let title=(document.getElementById("title"))

// title.style.color="red"
// title.innerHTML="hello"

// let img = document.getElementById("image")

// img.setAttribute("title","salem")

// console.log(img.getAttribute("title"))

// let element=document.getElementById("sec")

// let previous=element.previousElementSibling

// console.log(element)
// console.log(previous)

// let item=document.getElementById("container");

// item.innerHTML="<h3>Hello</h3>"
// item.style.textAlign="center"
// item.style.background="#444"
// item.style.borderRadius="20px"
// item.style.color="red"

// item.style.cssText=`

// color:red;
// text-align:center;

// `

// document.body.innerHTML=`

// <h1> Welcome </h1>




// `

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// let container = document.createElement("div")

// let head = document.createElement("h1")

// let image = document.createElement("img")


// let content = document.createTextNode("Hello");

// head.appendChild(content)

// image.src="me.jpg"

// container.appendChild(head)
// container.appendChild(image)

// document.body.appendChild(container)
// container.setAttribute("id","calc")
// let ele = document.getElementById("calc")
// ele.innerHTML=""
// console.log(container.attributes)

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// very important
// let container = document.createElement("div");

// document.body.appendChild(container)

// container.style.textAlign="center"

// function card (name,age_num,source){

//     let card =document.createElement("div");
//     let title = document.createElement("h2");
//     let age = document.createElement("p");
//     let img = document.createElement("img");

//     let head_text=document.createTextNode(name);

//     let age_content= document.createTextNode("Age is " + age_num);

//     img.src=source

//     title.appendChild(head_text);
//     age.appendChild(age_content);

//     card.appendChild(title)
//     card.appendChild(age)
//     card.appendChild(img)
//     container.appendChild(card)

//     card.style.width="200px";
//     img.style.width="100%";
//     card.style.background="grey";
//     card.style.padding="5px";
//     card.style.borderRadius="10px";
//     card.style.margin="10px";
//     card.style.display="inline-block";



// }

// card("Salem",17,"me.jpg");

// card("Salem",17,"me.jpg");
// card("Salem",17,"me.jpg");
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// let element= document.getElementById("button");

// element.onclick=function hello(){
//     console.log("hello");
// }

// let doller = document.getElementById("doller");
// let pound = document.getElementById("pound");

// doller.onkeyup=function change (){
//     pound.value=doller.value * 53;
// }

// pound.addEventListener("keyup",function change(){
//     doller.value=pound.value/53
// })


// let after=document.getElementById("after")

// let before=document.getElementById("before")

// let append=document.getElementById("append")

// let content = document.getElementById("content")

// let container = document.getElementById("container")

// container.style.background="#ffa";
// container.style.height="30px"

// after.onclick=function(){
//     container.after(content)
// }

// before.onclick=function(){
//     container.before(content)
// }

// append.onclick=function(){
//     container.append(content)
// }

// let title = document.getElementById("title");



// title.onclick=function(){
//     title.classList.toggle("name")
// }

// let btnopen = document.getElementById("open");

// let btnclose = document.getElementById("close")

// let container = document.getElementsByClassName("container")[0]

// btnclose.onclick=function(){
//     container.classList.add("hide")
//     btnclose.classList.add("hide")
//     btnopen.classList.remove("hide")
//     console.log(container)
// }

// btnopen.onclick=function(){
//     btnopen.classList.add("hide");
//     btnclose.classList.remove("hide");
//     container.classList.remove("hide")
// }

// let btn = document.getElementById("btn");

// let txt = document.getElementById("txt");

// this.onload=function(){
//     txt.focus()
// }

// let btn = document.getElementById("btn")

// window.onscroll=function(){
//     if (scrollY >= 400){
//         btn.style.display="block";
//     }else{
//         btn.style.display="none"
//     }
// }

// btn.onclick=function(){
//     scroll({
//         left:0,
//         top:0,
//         behavior:"smooth"
//     })
// }

// console.log(screen.width)
// console.log(screen.height)

// console.log(screen.availHeight)
// console.log(screen.availWidth)

// location.href
// location.pathname
// location.hostname

// let hello =setTimeout(function(){
//     console.log("hello")
// },1000);

// clearTimeout(hello)

// let hello = setInterval(function(){
//     console.log("hello")
// },1000)

// clearInterval(hello)

// function change(color){

//     localStorage.cl_color=color;

//     document.body.style.background=localStorage.cl_color;

// }

// if (localStorage.length >0){
//     document.body.style.background=localStorage.cl_color
// }

let title = document.getElementById("title")
let price = document.getElementById("price")
let taxes = document.getElementById("taxes")
let ads= document.getElementById("ads")
let discount = document.getElementById("discount")

let total = document.getElementById("total")
let count = document.getElementById("count")
let cat = document.getElementById("category")

let create = document.getElementById("submit")

// console.log(price,taxes,ads,discount,total,count,cat,create)

// total function

function total_fun(){
     if (price.value != ""){
    total_price = +price.value + +taxes.value + +ads.value - +discount.value;
    total.innerHTML=total_price
    console.log("done")
    total.style.background="#040"}
    else{
        total.style.background="rgb(86, 15, 15)"
    }
}


// create product
let dataPro ;
if (localStorage.shopList != null && localStorage.shopList.length != 0){

 dataPro =  JSON.parse(localStorage.shopList)
}else{
     dataPro=[]
}

create.onclick=function(){

    let newPro = {
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value
        

    }

    if (newPro.count > 1){

        for (let i = 0 ; i < newPro.count; i++ ){
            dataPro.push(newPro)
        }

    }else{
        dataPro.push(newPro)
    }

    

    localStorage.shopList=JSON.stringify(dataPro)

    console.log(JSON.parse(localStorage.shopList))

    clearData()
    showData()
    
}

function clearData(){
    title.value = "";
    discount.value ="";
    price.value="";
    taxes.value = "";
    category.value="";
    count.value="";
    ads.value="";
    total.innerHTML=""
    total.style.background="rgb(86, 15, 15)"
}


function showData(){

    let table = "";

if (localStorage.shopList != null){

    for(let i =0 ; i < dataPro.length;i++){
        table += `
        <tr>
                    <td>${i}</td>
                    <td>${dataPro[i].title}</td>
                    <td>${dataPro[i].price}</td>
                    <td>${dataPro[i].taxes}</td>
                    <td>${dataPro[i].ads}</td>
                    <td>${dataPro[i].discount}</td>
                    <td>${dataPro.total}</td>
                    <td>${dataPro[i].category}</td>
                    <td><button id="update" >update</button></td>
                    <td><button id="delete" onclick="deleteItem(${i})">delete</button></td>
        </tr>
        `
    }}

    document.getElementById("tableContent").innerHTML=table;
    let deleteDiv = document.getElementById("deleteAll");
    if (dataPro.length > 0){
        deleteDiv.innerHTML=`<button id='all' onclick="allDelete()" >Delet All (${dataPro.length})</button> `
    }else{
        deleteDiv.innerHTML=""
    }
}


function deleteItem(n){

    dataPro.splice(n,1);

    localStorage.shopList=dataPro;

    showData()


}


function allDelete(){
    dataPro.splice(0,dataPro.length)
    localStorage.shopList=dataPro;
    showData()
}

showData()