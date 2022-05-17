import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends PureComponent {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    };

    handleKeyDown = (event) => {
        event.code === 'Escape' && this.props.closeModal();
    };

    handleOverlayClick = (event) => {
        event.currentTarget === event.target && this.props.closeModal();
    };

    render() {
        return createPortal (
            <div className={s.overlay} onClick={this.handleOverlayClick}>
                <div className={s.modal}>
                    {this.props.children}
                </div>
            </div>,
            modalRoot
        )
    }
};

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired
};