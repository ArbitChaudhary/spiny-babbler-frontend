import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import CreateIcon from '@mui/icons-material/Create';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import PersonIcon from '@mui/icons-material/Person';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Image from 'next/image';

import { Avatar } from '@mui/material';
import styles from './GroupTimeline.module.scss';

const GroupTimeLine = () => {
  return (
    <main className={styles.container}>
      <div className={styles.left}>
        <div className={styles.box}>
          <h1>Photos</h1>

          <div className={styles.images}>
            <div className={styles.image}>
              <Image
                src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
                alt=""
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
                alt=""
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
                alt=""
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
                alt=""
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
                alt=""
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
                alt=""
                fill
              />
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <h1>Members</h1>

          <div className={styles.members}>
            <div className={styles.member}>
              <div className={styles.image}>
                <Image
                  src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                  alt=""
                  fill
                />
              </div>
              <div className={styles.name}>Member Name</div>
            </div>
            <div className={styles.member}>
              <div className={styles.image}>
                <Image
                  src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                  alt=""
                  fill
                />
              </div>
              <div className={styles.name}>Member Name</div>
            </div>
            <div className={styles.member}>
              <div className={styles.image}>
                <Image
                  src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                  alt=""
                  fill
                />
              </div>
              <div className={styles.name}>Member Name</div>
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
    </main>
  );
};

export default GroupTimeLine;
