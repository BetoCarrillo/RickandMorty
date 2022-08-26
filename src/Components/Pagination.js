import Pagination from 'react-bootstrap/Pagination';

function createPagination({page, setPage, maxpages, setMaxpages}) {

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
<Pagination.Prev onClick={decrementPage} /> : ("")
      }
        { page < maxpages ? 
<Pagination.Next onClick={incrementPage} /> :  ("")
      }
  </Pagination>
  );
}

export default createPagination;