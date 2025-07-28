import React from "react";
import { Modal } from "react-bootstrap";

export const PDFModal = ({ show, onHide, pdfPath, title }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
      contentClassName="pdf-modal-content"
    >
      <Modal.Header closeButton className="pdf-modal-header">
        <Modal.Title style={{ color: '#fff' }}>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="pdf-modal-body">
        <div className="pdf-iframe-wrapper">
          <iframe
            src={pdfPath}
            title={title}
            width="100%"
            height="100%"
            style={{ border: "none" }}
            allowFullScreen
          />
        </div>
      </Modal.Body>
    </Modal>
  );
};
