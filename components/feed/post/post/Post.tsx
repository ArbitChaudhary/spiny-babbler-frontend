import { Avatar, Divider } from '@mui/material';

import styles from './Post.module.scss';

import CameraAltIcon from '@mui/icons-material/CameraAlt';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import Image from 'next/image';
import Card from '../../../../common/ui/card/Card';
import Comment from '../comment/Comment';

export interface IPost {
  post: {
    context?: string;
    images?: [
      {
        url: string;
        name: string;
      }
    ];
    author: {
      firstName: string;
      familyName: string;
      profileImage: {
        url: string;
        name: string;
      };
    };
    comments: any;
  };
}

const Post: React.FC<IPost> = ({
  post: { context, images, author, comments },
}) => {
  return (
    <Card>
      <div className={styles.post}>
        <div className={styles.top}>
          <div className={styles.avatar}>
            <Avatar alt={'User'} sx={{ width: 48, height: 48 }}>
              <Image
                src={author.profileImage.url}
                alt={author.profileImage.name}
                fill
              />
            </Avatar>
          </div>
          <div className={styles.userDetail}>
            <div className="">
              <div
                className={styles.name}
              >{`${author.firstName} ${author.familyName}`}</div>
              <div className={styles.postTime}>1 min ago</div>
            </div>
          </div>
        </div>
        <div className={styles.body}>
          {context && <div className={styles.text}>{context}</div>}
          {images && images.length > 0 && (
            <div className={styles.images}>
              {images.map((image, idx) => {
                return (
                  <div key={idx}>
                    <Image src={image.url} alt={`image-${idx}`} fill />
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className={styles.bottom}>
          <div className={styles.postStats}>
            <div className={styles.like}>10 Likes</div>
            <div className={styles.comment}>4 Comments</div>
            <div className={styles.flex}></div>
            <div className={styles.share}>5 Share</div>
          </div>
          <Divider />
        </div>
        <div className={styles.commentList}>
          {comments.length > 0 &&
            comments.map((comment) => <Comment comment={comment} />)}
        </div>
        <div className={styles.addComment}>
          <input type="text" placeholder="Enter your comment" />
          <button className={styles.action}>
            <InsertLinkIcon />
          </button>
          <button className={styles.action}>
            <EmojiEmotionsIcon />
          </button>
          <button className={styles.action}>
            <CameraAltIcon />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default Post;
