import React from 'react'
import { Button } from 'reactstrap'

import 'styles/filters.css'

const Filters = () => {
  return (
    <div className='fil'>
            
            <div className='filter-button'>
                <a href="#" id="filter-title" className='fil-button'>All Product</a>
                <a href="#" className='fil-button'>T-Shirt</a>
                <a href="#" className='fil-button'>Hoodies</a>
                <a href="#" className='fil-button'>Jacket</a>
            </div>
            <div className="filter-show-button">
                <Button color='dark'>Show All</Button>
            </div>
        </div>
  )
}

export default Filters