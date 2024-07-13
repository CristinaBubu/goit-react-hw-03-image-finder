import style from './Modal.module.css'
import PropTypes from 'prop-types';
import { Component } from 'react';

class Modal extends Component {

    onOverlayClick = (e) => {
        if (e.currentTarget === e.target) {
          this.props.onModalClose();
        }
      };

      onKeyDown = (e) => {
        if(e.keyCode === 27) {
            this.props.onModalClose();
        }
      }

    componentDidMount() {
        window.addEventListener('keydown', this.onKeyDown);
    };
    
      componentWillUnmount() {
        window.removeEventListener('keydown', this.onKeyDown);
    };
    
    
    render() {
        const {largeImageURL} = this.props;
        return (
            <div className={style.overlay} onClick={this.onOverlayClick}>            
                <div className={style.modal}>
                    <img src={largeImageURL} alt='' />
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    largeImageURL: PropTypes.any.isRequired,
    onModalClose: PropTypes.func.isRequired
}

export default Modal;