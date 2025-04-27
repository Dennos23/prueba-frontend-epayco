import {
  UseFormRegister,
  UseFormHandleSubmit,
  SubmitHandler,
} from "react-hook-form";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Textarea from "../atoms/TextArea";
import type { Item } from "../../types/Item";

interface ItemFormProps {
  register: UseFormRegister<Omit<Item, "id">>;
  handleSubmit: UseFormHandleSubmit<Omit<Item, "id">>;
  onSubmit: SubmitHandler<Omit<Item, "id">>;
}

const ItemForm = ({ register, handleSubmit, onSubmit }: ItemFormProps) => (
  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
    <Input {...register("title", { required: true })} placeholder="Title" />
    <Textarea {...register("body", { required: true })} placeholder="Body" />
    <Button type="submit">Add Item</Button>
  </form>
);

export default ItemForm;
