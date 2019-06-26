import React, { useContext } from "react";
import ToneJsContext from "../../context/ToneJsContext";

const WebDawButton = props => {
  const toneJsContext = useContext(ToneJsContext);
  console.table(toneJsContext);
  return <button className="webDaw-button" />;
};

export default WebDawButton;
