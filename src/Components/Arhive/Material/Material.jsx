import { EditMaterialModal } from 'Components/Arhive/EditMaterialModal';
import React, { Component } from 'react';

export class Material extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const {
      onDelete,
      onChange,
      item: { id, title, url },
    } = this.props;

    const { isModalOpen } = this.state;

    return (
      <>
        <p>
          <b>Title:</b> {title}
        </p>
        <img src={url} alt={url} width="250" />
        <br />
        <button type="button" onClick={() => onDelete(id)}>
          Delete
        </button>

        <button type="button" onClick={this.openModal}>
          Edit
        </button>

        {isModalOpen && (
          <EditMaterialModal
            onClose={this.closeModal}
            onChange={onChange}
            id={id}
          />
        )}
      </>
    );
  }
}
