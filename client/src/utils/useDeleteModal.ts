import { useState } from 'react';

export const useDeleteModal = () => {
  const [show, setShow] = useState(false);

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  return { show, openModal, closeModal };
};
