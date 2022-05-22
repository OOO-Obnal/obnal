import React from "react";
import { useLocation } from "react-router-dom";
import { newsAPI } from "../../services/NewsService";

const New = () => {
  const joint = useLocation();
  const newsId = Number(joint.pathname.split(`/`)[2]);
  const { data, isError, isLoading } = newsAPI.useGetNewsByIdQuery(newsId);
  return (
    <div className="news">
      <div className="potnii_chlen">
        {data?.id} - {data?.title}
      </div>
    </div>
  );
};

export default New;
