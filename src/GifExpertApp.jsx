import { useState } from "react"
import { AddCategory , GifGrid} from "./components"


export const GifExpertApp = () => {

  const [categories, setcategories] = useState(['One punch'])

  const onAddCategory = ( newCategory ) =>{

    // categories.push(newCategory)

    if( categories.includes(newCategory)) return;

    setcategories([newCategory,...categories])
    console.log( newCategory )
  }
  console.log( categories );
  
  return (
    <>


    <h1>GifExpert</h1>

    <AddCategory 
    onNewCategory={ (value) => onAddCategory(value) }
    // setcategories={ setcategories }
    />


  
      {
        categories.map( ( category ) => (
        <GifGrid 
                key={category} 
                category={category} />
        ))
      }
   
    </>
  )
}
