import {useEffect, useState} from "react";
import { fetchAllPostsApiMethod } from "../../api/posts";

import './DataFetcher.css';
import Loading from "../Loading";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [postsToShow, setPostsToShow] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchPosts = () => {
    fetchAllPostsApiMethod().then((data) => {
      setData(data);
      setPostsToShow(data?.slice(0, 4) || []);
      setLoading(false);
    }
    ).catch((error) => {
      console.error(error);
      setLoading(false);
    })
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <Loading text="Loading..."/>
    );
  }

  if(!loading && data.length === 0) {
    return (
      <div>
        <h1>{"No data found :("}</h1>
      </div>
    );
  }


  return (
    <div className="fetcherMain__container">
       <div className="pageControlls__container">
        <button disabled={currentPage === 1} onClick={() => {
          if(currentPage > 1) {
            setCurrentPage(currentPage - 1);
            setPostsToShow(data.slice((currentPage - 2) * 4, (currentPage - 1) * 4));
          }
        }}>{'<-'}</button>
        <h4>Page {currentPage} / {data?.length / 4}</h4>
        <button disabled={currentPage >= data.length / 4} onClick={() => {
          if(currentPage < Math.ceil(data.length / 4)) {
            setCurrentPage(currentPage + 1);
            setPostsToShow(data.slice(currentPage * 4, (currentPage + 1) * 4));
          }
        }}>{'->'}</button>
       </div>
      <div className="postsGrid__container">
        {postsToShow.map((post: Post) => (
          <div key={post.id} className="post__card">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataFetcher;