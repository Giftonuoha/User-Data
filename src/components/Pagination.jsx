import React from "react";

const Pagination = ({ totalUsers, usersPerPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalUsers / usersPerPage);

  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={currentPage === index + 1 ? "active" : ""}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

