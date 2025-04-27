import type { Item } from "../../types/Item";

interface ItemCardProps {
  item: Item;
}

const ItemCard = ({ item }: ItemCardProps) => (
  <div className="border rounded p-4 shadow-sm">
    <h3 className="text-lg font-semibold">{item.title}</h3>
    <p className="mt-2 text-gray-700">{item.body}</p>
  </div>
);

export default ItemCard;
