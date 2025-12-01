// Define and export PotteryList function
// function must get the items to be sold from the PotteryCatalog.js module
// function must convert each object in array to an HTML representation string.
//function must then return a single string that contains ALL of the pottery HTML representation

export const PotteryList = (pottery) => {
    let potteryCatalog = ""

    for (const potteryObject of pottery) {
        potteryCatalog += `<section class="pottery" id="${potteryObject.id}">
            <h2 class="pottery__shape">${potteryObject.shape}</h2>
            <div class="pottery__properties">
            Item weighs ${potteryObject.weight} grams and is ${potteryObject.height} cm in height
            </div>
            <div class="pottery__price">Price is ${potteryObject.price}</div>
            </section>`
    }
    return potteryCatalog
}
 