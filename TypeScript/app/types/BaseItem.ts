import Item from "./Item";

export default abstract class BaseItem extends Item {
    abstract processUpdate(): void;
}
