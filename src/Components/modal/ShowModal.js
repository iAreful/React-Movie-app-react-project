/** @format */

import React, { useState } from "react";
import { Modal } from "./Modal";

// import Footer from "./Footer";
function ShowModal() {
	const setText = "Every moment is an experience. ";
	const [showModal, setShowModal] = useState(true);
	const handleOnClose = () => {
		setShowModal(false);
	};
	return <Modal text={setText} show={showModal} onClose={handleOnClose} />;
}

export default ShowModal;
