let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
//get total 
function getTotal(){
    if (price.value != ''){
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.background = '#040';
    }else{
        total.innerHTML = '';
        total.style.background = '#f10';
    }
}
// Initialisation dyal dataPro mn localStorage
let dataPro;

if (localStorage.getItem('product') !== null) {
    try {
        dataPro = JSON.parse(localStorage.getItem('product'));
        if (!Array.isArray(dataPro)) {
            dataPro = [];
        }
    } catch (error) {
        console.error("Error parsing localStorage data:", error);
        dataPro = [];
    }
} else {
    dataPro = [];
}

// Function bach nclear inputs ba3d l'ajout
function clearInputs() {
    title.value = "";
    price.value = "";
    taxes.value = "";
    ads.value = "";
    discount.value = "";
    total.innerHTML = "0"; 
    count.value = "";
    category.value = "";
}

// Event handler bach nzid produit jdid
submit.onclick = function () {
    if (!dataPro) { 
        dataPro = []; 
    }

    let newPro = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value
    };

    // Vérifier wach inputs makhdmin
    if (newPro.title !== "" && newPro.price !== "" && newPro.category !== "") {
        dataPro.push(newPro);
        localStorage.setItem('product', JSON.stringify(dataPro));
        
        // Appeler clearInputs() bach nms7 inputs
        clearInputs();
    } else {
        alert("⚠️ saisez les champs nécessaires ");
    }
};

//read 
//count 
//delete 
//update 
//search 
//clear data
