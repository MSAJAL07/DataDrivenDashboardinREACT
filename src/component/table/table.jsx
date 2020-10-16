import React, { useState, useEffect } from 'react';
import Posts from './page';
import Pagination from './pagination';
import 'bootstrap/dist/css/bootstrap.css';
const Table = ({data}) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage,setPostsPerPage] = useState(10);

  useEffect(() => {
    setPosts(data);
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const gotoPage = pageNumber => setCurrentPage(pageNumber);
  return (
    <div className="col-sm-12">
          <div className="table-responsive mt-3">
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        gotoPage = {gotoPage}
        currentPage = {currentPage}
        setPostsPerPage = {setPostsPerPage}
      />
    </div>
        </div>
  );
};

export default Table;