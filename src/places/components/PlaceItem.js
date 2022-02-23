import { useState } from 'react';
import { Card } from '../../shared/components/elements/Card';
import { Map } from '../../shared/components/elements/Map';
import { Modal } from '../../shared/components/elements/Modal';
import { Button } from '../../shared/components/forms/Button';
import './PlaceItem.css';

export const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleOpenMap = () => {
    setShowMap(true);
  };

  const handleCloseMap = () => {
    setShowMap(false);
  };

  const handleShowConfirmation = () => {
    setShowConfirmation(true);
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
  };

  const handleConfirmDelete = () => {
    console.log('Deleting...');
    handleCloseConfirmation();
  };

  const footer = <Button onClick={handleCloseMap}>CLOSE</Button>;

  return (
    <>
      <Modal
        show={showMap}
        header={props.address}
        footer={footer}
        contentClass='place-item__modal-content'
        footerClass='place-item__modal-actions'
        onCancel={handleCloseMap}
      >
        <div className='map-container'>
          <Map center={props.location} zoom={16} className='' />
        </div>
      </Modal>

      <Modal
        show={showConfirmation}
        header='Are you sure?'
        footer={
          <>
            <Button inverse onClick={handleCloseConfirmation}>
              CANCEL
            </Button>
            <Button danger onClick={handleConfirmDelete}>
              DELETE
            </Button>
          </>
        }
        footerClass='place-item__modal-actions'
        onCancel={handleCloseConfirmation}
      >
        <p>
          Do you want to delete this place? Please note that it can't be undone
          thereafter.
        </p>
      </Modal>

      <li className='place-item'>
        <Card className='place-item__content'>
          <div className='place-item__image'>
            <img src={props.image} alt={props.title} />
          </div>
          <div className='place-item__info'>
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className='place-item__actions'>
            <Button inverse onClick={handleOpenMap}>
              VIEW ON MAP
            </Button>
            <Button to={`/places-edit/${props.id}`}>EDIT</Button>
            <Button danger onClick={handleShowConfirmation}>
              DELETE
            </Button>
          </div>
        </Card>
      </li>
    </>
  );
};
