// Create variable with value of empty array to hold pottery that will be sold. DO NOT EXPORT. 

// Create function called toSellOrNotToSell with potteryObject as parameter. If weight is >= 6 add price property with value of 40. If potteryObject weight is < 6 assign price property with value of 20. HOWEVER, if potteryObject is cracked, do NOT add price property. If pottery is NOT cracked add potteryObject to PotteryToSell. Return augmented object. 

//Define and export function called usePottery that returns a copy of potteryToSell.

const potteryToSell = []

export const toSellOrNotToSell = (potteryObject) => {
    if (potteryObject.cracked === false) {
        if (potteryObject.weight >= 6) {
            potteryObject.price = 40
            potteryToSell.push(potteryObject)
         } else {
            potteryObject.price = 20
            potteryToSell.push(potteryObject)
        }
    }  
    // Return augmented potteryObject
    return potteryObject 
}

export const usePottery = () => structuredClone(potteryToSell)