let products=document.querySelectorAll(".card");
let addbas=document.querySelectorAll(".add");

let choice=[
    {
    Name:"Arsenal Home Kit",
    Price:123,
    inBasket: 0
    },
    {
    Name:"Barcelona Home Kit",
    Price:323,
    inBasket: 0
    },
    {
    Name:"Liverpool Home Kit",
    Price:21,
    inBasket: 0
    },
    {
    Name:"Dortmund Home Kit",
    Price:25,
    inBasket: 0
    },
    {
    Name:"Garabagh Home Kit",
    Price:53,
    inBasket: 0
    },
    {
    Name:"Real Madrid Home Kit",
    Price:77,
    inBasket: 0
    },
]

for (let index = 0; index < addbas.length; index++) {
    addbas[index].addEventListener("click", ()=>{
        Count(choice[index]);
        TotalCost(choice[index]);
    })
}
function OnLoadProCount() {
    let procount=localStorage.getItem("Product Count");
    if (procount) {
        document.querySelector(".nav-item span").textContent=procount;
    }
}
function Count(product) {
    let procount=localStorage.getItem("Product Count");
    procount=parseInt(procount);
    if (procount) {
        localStorage.setItem("Product Count", procount + 1);
        document.querySelector(".nav-item span").textContent=procount+1;
    }
    else{
        localStorage.setItem("Product Count", 1);
        document.querySelector(".nav-item span").textContent=1;
    }
    setItems(product);
}

function setItems(product){
    let basItems=localStorage.getItem("choicesinbasket");
    basItems=JSON.parse(basItems);
    if (basItems != null) {
        if (basItems[product.Name]==undefined) {
            basItems={
                ...basItems,
                [product.Name]: product
            }
        }
        basItems[product.Name].inBasket+=1;

    } else{
        product.inBasket=1;
        basItems={
            [product.Name]:product
    }
 
    }
    localStorage.setItem("choicesinbasket", JSON.stringify(basItems));

}
function TotalCost(product){
    let basCost=localStorage.getItem("totalCost");

    if (basCost!=null) {
        basCost=parseInt(basCost);
        localStorage.setItem("totalCost", basCost + 
        product.Price);
    }
    else{
        localStorage.setItem("totalCost", product.Price);
    }

}
OnLoadProCount();