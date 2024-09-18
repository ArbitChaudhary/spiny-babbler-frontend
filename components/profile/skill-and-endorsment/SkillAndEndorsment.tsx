import { Grid } from '@mui/material';
import Image from 'next/image';
import CardContainer from '../../../common/ui/card-container/CardContainer';
import styles from './SkillAndEndorsment.module.scss';

export interface ISkill {
    skill: any;
}

const Skill: React.FC<ISkill> = ({ skill }) => {
    console.log(skill)
    return (
        <div className={styles.skill}>
            <div className={styles.image}>
                <Image src={'https://picsum.photos/200/300'} alt={'image'} fill />
            </div>
            <div className={styles.detail}>
                {skill.name}
            </div>
        </div>
    )
}

export interface ISkillAndEndorsment {
    skills: any;
}

const SkillAndEndorsment: React.FC<ISkillAndEndorsment> = ({ skills }) => {
    return (
        <CardContainer title='Skills & Endorsment'>
            <Grid container className={styles.skillList} spacing={2}>
                {skills.map(skill => (
                    <Grid item xs={12} sm={4} md={3}>
                        <Skill skill={skill} />
                    </Grid>
                ))}
            </Grid>
        </CardContainer>
    )
}

export default SkillAndEndorsment
