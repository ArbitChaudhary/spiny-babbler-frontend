import { IChildrenProps } from '../../../common/interfaces/children-props.interface';
import Footer from '../../footer/Footer';
import Topbar from '../../topbar/topbar/Topbar';
import styles from './PrimaryLayout.module.scss';

export interface IPrimaryLayout extends IChildrenProps {}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Topbar />
      <div className={styles.main}>{children}</div>
      <Footer />
    </div>
  );
};

export default PrimaryLayout;
