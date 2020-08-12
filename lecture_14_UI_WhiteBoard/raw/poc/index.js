// let pTag=document.createElement("p");
// pTag.innerText = "Dynamically generated text from Js";

// let bodyNode = document.querySelector("body");
// bodyNode.appendChild(pTag);

// let ul = document.querySelector("ul");

// ul.innerHTML=`<li>First Item</li>
// <li>Second Item</li>
// <li>Third Item</li>
// `;

// //styling
// ul.style.backgroundColor="red";

let submitBtn = document.querySelector("#click");
let itemBox = document.querySelector("#item");
let ul = document.querySelector("ul");
submitBtn.addEventListener("click", function (){
    // alert("hello");
    if(itemBox.value){
        let val = itemBox.value;
        let li = document.createElement("li");
        li.innerHTML = val;
        ul.appendChild(li);
        itemBox.value = "";
    }else{
        alert("Enter some Data");
    }
    
})