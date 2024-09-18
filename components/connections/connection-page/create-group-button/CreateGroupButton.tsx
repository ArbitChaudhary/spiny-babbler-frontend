import { Create } from '@mui/icons-material';
import { Button } from '@mui/material';
import Link from 'next/link';
import styles from './CreateGroupButton.module.scss';

export interface ICreateGroupButton {}

const CreateGroupButton: React.FC<ICreateGroupButton> = () => {
  return (
    <Link href={'/group/create'} className={styles.button}>
      <Button variant={'contained'} startIcon={<Create />}>
        Create a new group
      </Button>
    </Link>
  );
};

export default CreateGroupButton;
