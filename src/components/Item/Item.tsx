interface Props {
  name: string;
  price: number;
}

export const Item = ({ name, price }: Props) => {
  return (
    <div>
      <span>{name}</span>
      <span>{price}</span>
    </div>
  );
};
