import React from 'react'
import Pagination from 'react-bootstrap/Pagination';


function createPagination({page, setPage }) {
   
    const decrementPage = () => {
        //console.log(page)
        setPage(page-1);
}

    const incrementPage = () => {
        //console.log(page)
        setPage(page+1);
}
    
  return (
    <Pagination className='pagination'>
          <Pagination.Prev onClick={decrementPage}  />
      <Pagination.Next onClick={incrementPage} />
    </Pagination>
  );
}


export default createPagination;