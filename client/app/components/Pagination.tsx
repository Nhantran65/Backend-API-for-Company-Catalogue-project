"use client";
const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: any) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex mt-6">
      <button
        className="px-4 py-2 rounded-l-md bg-blue-600 text-white"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </button>
      <div className="px-4 py-2 bg-white">
        {currentPage} / {totalPages}
      </div>
      <button
        className="px-4 py-2 rounded-r-md bg-blue-600 text-white"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;