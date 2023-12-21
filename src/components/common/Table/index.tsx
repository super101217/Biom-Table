import { Rows } from 'types';
import { Table, TableWrapper, Td, Th } from './styled';

import { convertRelativeAbundance } from 'utils';

interface Props {
  list: Rows[];
  data: number[][];
  level: number;
  curPage: number;
}

export const TableComponent: React.FC<Props> = ({
  list,
  level,
  data,
  curPage,
}) => {
  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Tax ID</Th>
            <Th>Abundance score</Th>
            <Th>Relative abundance</Th>
            <Th>Unique matches frequency</Th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((item, index) => (
              <tr key={index} cy-data-id="data-row">
                <Td>{item.metadata.lineage[level].name}</Td>
                <Td>{item.metadata.lineage[level].tax_id}</Td>
                <Td>
                  {
                    data.slice(
                      3 * (curPage * 10 + index),
                      3 * (curPage * 10 + index) + 3
                    )[1][2]
                  }
                </Td>
                <Td>
                  {convertRelativeAbundance(
                    data.slice(
                      3 * (curPage * 10 + index),
                      3 * (curPage * 10 + index) + 3
                    )[0][2]
                  )}
                </Td>
                <Td>
                  {
                    data.slice(
                      3 * (curPage * 10 + index),
                      3 * (curPage * 10 + index) + 3
                    )[2][2]
                  }
                </Td>
              </tr>
            ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};
