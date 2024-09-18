import Image from 'next/image';
import styles from './GroupPhoto.module.scss';

const GroupPhoto = () => {
  return (
    <main className={styles.container}>
      <div className={styles.images}>
        <div className={styles.image}>
          <Image
            src="https://images.unsplash.com/photo-1517329782449-810562a4ec2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt=""
            fill
          />
        </div>
        <div className={styles.image}>
          <Image
            src="https://images.unsplash.com/photo-1517329782449-810562a4ec2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt=""
            fill
          />
        </div>
        <div className={styles.image}>
          <Image
            src="https://images.unsplash.com/photo-1517329782449-810562a4ec2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt=""
            fill
          />
        </div>
        <div className={styles.image}>
          <Image
            src="https://images.unsplash.com/photo-1517329782449-810562a4ec2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt=""
            fill
          />
        </div>
        <div className={styles.image}>
          <Image
            src="https://images.unsplash.com/photo-1517329782449-810562a4ec2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt=""
            fill
          />
        </div>
      </div>
    </main>
  );
};

export default GroupPhoto;
