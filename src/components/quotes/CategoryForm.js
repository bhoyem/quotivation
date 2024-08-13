import React from "react";
import { Filter } from "react-feather";

function CategoryForm({ categories, category }) {
    // console.log(categories);

    return (
        <div className='category-form'>
            <form className='category-filter'>
                <Filter />
                <label htmlFor='category'>Filter Quotes:</label>
                <select id='category' name='category' value={category}>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </form>
        </div>
    );
};


export default CategoryForm;