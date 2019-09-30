import DecreasingItem from "./DecreasingItem";

export default class Conjured extends DecreasingItem {
    updateQuality() {
        this.decreaseQuality();
        this.decreaseQuality();
    }
}