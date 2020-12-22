import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Modal, Button } from "antd";

const FormModal = (props) => {
  console.log(props);
  return (
    <Modal
      title="Basic Modal"
      visible={props.isModalVisible}
      onOk={props.handleOk}
      onCancel={props.handleCancel}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

function ModalHolder(props) {
  return ReactDOM.createPortal(
    props.children,
    document.getElementById("modal")
  );
}
export default FormModal;
