import { IChildrenProps } from '../../../common/interfaces/children-props.interface';
import Card from '../card/Card';
import styles from './CardContainer.module.scss';

export interface ICardContainer extends IChildrenProps {
  title: string;
  titleIcon?: React.ReactElement | React.ReactElement[];
}

const CardContainer: React.FC<ICardContainer> = ({
  title,
  titleIcon,
  children,
}) => {
  return (
    <Card>
      <div className={styles.container}>
        <div className={styles.title}>
          {titleIcon}
          {title}
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </Card>
  );
};

export default CardContainer;
