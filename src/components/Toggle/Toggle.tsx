interface Props {
  primaryText: string;
  secondaryText: string;
  value: boolean;
  onClick: () => void;
}

export const Toggle = ({
  primaryText,
  secondaryText,
  value,
  onClick,
}: Props) => {
  return (
    <button onClick={onClick}>{value ? primaryText : secondaryText}</button>
  );
};
