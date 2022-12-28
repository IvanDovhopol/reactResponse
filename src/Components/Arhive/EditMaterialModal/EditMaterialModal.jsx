import Modal from 'react-modal';
import { Btn } from 'Components/GlobalStyle.styled';

const modalStyles = {
  content: {
    display: 'flex',
    gap: '50px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const EditMaterialModal = ({ onChange, onClose, id }) => {
  const handleUpdate = () => {
    onChange({
      id,
      title: Date.now(),
      url: 'https://cdn.pixabay.com/photo/2019/10/23/20/52/table-game-4572818_960_720.jpg',
    });

    onClose();
  };

  return (
    <Modal isOpen onRequestClose={onClose} style={modalStyles}>
      <Btn onClick={handleUpdate}>Update</Btn>
      <Btn type="button" onClick={onClose}>
        Close
      </Btn>
    </Modal>
  );
};
