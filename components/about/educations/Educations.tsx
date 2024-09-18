import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
// import AddEducation from '../../../pages/add-education';
import CloseIcon from '@mui/icons-material/Close';
import { TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { Controller, useForm } from 'react-hook-form';
import CustomButton from '../../../common/ui/button/Button';
import Education from '../../add-educations/Education';
import styles from './Educations.module.scss';

export interface IIEducations {
  user: {
    educations: [
      {
        context: string;
        instituteName: string;
        startDate: Date;
        endDate: Date;
      }
    ];
  };
}

const Educations: React.FC<IIEducations> = ({ user: { educations } }) => {
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

  const closeForm = () => {
    setActive(false);
  };
  const handleEditForm = () => {
    setEditForm(true);
  };

  const closeEditForm = () => {
    setEditForm(false);
  };

  return (
    <>
      {active && (
        <div className={styles.formCard} id="formCard">
          <div ref={boxRef} className={styles.AddForm}>
            <div className={styles.closeForm}>
              <span>Add Educations</span>
              <CloseIcon onClick={closeForm} />
            </div>
            <Education />
          </div>
        </div>
      )}
      {editForm && (
        <div className={styles.formCard} id="formCard">
          <div ref={boxRef} className={styles.AddForm}>
            <div className={styles.closeForm}>
              <span>Add Educations</span>
              <CloseIcon onClick={closeEditForm} />
            </div>
            <EducationEditForm />
          </div>
        </div>
      )}
      <div className={styles.container}>
        <div className={styles.About}>
          <div className={styles.title}>
            <h1>Educations</h1>
          </div>
          <div className={styles.add} onClick={handleClick}>
            <a href="#formCard">
              <AddIcon />
              <span>Add Educations</span>
            </a>
          </div>

          <div className={styles.educations}>
            {/* start of education */}
            {educations.map((ed, idx) => (
              <div className={styles.education} key={idx}>
                <div className={styles.detail}>
                  <Image
                    src=""
                    alt=""
                    height={60}
                    width={60}
                    style={{ objectFit: 'cover' }}
                  />
                  <div className={styles.allContexts}>
                    <div className={styles.context}>
                      {ed.context}
                      {/* Masters in Computer Engineering */}
                    </div>
                    <div className={styles.company}>{ed.instituteName}</div>
                    <div className={styles.duration}>{ed.startDate}</div>
                    <div className={styles.duration}>{ed.endDate}</div>
                  </div>
                </div>
                <div className={styles.edit}>
                  <EditIcon onClick={handleEditForm} />
                </div>
              </div>
            ))}
            {/* end of education */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Educations;

{
  /* FOR EDIT FORM  */
}

const EducationEditForm = () => {
  const { register, handleSubmit, control } = useForm();
  return (
    <>
      <form className={styles.EditEducationForm}>
        <div className={styles.formInputs}>
          <div className={styles.flexForm}>
            <TextField label="Context" {...register('context')} />
          </div>
          <div className={styles.flexForm}>
            <TextField label="Institute Name" {...register('instituteName')} />
          </div>
          <div className={styles.flexForm}>
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
          <div className={styles.flexForm}>
            <Controller
              control={control}
              name="endDate"
              render={({ field: { onChange, value, name, ref } }) => (
                <DatePicker
                  onChange={onChange}
                  value={value}
                  name={name}
                  ref={ref}
                  label="End Date"
                />
              )}
            />
          </div>
          {/* <div className={styles.flexForm}>
              <span className={styles.title}>Image</span>
              <input type="file" className={styles.image} />
            </div> */}
        </div>
        <div className={styles.button}>
          <CustomButton>DELETE</CustomButton>
          <CustomButton>UPDATE</CustomButton>
        </div>
      </form>
    </>
  );
};
