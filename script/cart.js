var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];
console.log(cartArr);
function displayData(items){
    document.querySelector("#cont").innerHTML= "";
    items.map(function(elem){
                var div = document.createElement("div");
            
                var image = document.createElement("img");
                image.setAttribute("src",elem.image);
                image.setAttribute("id","productimage");
            
                var title = document.createElement("p");
                title.innerText = elem.discription;
                title.setAttribute("id","title")
            
                var d = document.createElement("div");
                d.setAttribute("id","first");
                var d1 = document.createElement("div");
                var price = document.createElement("p");
                price.innerText = elem.price;
                price.setAttribute("class","price")
                d1.append(price);

                d.append(d1);
                div.append(image,title,d);
                document.querySelector("#cont").append(div);
    });
}

var total = cartArr.reduce(function(acc,item){
    return acc + item.price;
},0);

document.getElementById("total").textContent = `Total Amount of Cart: ₹${total}`


displayData(cartArr);