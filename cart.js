let basketContainer=document.querySelector(".basket_container")



function showList(arr) {
    basketContainer.innerHTML=''
arr.forEach(data=>{
    basketContainer.innerHTML+=`
    <div class="basket_card">
    <img src="${data.img}">
    <p> ${data.text}</p>
    <p>count ${data.count}</p>
    <p>price ${data.count*data.price}</p>
    <button onclick="inc(${data.id})">+</button>
    <button onclick="dec(${data.id})">-</button>
    </div>`
})
}


function inc(id){
    let checkBasket=basket.find(data=>data.id===id)
    checkBasket.count+=1
    localStorage.setItem("sebet",JSON.stringify(basket))
    showList(basket)
}

function dec(id){
    let checkBasket=basket.find(data=>data.id===id)
    checkBasket.count-=1
    if (checkBasket.count===0) {
        let i=basket.findIndex(data=>data.id==id)
        basket.splice(i,1)
    }
    localStorage.setItem("sebet",JSON.stringify(basket))
    showList(basket)
}

window.addEventListener("load", ()=>{
    showList(basket)
})