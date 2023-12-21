import React from 'react';
import { Label, SelectBox, SelectGroup } from './styled';

interface Props {
  list: string[];
  level: number;
  label: string;
  onChangeFn: (arg: number) => void;
}

export const SelectboxComponent: React.FC<Props> = ({
  list,
  level,
  label,
  onChangeFn,
}) => {
  return (
    <SelectGroup>
      <Label>{label}:</Label>
      <SelectBox
        cy-data-id="select-box"
        value={level}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          onChangeFn(+e.target.value)
        }
      >
        {list.map((item, index) => (
          <option value={index} key={index}>
            {item}
          </option>
        ))}
      </SelectBox>
    </SelectGroup>
  );
};
