import styles from './BaseTemplate.module.scss';

export interface IBaseTemplate {
}

const BaseTemplate: React.FC<IBaseTemplate> = () => {
    return <div className={styles.container}>BaseTemplate</div>
}

export default BaseTemplate
