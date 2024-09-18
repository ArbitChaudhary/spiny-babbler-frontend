import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Skills from '../../add-skills/Skills';
import styles from './Skills.module.scss';

export interface ISkill {
  user: {
    skills: [
      {
        name: string;
        description: string;
      }
    ];
  };
}

const Skill: React.FC<ISkill> = ({ user: { skills } }) => {
  const [active, setActive] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className={styles.container}>
      <div className={styles.About}>
        <div className={styles.title}>
          <h1>Skills</h1>
        </div>

        <div className={styles.add} onClick={handleClick}>
          <a href="#formCard">
            <AddIcon />
            <span>Add Skills</span>
          </a>
        </div>
        {active && (
          <div className={styles.formCard} id="formCard">
            <div ref={boxRef}>
              <Skills />
            </div>
          </div>
        )}
        <div className={styles.skills}>
          {/* start of skill */}
          {skills.map((skill, idx) => (
            <div className={styles.skill} key={idx}>
              <div className={styles.detail}>
                <Image
                  src=""
                  alt=""
                  height={50}
                  width={50}
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.allContexts}>
                  <div className={styles.context}>{skill.name}</div>
                  <div className={styles.desc}>{skill.description}</div>
                </div>
              </div>
              <div className={styles.edit}>
                <EditIcon />
              </div>
            </div>
          ))}
          {/* end of skill */}
        </div>
      </div>
    </div>
  );
};

export default Skill;
