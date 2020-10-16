import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <table className = "table small">
      <thead>
        <tr>
          <td><b>Title </b></td>
          <td><b>Topic</b></td>
          <td><b>Year</b></td>
          <td><b>Intensity</b></td>
          <td><b>Sector</b></td>
          <td><b>Region</b></td>
          <td><b>PESTLE</b></td>
          <td><b>SWOT</b></td>
        </tr>
      </thead>
      <tbody>{
        posts.map(post => (
          <tr>
          <td><a href="!#">{post.title}</a></td>
          <td>{post.topic}</td>
          <td>{post.end_year}</td>
          <td>{post.intensity}</td>
          <td>{post.sector} </td>
          <td>{post.region}</td>
          <td>{post.pestle}</td>
          <td>SWOT</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Posts;