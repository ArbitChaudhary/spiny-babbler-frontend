import AddIcon from '@mui/icons-material/Add';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import EditNoteIcon from '@mui/icons-material/EditNote';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PeopleIcon from '@mui/icons-material/People';
import { Avatar, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import CustomButton from '../../common/ui/button/Button';
import styles from './Group.module.scss';
import GroupPhoto from './GroupPhoto/GroupPhoto';
import AboutGroup from './aboutGroup/AboutGroup';
import GroupMembers from './groupMembers/GroupMembers';
import GroupTimeLine from './groupTimeline/GroupTimeLine';

const Group = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const barTitles = ['Timeline', 'Members', 'About', 'Photos'];

  const handleActive = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div className={styles.container}>
      <div className={styles.gMiddle}>
        <div className={styles.profile}>
          <div
            className={styles.topFlex}
            style={{
              backgroundImage:
                'url("https://i.pinimg.com/originals/d9/78/0d/d9780d36af9689cbb985aeb116cde4dc.jpg")',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className={styles.top}>
              <div className={styles.avatar}>
                <Avatar alt={'User'} className={styles.avatarImage}>
                  <Image
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QDw4QDxAPDg0NDw8QDw8NEA8PDhAPFREXIhURFRUYHSggGBomHRYVIjEhJSsrLi4uFyA0ODMsNygtLisBCgoKDQ0NDg0NDisZHxkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIARMAtwMBIgACEQEDEQH/xAAcAAEAAAcBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA5EAACAgIABAQEBAQDCQAAAAAAAQIDBBEFEiExBgcTQSJRYXEygZGhFCNSsRVCwQgzQ1NicoLh8P/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AxmNidEX9WKXlGN0Re1YxUWFeMXMMYv68cuIY4GPhjFaGMZCNBWjQBj445UWOZFUB16/MCwVBOqDGcX8W4GJJRuvi5tb5K/ikl7P5GMxvMrh0pJczgnLlUp86W+nX8Okuvf2A2j+HLfOyaaIOy6yEIdttrq/kvmzm3jfzGusnKvhz5Mat8s73GDds+vSPNtKPR/VmhcV43kZTjLIsdzjHljzKMVH6pRSW/qB3ynjOJKr1VfV6XKpOUpxj017p9U/uUsDj+DkScacmqc11cU3vW+/btto87lbFybKpKdc5QnFpqUW0+j3/AKIivSjq99JL/qetfcpxcJbUZRk10ai09P22cF4v4tz8qMI3XycYJaUEq9v+p8utso8F8R5eHOU6LXF2NOxSjGas69VLa3199FHoJ1ErqNJ8JeY1eRKNOZFU3SkownWpelNvsmuri9/kdCVf/wA+4Rj5VFvZSZV1lKyoDB3UGPyMc2G2osb6QNXysYGXyKABsNFHRF3XSVqqehcwqAt4UlaNRcRrJ1WBQjWUeIZtWPBStlGPM+WtN/FZY+0Ix7yl07IvbJRgnKTUYxW3J9El839Di3FOP+q8rib/AJjrvWLw6qaThTJrmc9Pu+2+m3prsgOqQ8QY3oxvnZGFc10Ta59/JJd//T9ls1fxj46qhgWWYs16t1n8PTLdctPXx2LTaaS91tbcevU5Hi2XZuVTG6U74yuri1vS/mWJSSS7bfdon8YZOJO/lwo8uPUnHaTjGclN6nFbfRxUPq3thWGyLedtvbk23KUtbk2+/bp9iTq19I9vp1INjZA2QAAAAAAABv3hvzJtxqaqbldeq5PdnqQ51X7Jc0Xv5dX+hoIA9EcB8XYmWqY8/p3XRTjGxcim1+JRe2m0/be+3TqZycTzDRkSh2+vT26rv9+z+6XyPRfhfikL8bHUr1dkKmHqTcXBWtaUpw2lzLfRte/3Ki7srLS6oylkC3trAwd9QL6+sAbDXUV41lWusqqAFGNZN6ZX5RoDVvGlTtx7seD5ZypstbT0+WvT5F/3a/RNe554yLOSMK4TnJ02zlXqMop7S/mLfVPce37nojxTJY1qy3zOHoypsinuL5pR5Ph/qctJfVxPPnij+FeTOWHZOyiXVepU6pRe+q1t/ffzb6EViq7ZQkpRfLKOtNdGn8ymRbIAAAAAAAAAAAAAAAzfhONjyF6NTtu1uPLZKvkSa5pNpdtPr9NmEK2Nkzrb5JOHNrevowPSfh7Inbi0zmnFyrjLlnLmlFNdFzaXNr5+5d2RMd4Ty6pYlKqsjdFQW5xlHXO+rjrb/u2vcytiKjHXRBVuQA21VkHEvHAoziBQ0NEzQ0BoHm5J/wCHWJOCkp1zTnKMPwT2orck+bp7b/scUweKUzdteTXW6bZztTrgoXV2P3qmluPb8L+F67b6ndcvheHk8Sy6s6tW3zjVPCV+pVfwqqgpqlNa5lZz83d6lH21rC8c8pcaUlZhquuyKbdFztljWfOLafNH7rsBxLiuJCqxqq2N1TfwTXR6+Ul7PtvW0WRnvEXh7Ixr51yxrKFKxquEpK33SSU13i32b7/XTMTn4VtFtlN0HXdTOULIS7xlF6a+v3RFW4AAAAAAAAAAAAAAXPDIRlfRGTShK2tSb7KLmttgdf8AKHhc6a7/AF4+ndzRcYzUo2KDT69ejX2+qfY6HOJWopjFLl1y6Sjpa+H5ELIlRj7ogq3RAG3uRTkQ2Q2BBohykWyDYFjxXhOPlQUMiqF0Yy5oc6+KE/acJLrGX1WmXGPRGuEYR3ywWltuT19W+r/MqNmP4zxnGw6ndlWxpqT0nLblKWvwxiusn0fRL2AvbKq38VkYNQ3LmnFPlXu+vY8w+ZXHFm8TyrYJKtS9OGtdYxb6vXvs6p458dWzwra8PDz4yvio+vdT6UI1yeuZdXLq9exwWcWpNS3zJtPffe+oVICMl1IEAAAAAAAAAAACMXpp99ez7MgT01ucoxj1lOSil8230A9WYE+aqqX9VcJdmu8V0Kk0ScPp9Omqvbfp1wht9/hil/oVZIqLO6IKlsSIGe2AAIMgyLIASyOEeHPGNNvFZZXGpTTgpwxY8nPj4s1Pr8C6prXfTfu+yZ3hmieDeDY2RHjdWRRXbGfGs5yrsipaW1yNf0vT6NfMDEeYHiHDx8nEy42WX0ZtF1U5Y0oWUyjBR5fddU5yffptnEsu6uThKCmpci9Zzkpc923zSXyT2un0Og+YksLhruwcCbtldp3QtULY4nb4YTa3ztJdXtxXvt9OaEVFsgAAAAAAAAAAAAA2Ly9xPW4pgw0n/OU9PTWoJy919DXTpnkbwqyeZdlcqdFNUquZ/wDNm4tcq+eov9UB23RLJFTRLIqLeaBNNADNaGiYAS6JdE5ACTRrEaMnCzsqyrGll4fEJ1WzVE6Y3UZMYKM242SipQklF7T2mn0NpIAeQeNQtWVkq6M43etY7I2Jqam5tva+fUsj095ieHcTJwsq63HVuRRj2SqlHcbHKMdxjtd+ul+Z5v45j11ZWTXU91VX2wg973GM2l19+xFWIAAAAAAAAAAAACri487ZwrrXNZZKMIRWluUnpLqeofB/AI4GFRjLrOMea2S/zWy6za+m+30OXeR3hh23Tz7YJ0UqVdPN/mu6bkk11STfX5/Y7fJAUGiWSKrRJIqLexAmsRADNECJAAyVkSDAgQIjQGL8U+r/AAGb6PN638Pbyci5pqXK/ijH3a6tL30eSZJ+/v16+/1PZkTyP4qxY05uVTCDrrx7p0xi98zjB6U3tvq9b/MKxIAIAAAAAAAABl/CvAbeIZdOLV0dj3OfXVda/FN/ZfvoxBsfhHxjk8L9Z4sKPUvUFKy6EpzUI7+CPxJJNvb6eyA9M8L4bVi0U41K5aaIKEE++l7v5tvbf3Lhs1by68XPimJ6k4xhk0y9O9Q2ob1uM477Jr2+jNnkyolbJGRkym2BJMEs2RAzeiBPykHECRkNE7RDQEoIkABwrzs8PyWRLIhFcqi7W0urrlJc2/tNyf8A5ndTnXnlcocMXtO2yNSaW9x5oycd+34f2YHnYEWQIoAAAAAAAAAAO0/7Pn+64h8uejS6/wBM9/T5fodZkjmPkJCiGJkfzqXk33c3oRnH1o1QjpOUe/dyf20dRkiot5FORXkiSUQLaZEnnEAZ8aAAg0SNFRkkgJGiUmZACGiy4zwejMonj5MFbTZrae0012lFrqpL5l8kUs7MqornbdONdcE25SaXt2W/cDjPijym4dhVu+ebkKDko10uNPqTk/ZTbS/PRpvGfC2NiYML7J2u+/mlUlKPJyN/BtOPXaTff3+heeYviq7iWVOUJuvEx1/KhJqMeVySU2tdZN/f9jHcY8QV3YlVMnzWVQValrmc0tfE37aWunvoK1JkACAAAAAAAACth5VlNkLapSrtqkpQnF6lGS7NHqfwfxyPEMHHylpSshq2K/y3R6TX22nr6aPKRu/lv4+nwuc67YzuwbeaUqocvPC3XSyG/sk1v6+wHoxolkjR+BebXDMq1VT9XElLShPJUFVJv2cot8v3ekb0/wBn2+RUUJoiRmgBmSDYJWAbJGybRDQEoJuUtuI5kKKp2T6qKbUU0nLS7IC18QcapwceeRdtxgm1CGueel2W/wC76HnHx15gZXE5tblTiKW66E+i6d5P3ff9WZTza8SW33Rq3y1yirJRT3tS/DFv3XTf5/kc6IqLZAAAAAAAAAAAAAAAAG6eEPMnO4eo1NrKxI6Soub3CPyrsXWP2e19DSwB6O4H5m8Kykua7+Dt1t15XwL8rF8L/VP6A84gD2sQI6IFQKWVfCquyyb1XVCU5vq9Ritt9PoiTOzaaIOy+yFNUe87JKMf1ZzjxX5wcMrhbTRCefKcZQlyP06dSWn8bW339kBj+J+edEZNY+JO2O2lOyz09r+rl0zWszzMjl80slzhuMlGFcekVzL8PXvrfV++jm/EcpW2ysUFWpdoR7Jff3LYis34u4pXlZTsqTVahCEeb31vcvom2+hhAAAAAAAAAAAAAAAAAAAAAAAD2sU8m+FcJ2WSUK64uU5yeoxiu7bKpyjz78Q+ljV4UJale1O1J9eRP4Y/qm/yRUc581/Gv+J5SjVtYmLzRq33nJ/isa+pooBFAAAAAAAAAAAAAAAAAAAAAAAAAAB7XPLvmxxJ5PEZ2b3CS5qvl6XM1Br8o7/M755gcZ/g+F5lyfLP0pV1v39SfSP99/keZPElu7aY616OJh1999VRBy/eTKMSACAAAAAAAAAAAAAAAAAAAAAAAAAAAO3f7QfFmqsPEj/xJTvn9o9Ir9W/0OOcVyFbdZYt8smtbWnpJJf2Nr84eJO/i18d/DjRrpj310juX7yf6GkgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGQ8Q5XrZmXantW5F01v+mVja/Yx4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k="
                    alt="image"
                    fill
                  />
                </Avatar>
              </div>
              {/* <div className={styles.text}>Group Name</div> */}
            </div>
            <div className={styles.bio}>
              <div className={styles.quote}>
                {' " '}Code is poetry written for machines to dance. {' " '}
              </div>
            </div>
            <div className={styles.editProfile}>
              <Link href="/edit-profile">
                <div className={styles.edit}>
                  <EditNoteIcon /> <span>Edit Profile</span>{' '}
                </div>
              </Link>
              <CameraAltIcon className={styles.camera} />
            </div>
          </div>
          <div className={styles.detail}>
            <div className={styles.generalInfo}>
              <div className={styles.text}>Group Name</div>
              <div className={styles.info}>
                <PeopleIcon />
                50 members
              </div>
            </div>
            <div className={styles.detailRight}>
              <CustomButton>Join Group</CustomButton>
            </div>
          </div>
        </div>
        {/* end of groupt profile */}

        {/* start of group body */}
        <div className={styles.bar}>
          {barTitles.map((title, index) => (
            <div
              key={index}
              onClick={() => handleActive(index)}
              className={` ${
                activeIndex === index ? styles.back : styles.normal
              } `}
            >
              {title}
            </div>
          ))}
        </div>
        {/* start of group content */}
        <div className={styles.aboutGroup}>
          {activeIndex === 0 && <GroupTimeLine />}
          {activeIndex === 1 && <GroupMembers />}
          {activeIndex === 2 && <AboutGroup />}
          {activeIndex === 3 && <GroupPhoto />}
        </div>
        {/* end of group content */}
        {/* End of group body */}
      </div>
      <div className={styles.gRight}>
        <div className={styles.box}>
          <h1>Group Admin</h1>
          {/* start of add admin */}
          <div className={styles.gAdmins}>
            <div className={styles.gAdmin}>
              <div className={styles.AdminProfile}>
                <Avatar className={styles.avatar}>
                  <Image src="" alt="" fill />
                </Avatar>
                <div className={styles.adminName}>My name is Admin</div>
              </div>
              <MoreVertIcon />
            </div>
            <div className={styles.gAdmin}>
              <div className={styles.AdminProfile}>
                <Avatar className={styles.avatar}>
                  <Image src="" alt="" fill />
                </Avatar>
                <div className={styles.adminName}>My name is Admin</div>
              </div>
              <MoreVertIcon />
            </div>
            <div className={styles.addAdmin}>
              <AddIcon />
              <span>Add Admin</span>
            </div>
          </div>
          {/* end of Add Admin */}
        </div>
        {/* start of create group */}
        <Button>
          <AddIcon />
          <span>Create Group</span>
        </Button>
        {/* end of create group */}

        {/* start of more groups */}
        <div className={styles.box}>
          <h1>Groups you might be interested in</h1>

          <div className={styles.Groups}>
            <div className={styles.group}>
              <div className={styles.left}>
                <div className={styles.image}>
                  <Image
                    src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    fill
                  />
                </div>
                <div className={styles.groupDetail}>
                  <span className={styles.gName}>Group Name</span>
                  <span className={styles.gMembers}>550 membres</span>
                </div>
              </div>
              <CustomButton>Join</CustomButton>
            </div>
            <div className={styles.group}>
              <div className={styles.left}>
                <div className={styles.image}>
                  <Image
                    src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    fill
                  />
                </div>
                <div className={styles.groupDetail}>
                  <span className={styles.gName}>Group Name</span>
                  <span className={styles.gMembers}>550 membres</span>
                </div>
              </div>
              <CustomButton>Join</CustomButton>
            </div>
          </div>
        </div>
        {/* end of more groups */}
      </div>
    </div>
  );
};

export default Group;
