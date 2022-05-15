import { PureComponent } from 'react';
import s from './Button.module.css';
import PropTypes from 'prop-types';

export default class Button extends PureComponent {
    state = {
        page: this.props.page,
    };

    render() {
        return (
            <button type="button" className={s.button} onClick={() => {
                this.setState({ page: this.state.page + 1 });
                this.props.onLoadMore(this.state);
            }}>
                Load more
            </button>
        )
    }
};

Button.propTypes = {
    page: PropTypes.number.isRequired
};

