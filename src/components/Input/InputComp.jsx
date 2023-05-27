import React, {Component} from 'react';
import {Input} from 'antd';


class InputComp extends Component {
    inputRef = React.createRef();

    componentDidMount() {
        this.inputRef.current.focus();
    }
    
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
        return(
            <div className="input-container">
                <Input ref={this.inputRef} onChange={(e) => this.handleInputChange(e)} value={this.props.InputText}
                       placeholder="Type to search..."/>
            </div>)
    }
}

export default InputComp;