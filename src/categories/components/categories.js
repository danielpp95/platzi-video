import React from 'react'
import Category from '@/categories/components/category'

function Categories (props) {
  return (
    <div>
      {
        props.categories.map((item)=>{
          return (
            <Category 
              key={item.id} 
              {...item} 
              handleOpenModal={props.handleOpenModal}
            />
          )
        })
      }
    </div>
  )
}

export default Categories