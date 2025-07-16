import commentsFromServers from '../../api/comments.json';
import usersFromServer from '../../api/users.json';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo = ({ post }) => {
  const posts = {
    ...post,
    comments: commentsFromServers.filter(
      comments => comments.postId === post.id,
    ),
    user: usersFromServer.find(user => user.id === post.userId),
  };

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}

          <UserInfo user={posts.user} />
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />

      {posts.comments.length > 0 ? (
        <CommentList comments={posts.comments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};
