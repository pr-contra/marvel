import React, { useMemo } from 'react';
import {
  BiLeftArrowAlt,
  BiRightArrowAlt,
  BiArrowToLeft,
  BiArrowToRight,
} from 'react-icons/bi';
import '../../styles/Pagination/index.css';

type PaginationProps = {
  itemsPerPage: number;
  total?: number;
  page: number;
  setPage: (page: number) => void;
};

const Pagination = ({
  itemsPerPage,
  total,
  page,
  setPage,
}: PaginationProps) => {
  const currentPage = page + 1;
  const totalItems = total || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pageInfo = useMemo(
    () => `${currentPage} of ${totalPages}`,
    [currentPage, totalPages],
  );
  const prevPage = useMemo(() => page - 1, [page]);
  const nextPage = useMemo(() => page + 1, [page]);
  const lastPage = useMemo(() => totalPages - 1, [totalPages]);
  const isFirstPage = useMemo(() => page === 0, [page]);
  const isLastPage = useMemo(() => page === lastPage, [page, lastPage]);

  return (
    <nav className="pagination">
      <button
        className="pagination__button"
        onClick={() => setPage(0)}
        disabled={isFirstPage}
      >
        <BiArrowToLeft size={20} />
      </button>
      <button
        className="pagination__button"
        onClick={() => setPage(prevPage)}
        disabled={isFirstPage}
      >
        <BiLeftArrowAlt size={20} />
      </button>
      <p>{pageInfo}</p>
      <button
        className="pagination__button"
        onClick={() => setPage(nextPage)}
        disabled={isLastPage}
      >
        <BiRightArrowAlt size={20} />
      </button>
      <button
        className="pagination__button"
        onClick={() => setPage(lastPage)}
        disabled={isLastPage}
      >
        <BiArrowToRight size={20} />
      </button>
    </nav>
  );
};

export default Pagination;
