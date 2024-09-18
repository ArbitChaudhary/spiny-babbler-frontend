import Image from 'next/image';
import styles from './UserEducations.module.scss';

const UserEducations = () => {
  return (
    <div className={styles.container}>
      <div className={styles.About}>
        <div className={styles.title}>
          <h1>Educations</h1>
        </div>
        <div className={styles.educations}>
          <div className={styles.education}>
            <div className={styles.detail}>
              <Image
                src=""
                alt=""
                height={60}
                width={60}
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.allContexts}>
                <div className={styles.context}>
                  Masters in Computer Engineering
                </div>
                <div className={styles.company}>Stanford University</div>
                <div className={styles.duration}>2022-present</div>
                <div className={styles.desc}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Animi, totam.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.education}>
            <div className={styles.detail}>
              <Image
                src=""
                alt=""
                height={60}
                width={60}
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.allContexts}>
                <div className={styles.context}>Pokhara University</div>
                <div className={styles.company}>Be. Information Technology</div>
                <div className={styles.duration}>2017-2022</div>
                <div className={styles.desc}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Animi, totam.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserEducations;
