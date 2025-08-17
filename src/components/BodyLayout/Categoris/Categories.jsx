import React, { use } from 'react'
import { NavLink } from 'react-router';
const categoryPromise = fetch("/public/categories.json").then(res=>res.json());
const Categories = () => {
    const categories = use(categoryPromise)
    console.log(categoryPromise)
  return (

    <div>
        <h2>All Categories</h2>
        <div className='grid grid-cols-1 mt-5 gap-3'>
            {categories.map(category=> <NavLink  
            className={"btn bg-base-100 border-0 hover:bg-base-200"}
             key={category.id}
             to={`/category/${category.id}`}>{category.name}</NavLink>)}
        </div>
    </div>
  )
}

export default Categories