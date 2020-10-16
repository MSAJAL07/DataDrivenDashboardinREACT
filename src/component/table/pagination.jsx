import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Pagination = ({ postsPerPage, totalPage=100, gotoPage,currentPage, setPostsPerPage }) => {
  const pageNumbers = [];
const handleOnChange=(event) =>  setPostsPerPage(event.target.value);
if(currentPage > 2)  pageNumbers.push("<<");
if(currentPage-1 > 0) pageNumbers.push("<");
pageNumbers.push(currentPage);
if(currentPage < totalPage-1) pageNumbers.push(">");
if(totalPage !== currentPage ) pageNumbers.push(">>");




const res = pageNumbers.map(number => {
    if(typeof number === "number") {
        return(
            <nav>
            <ul className='pagination'>
            <li key={number} className='page-item'>
    <a onClick={() => gotoPage(number)} href='!#' className='page-link'>
      {number}
    </a>
  </li>
  </ul>
    </nav>
        )
    }
    else if(number === "<<"){
        return(
            <nav>
            <ul className='pagination'>
            <li key={1} className='page-item'>
    <a onClick={() => gotoPage(1)} href='!#' className='page-link'>
      {number}
    </a>
  </li>
  </ul>
    </nav>
        )
    }
    else if(number === "<")
    {
        return(
            <nav>
            <ul className='pagination'>
            <li key={currentPage-1} className='page-item'>
    <a onClick={() => gotoPage(currentPage-1)} href='!#' className='page-link'>
      {number}
    </a>
  </li>
  </ul>
    </nav>
        )
    }
    else if( number ===">"){
        return(
            <nav>
            <ul className='pagination'>
            <li key={currentPage+1} className='page-item'>
    <a onClick={() => gotoPage(currentPage+1)} href='!#' className='page-link'>
      {number}
    </a>
  </li>
  </ul>
    </nav>
        )
    }
    else if(number === ">>")
    {
        return(
            <nav>
            <ul className='pagination'>
            <li key={totalPage} className='page-item'>
    <a onClick={() => gotoPage(totalPage)} href='!#' className='page-link'>
      {number}
    </a>
  </li>
  </ul>
    </nav>
        )
    }
});
return(
  
<center>
<tr><td>Show</td> 
<td><div>&nbsp;</div></td>
<td>
<select onChange={handleOnChange} className="form-control" id="sel1">
        <option >10</option>
        <option >20</option>
        <option >50</option>
        <option >100</option>
      </select>
      </td>
      <td><div>&nbsp;</div></td>
      <td>entry</td>
      <td><div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></td>
      <td>
      <ul align="center" className='pagination'>{res}</ul> </td>
      </tr>
      </center>
)
};

export default Pagination;