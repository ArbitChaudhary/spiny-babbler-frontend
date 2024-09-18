import { Create } from '@mui/icons-material';
import { Button } from '@mui/material';
import Link from 'next/link';
import styles from './CreateCompanyButton.module.scss';

export interface ICreateCompanyButton {}

const CreateCompanyButton: React.FC<ICreateCompanyButton> = () => {
  return (
    <Link href={'/company/create-company'} className={styles.button}>
      <Button variant={'contained'} startIcon={<Create />}>
        Create a new company
      </Button>
    </Link>
  );
};

export default CreateCompanyButton;
