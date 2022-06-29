import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';
import './description.css';

const Description = ({ closeModal, name, description }) => (
  <div className="description-modal">
    <div className="description-modal-content">
      <div className="description-modal-header">
        <h3 className="description-modal-title">{name}</h3>
        <AiOutlineClose className="close-modal" onClick={() => closeModal(false)} />
      </div>
      <p className="description-modal-text">{description}</p>
    </div>
  </div>
);

Description.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Description;