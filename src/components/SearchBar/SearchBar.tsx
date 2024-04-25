import { css } from "@linaria/core";
import { ChangeEvent } from "react";

interface Props {
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar = ({ placeholder, value, onChange }: Props) => {
  return (
    <input
      className={searchInput}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

const searchInput = css`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;
