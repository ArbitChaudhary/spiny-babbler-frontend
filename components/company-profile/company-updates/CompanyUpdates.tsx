import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Avatar } from '@mui/material';
import Image from 'next/image';
import styles from './CompanyUpdates.module.scss';

const CompanyUpdates = () => {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.events}>
          <div className={styles.box}>
            <h1>Events</h1>
            <div className={styles.allEvents}>
              <div className={styles.event}>
                <Image
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  height={45}
                  width={45}
                  style={{ objectFit: 'cover', position: 'relative' }}
                />
                <div className={styles.detail}>
                  <div className={styles.title}>Digital Conference</div>
                  <div className={styles.desc}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </div>
                  <div className={styles.date}>Date : 2024/1/01</div>
                  <div className={styles.posted}>Posted 1day ago</div>
                </div>
              </div>
              <div className={styles.event}>
                <Image
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  height={45}
                  width={45}
                  style={{ objectFit: 'cover', position: 'relative' }}
                />
                <div className={styles.detail}>
                  <div className={styles.title}>Digital Conference</div>
                  <div className={styles.desc}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </div>
                  <div className={styles.date}>Date : 2024/1/01</div>
                  <div className={styles.posted}>Posted 1day ago</div>
                </div>
              </div>
              <div className={styles.event}>
                <Image
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  height={45}
                  width={45}
                  style={{ objectFit: 'cover', position: 'relative' }}
                />
                <div className={styles.detail}>
                  <div className={styles.title}>Digital Conference</div>
                  <div className={styles.desc}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </div>
                  <div className={styles.date}>Date : 2024/1/01</div>
                  <div className={styles.posted}>Posted 1day ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
              <span className={styles.likeIcon}>
                <ThumbUpIcon />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyUpdates;
