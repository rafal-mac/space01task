import { ChangeEvent } from "react";

interface Props {
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar = ({ placeholder, value, onChange }: Props) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
