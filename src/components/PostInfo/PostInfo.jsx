import commentsFromServers from '../../api/comments.json';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo = ({ post }) => {
  const filteredComments = commentsFromServers.filter(
    comments => comments.postId === post.id,
  );

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}

          <UserInfo userId={post.userId} />
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />

      {filteredComments.length > 0 ? (
        <CommentList comments={filteredComments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};
