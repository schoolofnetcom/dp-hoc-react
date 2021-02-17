import React from 'react';

function WrapHoc(Component) {
    /**
     * 
     * logica
     */

    const obj = {
        name: 'Leonan',
        age: 24
    };

    return function(props) {
        return <Component obj={obj} {...props} />
    }
}

export default WrapHoc;