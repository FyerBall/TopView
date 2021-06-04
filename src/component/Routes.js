import React from 'react'

function Routes({ routes }) {
  return (
    <div className='routes'>
      {routes.map((route) => {
        const { id, title, address, tags, busIcon, icon } = route
        return (
          <article key={id}>
            <div className='route__header'>
              {/* This could have its own component */}
              {busIcon ? (
                busIcon.map((icon, _id) => (
                  <img
                    key={_id}
                    src={icon}
                    alt={title}
                    className='route__icons'
                  />
                ))
              ) : (
                <img src={icon} alt={title} className='route__icons' />
              )}
              <div className='route__header--info'>
                <p className='route__title'>{title}</p>
                <span className='route__address'>{address}</span>
              </div>
            </div>

            {tags && (
              <ul
                className={
                  tags.length <= 2 ? 'route__tags-flex' : 'route__tags'
                }
              >
                {/* This could have its own component */}
                {tags.map((tag, _id) => (
                  <li
                    className='route__tag'
                    key={_id}
                    style={{ backgroundColor: tag.color }}
                  >
                    {tag.text}
                  </li>
                ))}
              </ul>
            )}
            <hr />
          </article>
        )
      })}
    </div>
  )
}

export default Routes
