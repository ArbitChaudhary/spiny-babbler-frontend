import Image from 'next/image';
import { useState } from 'react';
import styles from './About.module.scss';
import AboutUser from './about-user/AboutUser';
import UserEducations from './education/UserEducations';
import UserExperience from './experiences/UserExperience';
import UserSkills from './user-skills/UserSkills';

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const titles = [
    'All',
    'About',
    'Experiences',
    'Educations',
    'Skills',
    'Other',
  ];

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.moreFeature}>
          {titles.map((title, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`${
                activeIndex === index ? styles.back : styles.normal
              }`}
            >
              {title}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.right}>
        {/* start of overall */}

        {activeIndex === 1 && <AboutUser />}
        {activeIndex === 2 && <UserExperience />}
        {activeIndex === 3 && <UserEducations />}
        {activeIndex === 4 && <UserSkills />}

        {activeIndex === 0 && (
          <>
            {/* start of about section */}
            <div className={styles.About}>
              <div className={styles.title}>
                <h1>About You</h1>
              </div>
              <div className={styles.para}>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Vitae obcaecati doloribus dolorum saepe est natus magni quia
                  odit velit. Est iure velit sequi recusandae qui, aut at
                  debitis facere fugit ipsum deserunt neque quod magnam dolorem
                  aperiam. Non, vel nobis?
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempore, nisi quas. Culpa reprehenderit amet excepturi
                  quisquam necessitatibus odio provident facilis, deserunt
                  cumque dolorum laboriosam ex aliquam perspiciatis rem corporis
                  aperiam.
                </p>
              </div>
            </div>
            {/* end of about section */}

            {/* start of experinece list */}
            <div className={styles.About}>
              <div className={styles.title}>
                <h1>Experiences</h1>
              </div>
              <div className={styles.experiences}>
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
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Animi, totam.
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
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Animi, totam.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end of experiences list */}

            {/* start of educatons list */}
            <div className={styles.About}>
              <div className={styles.title}>
                <h1>Educations</h1>
              </div>
              <div className={styles.experiences}>
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
                      <div className={styles.context}>
                        Masters in Computer Engineering
                      </div>
                      <div className={styles.company}>Stanford University</div>
                      <div className={styles.duration}>2022-present</div>
                      <div className={styles.desc}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Animi, totam.
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
                      <div className={styles.context}>Pokhara University</div>
                      <div className={styles.company}>
                        Be. Information Technology
                      </div>
                      <div className={styles.duration}>2017-2022</div>
                      <div className={styles.desc}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Animi, totam.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end of educations */}

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
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Animi, totam.
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
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Animi, totam.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end of skills */}
          </>
        )}

        {/* end of over all */}
      </div>
    </div>
  );
};

export default About;
