import React,{FC,ReactNode} from "react";
import styles from "./Modal.module.scss";
import { CardType } from "../Card";
import { CloseIconModal } from "../../assets/icons/CloseIconModal";

type ModalProps={
    isVisible:boolean;
     onClose:()=>void;
      children:ReactNode;
}

const Modal:FC<ModalProps>= ({isVisible, onClose, children})=>{
    return isVisible? (
       <div className={styles.moduleWraper}>
            <div className={styles.moduleFilling}>
                <div className={styles.closeIcon} onClick={onClose}>
                    <CloseIconModal/>
                </div>
                <div className={styles.infoContainer}>
                   {children}
                </div>
            </div>
        </div>
    ):null;
};

export default Modal;