import { css } from "@linaria/core";

interface Props {
  name: string;
  price: number;
}

export const Item = ({ name, price }: Props) => {
  return (
    <li className={itemContainer}>
      <span>{name}</span>
      <span>
        {new Intl.NumberFormat("en-GB", {
          style: "currency",
          currency: "GBP",
        }).format(price)}
      </span>
    </li>
  );
};

const itemContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: #f9f9f9;

  > span {
    color: #666;
    font-weight: bold;
  }
`;
