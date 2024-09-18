import CardContainer from '../../../common/ui/card-container/CardContainer';
import styles from './AboutUser.module.scss';

export interface IAboutUser {
    aboutMe: string;
}

const AboutUser: React.FC<IAboutUser> = ({ aboutMe }) => {
    return (
        <CardContainer title='Bio'>
            <div className={styles.detail}>
                {aboutMe}
            </div>
        </CardContainer>
    )
}

export default AboutUser
