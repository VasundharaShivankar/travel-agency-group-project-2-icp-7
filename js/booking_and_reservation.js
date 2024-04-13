function inc(){
    const quantityText = document.getElementById('quantity-text');
    let quantity = parseInt(quantityText.innerText);

    quantityText.innerText = ++quantity;
}
    
function dec(){
const quantityText = document.getElementById('quantity-text');
    let quantity = parseInt(quantityText.innerText);

   
    if(quantity>1)
    {
        quantityText.innerText = --quantity;

    }

else{
alert("you can' add less than one traveler");
}
}
function incre(){
    const quantityText = document.getElementById('quan-txt');
    let quantity = parseInt(quantityText.innerText);

    quantityText.innerText = ++quantity;
}
    
function decre(){
const quantityText = document.getElementById('quan-txt');
    let quantity = parseInt(quantityText.innerText);

   
    if(quantity>0)
    {
        quantityText.innerText = --quantity;

    }

else{
alert("you can' add less than zero child traveler");
}
}
