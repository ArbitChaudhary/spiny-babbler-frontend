import { Avatar } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import CustomButton from '../../common/ui/button/Button';
import AboutCompany from './about-company/AboutCompany';
import CompanyJobs from './company-jobs/CompanyJobs';
import CompanyLife from './company-life/CompanyLife';
import CompanyUpdates from './company-updates/CompanyUpdates';
import styles from './company.module.scss';

const Comapny = () => {
  const titles = ['About', 'Update', 'Jobs', 'Life', 'Members'];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.image}>
            <Image
              src="https://vastphotos.com/files/uploads/photos/10359/photo-of-fall-foliage-m.jpg?v=20220712073521"
              alt="Image"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <Avatar className={styles.logo}>
              <Image
                src="https://silicontechnepal.com.np/static/media/silicontech-transparent.69d53de28e59ff4b6157.png"
                alt="Logo"
                fill
                style={{ objectFit: 'contain' }}
              />
            </Avatar>

            <div className={styles.detail}>
              <div className={styles.other}>
                <div className={styles.name}>Silicontech Nepal Pvt. Ltd.</div>
                <div className={styles.industry}>
                  {' '}
                  <span>Software Company</span>
                  <span>Kathmandu, Nepal</span> {/* <PlaceIcon /> */}
                </div>
                <div className={styles.employee}>25 Employees</div>
                <div className={styles.followers}>10,0000 followers</div>
              </div>
            </div>
          </div>
          <div className={styles.bottomRight}>
            <CustomButton>Visit Website</CustomButton>
            <CustomButton>Follow </CustomButton>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.left}>
            <div className={styles.titles}>
              {titles.map((title, index) => (
                <div
                  key={index}
                  onClick={() => handleClick(index)}
                  className={` ${
                    activeIndex === index ? styles.coloredBack : styles.normal
                  }`}
                >
                  {title}
                </div>
              ))}
            </div>

            <div className={styles.companyDetails}>
              {activeIndex === 0 && <AboutCompany />}
              {activeIndex === 1 && <CompanyUpdates />}
              {activeIndex === 2 && <CompanyJobs />}
              {activeIndex === 3 && <CompanyLife />}
            </div>
          </div>
          <div className={styles.right}>
            {/* START OF PAGES */}

            <div className={styles.pages}>
              <h1>Similar pages</h1>
              <div className={styles.page}>
                <div className={styles.profile}>
                  <Avatar className={styles.avatar}>
                    <Image src="" alt="" fill style={{ objectFit: 'cover' }} />
                  </Avatar>
                  <div className={styles.title}>
                    <span>Amazon</span>
                    <span>Internet</span>
                    <span>1K followers</span>
                  </div>
                </div>
                <CustomButton>Follow</CustomButton>
              </div>
              <div className={styles.page}>
                <div className={styles.profile}>
                  <Avatar className={styles.avatar}>
                    <Image src="" alt="" fill style={{ objectFit: 'cover' }} />
                  </Avatar>
                  <div className={styles.title}>
                    <span>Microsoft</span>
                    <span>Software Company</span>
                    <span>100K followers</span>
                  </div>
                </div>
                <CustomButton>Follow</CustomButton>
              </div>
              <div className={styles.page}>
                <div className={styles.profile}>
                  <Avatar className={styles.avatar}>
                    <Image src="" alt="" fill style={{ objectFit: 'cover' }} />
                  </Avatar>
                  <div className={styles.title}>
                    <span>YourTube</span>
                    <span>Entertainment</span>
                    <span>1K followers</span>
                  </div>
                </div>
                <CustomButton>Follow</CustomButton>
              </div>
            </div>
            {/* end of pages */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Comapny;
