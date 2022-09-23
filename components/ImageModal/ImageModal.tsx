import { useState } from "react";
import Modal from "../Modal/Modal";

type ImageModalProps = {
    imgSrc: string;
}

const ImageModal = ({imgSrc}: ImageModalProps) => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="im-image">
            <div className="im-toggle" >
                <img src={imgSrc} alt="" />
            </div>
            <Modal
                open={openModal}
                imgSrc={imgSrc}
            />
        </div>
    )
}

export default ImageModal;