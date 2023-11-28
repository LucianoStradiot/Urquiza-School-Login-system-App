import React, { useEffect, useState } from 'react';
import styles from './modal.module.css';
import Button from '../Button';
import { BiErrorAlt } from 'react-icons/bi';

/**This component is used by passing the properties of title for the title, description for the description, isOpen to open the modal, confirmBtn for the confirm or accept button, denyBtn for the cancel or exit button, onClick which is what suits it to indicate to the confirm button the action you want to perform and chooseModal to determine whether to use a modal that requires a confirmation or a modal that shows a text that disappears after 5 seconds */

const Modal = ({
  title,
  description,
  isOpen,
  confirmBtn,
  denyBtn,
  chooseModal,
  close,
  onClick
}) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    let timer;
    if (!chooseModal && isOpen) {
      timer = setTimeout(() => {
        setIsFadingOut(false);
        setTimeout(() => {
          close();
        }, 500);
      }, 4000);
    }
    setIsFadingOut(true);

    return () => {
      clearTimeout(timer);
    };
  }, [close]);

  return isOpen ? (
    chooseModal ? (
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <div className={styles.logoContainer}>
            <BiErrorAlt className={styles.icon} />
          </div>
          <div className={styles.title}>{title.toUpperCase()}</div>
          <div className={styles.subTitle}>{description}</div>
          <div className={styles.btnsContainer}>
            <Button type="cancel" text={denyBtn} onClick={close} />
            <Button type="submit" text={confirmBtn} onClick={onClick} />
          </div>
        </div>
      </div>
    ) : (
      <>
        <div className={styles.containerSelfClose}>
          {sessionStorage.getItem('role') === 'DS' ? (
            <div
              className={`${
                !isFadingOut
                  ? `${styles.subContainerSelfClose} ${styles.subContainerSelfCloseDs}`
                  : `${styles.subContainerOpen} ${styles.subContainerOpenDs}`
              }`}
            >
              <div className={styles.descriptionSelfClose}>{description}</div>
              <Button type="x" text={'X'} onClick={close} />
            </div>
          ) : sessionStorage.getItem('role') === 'AF' ? (
            <div
              className={
                !isFadingOut
                  ? `${styles.subContainerSelfClose} ${styles.subContainerSelfCloseAf}`
                  : `${styles.subContainerOpen} ${styles.subContainerOpenAf}`
              }
            >
              <div className={styles.descriptionSelfClose}>{description}</div>
              <Button type="x" text={'X'} onClick={close} />
            </div>
          ) : sessionStorage.getItem('role') === 'ITI' ? (
            <div
              className={
                !isFadingOut
                  ? `${styles.subContainerSelfClose} ${styles.subContainerSelfCloseIti}`
                  : `${styles.subContainerOpen} ${styles.subContainerOpenIti}`
              }
            >
              <div className={styles.descriptionSelfClose}>{description}</div>
              <Button type="x" text={'X'} onClick={close} />
            </div>
          ) : (
            <div className={!isFadingOut ? styles.subContainerSelfClose : styles.subContainerOpen}>
              <div className={styles.descriptionSelfClose}>{description}</div>
              <Button type="x" text={'X'} onClick={close} />
            </div>
          )}
        </div>
      </>
    )
  ) : null;
};

export default Modal;
