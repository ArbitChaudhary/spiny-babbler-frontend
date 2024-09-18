import Image from 'next/image';
import styles from './UserExperience.module.scss';

const UserExperience = () => {
  return (
    <div className={styles.container}>
      <div className={styles.About}>
        <div className={styles.title}>
          <h1>Experiences</h1>
        </div>
        <div className={styles.experiences}>
          {/* start of experiences list */}
          <div className={styles.experience}>
            <div className={styles.detail}>
              <Image
                src=""
                alt=""
                height={60}
                width={60}
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.allContexts}>
                <div className={styles.context}>Web Developer</div>
                <div className={styles.company}>Hitachi</div>
                <div className={styles.duration}>5years</div>
                <div className={styles.desc}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Animi, totam.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.experience}>
            <div className={styles.detail}>
              <Image
                src=""
                alt=""
                height={60}
                width={60}
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.allContexts}>
                <div className={styles.context}>Web Developer</div>
                <div className={styles.company}>Hitachi</div>
                <div className={styles.duration}>5years</div>
                <div className={styles.desc}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Animi, totam.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.experience}>
            <div className={styles.detail}>
              <Image
                src=""
                alt=""
                height={60}
                width={60}
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.allContexts}>
                <div className={styles.context}>Web Developer</div>
                <div className={styles.company}>Hitachi</div>
                <div className={styles.duration}>5years</div>
                <div className={styles.desc}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Animi, totam.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.experience}>
            <div className={styles.detail}>
              <Image
                src=""
                alt=""
                height={60}
                width={60}
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.allContexts}>
                <div className={styles.context}>Web Developer</div>
                <div className={styles.company}>Hitachi</div>
                <div className={styles.duration}>5years</div>
                <div className={styles.desc}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Animi, totam.
                </div>
              </div>
            </div>
          </div>
          {/* end of experience list */}
        </div>
      </div>
    </div>
  );
};

export default UserExperience;
