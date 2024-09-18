import Image from 'next/image';
import styles from './UserSkills.module.scss';

const UserSkills = () => {
  return (
    <div className={styles.container}>
      {/* start of skills */}
      <div className={styles.About}>
        <div className={styles.title}>
          <h1>Skills</h1>
        </div>
        <div className={styles.experiences}>
          <div className={styles.experience}>
            <div className={styles.detail}>
              <Image
                src=""
                alt=""
                height={50}
                width={50}
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.allContexts}>
                <div className={styles.context}>Python</div>
                {/* <div className={styles.company}>Hitachi</div> */}
                {/* <div className={styles.duration}>5years</div> */}
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
                height={50}
                width={50}
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.allContexts}>
                <div className={styles.context}>MERN Stack</div>
                {/* <div className={styles.company}>Hitachi</div> */}
                {/* <div className={styles.duration}>5years</div> */}
                <div className={styles.desc}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Animi, totam.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of skills */}
    </div>
  );
};

export default UserSkills;
