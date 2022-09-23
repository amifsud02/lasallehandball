import Image from 'next/image'

type ModalProps = {
    open: boolean;
    imgSrc: string;
}

const Modal =  ({open, imgSrc}: ModalProps) => {
    if(!open) return null;
    return (
        <div className="modal">
            <div className="modal-content">
                <img
                    src={imgSrc}
                    alt="Test Data"
                />
            </div>
        </div>
    )
}

export default Modal;