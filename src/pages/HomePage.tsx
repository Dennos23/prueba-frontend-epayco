import React from "react";
import { useItems } from "../hooks/useItems";
import { useForm, SubmitHandler } from "react-hook-form";
import type { Item } from "../types/Item";
import { useAddItem } from "../hooks/useAdditem";

const HomePage: React.FC = () => {
  const { data: items, isLoading, error } = useItems();
  const { register, handleSubmit, reset } = useForm<Omit<Item, "id">>();
  const addItemMutation = useAddItem();

  const onSubmit: SubmitHandler<Omit<Item, "id">> = (data) => {
    addItemMutation.mutate(data);
    reset();
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <div>
      <h1>Add New Item</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title", { required: true })} placeholder="Title" />
        <textarea
          {...register("body", { required: true })}
          placeholder="Body"
        />
        <button type="submit">Add Item</button>
      </form>

      <h2>Items List</h2>
      <div>
        {items?.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
