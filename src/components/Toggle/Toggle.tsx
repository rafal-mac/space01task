import { css } from "@linaria/core";

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
    <button className={toggle} onClick={onClick}>
      {value ? primaryText : secondaryText}
    </button>
  );
};

const toggle = css`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
  white-space: nowrap;

  &:hover {
    background-color: #0056b3;
  }
`;
