import { Avatar, Card, Divider } from '@mui/material';
import classNames from 'classnames';

import styles from './PostCreate.module.scss';

import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import PersonIcon from '@mui/icons-material/Person';
import PlaceIcon from '@mui/icons-material/Place';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContext, useEffect, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UserContext } from '../../contexts/user.context';

export interface IPostCreate { }

const PostCreate: React.FC<IPostCreate> = () => {
  const { user } = useContext(UserContext);

  const [boxActive, setBoxActive] = useState(false);
  const refBox = useRef(null);

  const handleSearchBox = () => {
    setBoxActive(!boxActive);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (refBox.current && !refBox.current.contains(event.target)) {
        setBoxActive(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
  return (
    <Card>
      {user && (
        <>
          {boxActive && (
            <div className={styles.showBox}>
              <span ref={refBox} className={styles.box}>
                <PostCreateBox />
              </span>
            </div>
          )}
          <div className={styles.container}>
            <div className={styles.top}>
              <div className={classNames(styles.heading)}>
                <CreateIcon />
                Share
              </div>
            </div>
            <Divider />
            <div className={styles.content}>
              <div className={styles.body}>
                <div className={styles.share}>
                  <div className={styles.user}>
                    <Avatar alt={'User'} sx={{ width: 48, height: 48 }}>
                      U
                    </Avatar>
                  </div>
                  <input
                    type="text"
                    placeholder="Write your thoughts..."
                    name=""
                    id=""
                    onClick={handleSearchBox}
                  />
                </div>
              </div>
            </div>
            <Divider />
            <div className={styles.bottom}>
              <div className={styles.optionList}>
                <button className={styles.option}>
                  <ImageIcon />
                  Photo/Video
                </button>
                <button className={styles.option}>
                  <PersonIcon />
                  Tag a friend
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </Card>
  );
};

export default PostCreate;

// POST CREATE BOX
export interface PostData {
  context: string;
}
const PostCreateBox = () => {
  const { user } = useContext(UserContext);
  const { register, handleSubmit } = useForm<PostData>();
  const router = useRouter();


  const onSubmit: SubmitHandler<PostData> = async (data) => {
    //TODO: fix this
    // const newPost = await postService.createPost({
    //   data.context,
    //   'User',
    //   'SiliconTech Nepal',
    //   'No Group'
    // }
    // );

    // if (newPost.data) {
    //   router.push('/');
    // } else {
    //   console.log('error :>>', newPost.error);
    // }
  };

  return (
    <>
      {user && (
        <>
          <form
            className={styles.postCreateBox}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={styles.boxTop}>
              <Avatar className={styles.avatar}>
                <Image
                  src="data:image/png;base64,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"
                  alt="User Image"
                  fill
                />
              </Avatar>
              <input
                type="text"
                placeholder="Write something here..."
                {...register('context')}
              />
            </div>
            <div className={styles.postOther}>
              <div className={styles.postContent}>
                <ImageIcon />
                <span>Image/Video</span>
              </div>
              <div className={styles.postContent}>
                <PersonIcon />
                <span>Tag Friend</span>
              </div>
              <div className={styles.postContent}>
                <PlaceIcon />
                <span>Check in</span>
              </div>
              <div className={styles.postContent}>
                <SentimentSatisfiedAltIcon />
                <span>Feelings/Activity</span>
              </div>
            </div>
            <button className={styles.postButton} type="submit">
              Post
            </button>
          </form>
        </>
      )}
    </>
  );
};
