import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Image from 'next/image';

import { Avatar } from '@mui/material';
import styles from './Timeline.module.scss';

const Timeline = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {/* start of photo */}

        <div className={styles.photos}>
          <h1>Photos</h1>
          <div className={styles.photoList}>
            <div className={styles.image}>
              <Image
                src="https://vastphotos.com/files/uploads/photos/10994/peaceful-nature-photo-l.jpg?v=20220712073521"
                alt=""
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="https://vastphotos.com/files/uploads/photos/10994/peaceful-nature-photo-l.jpg?v=20220712073521"
                alt=""
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="https://vastphotos.com/files/uploads/photos/10994/peaceful-nature-photo-l.jpg?v=20220712073521"
                alt=""
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="https://vastphotos.com/files/uploads/photos/10994/peaceful-nature-photo-l.jpg?v=20220712073521"
                alt=""
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="https://vastphotos.com/files/uploads/photos/10994/peaceful-nature-photo-l.jpg?v=20220712073521"
                alt=""
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="https://vastphotos.com/files/uploads/photos/10994/peaceful-nature-photo-l.jpg?v=20220712073521"
                alt=""
                fill
              />
            </div>
          </div>
        </div>

        {/* end of photos */}
      </div>
      <div className={styles.right}>
        <div className={styles.posts}>
          <div className={styles.posts}>
            {/* start of updates */}
            <div className={styles.updates}>
              <div className={styles.update}>
                <div className={styles.title}>
                  <Avatar className={styles.avatar}>
                    <Image
                      src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
                      alt=" "
                      height={50}
                      width={50}
                      style={{ objectFit: 'cover' }}
                    />
                  </Avatar>
                  <div className={styles.poster}>
                    <div className={styles.name}>Aladin</div>
                    <div className={styles.time}>1 sec ago</div>
                  </div>
                </div>
                <div className={styles.desc}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Delectus, dignissimos!
                </div>
                <div className={styles.files}>
                  <div className={styles.images}>
                    <Image
                      src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      fill
                      style={{ borderRadius: '4px' }}
                    />
                  </div>
                </div>
                <div className={styles.likeBox}>
                  <span className={styles.likeIcon}>
                    <ThumbUpIcon />
                    <span>20 Likes</span>
                  </span>
                  <span className={styles.commentIcon}>
                    <ChatBubbleIcon />
                    <span>20 Comments</span>
                  </span>
                </div>
                <div className={styles.comments}>
                  <div className={styles.comment}>
                    <Avatar className={styles.userImage}>
                      <Image src="" alt="" fill />
                    </Avatar>
                    <div className={styles.users}>
                      <div className={styles.userName}>Hero Alom</div>
                      <div className={styles.userComment}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Distinctio mollitia quidem velit sed eaque nemo ipsa,
                        deleniti dolores? Neque, fugit?
                      </div>
                      <div className={styles.likeComments}>
                        <span>Like</span>
                        <span>Reply</span>
                        <span>Translate</span>
                        <span>5 min</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.comment}>
                    <Avatar className={styles.userImage}>
                      <Image src="" alt="" fill />
                    </Avatar>
                    <div className={styles.users}>
                      <div className={styles.userName}>Hero Alom</div>
                      <div className={styles.userComment}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </div>
                      <div className={styles.likeComments}>
                        <span>Like</span>
                        <span>Reply</span>
                        <span>Translate</span>
                        <span>5 min</span>
                      </div>
                    </div>
                  </div>
                  <form className={styles.commentForm}>
                    <input type="text" placeholder="Comment..." />
                    <div className={styles.icons}>
                      <InsertLinkIcon />
                      <EmojiEmotionsIcon />
                      <CameraAltIcon />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* end of updates */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
