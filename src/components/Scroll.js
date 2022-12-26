import React from 'react';

const Scroll = (props) => {
    return (
        <div style = {{overflowY: 'scroll', border:'1px solid black', height:'800px'}}>
            {props.children}
            {/* props.children implies CardList. eslai div ma halera.
                style vitra css ko scroll wala haleko.[css halna double curly braces chahinxa
                cuz single curly braces means javascript] */}
        </div>

    );
};
export default Scroll;