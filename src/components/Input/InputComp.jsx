import React, {Component} from 'react';
import {Input} from 'antd';


class InputComp extends Component {
    debounceTimer = null;

    handleInputChange = (e) => {
        clearTimeout(this.debounceTimer);
        const text = e.currentTarget.value;
        this.props.setInputText(text)
        this.debounceTimer = setTimeout(() => {
            this.props.getMoviesThunk(1, this.props.InputText)
        }, 500);
    }

    render() {
        return <Input onChange={(e)=>this.handleInputChange(e)} value={this.props.InputText} placeholder="Type to search..."/>
    }
}

export default InputComp;