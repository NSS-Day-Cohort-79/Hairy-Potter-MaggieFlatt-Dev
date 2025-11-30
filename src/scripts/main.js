// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js"

// Make 5 pieces of pottery at the wheel

const mug = makePottery("mug", 1, 4);

const platter = makePottery("platter", 6, 7);

const bowl = makePottery("bowl", 4, 5);

const goblet = makePottery("goblet", 3, 3);

const plate = makePottery("plate", 4, 4);

// Fire each piece of pottery in the kiln

const firedMug = firePottery(mug, 1987);
const firedPlatter = firePottery(platter, 2200);
const firedBowl = firePottery(bowl, 2000);
const firedGoblet = firePottery(goblet, 2275);
const firedPlate = firePottery(plate, 1875);

// Determine which ones should be sold, and their price
toSellOrNotToSell(firedMug)
toSellOrNotToSell(firedPlatter)
toSellOrNotToSell(firedBowl)
toSellOrNotToSell(firedGoblet)
toSellOrNotToSell(firedPlate)

const usedPottery = usePottery();
console.log(usedPottery)

// Invoke the component function that renders the HTML list

