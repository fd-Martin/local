import React from 'react';
import { add, multiply } from '../../Utilities/Calculate';

const Shoes = () => {
    const first=12;
    const second=23;
    const total=multiply(first,second);
    const result=add(first,second);
    return (
        <div>
            <h2>This is shoes components</h2>
            <p>total:{total} & result:{result}</p>
            

        </div>
    );
};

export default Shoes;