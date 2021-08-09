import React from "react";
import "./ItemInfo.css";
import ItemField from "./ItemField";
import ApPhoto from "./static/ap.png";
export default ItemInfo;

function ItemInfo(props) {
  const {
    cost,
    complexCost,
    iptuCost,
    address,
    description,
    totalspace,
    room,
    garage,
    bathroom,
  } = props;

  return (
    <div className="body">
      <div className="container">
        <div className="photo-container">
          <img src={ApPhoto} className="ap-photo" />
        </div>
        <div className="content-container">
          <ItemField
            cost={cost}
            complexCost={complexCost}
            iptuCost={iptuCost}
            description={description}
            address={address}
            totalspace={totalspace}
            room={room}
            garage={garage}
            bathroom={bathroom}
          />
        </div>
      </div>
    </div>
  );
}
