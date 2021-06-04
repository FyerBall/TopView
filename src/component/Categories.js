import React from 'react'

function Categories({ filterItems, categories }) {
  return (
    <div className='categories'>
      {categories.map((cate, _id) => {
        return (
          <button
            type='button'
            key={_id}
            onClick={() => filterItems(cate)}
            className='categories-btn '
          >
            {cate}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
