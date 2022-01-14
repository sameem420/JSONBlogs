import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../redux/actions";
import UserHeader from "./UserHeader";

const PostList = ({ fetchPostsAndUsers, posts }) => {
  useEffect(() => {
    fetchPostsAndUsers();
  }, []);

  const renderPosts = posts.map((post) => {
    return (
      <div className="item" key={post.id}>
        <i className="large middle aligned icon angle double right" />
        <div className="content">
          <div className="description">
            <h2 className="ui blue header">
              <i className="large icon folder open outline" />
              {post.title}
            </h2>
            <p className="ui grey small header" style={{ margin: "10px 10px" }}>
              {post.body}
            </p>
          </div>
          <UserHeader userId={post.userId} />
        </div>
      </div>
    );
  });

  return (
    <div className="ui blue piled segment">
      <div className="ui relaxed divided list">{renderPosts}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, {
  fetchPostsAndUsers,
})(PostList);
