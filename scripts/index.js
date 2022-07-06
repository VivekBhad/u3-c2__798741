


    const url=`https://grocery-masai.herokuapp.com/items`
   
    fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        // console.log(data.data)
        itemstore(data.data)
    })
    .catch(function(err){
        console.log(err)
    })

    function itemstore(data){
        data.map(function(el){
            let div = document.createElement("div");

            let img = document.createElement("img");
            let name = document.createElement("h2");
            let price = document.createElement("p");
            let btn = document.createElement("button");
            btn.innerText="Add_To_Cart"
            btn.setAttribute("class","add_to_cart");
            btn.addEventListener("click",function(){
            storproducts(el)
                    
           })

            img.src=el.image;
            name.innerText=el.name;
            price.innerText="RS:- "+ el.price;
            div.append(img,price,name,btn)
            document.querySelector("#groceries").append(div)
       
        })
    }
    let cart =JSON.parse(localStorage.getItem("cart_items")) || []
    function storproducts(el){
        cart.push(el)
        localStorage.setItem("cart_items",JSON.stringify(cart))
    }
    
