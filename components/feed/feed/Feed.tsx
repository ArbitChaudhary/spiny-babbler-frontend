import { useEffect, useState } from 'react';
import { postService } from '../../../services/services/posts.service';
import Post from '../post/post/Post';
import styles from './Feed.module.scss';

export interface IFeed {}

const Feed: React.FC<IFeed> = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const func = async () => {
      const posts = await postService.getUserPosts();
      setPosts(posts.docs);
      console.log(posts);
    };

    func();
  }, []);

  return (
    <div className={styles.container}>
      {posts.map((post, idx) => (
        <Post key={idx} post={post} />
      ))}
    </div>
  );
};

export default Feed;
