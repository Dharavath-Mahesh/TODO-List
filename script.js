
function getAndUpdate() {
    const tit = document.getElementById("title").value;
    const desc = document.getElementById("description").value;
    if (localStorage.getItem("itemsJson") == null) {
        arr = [];
        arr.push([tit, desc]);
        localStorage.setItem("itemsJson", JSON.stringify(arr));
    } else {
        arrStr = localStorage.getItem("itemsJson");
        arr = JSON.parse(arrStr);
        arr.push([tit, desc]);
        localStorage.setItem("itemsJson", JSON.stringify(arr));
    }
    update();
}
function update(){
    
    if(localStorage.getItem('itemsJson') == null){
        arr =[];
        localStorage.setItem('itemsJson', JSON.stringify(arr))
    }
    else{
        arrStr = localStorage.getItem('itemsJson');
        arr = JSON.parse(arrStr);        
    }
    let tab = document.getElementById("tableBody");
    let str = "";
    arr.forEach((element, index) => {
    str += `
        <tr>
        <td scope="row">${index + 1}</td>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-sm btn-primary" onClick="deleted(${index})">Delete</button></td></tr>`;
    });
    tab.innerHTML = str;
}
const add = document.getElementById("add");
add.addEventListener("click", getAndUpdate);
update();

function deleted(itemIndex){
    arrStr = localStorage.getItem('itemsJson');
    arr = JSON.parse(arrStr);
    arr.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(arr));
    update();

}
function clearStorage() {
    if(confirm('You want to clear items')){
        console.log('clearing storage');
        localStorage.clear();
        update();
    }    
}