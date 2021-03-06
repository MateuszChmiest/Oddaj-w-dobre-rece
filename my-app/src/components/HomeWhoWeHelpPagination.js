import React from 'react'

const HomeWhoWeHelpPagination = (props) => {

const {foundation,paginate, totalFoundations} = props;

const pageNumbers = [];

for(let i = 1; i <= Math.ceil(totalFoundations / foundation); i++) {
    pageNumbers.push(i)

    //TODO return new Array(Math.ceil(totalFoundations / foundation)).fill(null).map((_,i) => {<li></li>})
}



  return (
    <nav>
        <ul className='pagination'>
            {pageNumbers.map(number => (
                <li key={number} className="pagination__item" onClick={() => paginate(number)}>
                    {number}
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default HomeWhoWeHelpPagination;