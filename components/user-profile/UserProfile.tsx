import FacebookIcon from '@mui/icons-material/Facebook';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import { Avatar } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import styles from './UserProfile.module.scss';
import About from './about/About';
import UserConnections from './connections/UserConnections';
import Timeline from './time-line/Timeline';

const UserProfile = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const topics = ['Timeline', 'About', 'Connection', 'Photo'];

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div className={styles.container}>
      <div className={styles.userContents}>
        {/* start of profile */}
        <div className={styles.box}>
          <div className={styles.profile}>
            <div className={styles.left}>
              <Avatar className={styles.avatar}>
                <Image src="" alt="" fill />
              </Avatar>
              <div className={styles.name}>Hero Alom</div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <div className={styles.education}>
                <SchoolIcon />
                <span>Pokhara University </span>
              </div>
              <div className={styles.education}>
                {' '}
                <WorkIcon />
                <span> Silicontech Nepal Pvt. Ltd. </span>
              </div>
              <div className={styles.connection}>
                <PeopleIcon /> <span>100 connections</span>
              </div>
              <div className={styles.socialProfile}>
                <FacebookIcon />
                <FacebookIcon />
                <FacebookIcon />
                <FacebookIcon />
              </div>
            </div>
            <div className={styles.buttons}>
              <button>Connect</button>
              <button>Message</button>
            </div>
          </div>
        </div>
        {/* end of profile */}

        {/* start of bar */}

        <div className={styles.bar}>
          {topics.map((topic, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={` ${
                activeIndex === index ? styles.back : styles.normal
              }`}
            >
              {topic}
            </div>
          ))}
        </div>
        {/* end of bar */}

        {/* start of content inside profile */}

        <div className={styles.content}>
          {activeIndex === 0 && <Timeline />}
          {activeIndex === 1 && <About />}
          {activeIndex === 2 && <UserConnections />}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.others}>
          <div className={styles.rightTop}>
            Suggest me something to place here
          </div>
          <div className={styles.rightViewers}>
            <h1>Who viewed your profile</h1>
            <div className={styles.viewers}>
              <div className={styles.viewer}>
                <div className={styles.avatar}>
                  <Avatar>
                    <Image src="" alt="" fill />
                  </Avatar>
                  <div className={styles.userInfo}>
                    <div className={styles.name}>Hero Alom</div>
                    <div>@Artist</div>
                  </div>
                </div>
                <div className={styles.connect}>
                  <div> Connect</div>
                </div>
              </div>
              <div className={styles.viewer}>
                <div className={styles.avatar}>
                  <Avatar>
                    <Image src="" alt="" fill />
                  </Avatar>
                  <div className={styles.userInfo}>
                    <div className={styles.name}>Hero Alom</div>
                    <div>@Artist</div>
                  </div>
                </div>
                <div className={styles.connect}>
                  <div>Connect</div>
                </div>
              </div>
              <div className={styles.viewer}>
                <div className={styles.avatar}>
                  <Avatar>
                    <Image src="" alt="" fill />
                  </Avatar>
                  <div className={styles.userInfo}>
                    <div className={styles.name}>Hero Alom</div>
                    <div>@Artist</div>
                  </div>
                </div>
                <div className={styles.connect}>
                  <div>Connect</div>
                </div>
              </div>
              <div className={styles.viewer}>
                <div className={styles.avatar}>
                  <Avatar>
                    <Image src="" alt="" fill />
                  </Avatar>
                  <div className={styles.userInfo}>
                    <div className={styles.name}>Hero Alom</div>
                    <div>@Artist</div>
                  </div>
                </div>
                <div className={styles.connect}>
                  <div>Connect</div>
                </div>
              </div>
            </div>
            <div className={styles.seeAll}>See All</div>
          </div>
          <div className={styles.rightViewers}>
            <h1>People you might know</h1>
            <div className={styles.viewers}>
              <div className={styles.viewer}>
                <div className={styles.avatar}>
                  <Avatar>
                    <Image src="" alt="" fill />
                  </Avatar>
                  <div className={styles.userInfo}>
                    <div className={styles.name}>Hero Alom</div>
                    <div>@Artist</div>
                  </div>
                </div>
                <div className={styles.connect}>
                  <div>Connect</div>
                </div>
              </div>
              <div className={styles.viewer}>
                <div className={styles.avatar}>
                  <Avatar>
                    <Image src="" alt="" fill />
                  </Avatar>
                  <div className={styles.userInfo}>
                    <div className={styles.name}>Hero Alom</div>
                    <div>@Artist</div>
                  </div>
                </div>
                <div className={styles.connect}>
                  <div>Connect</div>
                </div>
              </div>
              <div className={styles.viewer}>
                <div className={styles.avatar}>
                  <Avatar>
                    <Image src="" alt="" fill />
                  </Avatar>
                  <div className={styles.userInfo}>
                    <div className={styles.name}>Hero Alom</div>
                    <div>@Artist</div>
                  </div>
                </div>
                <div className={styles.connect}>
                  <div>Connect</div>
                </div>
              </div>
              <div className={styles.viewer}>
                <div className={styles.avatar}>
                  <Avatar>
                    <Image src="" alt="" fill />
                  </Avatar>
                  <div className={styles.usesrInfo}>
                    <div className={styles.name}>Hero Alom</div>
                    <div>@Artist</div>
                  </div>
                </div>
                <div className={styles.connect}>
                  <div>Connect</div>
                </div>
              </div>
              <div className={styles.viewer}>
                <div className={styles.avatar}>
                  <Avatar>
                    <Image src="" alt="" fill />
                  </Avatar>
                  <div className={styles.userInfo}>
                    <div className={styles.name}>Hero Alom</div>
                    <div>@Artist</div>
                  </div>
                </div>
                <div className={styles.connect}>
                  <div>Connect</div>
                </div>
              </div>
            </div>
            <div className={styles.seeAll}>See All</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
