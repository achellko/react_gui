import React from "react";
import PropTypes from "prop-types";

const HelloWorld = ({ where, increment }) => {
  return (
    <p>
      Hello {where} z krokiem {increment}
    </p>
  );
};
HelloWorld.propTypes = {
  where: PropTypes.string.isRequired,
  increment: PropTypes.func.isRequired
};
function App() {
  return <HelloWorld where="Świecie" />;
}
export default App;
