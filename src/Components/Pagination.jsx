import React from "react";

 export default function Pagination({ currentPage, totalItems, itemsPerPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div style={{ marginTop: "10px" }}>
      <button disabled={currentPage===0} onClick={()=>onPageChange(currentPage-1)}>Prev</button>
      <span> Page {currentPage+1} of {totalPages} </span>
      <button disabled={currentPage+1 >= totalPages} onClick={()=>onPageChange(currentPage+1)}>Next</button>
    </div>
  );
}

