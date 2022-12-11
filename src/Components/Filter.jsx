import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

export const Filter = () => {
  const [SearchParams, setSearchParams] = useSearchParams()
 const initialCategory = SearchParams.getAll("category");
 console.log("initailcategory", initialCategory)

 const [category, setCategory] = useState(initialCategory || []);


const handleFiltercheckBox = (e)=>{
  const newCategory = [...category];

  if(newCategory.includes(e.target.value)){
    // remove it
    newCategory.splice(newCategory.indexOf(e.target.value), 1)
  }else{
    newCategory.push(e.target.value)
  }
setCategory(newCategory);
  console.log(newCategory)
}
useEffect(()=>{
let params = {};
params.category = category;
setSearchParams(params)

}, [category, setSearchParams])

  return (
    <div>
      <h3>Filter Component</h3>
      <div>
        <div>
          <input type="checkbox" 
          checked = {category.includes("Novel")}
          value="Novel" onChange={handleFiltercheckBox} />
          <label htmlFor="">Novel</label>
        </div>
        <div>
        <input type="checkbox" value={"Motivational"}
        checked = {category.includes("Motivational")}
        onChange={handleFiltercheckBox} />
          <label htmlFor="">Motivation</label>
        </div>
        <div>
        <input type="checkbox" value={"Thriller"}
        checked = {category.includes("Thriller")}
        onChange={handleFiltercheckBox} />
          <label htmlFor="">Thriller</label>
        
        </div>
      </div>
    </div>
  )
}
