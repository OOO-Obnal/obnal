import React, { FC, useState } from 'react';
import { commsAPI } from '../../services/CommsService';
import { Comms } from '../../types/Comms';
interface LikePropsType {
  comment: Comms;
}

const Like: FC<LikePropsType> = ({ comment }) => {
  const [ChangeLikes] = commsAPI.useChangeLikesMutation();
  const [like, setLike] = useState(false);
  const [likes, setLikes] = useState(comment.likes); // следим за лайками, setLikes позволяет их без проблем изменить
  const addLike = () => {
    if (!like) {
      // Проверка, если like === false, то мы можем добавить новый, если like уже стоит, то убрать его
      setLike(!like);
      setLikes(likes + 1); // Добавляем лайк
      const id = comment.id;
      if (id) {
        ChangeLikes({ id, likes });
      }
      console.log(likes);
    } else {
      setLike(false); // если лайк стоит, то меняем его состояние при клике (убираем лайк)
    }
  };

  return (
    <div>
      <div key={comment.id} className={`like ${like ? 'active' : ''}`} onClick={addLike}></div>
      <div className="like__like">{likes}</div>
    </div>
  );
};

export default Like;
