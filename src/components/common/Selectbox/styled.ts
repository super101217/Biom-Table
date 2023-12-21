import styled from 'styled-components';

export const SelectGroup = styled.div`
  display: flex;
  gap: 10px;
  line-height: 1.5;
  font-weight: 500;
  font-size: 1rem;
  align-items: center;
`;

export const Label = styled.label`
  --tw-text-opacity: 1;
  color: rgb(38 50 56 / var(--tw-text-opacity));
  -webkit-font-smoothing: antialiased;
`;

export const SelectBox = styled.select`
  border-color: rgb(176 190 197);
  font-weight: 400;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
  outline-width: 0;
  outline-style: solid;
  --tw-text-opacity: 1;
  font-family: Roboto, sans-serif;
  padding: 0.75rem;
  border-radius: 0.375rem;
  color: rgb(69 90 100 / var(--tw-text-opacity));
  text-transform: uppercase;
  &:focus {
    border-color: rgb(33 33 33) !important;
    border-width: 2px;
  }
`;
