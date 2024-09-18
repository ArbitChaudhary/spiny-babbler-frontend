import Image from 'next/image';
import styles from './AboutCompany.module.scss';

const AboutCompany = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1>About</h1>
        <div className={styles.about}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            totam explicabo ipsum facilis? Nisi obcaecati illo, excepturi totam
            magni amet reprehenderit sunt earum eveniet libero repellat quos ad
            suscipit in exercitationem quod voluptas quisquam, molestias odit
            laudantium. Illum debitis hic voluptate ea voluptatibus sit
            doloremque eos quis a. Porro accusantium iure architecto esse in,
            eligendi explicabo debitis consectetur amet nisi, velit maiores et
            cumque quo quasi illo dignissimos odio! Itaque distinctio minus
            molestiae. Architecto vitae, perferendis beatae quae maiores quasi
            cum illo provident, possimus molestiae tempore unde placeat
            dignissimos! Totam quasi expedita nesciunt, iste mollitia iusto
            obcaecati fugiat odit odio.
          </p>
        </div>
      </div>
      <div className={styles.box}>
        <h1>Overview</h1>
        <div className={styles.overview}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            quam aut delectus cum vitae optio quasi libero, dolore voluptate
            eius temporibus magnam impedit dolorem cupiditate mollitia soluta
            sapiente ex iure assumenda nemo. Nostrum nemo dicta quis sequi
            expedita reprehenderit est, iure laudantium sapiente possimus fugiat
            consectetur dignissimos doloribus illum, amet enim unde. Esse
            dolores impedit quidem delectus ipsum recusandae ab eveniet? Ea
            numquam voluptas ipsam optio soluta quaerat qui exercitationem
            pariatur fugit similique et eius cumque quisquam ut, quo inventore
            possimus. Dolores error iure modi. Harum atque corporis excepturi
            assumenda dolorum iusto modi iure, quo facilis ad sit enim iste.
          </p>
        </div>
      </div>
      <div className={styles.box}>
        <h1>Location</h1>
        <div className={styles.location}>
          <Image
            src="https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2016/04/google-map.png"
            alt="location"
            fill
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
