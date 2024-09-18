import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
// import AddExperiences from '../../../pages/add-experience';
import CloseIcon from '@mui/icons-material/Close';
import { TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { Controller, useForm } from 'react-hook-form';
import CustomButton from '../../../common/ui/button/Button';
import Experiences from '../../add-experience/Experience';
import styles from './Experiences.module.scss';

export interface IIExperience {
  user: {
    experiences: [
      {
        context: string;
        companyName: string;
        startDate: Date;
        endDate: Date;
      }
    ];
  };
}

const Experience: React.FC<IIExperience> = ({ user: { experiences } }) => {
  const [active, setActive] = useState(false);
  const boxRef = useRef(null);
  const [editForm, setEditForm] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setActive(false);
        setEditForm(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setActive(!active);
  };

  const CloseForm = () => {
    setActive(false);
  };

  const handleEditForm = () => {
    setEditForm(true);
  };
  const CloseEditForm = () => {
    setEditForm(false);
  };
  return (
    <>
      {active && (
        <div className={styles.formCard} id="formCard">
          <div ref={boxRef} className={styles.AddForm}>
            <div className={styles.closeForm}>
              <span>Add Experinces</span> <CloseIcon onClick={CloseForm} />{' '}
            </div>
            <Experiences />
          </div>
        </div>
      )}
      {editForm && (
        <div className={styles.formCard} id="formCard">
          <div ref={boxRef} className={styles.AddForm}>
            <div className={styles.closeForm}>
              <span>Edit Experince</span> <CloseIcon onClick={CloseEditForm} />{' '}
            </div>
            <ExperienceEditForm />
          </div>
        </div>
      )}

      <div className={styles.container}>
        <div className={styles.About}>
          <div className={styles.title}>
            <h1>Experiences</h1>
          </div>
          <div className={styles.add} onClick={handleClick}>
            <a href="#formCard">
              <AddIcon />
              <span>Add Experience</span>
            </a>
          </div>

          {/* start of experiences list */}
          <div className={styles.experiences}>
            {/* start of experience */}
            {experiences.map((ex, idx) => (
              <div className={styles.experience} key={idx}>
                <div className={styles.detail}>
                  <Image
                    src=""
                    alt=""
                    height={60}
                    width={60}
                    style={{ objectFit: 'cover' }}
                  />
                  <div className={styles.allContexts}>
                    <div className={styles.context}>{ex.context}</div>
                    <div className={styles.company}>{ex.companyName}</div>
                    <div className={styles.duration}>{ex.startDate}</div>
                    <div className={styles.duration}>{ex.endDate}</div>
                  </div>
                </div>
                <div className={styles.edit}>
                  <EditIcon onClick={handleEditForm} />
                </div>
              </div>
            ))}
            {/* end of experinece */}

            {/* start of experience */}

            <div className={styles.experience}>
              <div className={styles.detail}>
                <Image
                  src=""
                  alt=""
                  height={60}
                  width={60}
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.allContexts}>
                  <div className={styles.context}>Context</div>
                  <div className={styles.company}>Hitachi</div>
                  <div className={styles.duration}>5years</div>
                  <div className={styles.desc}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Animi, totam.
                  </div>
                </div>
              </div>
              <div className={styles.edit}>
                <EditIcon />
              </div>
            </div>

            {/* end of experience */}
          </div>
          {/* end of experience list */}
        </div>
      </div>
    </>
  );
};

export default Experience;

{
  /* Experience Edit Form */
}

export interface IExperienceEditForm {}

const ExperienceEditForm: React.FC<IExperienceEditForm> = () => {
  const { register, handleSubmit, control } = useForm();
  return (
    <>
      <form className={styles.EditExperienceForm}>
        <div className={styles.formInputs}>
          <div className={styles.inputs}>
            <TextField label="Context" {...register('context')} />
          </div>
          <div className={styles.inputs}>
            <TextField label="Company" {...register('companyName')} />
          </div>
          <div className={styles.inputs}>
            <Controller
              control={control}
              name="startDate"
              render={({ field: { onChange, value, name, ref } }) => (
                <DatePicker
                  onChange={onChange}
                  value={value}
                  name={name}
                  ref={ref}
                  label="Start Date"
                />
              )}
            />
          </div>
          <div className={styles.inputs}>
            <Controller
              control={control}
              name="startDate"
              render={({ field: { onChange, value, name, ref } }) => (
                <DatePicker
                  onChange={onChange}
                  value={value}
                  name={name}
                  ref={ref}
                  label="Start Date"
                />
              )}
            />
          </div>
        </div>
        <div className={styles.button}>
          <CustomButton>DELETE</CustomButton>
          <CustomButton>UPDATE</CustomButton>
        </div>
      </form>
    </>
  );
};
