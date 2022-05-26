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
<<<<<<< HEAD
    likes += 1;
=======
    const likes = hugs.likes++;
>>>>>>> 3de3d910e5ddf5b3cc2c578dd6ef8dfec0042654
    const id = hugs.id;
    if (id) {
      ChangeLikes({ id, likes });
    }
<<<<<<< HEAD
    console.log(likes);
=======
    console.log(hugs);
>>>>>>> 3de3d910e5ddf5b3cc2c578dd6ef8dfec0042654
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
