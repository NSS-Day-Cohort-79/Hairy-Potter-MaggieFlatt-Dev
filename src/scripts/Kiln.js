//Create function called firePottery that adds the property of fired with the value of true. Also checks if the temperature is above 2200. If > 2200 assign property of cracked with the value of true. If temp is at OR below then assign property of cracked with value of false. Return augmented object.

export const firePottery = (potteryToFire, temperature) => {
    potteryToFire.fired = true

    if  (temperature > 2200) {
        potteryToFire.cracked = true
    } else {
        potteryToFire.cracked = false
    }

return potteryToFire
}