import React from 'react';
import styles from "./SelestedPostModal.module.scss"
import Modal from '../../../components/Modal';
import Card from '../../../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { PostSelectors, setPostVisibility,setSelectedPost} from '../../../redux/reducers/postSlice';

import { CardSize } from '../../../components/Card/types';

const SelectedPostModal = () => {
    const dispatch = useDispatch();
    const isVisible = useSelector(PostSelectors.getVisibleSelectedModal);
    const selectedPost = useSelector(PostSelectors.getSelectedPost);
  
    const onClose = () => {
      dispatch(setSelectedPost(null));
      dispatch(setPostVisibility(false));
    };
    return (
      <Modal isVisible={isVisible} onClose={onClose}>
        {selectedPost ? (
          <Card card={selectedPost} size={CardSize.Large} />
        ) : null}
      </Modal>
    );
  };
export default SelectedPostModal;