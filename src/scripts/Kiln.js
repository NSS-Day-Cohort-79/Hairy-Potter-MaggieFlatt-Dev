export const firePottery = (potteryToFire, temperature) => {
    potteryToFire.fired = true

    if  (temperature > 2200) {
        potteryToFire.cracked = true
    } else {
        potteryToFire.cracked = false
    }

return potteryToFire
}