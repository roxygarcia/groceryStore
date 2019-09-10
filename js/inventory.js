/* 
* TODO:
* [√] - Create a Schema; an Object with defined properties and types of what will be needed for each inventory item. REF: inventorySchema
* [√] - Create a few methods that can help with values based on data given. REF: discount, discountPrice
* [√] - Create a prototype (a copy from origin) that is based off the Inventory schema that way I can reuse it to make more than one produce. REF: addProduce
* [√] - Create a few variables that will use the prototype above to execute. do at least three; after provide an array that will hold them all. REF: cherry, lemon, corn; inventoryList - for the array
* [√] - Create a global createElement function that will do just that and add some params that i know will be useful.

* [] - CLASS WILL DO: Create Form function that will append to HTML to create the inventory that way(commented out the HTML in the index to help give you an idea)
* [] - CLASS WILL DO: Create an alert that they succesfully stored that info into the inventory
*/  

//hardcode inventory list. I will provide three for you, add the rest
const inventorySchema = [
    {
        organic: Boolean,
        img: String,
        produce: String,
        price: Number,
        sale: [ Boolean, {
            discountPercent: Number,
            salePrice: Number,
            savings: Number
        }],
        quantity: Number
    }
];

//This function provides the discount amount based off price and percent
const discount = function (price, percent) {
    return ((percent / 100) * price).toFixed(2);
}
//This functiont takes the discount amount and takes away from price to give you the discount price
const discountPrice = function (price, discountAmt) {
    const discountAmount = discount(price, discountAmt)
    return (price - discountAmount).toFixed(2) ;
}
//Created a prototype from the Schema so I can make new produce using those properties. super cool right!?
function addProduce(organic, image, produce, price, percent, quantity) {
    const newProduce = Object.create(inventorySchema);
    newProduce.organic = organic;
    newProduce.image = image;
    newProduce.produce = produce;
    newProduce.price = price.toFixed(2);
    newProduce.quantity = quantity;
    if(percent !== '') {
        newProduce.sale = true;
        newProduce.discountPercent = percent;
        newProduce.salePrice = discountPrice(price, percent);
        newProduce.savings = discount(price, percent);
    }
    return newProduce;
}
//I will make a few produce
const cherry = addProduce(true, '../img/001-cherry.png', 'Cherry', 2.90, 10, 5);
const banana = addProduce(true, '../img/026-bananas.png', 'Banana', 2.99, '', 6);
const mango = addProduce(false, '../img/014-mango.png', 'Mango', 1.08, '', 20);
//Throw all my produce into an array for a list
const inventoryList = [cherry, banana, mango];

// Make two methods, one responsible of making an element- REF: makeElement(), the other to create multiple attributes at my will - REF: makeAttributes()
function makeElement(element, elementId, elementClass, text) {
    const newElement = document.createElement(element);
    newElement.id = elementId;
    newElement.className = elementClass;
    newElement.innerText = text;
    return newElement;
}

const makeAttributes = function (element, ...attributes) {
    attributes.forEach(key => {
        element.setAttribute(key[0], key[1]);
    })
    return element;
}

//create a function that will create the layout for each list, but before I can do that, I should make a glabl createElement w/ needed info for repeated use

/*
Visualize:
a box that will have a heading tag for the Produce name, price, if its on sale or if not, box for the picture, and maybe a description?
ex:
|--------------------|
| |--| <-image       |
| |__| h4 - produce  |
| h5- price h5-org   |
|h5-sale?t:disc price|
| - savings          |
| - count/quant      |
| - description?     |
|____________________|
    
*/

function makeProduceCard(produce) {
    let discountPrice;
    let savings;

    const box = makeElement('div', '', 'col-md-8 col-md-offset-2 text-center box', '');
    const wrapper = makeElement('div', '', 'row', '');
    const li = makeElement('li', `produceItem${produce.produce}`, '', '');
    const image = makeElement('img', `${produce.produce.toLowerCase()}`, 'img-responsive col-md-5', '');
    makeAttributes(image, ['src', `${produce.image}`], ['alt', `An image of a ${produce.produce}`]);
    const produceName = makeElement('span', '', 'lead', produce.produce);
    const price = makeElement('h5', '', '', `Price: $${produce.price}`);
    if(produce.sale) {
        discountPrice = makeElement('h5', '', '', `Sale Price: $ ${produce.salePrice}`);
        savings = makeElement('h5', '', '', `Savings: $ ${produce.savings}`);
    } else {
        discountPrice = '';
        savings = '';
    }
    
    wrapper.append(image, produceName, price, discountPrice, savings);
    li.append(wrapper);
    box.appendChild(li);
    return box;
}

const addInventoryToDOM = function (list) {
    const container = document.getElementById('inventoryList');
    for($i = 0; $i < list.length; $i++) {
        
        container.appendChild(makeProduceCard(list[$i]));
    }
}
//Remember that array full of the produce I, you created? Well, now it serves here to loop through and append to the container. Done.
addInventoryToDOM(inventoryList);


