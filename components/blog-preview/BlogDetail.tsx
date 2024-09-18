import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import ReviewsIcon from '@mui/icons-material/Reviews';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Avatar } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import styles from './BlogDetails.module.scss';

const BlogDetail = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const topics = ['Trending', 'Latest', 'Popular'];

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.blogDetail}>
        <div className={styles.image}>
          <Image src="" alt="" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className={styles.body}>
          <div className={styles.type}>
            <span>Fashion, Business</span>
            <span>5 days ago</span>
          </div>
          <div className={styles.head}>
            <div className={styles.views}>
              <span>
                <VisibilityIcon /> Views
              </span>
              <span>
                <ReviewsIcon /> Reviews
              </span>
            </div>
            <div className={styles.title}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
              qui?
            </div>
          </div>
          <div className={styles.desc}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              dolore aliquid consequatur labore molestias obcaecati blanditiis
              dolores esse dolorem quos ducimus, impedit exercitationem quam
              itaque praesentium omnis autem! Iste eaque, facere vero enim
              temporibus eius officia non quidem exercitationem voluptatem
              consectetur, earum itaque molestias blanditiis aliquam aliquid
              eligendi. Et repudiandae rem modi aliquid consectetur eos,
              accusamus fugiat tenetur doloremque iure eaque nemo nam molestiae
              repellat quibusdam, exercitationem nobis possimus officia porro
              assumenda, cupiditate sit. Consectetur iste iure temporibus at est
              tempore quis alias vel nostrum aliquid nemo voluptas odio
              accusamus facilis veniam minima sunt natus odit, enim autem.
              Aspernatur, voluptas.
            </p>
            <div className={styles.subtitle}>Lorem ipsum dolor sit amet.</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
              quas asperiores maxime pariatur ipsum, accusamus sequi cum
              doloribus, accusantium aliquid quod sint porro eum totam aliquam
              quos unde, eos iure illum natus. Atque vel deleniti repellendus
              odio veritatis laudantium perferendis, quam amet repudiandae, quo
              accusamus doloremque consectetur libero obcaecati numquam minus
              quasi sit. Eligendi, temporibus. Nam, ipsa? Sit inventore harum
              quos repudiandae aliquam. Dolore nemo porro, quam autem dolorem
              ullam esse ut molestias omnis quae obcaecati explicabo aut,
              quaerat laudantium nobis temporibus repellat eaque ex asperiores
              quos cupiditate modi odio. Quaerat fuga obcaecati quisquam
              consectetur molestias perferendis commodi nisi neque nihil nam
              culpa iste atque maiores illum ea repudiandae suscipit, labore
              repellat dignissimos aspernatur fugiat corrupti. Alias ipsam
              perferendis et soluta ullam rerum repellat, minima voluptatum,
              recusandae eius consequuntur, dolorum architecto exercitationem.
              Cumque temporibus incidunt, exercitationem earum id accusantium
              quos. Non libero exercitationem suscipit voluptas dignissimos quas
              assumenda, labore eveniet!
            </p>
          </div>
        </div>
        <div className={styles.writer}>
          <div className={styles.profile}>
            <Avatar className={styles.avatar}>
              <Image src="" alt=" " fill style={{ objectFit: 'cover' }} />
            </Avatar>
            <div className={styles.user}>
              <div className={styles.name}>Hero Alom</div>
              <div className={styles.post}>@Content writer</div>
              <div className={styles.followers}>1000 Followers</div>
              <button className={styles.follow}>Follow</button>
            </div>
          </div>
          <div className={styles.socialMedia}>
            {/* <span> */}
            <FacebookIcon />
            {/* </span> */}
            {/* <span> */}
            <GitHubIcon />
            {/* </span> */}
            {/* <span> */}
            <YouTubeIcon />
            {/* </span> */}
            {/* <span>YouTube</span> */}
          </div>
        </div>
        <div className={styles.reviews}>
          <h1>Reviews</h1>

          <div className={styles.review}>
            <Avatar className={styles.avatar}>
              <Image src="" alt="" fill style={{ objectFit: 'cover' }} />
            </Avatar>
            <div className={styles.comment}>
              <div className={styles.reviewProfile}>
                <div className={styles.left}>
                  <div className={styles.name}>Jeniffer</div>
                  <div className={styles.time}>2 days ago</div>
                </div>
                <div className={styles.ratings}>
                  <StarBorderIcon />
                  <StarBorderIcon />
                  <StarBorderIcon />
                  <StarBorderIcon />
                </div>
              </div>
              <div className={styles.userReview}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                consectetur officia aliquid a doloribus aut incidunt libero sed
                rem distinctio!
              </div>
              <div className={styles.reply}>Reply</div>
              <div className={styles.replies}>
                <div className={styles.review}>
                  <Avatar className={styles.avatar}>
                    <Image src="" alt="" fill style={{ objectFit: 'cover' }} />
                  </Avatar>
                  <div className={styles.comment}>
                    <div className={styles.reviewProfile}>
                      <div className={styles.left}>
                        <div className={styles.name}>Jeniffer</div>
                        <div className={styles.time}>2 days ago</div>
                      </div>
                      <div className={styles.ratings}>
                        <StarBorderIcon />
                        <StarBorderIcon />
                        <StarBorderIcon />
                        <StarBorderIcon />
                      </div>
                    </div>
                    <div className={styles.userReview}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ratione consectetur officia aliquid a doloribus aut
                      incidunt libero sed rem distinctio!
                    </div>
                    <div className={styles.reply}>Reply</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.review}>
            <Avatar className={styles.avatar}>
              <Image src="" alt="" fill style={{ objectFit: 'cover' }} />
            </Avatar>
            <div className={styles.comment}>
              <div className={styles.reviewProfile}>
                <div className={styles.left}>
                  <div className={styles.name}>Jeniffer</div>
                  <div className={styles.time}>2 days ago</div>
                </div>
                <div className={styles.ratings}>
                  <StarBorderIcon />
                  <StarBorderIcon />
                  <StarBorderIcon />
                  <StarBorderIcon />
                </div>
              </div>
              <div className={styles.userReview}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                consectetur officia aliquid a doloribus aut incidunt libero sed
                rem distinctio!
              </div>
              <div className={styles.reply}>Reply</div>
            </div>
          </div>
        </div>
        <div className={styles.reviewForm}>
          <h1>Leave your Reviews</h1>

          <form className={styles.form}>
            <div className={styles.userInfo}>
              <div className={styles.formInputs}>
                <span>Name</span>
                <input type="text" />
              </div>
              <div className={styles.formInputs}>
                <span>Email</span>
                <input type="email" />
              </div>
            </div>
            <div className={styles.review}>
              <span>Review</span>
              <textarea name="" id="" placeholder="Write Your Review" />
            </div>
            <div className={styles.button}>
              <button>Submit</button>{' '}
            </div>
          </form>
        </div>
      </div>
      <div className={styles.other}>
        {/* BLOG SEARCH */}
        <div className={styles.blogSearch}>
          <h1>Search Blog</h1>
          <form>
            <div className={styles.searchInput}>
              <input type="text" />
              <ArrowForwardIcon />
            </div>
          </form>
        </div>
        {/* TRENDING, LATEST AND POPULAR */}
        <div className={styles.otherBlogs}>
          <div className={styles.bar}>
            {topics.map((topic, index) => (
              <div
                onClick={() => handleClick(index)}
                className={`${
                  activeIndex === index ? styles.back : styles.normal
                }`}
                key={index}
              >
                {topic}
              </div>
            ))}
          </div>

          <div className={styles.blog}>
            <div className={styles.image}>
              <Image
                src="https://www.1zoom.me/big/82/67105-aleni.jpg"
                alt="coverImage"
                height={60}
                width={60}
                className={styles.coverImage}
              />
            </div>
            <div className={styles.details}>
              <div className={styles.type}>
                <span>Fashion</span>
                <span>5 Dec,2023</span>
              </div>
              <div className={styles.title}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Soluta, aliquid.
              </div>
              <div className={styles.ratings}>
                <StarBorderIcon className={styles.rateIcon} />
                <StarBorderIcon className={styles.rateIcon} />
                <StarBorderIcon className={styles.rateIcon} />
                <StarBorderIcon className={styles.rateIcon} />
              </div>
            </div>
          </div>
          <div className={styles.blog}>
            <div className={styles.image}>
              <Image
                src="data:image/jpeg;base64,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"
                alt="coverImage"
                height={60}
                width={60}
                className={styles.coverImage}
              />
            </div>
            <div className={styles.details}>
              <div className={styles.type}>
                <span>Fashion</span>
                <span>5 Dec,2023</span>
              </div>
              <div className={styles.title}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Soluta, aliquid.
              </div>
              <div className={styles.ratings}>
                <StarBorderIcon className={styles.rateIcon} />
                <StarBorderIcon className={styles.rateIcon} />
                <StarBorderIcon className={styles.rateIcon} />
                <StarBorderIcon className={styles.rateIcon} />
              </div>
            </div>
          </div>
          <div className={styles.blog}>
            <div className={styles.image}>
              <Image
                src="https://www.1zoom.me/big/82/67105-aleni.jpg"
                alt="coverImage"
                height={60}
                width={60}
                className={styles.coverImage}
              />
            </div>
            <div className={styles.details}>
              <div className={styles.type}>
                <span>Fashion</span>
                <span>5 Dec,2023</span>
              </div>
              <div className={styles.title}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Soluta, aliquid.
              </div>
              <div className={styles.ratings}>
                <StarBorderIcon className={styles.rateIcon} />
                <StarBorderIcon className={styles.rateIcon} />
                <StarBorderIcon className={styles.rateIcon} />
                <StarBorderIcon className={styles.rateIcon} />
              </div>
            </div>
          </div>
        </div>

        {/* CATEGORIES */}

        <div className={styles.categories}>
          <h1>Categories</h1>
          <div className={styles.Categories}>
            <div className={styles.category}>Fashion</div>
            <div className={styles.category}>Business</div>
            <div className={styles.category}>Digital Marketing</div>
            <div className={styles.category}>Technology</div>
            <div className={styles.category}>Sports</div>
            <div className={styles.category}>Education</div>
            <div className={styles.category}>Tour and Adventure</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
