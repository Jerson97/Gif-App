import React, { useState } from 'react';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Naruto Shippuden', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch', 'Naruto Shippuden', 'Dragon Ball']);

    const handleAdd = () => {
        // categories.push('Baki');
        setCategories( [...categories, 'Baki']);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <hr />

            <button onClick={handleAdd}>Agregar</button>

            <ol>
                {
                    categories.map( category => {
                        return <li key={ category }> {category} </li>
                    })
                }
            </ol>

        </>
    );
};

export default GifExpertApp;