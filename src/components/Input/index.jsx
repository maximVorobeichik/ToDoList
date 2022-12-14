
import React from 'react';
import "./index.css"

class Input extends React.Component {



    render() {
        var { value, onChangee } = this.props;
        return (
            <input
                className='input'
                type="text"
                value={value}
                onChange={onChangee}
            />
        );
    }
}

export default Input;
