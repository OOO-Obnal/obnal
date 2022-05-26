import React, { FC, useEffect, useState } from "react";
import { commsAPI } from "../../services/CommsService";
import { Comms } from "../../types/Comms";
interface LikePropsType {
  hugs: Comms;
}

const Like: FC<LikePropsType> = ({ hugs }) => {
  const [ChangeLikes] = commsAPI.useChangeLikesMutation();
  const [like, setLike] = useState(false);
  const addLike = () => {
    setLike(!like);
    const likes = hugs.likes++;
    const id = hugs.id;
    if (id) {
      ChangeLikes({ id, likes });
    }
    console.log(hugs);
  };

  useEffect(() => {}, []);

  return (
    <div>
      <div
        key={hugs.id}
        className={`like ${like ? "active" : ""}`}
        onClick={addLike}
      ></div>
      <div className="like__like">{hugs.likes}</div>
    </div>
  );
};

export default Like;
