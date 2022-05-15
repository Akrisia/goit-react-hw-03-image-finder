import s from './Searchbar.module.css';
import { Component } from "react";
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
    state = {
        query: '',
    };

    handleChange = event => {
        const { value } = event.currentTarget;
        this.setState({ query: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({ query: '' });
    };

    render() {
        const { query } = this.state;
        return (
            <header className={s.searchbar}>
                <form className={s.form} onSubmit={this.handleSubmit}>
                    <button type="submit" className={s.button}>
                        <span className={s.label}>Search</span>
                    </button>
                    <input
                        className={s.input}
                        type="text"
                        name="query"
                        value={query}
                        onChange={this.handleChange}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired
};