import ItemList from "./ItemList";
import Button from "../atoms/Button";
import type { Item } from "../../types/Item";

interface ItemsSectionProps {
  items: Item[];
  onReload: () => void;
  isLoading: boolean;
}

const ItemsSection = ({ items, onReload, isLoading }: ItemsSectionProps) => (
  <section>
    <ItemList items={items} />
    <div className="mt-4">
      <Button onClick={onReload} disabled={isLoading}>
        Reload All Items
      </Button>
    </div>
  </section>
);

export default ItemsSection;
