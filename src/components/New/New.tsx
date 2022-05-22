import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import authContext from "../../context/authContext";
import { commsAPI } from "../../services/CommsService";
import { newsAPI } from "../../services/NewsService";
import { userAPI } from "../../services/UserService";
import { Comms } from "../../types/Comms";
import Button from "../UI/Button";
import Input from "../UI/Input";
import "./New.scss";

const New = () => {
  const joint = useLocation();
  const newsId = Number(joint.pathname.split(`/`)[2]);
  const { data, isError, isLoading } = newsAPI.useGetNewsByIdQuery(newsId);

  const [addPost] = commsAPI.useAddPostMutation();
  const { user } = useContext(authContext);
  const { data: yarn } = commsAPI.useGetCommsQuery();
  const [comms, setComms] = useState(yarn);
  const [value, setValue] = useState("");
  const [comm, setComm] = useState(comms);

  useEffect(() => {
    if (yarn) {
      setComms(yarn);
    }
  }, [comm]);

  const onAddPost = () => {
    if (user) {
      const cumm = { userId: user.id, text: value, newsId, likes: 0 };
      addPost(cumm);
      setValue("");
      if (comm) {
        setComm([...comm, cumm]);
      }
    }
  };

  return (
    <div className="news">
      <div className="potnii_chlen">
        {data?.id} - {data?.title} <span>{data?.text}</span>
        <Input
          placeholder="Прокоментировать"
          type="text"
          variant="dark-outlined"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          value={value}
        />
        <Button text="Добавить комментарий" type="button" onClick={onAddPost} />
        {comm &&
          comm.map((hugs) => {
            //const { data: flag } = userAPI.useGetUserByIdQuery(hugs.userId);
            return <div key={hugs.id}>{hugs.text}</div>;
          })}
      </div>
    </div>
  );
};

export default New;
