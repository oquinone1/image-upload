import React from "react";

const UnderDevelopment = () => {
  const style = {
    height: "100vh",
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style={{ ...style }}>
      <p>
        Currently Under Development... <br /> Please come back another time
      </p>
    </div>
  );
};

export default UnderDevelopment;
