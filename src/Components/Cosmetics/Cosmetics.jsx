import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
// import { add } from '../../Utilities/Calculate';
// import add from '../../Utilities/Calculate';

const Cosmetics = () => {

    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])
    // const first=55;
    // const second=66;
    // const total=add(first,second);
    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            {/* <p>total:{total}</p> */}
            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic.id}
                    cosmetic={cosmetic}
                ></Cosmetic>)
            }

        </div>
    );
};

export default Cosmetics;