import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import CreateIcon from '@mui/icons-material/Create';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import PersonIcon from '@mui/icons-material/Person';
import PlaceIcon from '@mui/icons-material/Place';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Avatar } from '@mui/material';
import Image from 'next/image';
import styles from './Timeline.module.scss';

export interface ITimeline {}

const Timeline: React.FC<ITimeline> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.bio}>
          <h1>BIO</h1>
          <form>
            <input type="text" placeholder="Add Your Bio Here..." />
            <button>Update Bio</button>
          </form>
        </div>
        {/* end of bio part */}

        <div className={styles.photos}>
          <h1>Photos</h1>
          <div className={styles.Photos}>
            <div className={styles.photo}>
              <Image
                src="https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/pixels-imagesize-resolution/image-open-photoshop.jpg"
                alt=""
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.photo}>
              <Image
                src="https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/pixels-imagesize-resolution/image-open-photoshop.jpg"
                alt=""
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.photo}>
              <Image
                src="https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/pixels-imagesize-resolution/image-open-photoshop.jpg"
                alt=""
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.photo}>
              <Image
                src="https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/pixels-imagesize-resolution/image-open-photoshop.jpg"
                alt=""
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.photo}>
              <Image
                src="https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/pixels-imagesize-resolution/image-open-photoshop.jpg"
                alt=""
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.photo}>
              <Image
                src="https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/pixels-imagesize-resolution/image-open-photoshop.jpg"
                alt=""
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.photo}>
              <Image
                src="https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/pixels-imagesize-resolution/image-open-photoshop.jpg"
                alt=""
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          <h1>
            {' '}
            <CreateIcon /> Create Post{' '}
          </h1>
          <form>
            <div className={styles.inputs}>
              <Avatar style={{ height: '50px', width: '50px' }}>
                {/* <Image src="" alt="profile" fill /> */}
                {'U'}
              </Avatar>
              <input type="text" placeholder="Share Your Thaughts..." />
            </div>
            <div className={styles.buttons}>
              <button>
                <ImageIcon /> Photo/Video
              </button>
              {/* <button>
                <LocationOnIcon />
                Location
              </button> */}
              <button>
                <PersonIcon /> Tag Friend{' '}
              </button>
            </div>
          </form>
        </div>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                consequatur.
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
  );
};

export default Timeline;

//  For Adding Post form

const PostForm = () => {
  return (
    <form className={styles.postForm}>
      <div className={styles.postFormTop}>
        <Avatar className={styles.postAvatar}>U</Avatar>
        <input
          type="text"
          className={styles.postInput}
          placeholder="Share Your Thaughts"
        />
      </div>
      <div className={styles.AddPostMore}>
        <div className={styles.PostMore}>
          <ImageIcon />
          <span>Image/Video</span>
        </div>
        <div className={styles.PostMore}>
          <PersonIcon />
          <span>Image/Video</span>
        </div>
        <div className={styles.PostMore}>
          <EmojiEmotionsIcon />
          <span>Image/Video</span>
        </div>
        <div className={styles.PostMore}>
          <PlaceIcon />
          <span>Image/Video</span>
        </div>
      </div>
    </form>
  );
};
