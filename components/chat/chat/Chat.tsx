import { Avatar } from '@mui/material';
import classNames from 'classnames';
import Image from 'next/image';
import styles from './Chat.module.scss';

export interface IChatBlock {
  self?: boolean;
  text?: string;
  image?: string;
}

export const ChatBlock: React.FC<IChatBlock> = ({
  text,
  image,
  self = false,
}) => {
  return (
    <div
      className={classNames({
        [styles.chat]: true,
        [styles.chatBlockSelf]: self,
      })}
    >
      <div className={styles.left}>
        <Avatar className={styles.avatar} alt={'User'}>
          <Image src={'https://picsum.photos/200/200'} alt={'image'} fill />
        </Avatar>
      </div>
      <div className={styles.content}>
        {text && <div className={styles.text}>{text}</div>}
        {image && (
          <div className={styles.image}>
            <Image src={image} alt={'image'} fill />
          </div>
        )}
      </div>
    </div>
  );
};

export interface IChat {}

const Chat: React.FC<IChat> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>People Name</div>
      <div className={styles.content}>
        <div className={styles.peopleIntro}>
          <Avatar className={styles.avatar} alt={'User'}>
            <Image src={'https://picsum.photos/200/200'} alt={'image'} fill />
          </Avatar>
          <div className={styles.name}>User Name</div>
          <div className={styles.headline}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            totam?
          </div>
        </div>

        <div className={styles.chatContainer}>
          <ChatBlock text="  dolor sit amet consectetur adipisicing  " />
          <ChatBlock
            self
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, dicta?  "
          />
          <ChatBlock self image="https://picsum.photos/400/600" />
          <ChatBlock
            self
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, dicta?  "
          />
          <ChatBlock
            self
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, dicta?  "
          />
          <ChatBlock
            self
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, dicta?  "
          />
          <ChatBlock self text="Lorem ipsum dolor sit  adipisicing   " />
        </div>
      </div>
      <div className={styles.input}>
        <input type="text" placeholder="write your chat here" />
      </div>
    </div>
  );
};

export default Chat;
