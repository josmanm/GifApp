import  { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Messi']);

    const onAddCategory = (newCategory) => {
        if (!categories.findIndex(category => category.toLowerCase() === newCategory.toLowerCase())) return;
        setCategories([newCategory, ...categories]);
    }

  return (
    <>
        {/* TITULA DE LA APP */}
        <h1>GifExpertApp</h1>
        {/* INPUT PARA LA BUSQUEDA */}
        <AddCategory 
            // setCategories = { setCategories }
            onNewCategory = { onAddCategory }
        />
        {
            categories.map( category => 
                (
                    <GifGrid 
                        key={category} 
                        category={category}
                    />
                )
            )
        }
    </>
  )
}
