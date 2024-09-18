import { Delete } from '@mui/icons-material';
import ImageIcon from '@mui/icons-material/Image';
import { Avatar, TextField } from '@mui/material';

import { DatePicker } from '@mui/x-date-pickers';
import Image from 'next/image';
import { Controller, useForm } from 'react-hook-form';
import CustomButton from '../../common/ui/button/Button';
import styles from './ProfileEdit.module.scss';
const ProfileEdit = () => {
  const { register, control } = useForm();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.left}>
            {/* Profile */}

            <div className={styles.profileImage}>
              <Avatar className={styles.image}>
                <Image src="" alt="" fill />
              </Avatar>
              <div className={styles.userName}> Hero Alom </div>
              <div className={styles.buttons}>
                <button>
                  <ImageIcon /> Update
                </button>
                <button>
                  <Delete /> Delete
                </button>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.bio}>
              <div className={styles.title}>
                <div>Basic Info</div>
                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing.
                </span>
              </div>
              <form className={styles.basicForm}>
                <div className={styles.input}>
                  <div className={styles.formInputs}>
                    <TextField label="First Name" />
                  </div>
                  <div className={styles.formInputs}>
                    <TextField label="Family Name" />
                  </div>
                  <div className={styles.formInputs}>
                    <TextField label="Email" />
                  </div>

                  <div className={styles.formInputs}>
                    <Controller
                      control={control}
                      name="foundationDate"
                      render={({ field: { onChange, value, name, ref } }) => (
                        <DatePicker
                          onChange={onChange}
                          value={value}
                          name={name}
                          ref={ref}
                          label="Date of Birth"
                        />
                      )}
                    />
                  </div>

                  <div className={styles.formInputs}>
                    <TextField label="Contact Number" />
                  </div>

                  <div className={styles.formInputs}>
                    <TextField label="Address" />
                  </div>
                </div>
                <TextField label="Headline" />
                <TextField label="About Me" />
                <div className={styles.submit}>
                  <CustomButton>UPDATE</CustomButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileEdit;
