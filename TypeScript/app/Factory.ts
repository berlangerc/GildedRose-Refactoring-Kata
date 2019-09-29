import { BaseItem } from "./types/BaseItem";
import BackStage from "./types/BackStage";
import DecreasingItem from "./types/DecreasingItem";
import { Item } from "./gilded-rose";
import ImprovingItem from "./types/ImprovingItem";
import Legendary from "./types/Legendary";

export interface IItemHash {
    [name: string]: any;
}

const itemHash: IItemHash = {}

itemHash["Backstage passes to a TAFKAL80ETC concert"] = BackStage;
itemHash["Aged Brie"] = ImprovingItem;
itemHash["Sulfuras, Hand of Ragnaros"] = Legendary;

export default class ItemFactory {
    static makeItem({ name, sellIn, quality }: Item): BaseItem {
        const itemConstructor = itemHash[name];

        if (!itemConstructor) {
            return new DecreasingItem(name, sellIn, quality);
        }
        return new itemConstructor(name, sellIn, quality);
    }
}