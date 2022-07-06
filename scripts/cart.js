var data = JSON.parse(localStorage.getItem("cart_items")) || []
// console.log("hello")
console.log(data)
function datac(data){
    document.querySelector("#cart").innerHTML=null;
    var sum=0;

    data.map(function(el,index){
        let div= document.createElement('div');
        let name = document.createElement('p');
        let img = document.createElement('img');
        let price=document.createElement('p');
        let btn = document.createElement('button');
        btn.innerText="Remove";
        btn.addEventListener("click",function(){
            removedata(el,index)
        })
        name.innerText=el.name;
        price.innerText=el.price;
        img.src=el.image;
       sum= sum+el.price;
       if(sum<price){
        alert("Insufficient Balance")
       }

        div.append(img,name,price,btn);
        document.querySelector("#cart").append(div);
        document.querySelector("#cart_total").innerText=sum;

    })
}
datac(data)

function removedata(el,index){
    let data = JSON.parse(localStorage.getItem("cart_items"))
    data.splice(index,1)
    localStorage.setItem("cart_items",JSON.stringify(data))
    window.location.reload()
}