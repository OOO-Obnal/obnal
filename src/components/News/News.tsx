import React from "react";
import { useNavigate } from "react-router-dom";
import { newsAPI } from "../../services/NewsService";
import "./News.scss";

const News = () => {
  const { data, isError, isLoading } = newsAPI.useGetNewsQuery();
  const b = useNavigate();
  return (
    <div className="news">
      {data?.map((news) => (
        <div
          key={news.id}
          className="news__post"
          onClick={() => b(`/news/${news.id}`)}
        >
          <h1>
            {news.id}. Новость <hr />
            {news.title}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default News;
