import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Avatar } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Blogs.module.scss';

const Blogs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.trending}>
          <h1>Trending Blogs</h1>
        </div>
      </div>
      <div className={styles.trendings}>Slider for Trending Blogs</div>

      {/* start of blog lists */}

      <div className={styles.blogs}>
        {/* start of a blog */}
        <Link href="/blog/preview">
          <div className={styles.blog}>
            <div className={styles.image}>
              <Image
                src="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8bmF0dXJhbHxlbnwwfHx8fDE3MDMyMTQ0MzV8MA&ixlib=rb-4.0.3"
                alt=""
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.details}>
              <div className={styles.top}>
                <span>Business, Travel</span>
                <span>5 days ago</span>
              </div>
              <div className={styles.title}>
                Lorem ipsum dolor sit amet consectetur kiij
              </div>
              {/* <div className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum eum maxime porro facere dolor cum fuga
              </div> */}
              <div className={styles.bottom}>
                <div className={styles.author}>
                  <Avatar className={styles.avatar}>
                    <Image
                      src="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8bmF0dXJhbHxlbnwwfHx8fDE3MDMyMTQ0MzV8MA&ixlib=rb-4.0.3"
                      alt=""
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </Avatar>

                  <div className={styles.writer}>
                    <div className={styles.name}>Aladin</div>
                    <div className={styles.post}>@Artist</div>
                  </div>
                </div>
                <div className={styles.ratings}>
                  <StarBorderIcon />
                  <StarBorderIcon />
                  <StarBorderIcon />
                  <StarBorderIcon />
                  <StarBorderIcon />
                </div>
              </div>
            </div>
          </div>
        </Link>
        {/* end of a blog */}

        {/* start of a blog */}
        <div className={styles.blog}>
          <div className={styles.image}>
            <Image
              src="https://thumbs.dreamstime.com/b/cyber-security-business-technology-antivirus-alert-protection-firewall-cybersecurity-information-217658546.jpg"
              alt=""
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.details}>
            <div className={styles.top}>
              <span>Security</span>
              <span>5 days ago</span>
            </div>
            <div className={styles.title}>Digital Marketing</div>
            {/* <div className={styles.desc}>
              elit. Voluptatum eum maxime porro facere dolor cum fuga deserunt
              minus nostrum aspernatur?
            </div> */}
            <div className={styles.bottom}>
              <div className={styles.author}>
                <Avatar className={styles.avatar}>
                  <Image
                    src="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8bmF0dXJhbHxlbnwwfHx8fDE3MDMyMTQ0MzV8MA&ixlib=rb-4.0.3"
                    alt=""
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Avatar>
                <div className={styles.writer}>
                  <div className={styles.name}>Aladin</div>
                  <div className={styles.post}>@Artist</div>
                </div>
              </div>
              <div className={styles.ratings}>
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
              </div>
            </div>
          </div>
        </div>
        {/* end of a blog */}

        {/* start of a blog */}

        <div className={styles.blog}>
          <div className={styles.image}>
            <Image
              src="https://i.pinimg.com/originals/c3/3e/9e/c33e9e242b410180ecba2ddebc1aa5cb.jpg"
              alt=""
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.details}>
            <div className={styles.top}>
              <span>Sports</span>
              <span>1 hr ago</span>
            </div>
            <div className={styles.title}>Blog about sports</div>
            {/* <div className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum eum maxime porro facere dolor cum fuga deserunt
            </div> */}
            <div className={styles.bottom}>
              <div className={styles.author}>
                <Avatar className={styles.avatar}>
                  <Image
                    src="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8bmF0dXJhbHxlbnwwfHx8fDE3MDMyMTQ0MzV8MA&ixlib=rb-4.0.3"
                    alt=""
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Avatar>
                <div className={styles.writer}>
                  <div className={styles.name}>Aladin</div>
                  <div className={styles.post}>@Artist</div>
                </div>
              </div>
              <div className={styles.ratings}>
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
              </div>
            </div>
          </div>
        </div>
        {/* end of a blog */}

        {/* start of a blog */}
        <div className={styles.blog}>
          <div className={styles.image}>
            <Image
              src="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8bmF0dXJhbHxlbnwwfHx8fDE3MDMyMTQ0MzV8MA&ixlib=rb-4.0.3"
              alt=""
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.details}>
            <div className={styles.top}>
              <span>Business, Travel</span>
              <span>5 days ago</span>
            </div>
            <div className={styles.title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              modi.
            </div>
            {/* <div className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum eum maxime porro facere
            </div> */}
            <div className={styles.bottom}>
              <div className={styles.author}>
                <Avatar className={styles.avatar}>
                  <Image
                    src="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8bmF0dXJhbHxlbnwwfHx8fDE3MDMyMTQ0MzV8MA&ixlib=rb-4.0.3"
                    alt=""
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Avatar>
                <div className={styles.writer}>
                  <div className={styles.name}>Aladin</div>
                  <div className={styles.post}>@Artist</div>
                </div>
              </div>
              <div className={styles.ratings}>
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
              </div>
            </div>
          </div>
        </div>
        {/* end of a blog */}

        {/* start of a blog */}
        <div className={styles.blog}>
          <div className={styles.image}>
            <Image
              src="https://img.freepik.com/free-photo/digital-marketing-with-icons-business-people_53876-94833.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703203200&semt=ais"
              alt=""
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.details}>
            <div className={styles.top}>
              <span>Business, Marketing</span>
              <span>5 days ago</span>
            </div>
            <div className={styles.title}>Digital Marketing</div>
            {/* <div className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum eum maxime porro facere dolor cum
            </div> */}
            <div className={styles.bottom}>
              <div className={styles.author}>
                <Avatar className={styles.avatar}>
                  <Image
                    src="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8bmF0dXJhbHxlbnwwfHx8fDE3MDMyMTQ0MzV8MA&ixlib=rb-4.0.3"
                    alt=""
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Avatar>
                <div className={styles.writer}>
                  <div className={styles.name}>Aladin</div>
                  <div className={styles.post}>@Artist</div>
                </div>
              </div>
              <div className={styles.ratings}>
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
              </div>
            </div>
          </div>
        </div>
        {/* end of the blog */}
      </div>

      {/* end of blog list */}
    </div>
  );
};

export default Blogs;
