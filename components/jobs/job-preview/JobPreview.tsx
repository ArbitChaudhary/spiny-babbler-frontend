import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';
import DateRangeIcon from '@mui/icons-material/DateRange';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import WorkIcon from '@mui/icons-material/Work';
import { Avatar } from '@mui/material';
import Image from 'next/image';
import CustomButton from '../../../common/ui/button/Button';
import styles from './JobPreview.module.scss';

const JobPreviews = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.jobBody}>
          {/* start of top Heading */}
          <div className={styles.jobTop}>
            <div className={styles.jobTitle}>React Frontend Developer</div>
            <div className={styles.jRight}>
              <ShareIcon />
              <MoreVertIcon />{' '}
            </div>
          </div>
          {/* end of top heading */}
          {/* start of job locations and other info */}
          <div className={styles.jobLocations}>
            <div className={styles.cName}>Silicontech Nepal</div>
            <div className={styles.jobLocation}>Kathmandu, Nepal</div> <hr />
            <div className={styles.posted}> 5 days ago</div> <hr />
            <div className={styles.applicants}>50 applicants</div>
          </div>
          {/* end of job locations and other info */}
          {/* start of jobPlace Type */}
          <div className={styles.jobplaceType}>
            <WorkIcon />
            <div className={styles.placeType}>
              <span>On site</span>
              <span>Internship</span>
            </div>
          </div>
          {/* End of JobType Place */}
          {/* start of closing time */}
          <div className={styles.closingTime}>
            <DateRangeIcon />
            <span>Closing as 2024-01-01 12:00 am</span>
          </div>
          {/* end of closing time */}
          {/* start of details Of Job Poster */}
          <div className={styles.jobOwner}>
            <Avatar className={styles.avatar}>
              <Image
                src="data:image/jpeg;base64,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"
                alt=""
                fill
              />
            </Avatar>
            <div className={styles.forOwner}>
              <div className={styles.ownerName}>User Name</div>
              <span> is hiring for this post</span>
            </div>
          </div>
          {/* end of details of job poster */}
          {/* start of skills required */}
          <div className={styles.reqSkills}>
            <ChecklistRtlIcon />
            <div className={styles.skills}>
              <div className={styles.skill}>Node.js, React.js, Typescript</div>
              <span>+5 more</span>
            </div>
          </div>
          {/* end of skills required */}
          {/* start of buttons */}
          <div className={styles.applyButtons}>
            <CustomButton>Apply</CustomButton>
            <CustomButton>Save</CustomButton>
          </div>
          {/* end of buttons */}
          {/* start of About Job */}
          <div className={styles.aboutJob}>
            <span className={styles.aboutJobHead}>About Job</span>
            <div className={styles.jobDesc}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              minima esse sit aliquam, cumque labore similique pariatur sequi
              aspernatur error reprehenderit minus autem debitis eaque hic
              assumenda? Dolorem, ut. Accusantium dolor temporibus asperiores
              quibusdam sequi molestiae vitae rem in nobis quidem amet nihil,
              enim omnis sint ducimus culpa adipisci? Placeat beatae assumenda
              sint molestias explicabo recusandae, fugit eaque sit deleniti
              praesentium, quo officiis autem dolor, distinctio eius doloribus
              aliquid inventore accusantium. Voluptates dolorum rem aliquam
              iste. Placeat amet, adipisci vitae suscipit voluptatem quas
              impedit assumenda magni corrupti laudantium minus, minima mollitia
              deserunt corporis veritatis? Doloribus cumque corporis odio nemo
              velit.
            </div>
          </div>
          {/* end of About Job */}
          {/* start of required Skills */}
          <div className={styles.requiredSkills}>
            <span>Required Skills :</span>
            <div className={styles.requiredSkillList}>
              {/* <div className={styles.requiredSkill}> */}
              <span>Node.js/Express.js</span>
              <span>Flutter</span>
              <span>React.js</span>
              <span>Typescript</span>
            </div>
            {/* </div> */}
          </div>
          {/* end of required Skills */}
          {/* start of job responsibilities */}
          <div className={styles.jobResponsibilities}>
            <div className={styles.jobResponsibilityHead}>Responsibilites</div>
            {/* start of responsibilities list */}
            <div className={styles.jobResponsibilityList}>
              <div className={styles.title}>Sales</div>
              <div className={styles.contextList}>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
                  esse?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  modi ea nobis.
                </li>
                <li>Lorem ipsum dolor sit amet.</li>
              </div>
            </div>
            {/* end of job responsiblities */}

            {/* start of responsibilities list */}
            <div className={styles.jobResponsibilityList}>
              <div className={styles.title}>Solutiions and Architecture</div>
              <div className={styles.contextList}>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
                  esse?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  modi ea nobis.
                </li>
                <li>Lorem ipsum dolor sit amet.</li>
              </div>
            </div>
            {/* end of job responsiblities */}

            {/* start of responsibilities list */}
            <div className={styles.jobResponsibilityList}>
              <div className={styles.title}>Technical Understandings</div>
              <div className={styles.contextList}>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
                  esse?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  modi ea nobis.
                </li>
                <li>Lorem ipsum dolor sit amet.</li>
              </div>
            </div>
            {/* end of job responsiblities */}

            {/* start of responsibilities list */}
            <div className={styles.jobResponsibilityList}>
              <div className={styles.title}>Must Know</div>
              <div className={styles.contextList}>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
                  esse?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  modi ea nobis.
                </li>
                <li>Lorem ipsum dolor sit amet.</li>
              </div>
            </div>

            {/* end of responsibilities list */}

            {/* start of responsibilities list */}
            <div className={styles.jobResponsibilityList}>
              <div className={styles.title}>Support</div>
              <div className={styles.contextList}>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
                  esse?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  modi ea nobis.
                </li>
                <li>Lorem ipsum dolor sit amet.</li>
              </div>
            </div>
            {/* end of job responsiblities */}

            {/* start of responsibilities list */}
            <div className={styles.jobResponsibilityList}>
              <div className={styles.title}>Desired Skills and Experiences</div>
              <div className={styles.contextList}>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
                  esse?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  modi ea nobis.
                </li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
                  esse?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  modi ea nobis.
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
                  esse?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  modi ea nobis.
                </li>
              </div>
            </div>
            {/* end of job responsiblities */}
            {/* start of responsibilities list */}
            <div className={styles.jobResponsibilityList}>
              <div className={styles.title}>Benefits</div>
              <div className={styles.contextList}>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
                  esse?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  modi ea nobis.
                </li>
                <li>Lorem ipsum dolor sit amet.</li>
              </div>
            </div>
            {/* end of job responsiblities */}
            {/* start of hiring team */}
            <div className={styles.hiringBox}>
              <div className={styles.hiringHead}>
                <span>About Hirer</span>
              </div>
              <div className={styles.hiringProfile}>
                <div className={styles.pLeft}>
                  <Avatar className={styles.avatar}>
                    <Image src="" alt="" fill />
                  </Avatar>
                  <div className={styles.aboutProfile}>
                    <div className={styles.uName}>Author Name</div>
                    <div className={styles.flex}>
                      <div className={styles.authorPost}>
                        Recruiting Manager
                      </div>
                      <div className={styles.recruitment}>Recruitment</div>
                    </div>
                    <div className={styles.jobPoster}>Job Poster</div>
                  </div>
                </div>
                <CustomButton>Message</CustomButton>
              </div>
              <div className={styles.about}>
                <span>About Author</span>
                <div className={styles.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt autem assumenda tempora, inventore cumque minus enim,
                  beatae eveniet nisi, illum tenetur voluptate impedit
                  distinctio asperiores error. Laboriosam suscipit vel excepturi
                  exercitationem, natus maiores ratione facere pariatur amet
                  atque quos dolorem ullam. Excepturi saepe ad temporibus id
                  quis soluta. Tempora, tenetur?
                </div>
              </div>
            </div>
            {/* end of hiring team */}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobPreviews;
