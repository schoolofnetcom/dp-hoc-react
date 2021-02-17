import React from 'react';
import Hoc from './Hoc';

const Header = (props) => {
    if (props.obj) {
        return <strong>Object exists, wrapped!</strong>
    } else {
        return <p>Object do not exists.</p>
    }
}

const WrappedHeader = Hoc(Header);

export { Header, WrappedHeader } ;