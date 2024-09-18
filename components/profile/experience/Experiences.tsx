import { Grid } from '@mui/material';
import Image from 'next/image';
import CardContainer from '../../../common/ui/card-container/CardContainer';
import styles from './Experiences.module.scss';

export interface IExperience {
  experience: any;
}

const Experinece: React.FC<IExperience> = ({ experience }) => {
  console.log(experience);
  return (
    <div className={styles.experience}>
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.title}>{experience.context}</div>
          <div className={styles.company}>{experience.companyName}</div>
          <div className={styles.time}>
            {`${
              experience?.startDate
                ? new Date(experience.startDate).toDateString()
                : ''
            } - ${
              experience?.endDate
                ? new Date(experience.endDate).toDateString()
                : ''
            }`}
          </div>
        </div>
        <div className={styles.image}>
          <Image src={'https://picsum.photos/200/300'} alt={'image'} fill />
        </div>
      </div>
    </div>
  );
};

export interface IExperiences {
  experiences: any;
}

const Experiences: React.FC<IExperiences> = ({ experiences }) => {
  return (
    <CardContainer title="Experiences">
      <Grid container spacing={2} className={styles.experienceList}>
        {experiences.map((exp) => (
          <Grid item xs={12} sm={6}>
            <Experinece experience={exp} />
          </Grid>
        ))}
      </Grid>
    </CardContainer>
  );
};

export default Experiences;
