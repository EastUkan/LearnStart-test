import { useState, useEffect } from "react";
import { Route, Switch } from "react-router";

import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Main from "./pages/Main";
import Stories from "./pages/Stories";

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="App">
      <Container>
        <Header toggleModal={toggleModal} />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route path="/stories">
            <Stories />
          </Route>
        </Switch>
      </Container>
      {showModal && <Modal toggleModal={toggleModal} />}
    </div>
  );
}

export default App;
