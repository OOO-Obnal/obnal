import React, { FC, LegacyRef, useEffect, useRef, useState } from "react";
import { commsAPI } from "../../services/CommsService";
import { Comms } from "../../types/Comms";
interface LikePropsType {
  hugs: Comms;
}

const Like: FC<LikePropsType> = ({ hugs }) => {
  const [ChangeLikes] = commsAPI.useChangeLikesMutation();
  const [like, setLike] = useState(false);
  let likes = hugs.likes;
  const addLike = () => {
    setLike(!like);
    likes += 1;
    const id = hugs.id;
    if (id) {
      ChangeLikes({ id, likes });
    }
    console.log(likes);
  };

  return (
    <div>
      <div
        key={hugs.id}
        className={`like ${like ? "active" : ""}`}
        onClick={addLike}
      ></div>
      <div className="like__like">{likes}</div>
    </div>
  );
};

export default Like;
