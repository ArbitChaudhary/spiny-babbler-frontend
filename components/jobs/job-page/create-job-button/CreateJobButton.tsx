import { Create } from '@mui/icons-material';
import { Button } from '@mui/material';
import Link from 'next/link';
import styles from './CreateJobButton.module.scss';

export interface ICreateJobButton {}

const CreateJobButton: React.FC<ICreateJobButton> = () => {
  return (
    <Link href={'/jobs/create'} className={styles.button}>
      <Button variant={'contained'} startIcon={<Create />}>
        Create a new Job post
      </Button>
    </Link>
  );
};

export default CreateJobButton;
