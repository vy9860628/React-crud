import React from 'react'

function Header() {
  return (
    <div className='box'>
    <nav>
        <ul>
            <li><button className='btn btn-danger'><a href='#createData'>createData</a></button></li>
            <li><button className='btn btn-danger'><a href='#showData'>showData</a></button></li>
            <li><button className='btn btn-danger'><a href='#editData'>editData</a></button></li>
        </ul>
    </nav>
    </div>
  )
}

export default Header