// Creation of empty array to push objects in to be stored.
let items = []

// Creation of object normal way/ manually.
let object1 = {
    id: 1,
    name: 'Nike Shoe',
    description: 'This is better than the orginal',
    price: 800,
    // url: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e3d72728-4900-4e71-a4ea-1f323bb570d8/custom-nike-air-force-1-high-by-you-shoes.png'
}

// constructor function to create objects.
function Constructor(id, name, description, price, url){
    this.id = id,
    this.name = name,
    this.description = description,
    this.price = price,
    this.url = url
}

// Second item created using constructor function.
let item2 = new Constructor(2, 'Anothernike', 'This is better than the fake', 700, 'jsdc')

// pushing items/objects into empty array.
items.push(object1,item2)

// Sets array in Local storage.
localStorage.setItem('items',JSON.stringify(items))

// Sets the array from the local storage to array(items) in code.
items = JSON.parse(localStorage.getItem('items'))


let table = document.querySelector('table')


window.onload= function Tauha(){
    let products = items.map(function(item, index){
    console.log(item);
    console.log(index);
    return `
    <tr>
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>R${item.price}</td>
    <td>${item.description}</td>
    <td><img src='${item.url}'</td>
    <td><button>Edit</button></td>
    <td><button class ='delete' value ='${index}'>Delete</button></td>
    </tr>
    `
})

table.innerHTML = products.join('')
}
function favourite() {
    localStorage.setItem('items',JSON.stringify(items))

    items = JSON.parse(localStorage.getItem('items'))
}

let deleteButton = document.querySelector('.delete')

function remove(position){
    items.splice(position,1)
    favourite()
    window.onload()
}

table.addEventListener('click', function(){
    if(event.target.classList.contains('delete')){
        remove(event.target.value)
        // alert(event.target.value)
    }
})






// table.style. = "none"