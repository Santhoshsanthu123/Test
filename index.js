// JavaScript source code
document.addEventListener('DOMContentLoaded', function
    () {
    fetch('http://localhost:5000/getAll')
        .then(response => response.json())
        .then(data => loadHTMLTable(data['data']));
    
});

const addBtn = document.querySelector('#add-productid-btn');
addBtn.onclick = function () {
    const ProductIdInput = document.querySelector('#ProductId-input');

    const ProductId = ProductIdInput.value;
    ProductIdInput.value = "";

    fetch('http://localhost:5000/insert', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ ProductId: ProductId })
    })
        .then(response => response.json())
        .then(data => insertRowIntoTable(data['data']));

}

function insertRowIntoTable(data){

}

function loadHTMLTable(data) {
    const table = document.querySelector('table tbody');

    //console.log(data);

    if (data.length === 0) {
        table.innerHTML = "<tr><td class='no-data' colspan ='5'>NO DATA</td></tr>";
    }
}