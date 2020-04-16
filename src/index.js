import React from "react";
import ReactDOM from "react-dom";

const img1 =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcaptainaltcoin.com%2Fwp-content%2Fuploads%2F2018%2F08%2Fchainlink.jpg&f=1&nofb=1";
const img2 =
  "https://logos-download.com/wp-content/uploads/2016/06/Bitcoin_logo_yellow.png";
const img3 =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2018%2F04%2FEthereum-Logo.png&f=1&nofb=1";

ReactDOM.render(
  <div>
    <h1 className="heading">My favorite Coins</h1>
    <div>
      <img className="coin-img" src={img1} />
      <img className="coin-img" src={img2} />
      <img className="coin-img" src={img3} />
    </div>
  </div>,
  document.getElementById("root")
);
