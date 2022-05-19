import React from "react";
function main() {
  const r = document.querySelector(":root");
  const loginClick = async () => {
    // console.log(r);
    r.style.setProperty("--des-primary", "red");
    r.style.setProperty("--des-secondary", "blue");
  };

  return (
    <div>
      <h1 className="des-tx-primary">primary color</h1>
      <h1 className="des-tx-secondary">secondary color</h1>
      <button onClick={loginClick}>submit</button>
    </div>
  );
}

export default main;
