import React from 'react'

const categories = [{name: 'Finance',slug: 'finance'},{name: 'Marketing',slug:'marketing'}, {name: 'Insurance',slug: 'insurance'}]

const Categories = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {categories.map((category, index) => (
        <abbr key={index} href={`/category/${category.slug}`}>
          <span className={`cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3`}>{category.name}</span>
        </abbr>
      ))}
    </div>
  )
}

export default Categories