import React from 'react';
import ReactPaginate from 'react-paginate';

import { PaginationContainer } from './styled';

interface Props {
  totalPage: number;
  setPage: (page: number) => void;
}

export const PagainationComponent: React.FC<Props> = ({
  totalPage,
  setPage,
}) => {
  const pageCount = Math.ceil(totalPage / 10);

  return (
    <PaginationContainer cy-data-id="pagination">
      <ReactPaginate
        previousLabel="Prev"
        nextLabel="Next"
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        onPageChange={(event) => setPage(event.selected + 1)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </PaginationContainer>
  );
};
