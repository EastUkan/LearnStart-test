import { useState } from "react";
import { createPortal } from "react-dom/cjs/react-dom.development";
import { FiX } from "react-icons/fi";
import PropTypes from "prop-types";

import style from "./Modal.module.css";
import Title from "../Title/Title";

const modalRoot = document.querySelector("#modal-root");

const styleColorInput = {
  valid: { backgroundColor: "#e4e5e6" },
  error: {
    backgroundColor: "rgb(219, 132, 132)",
    color: "rgb(179, 51, 51)",
  },
};

const Modal = ({ toggleModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emptyFormEmail = email.length === 0;
    const emptyFormPassword = password.length === 0;

    if (emptyFormEmail || emptyFormPassword || emailError || passwordError) {
      setFormValid(true);
      alert("Write the form correctly");
    } else {
      setFormValid(false);
      reset();
      alert(`Welcome ${email}`);
      toggleModal();
    }
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  return createPortal(
    <div className={style.backdrop}>
      <div className={style.content}>
        <button className={style.closeButton} onClick={toggleModal}>
          <FiX size="25px" />
        </button>
        <div className={style.formWrapper}>
          <Title text={"Sign Up"} />
          <form onSubmit={handleSubmit} className={style.form}>
            <input
              onChange={(e) => emailHandler(e)}
              value={email}
              className={style.input}
              style={formValid ? styleColorInput.error : styleColorInput.valid}
              type="text"
              name="email"
              placeholder="Email"
            />
            <input
              onChange={(e) => passwordHandler(e)}
              value={password}
              style={formValid ? styleColorInput.error : styleColorInput.valid}
              className={style.input}
              type="password"
              name="password"
              placeholder="Password"
            />
            <button className={style.button} type="submit">
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default Modal;
