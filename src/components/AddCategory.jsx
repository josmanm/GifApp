import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const preventDefault = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1 ) return;

        // setCategories ( categories => [ inputValue, ...categories] );
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={preventDefault}>
            <input 
                type="text"
                placeholder="Buscar..."
                value={inputValue}
                onChange = {onInputChange}
            />
        </form>
    )
}
