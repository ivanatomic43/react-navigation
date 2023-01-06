import Button from "../components/Button";
import Modal from "../components/Modal";
import { useState } from "react";

function ModalPage() {

    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = <div>
        <Button onClick={handleClose} primary>I accept</Button>
    </div>;

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>Here is an important agreement for you to accept.</p>
    </Modal>;

    return(
        <div className="relative">
            <Button primary onClick={handleClick}>Open Modal</Button>
            {showModal && modal}
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tellus orci. Fusce maximus varius ante, vel varius tellus elementum in. Morbi aliquam, risus ultrices auctor lacinia, metus mi accumsan massa, vel euismod eros nisi eget felis. Nam commodo lorem quis purus sodales, ut placerat purus feugiat. Cras tincidunt nec eros non elementum. Cras sollicitudin eleifend leo, a hendrerit neque iaculis eu. Nullam libero diam, bibendum in suscipit id, tempus eu purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo diam, dictum a est non, accumsan accumsan velit. Vestibulum a neque euismod, pharetra leo ac, auctor massa. Donec egestas lectus at diam dictum cursus.</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tellus orci. Fusce maximus varius ante, vel varius tellus elementum in. Morbi aliquam, risus ultrices auctor lacinia, metus mi accumsan massa, vel euismod eros nisi eget felis. Nam commodo lorem quis purus sodales, ut placerat purus feugiat. Cras tincidunt nec eros non elementum. Cras sollicitudin eleifend leo, a hendrerit neque iaculis eu. Nullam libero diam, bibendum in suscipit id, tempus eu purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo diam, dictum a est non, accumsan accumsan velit. Vestibulum a neque euismod, pharetra leo ac, auctor massa. Donec egestas lectus at diam dictum cursus.</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tellus orci. Fusce maximus varius ante, vel varius tellus elementum in. Morbi aliquam, risus ultrices auctor lacinia, metus mi accumsan massa, vel euismod eros nisi eget felis. Nam commodo lorem quis purus sodales, ut placerat purus feugiat. Cras tincidunt nec eros non elementum. Cras sollicitudin eleifend leo, a hendrerit neque iaculis eu. Nullam libero diam, bibendum in suscipit id, tempus eu purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo diam, dictum a est non, accumsan accumsan velit. Vestibulum a neque euismod, pharetra leo ac, auctor massa. Donec egestas lectus at diam dictum cursus.</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tellus orci. Fusce maximus varius ante, vel varius tellus elementum in. Morbi aliquam, risus ultrices auctor lacinia, metus mi accumsan massa, vel euismod eros nisi eget felis. Nam commodo lorem quis purus sodales, ut placerat purus feugiat. Cras tincidunt nec eros non elementum. Cras sollicitudin eleifend leo, a hendrerit neque iaculis eu. Nullam libero diam, bibendum in suscipit id, tempus eu purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo diam, dictum a est non, accumsan accumsan velit. Vestibulum a neque euismod, pharetra leo ac, auctor massa. Donec egestas lectus at diam dictum cursus.</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tellus orci. Fusce maximus varius ante, vel varius tellus elementum in. Morbi aliquam, risus ultrices auctor lacinia, metus mi accumsan massa, vel euismod eros nisi eget felis. Nam commodo lorem quis purus sodales, ut placerat purus feugiat. Cras tincidunt nec eros non elementum. Cras sollicitudin eleifend leo, a hendrerit neque iaculis eu. Nullam libero diam, bibendum in suscipit id, tempus eu purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo diam, dictum a est non, accumsan accumsan velit. Vestibulum a neque euismod, pharetra leo ac, auctor massa. Donec egestas lectus at diam dictum cursus.</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tellus orci. Fusce maximus varius ante, vel varius tellus elementum in. Morbi aliquam, risus ultrices auctor lacinia, metus mi accumsan massa, vel euismod eros nisi eget felis. Nam commodo lorem quis purus sodales, ut placerat purus feugiat. Cras tincidunt nec eros non elementum. Cras sollicitudin eleifend leo, a hendrerit neque iaculis eu. Nullam libero diam, bibendum in suscipit id, tempus eu purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo diam, dictum a est non, accumsan accumsan velit. Vestibulum a neque euismod, pharetra leo ac, auctor massa. Donec egestas lectus at diam dictum cursus.</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tellus orci. Fusce maximus varius ante, vel varius tellus elementum in. Morbi aliquam, risus ultrices auctor lacinia, metus mi accumsan massa, vel euismod eros nisi eget felis. Nam commodo lorem quis purus sodales, ut placerat purus feugiat. Cras tincidunt nec eros non elementum. Cras sollicitudin eleifend leo, a hendrerit neque iaculis eu. Nullam libero diam, bibendum in suscipit id, tempus eu purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo diam, dictum a est non, accumsan accumsan velit. Vestibulum a neque euismod, pharetra leo ac, auctor massa. Donec egestas lectus at diam dictum cursus.</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tellus orci. Fusce maximus varius ante, vel varius tellus elementum in. Morbi aliquam, risus ultrices auctor lacinia, metus mi accumsan massa, vel euismod eros nisi eget felis. Nam commodo lorem quis purus sodales, ut placerat purus feugiat. Cras tincidunt nec eros non elementum. Cras sollicitudin eleifend leo, a hendrerit neque iaculis eu. Nullam libero diam, bibendum in suscipit id, tempus eu purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo diam, dictum a est non, accumsan accumsan velit. Vestibulum a neque euismod, pharetra leo ac, auctor massa. Donec egestas lectus at diam dictum cursus.</p>
            
        </div>
    );
}

export default ModalPage;