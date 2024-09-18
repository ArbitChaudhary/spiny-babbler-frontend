import { List, ListItem, ListItemButton, Paper } from '@mui/material';
import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/user.context';
import styles from './About.module.scss';
import BasicInfo from './basic-info/BasicInfo';
import Educations from './educations/Educations';
import Experiences from './experiences/Experiences';
import Skills from './skills/Skills';

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const titles = ['Basic', 'Experience', 'Education', 'Skills', 'Others'];
  const { user } = useContext(UserContext);


  const handleClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <>
      {user && (
        <div className={styles.container}>
          <div className={styles.left}>
            <Paper>
              <List className={styles.list}>
                {titles.map((title, idx) => (
                  <ListItem key={idx} disablePadding>
                    <ListItemButton
                      selected={titles.toString() === title}
                      onClick={() => handleClick(idx)}
                      className={`${activeIndex === idx ? styles.back : styles.normal
                        }`}
                    >
                      {title}
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Paper>
            {/* <div className={styles.titles}>
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
            </div> */}
          </div>
          <div className={styles.right}>
            {activeIndex === 0 && <BasicInfo />}
            {activeIndex === 1 && <Experiences user={user} />}
            {activeIndex === 2 && <Educations user={user} />}
            {activeIndex === 3 && <Skills user={user} />}
          </div>
        </div>
      )}
    </>
  );
};

export default About;
