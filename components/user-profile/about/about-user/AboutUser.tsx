import styles from './AboutUser.module.scss';

const AboutUser = () => {
  return (
    <div className={styles.container}>
      <div className={styles.About}>
        <div className={styles.title}>
          <h1>About</h1>
        </div>
        <div className={styles.para}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
            obcaecati doloribus dolorum saepe est natus magni quia odit velit.
            Est iure velit sequi recusandae qui, aut at debitis facere fugit
            ipsum deserunt neque quod magnam dolorem aperiam. Non, vel nobis?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
            nisi quas. Culpa reprehenderit amet excepturi quisquam
            necessitatibus odio provident facilis, deserunt cumque dolorum
            laboriosam ex aliquam perspiciatis rem corporis aperiam.
          </p>
        </div>
      </div>
      <div className={styles.About}>
        <div className={styles.title}>
          <h1>Overview</h1>
        </div>
        <div className={styles.para}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
            obcaecati doloribus dolorum saepe est natus magni quia odit velit.
            Est iure velit sequi recusandae qui, aut at debitis facere fugit
            ipsum deserunt neque quod magnam dolorem aperiam. Non, vel nobis?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
            nisi quas. Culpa reprehenderit amet excepturi quisquam
            necessitatibus odio provident facilis, deserunt cumque dolorum
            laboriosam ex aliquam perspiciatis rem corporis aperiam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUser;
