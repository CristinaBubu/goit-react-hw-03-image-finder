import style from './SearchBar.module.css';
import PropTypes from "prop-types";
import { Component } from 'react';

class SearchBar extends Component {
    state = {
        inputValue: ''
    }

    handleFormInput = (e) => {
        this.setState({inputValue: e.target.value})
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.inputValue)
    };

    resetForm = () => {
        this.setState({inputValue: ''})
    };

    render () {
        return (
            <header className={style.searchbar}>
                <form className={style.searchform} onSubmit={this.handleFormSubmit}>
                    <button type="submit" className={style.searchform_button} >
                        <span className="button-label">🔍</span>
                    </button>
    
                    <input
                        className={style.searchform_input}
                        value={this.state.inputValue}
                        onChange={this.handleFormInput}
                        type="text"
                        autoComplete="off"
                        name="query"
                        autoFocus
                        placeholder="Search images"
                    />
                </form>
            </header>
        )
    }
    }

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default SearchBar;