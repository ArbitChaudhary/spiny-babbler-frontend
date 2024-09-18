import { TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UserContext } from '../../contexts/user.context';
import { skillService } from '../../services/services/skills.service';
import styles from './skills.module.scss';

export interface IISkills {
  name: string;
  description: string;
}

export interface ISkill {}

const Skills: React.FC<ISkill> = () => {
  const { register, handleSubmit } = useForm<IISkills>();
  const router = useRouter();
  const [skills, setSkills] = useState([]);

  const { addSkills } = useContext(UserContext);

  const onSubmit: SubmitHandler<IISkills> = async (data) => {
    const result = await addSkills(data.name, data.description);

    if (result.data) {
      router.push('/profile');
      console.log('Skills added successfully!!');
    } else {
      console.log('Error :>>', result.error);
    }
  };

  useEffect(() => {
    const skillSetup = async () => {
      const skills = await skillService.getAll();
      return setSkills(skills.docs);
    };
    skillSetup();
  }, []);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.skill}>
          <h1>
            Add Skills
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              facere.
            </p>
          </h1>
          <form
            className={styles.addSkillForm}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={styles.formInputs}>
              <div className={styles.inputs}>
                <span>Skills</span>
                <select>
                  {skills.map((skill, idx) => (
                    <option value={skill._id} key={idx}>
                      {skill.name}
                    </option>
                  ))}
                </select>
              </div>
              {/* <div className={styles.inputs}> */}
              <TextField
                label="Description"
                variant="outlined"
                {...register('description')}
              />
            </div>
            <div className={styles.button}>
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Skills;
