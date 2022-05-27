import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import authContext from '../../context/authContext';
import { commsAPI } from '../../services/CommsService';
import { newsAPI } from '../../services/NewsService';
import { userAPI } from '../../services/UserService';
import { Comms } from '../../types/Comms';
import Like from '../Like/Like';
import Button from '../UI/Button';
import Input from '../UI/Input';
import './New.scss';

const New = () => {
  const joint = useLocation();
  const newsId = Number(joint.pathname.split(`/`)[2]);
  const { data } = newsAPI.useGetNewsByIdQuery(newsId);

  const [addPost] = commsAPI.useAddPostMutation();
  const { user } = useContext(authContext);
  const { data: comments } = commsAPI.useGetCommsQuery();
  const [comms, setComms] = useState(comments);
  const [value, setValue] = useState('');

  // В этом компоненте я убрал лишний useState, для удобства поменял переменные

  const onAddPost = () => {
    if (user) {
      const newComm = { userName: user.name, text: value, newsId, likes: 0 };
      addPost(newComm);
      setValue('');
      if (comms) {
        setComms([...comms, newComm]);
      }
    }
  };

  return (
    <div className="news">
      <div className="potnii_chlen">
        <h1>
          {data?.id}. {data?.title}
        </h1>
        <hr />
        <div className="boba">{data?.text}</div>
        <div className="oleg">
          <Input
            placeholder="Прокоментировать"
            type="text"
            variant="dark-outlined"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
            value={value}
          />
          <Button text="Добавить комментарий" type="button" onClick={onAddPost} />
        </div>
        <div className="joint">
          <h2>Комментарии:</h2>
          {comms &&
            comms
              .filter((comm) => comm.newsId === newsId)
              .map((comment) => {
                return (
                  <div className="matvey" key={comment.id}>
                    {comment.userName}. {comment.text} <Like comment={comment} />
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default New;
