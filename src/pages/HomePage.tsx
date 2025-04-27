import React from "react";
import { useItems } from "../hooks/useItems";
import { useForm } from "react-hook-form";
import type { Item } from "../types/Item";

import HomeTemplate from "../components/templates/HomeTemplate";
import AddItemSection from "../components/organisms/AddItemSection";
import ItemList from "../components/organisms/ItemList";
import { useAddItem } from "../hooks/useAdditem";

const HomePage: React.FC = () => {
  const {
    data: items = [],
    isLoading: loadingItems,
    error: itemsError,
  } = useItems();
  const { register, handleSubmit, reset } = useForm<Omit<Item, "id">>();
  const {
    mutate: addItem,
    isPending: adding,
    isError: addError,
    error,
  } = useAddItem();

  const onSubmit = (data: Omit<Item, "id">) => {
    addItem(data);
    reset();
  };

  return (
    <HomeTemplate>
      <AddItemSection
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        isLoading={adding}
        isError={addError}
        error={error as Error}
      />

      {loadingItems ? (
        <div>Loading…</div>
      ) : itemsError ? (
        <div>Error: {(itemsError as Error).message}</div>
      ) : (
        <ItemList items={items} />
      )}
    </HomeTemplate>
  );
};

export default HomePage;
