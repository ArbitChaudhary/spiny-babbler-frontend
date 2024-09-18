import styles from './BasicInfo.module.scss';

const BasicInfo = () => {
  return (
    <div className={styles.container}>
      {/* start of basic info */}
      <div className={styles.About}>
        <div className={styles.title}>
          <h1>About</h1>
        </div>
        {/* start of about */}
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
          {/* start of basic info */}
          <div className={styles.basicInfo}>
            <div className={styles.info}>
              <span>Contact Email</span>
              <span>heroalom@gmail.com</span>
            </div>
            <div className={styles.info}>
              <span>Phone Number</span>
              <span>9898989898</span>
            </div>
            <div className={styles.info}>
              <span>Address</span>
              <span>Kathmandu, Nepal</span>
            </div>
            <div className={styles.info}>
              <span>Birth Date</span>
              <span>July 25</span>
            </div>
            <div className={styles.info}>
              <span>Birth Year</span>
              <span>9099</span>
            </div>
            <div className={styles.info}>
              <span>Gender</span>
              <span>Male</span>
            </div>
            <div className={styles.info}>
              <span>Interested in</span>
              <span>Art Desing</span>
            </div>
            <div className={styles.info}>
              <span>Company</span>
              <span>Silicontech Nepal Pvt. Ltd.</span>
            </div>
            <div className={styles.info}>
              <span>Preferred Language</span>
              <span>heroalom@gmail.com</span>
            </div>
            <div className={styles.info}>
              <span>Preferred Language</span>
              <span>Facebook</span>
            </div>
          </div>
          {/* end of basic inofo */}
        </div>
        {/* end of about */}
      </div>

      {/* end of basic info */}
    </div>
  );
};

export default BasicInfo;
