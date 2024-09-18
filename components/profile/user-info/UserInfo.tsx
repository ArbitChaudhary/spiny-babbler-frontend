import { Avatar } from '@mui/material';
import styles from './UserInfo.module.scss';

import CakeIcon from '@mui/icons-material/Cake';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CloseIcon from '@mui/icons-material/Close';
import EditNoteIcon from '@mui/icons-material/EditNote';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import TwitterIcon from '@mui/icons-material/Twitter';
import WorkIcon from '@mui/icons-material/Work';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import CustomButton from '../../../common/ui/button/Button';
import { userService } from '../../../services/services/users.service';
import About from '../../about/About';
import MyConnections from '../../connections/your-connections/MyConnections';
import Timeline from '../../timeline/Timeline';

export interface IUserInfo {
  user: any;
}

const UserInfo: React.FC<IUserInfo> = ({ user }) => {
  console.log(user);

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [coverImageUpdate, setCoverImageUpdate] = useState(false);
  const refFile = useRef(null);
  const [selectProfileImage, setSelectProfileImage] = useState(null);
  const [recUsers, setRecUsers] = useState([]);

  const barItems = ['Timeline', 'About', 'Connections', 'Photo'];

  const handleActive = (index: number) => {
    setActiveIndex(index);
  };

  const handleUpdateImage = () => {
    setCoverImageUpdate(!coverImageUpdate);
  };

  const closeUpdateImageBox = () => {
    setCoverImageUpdate(false);
  };

  useEffect(() => {
    const func = async () => {
      const recusers = await userService.getAllUsers();
      return setRecUsers(recusers.docs);
    };
    func();
  }, []);
  return (
    <div className={styles.profileAll}>
      <div className={styles.container}>
        <div className={styles.profile}>
          <div
            className={styles.topFlex}
            style={{
              backgroundImage:
                'url("https://i.pinimg.com/originals/d9/78/0d/d9780d36af9689cbb985aeb116cde4dc.jpg")',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className={styles.top}>
              <div className={styles.avatar}>
                <Avatar
                  alt={'User'}
                  // sx={{ width: 126, height: 126, fontSize: '2.5rem' }}
                  className={styles.userProfileImage}
                >
                  <Image
                    src={user.profileImage.url}
                    alt={user.profileImage.name}
                    fill
                  />
                </Avatar>
              </div>
              <div className={styles.text}></div>
            </div>
            <div className={styles.bio}>
              <div className={styles.quote}>
                {user?.headline && (
                  <div className={styles.headline}>{user?.headline}</div>
                )}
              </div>
            </div>
            <div className={styles.editProfile}>
              <Link href="/edit-profile">
                <div className={styles.edit}>
                  <EditNoteIcon /> <span>Edit Profile</span>{' '}
                </div>
              </Link>
              <CameraAltIcon
                className={styles.camera}
                onClick={handleUpdateImage}
              />

              {coverImageUpdate && (
                <div className={styles.updateImageBox}>
                  <div className={styles.closeUpdateForm}>
                    <CloseIcon onClick={closeUpdateImageBox} />
                  </div>
                  <UpdateCover />
                </div>
              )}
            </div>
          </div>
          <div className={styles.detail}>
            <div className={styles.generalInfo}>
              <div
                className={styles.name}
              >{`${user.firstName} ${user.familyName}`}</div>
              <div className={styles.info}>
                <WorkIcon />
                company name
              </div>
              <div className={styles.info}>
                <SchoolIcon />
                education institute
              </div>
              <div className={styles.info}>
                <PeopleIcon />
                50 connections
              </div>
              {user?.dateOfBirth && (
                <div className={styles.info}>
                  <CakeIcon />
                  Born on {`${new Date(user?.dateOfBirth).toDateString()}`}
                </div>
              )}
            </div>

            {/* start of social profile */}

            <div className={styles.socialProfiles}>
              <div className={styles.socialProfile}>
                <GitHubIcon />
                <TwitterIcon />
                <FacebookIcon />
              </div>
            </div>

            {/* <div className={styles.follower}>
              People User follows
              <AvatarGroup max={4}>
                <Avatar alt={'User'}>U</Avatar>
                <Avatar alt={'User'}>U</Avatar>
                <Avatar alt={'User'}>U</Avatar>
                <Avatar alt={'User'}>U</Avatar>
                <Avatar alt={'User'}>U</Avatar>
                <Avatar alt={'User'}>U</Avatar>
              </AvatarGroup>
            </div> */}
          </div>
        </div>

        <div className={styles.bar}>
          {barItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleActive(index)}
              className={`${
                activeIndex === index ? styles.back : styles.normal
              } `}
            >
              {item}
            </div>
          ))}
        </div>
        <div className={styles.otherInfo}>
          {activeIndex === 0 && <Timeline />}
          {activeIndex === 1 && <About />}
          {activeIndex === 2 && <MyConnections />}
        </div>
      </div>
      <div className={styles.otherss}>
        <div className={styles.rightTop}>
          Suggest me something to place here
        </div>

        <div className={styles.rightViewers}>
          <h1>People you might know</h1>
          <div className={styles.viewers}>
            {/* start of rec users */}
            {recUsers.map((users, idx) => (
              <div className={styles.viewer} key={idx}>
                <div className={styles.avatar}>
                  <Avatar>
                    <Image
                      src={users.profileImage.url}
                      alt={users.profileImage.name}
                      fill
                    />
                  </Avatar>
                  <div className={styles.userInfo}>
                    <div className={styles.name}>
                      {users.firstName} {users.familyName}
                    </div>
                    <div>@Artist</div>
                  </div>
                </div>
                <div>
                  <CustomButton>Connect</CustomButton>
                </div>
              </div>
            ))}
            {/* end of rec users */}
          </div>
          <div className={styles.seeAll}>See All</div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;

// Box for Updating Cover Image

const UpdateCover = () => {
  return (
    <div className={styles.UpdateCoverBox}>
      <div className={styles.UpdateCoverHead}>
        <form>
          <div className={styles.imageSection}></div>

          <div className={styles.changeImage}>
            <button type="submit">Update Cover Photo</button>
          </div>
        </form>
      </div>
    </div>
  );
};
