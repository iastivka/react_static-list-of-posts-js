import './PostInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const PostInfo = ({ title, body, user, comments }) => (
  <div className="PostInfo">
    <h2 className="PostInfo__title">{title}</h2>
    <p className="PostInfo__body">{body}</p>

    <UserInfo name={user.name} email={user.email} />

    <div className="PostInfo__comments">
      {comments.map(({ id, name, email, body: commentBody }) => (
        <CommentInfo key={id} name={name} email={email} body={commentBody} />
      ))}
    </div>
  </div>
);
