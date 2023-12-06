import React from 'react';
import Aside from '../../../Components/Shared/Aside';
import WorkInProgressPage from '../../../Components/Shared/WorkInProgressPage';
import Modal from '../../../Components/Shared/Modal';
import { useModalContext } from '../../../Components/Contexts';

const Profile = () => {
  const { modalState, closeModal } = useModalContext();
  return (
    <>
      <Aside page={'home'} />
      {modalState.isOpen && (
        <Modal description={modalState.description} isOpen={modalState.isOpen} close={closeModal} />
      )}
      <WorkInProgressPage />
    </>
  );
};

export default Profile;
