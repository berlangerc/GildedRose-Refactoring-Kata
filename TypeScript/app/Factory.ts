import BackStage from "./types/BackStage";
import DecreasingItem from "./types/DecreasingItem";
import ImprovingItem from "./types/ImprovingItem";
import Legendary from "./types/Legendary";
import Conjured from "./types/Conjured";

export default class ItemFactory {
    static makeItem({ name, sellIn, quality }) {
        switch (name) {
            case "Backstage passes to a TAFKAL80ETC concert":
                return new BackStage(name, sellIn, quality);
            case "Aged Brie":
                return new ImprovingItem(name, sellIn, quality);
            case "Sulfuras, Hand of Ragnaros":
                return new Legendary(name, sellIn, quality);
            case "Conjured":
                return new Conjured(name, sellIn, quality);
            default:
                return new DecreasingItem(name, sellIn, quality);
        }
    }
}