import styled from 'styled-components';

export const TableWrapper = styled.div`
  overflow-x: auto;
  width: 100%;
`;

export const Table = styled.table`
  table-layout: auto;
  width: 100%;
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse;
  min-width: 900px;
`;

export const Th = styled.th`
  text-align: left;
  padding: 0.75rem 1.25rem;
  border-color: rgb(236 239 241);
  text-transform: uppercase;
  border-style: solid;
  color: rgb(120 144 156);
  font-weight: 700;
  font-size: 1rem;
  min-width: 55px;
`;

export const Td = styled.td`
  padding: 0.75rem 1.25rem;
  border-color: rgb(236 239 241);
  color: rgb(84 110 122);
  font-weight: 600;
  border-style: solid;
  font-size: 0.75rem;
  line-height: 1rem;
`;
