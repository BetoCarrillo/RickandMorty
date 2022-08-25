import Pagination from 'react-bootstrap/Pagination';



function createPagination({page, setPage, fetchData }) {
   
    const decrementPage = () => {
        //console.log(page)
      setPage(page - 1);
}

    const incrementPage = () => {
        //console.log(page)
      setPage(page + 1);
      
    }
  
  return (
    <Pagination className='pagination'>
      {page>1 ? 
<Pagination.Prev onClick={decrementPage}  /> : <Pagination/>
      }
        {page<42 ? 
<Pagination.Next onClick={incrementPage}  /> : <Pagination/>
      }
   
    </Pagination>
  );
}


export default createPagination;