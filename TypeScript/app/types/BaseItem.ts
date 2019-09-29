import { Item } from "../gilded-rose";

export abstract class BaseItem extends Item {
    abstract update(): void;
}
