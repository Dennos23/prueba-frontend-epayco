import ItemCard from "../molecules/ItemCard";
import type { Item } from "../../types/Item";

interface ItemListProps {
  items: Item[];
}

const ItemList = ({ items }: ItemListProps) => (
  <section>
    <h2 className="text-xl font-semibold mb-4">Items List</h2>
    <div className="space-y-4">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  </section>
);

export default ItemList;
