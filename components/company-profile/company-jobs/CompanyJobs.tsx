import LocationOnIcon from '@mui/icons-material/LocationOn';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import Image from 'next/image';

import styles from './CompanyJobs.module.scss';

const CompanyJobs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.jobs}>
        <div className={styles.job}>
          <div className={styles.top}>
            <div className={styles.detail}>
              <div className={styles.title}>MERN Stack Developer</div>
              <div className={styles.company}>Spotify</div>
              <div className={styles.address}>
                {' '}
                <LocationOnIcon /> Kathmandu, Nepal{' '}
              </div>
            </div>
            <div className={styles.image}>
              <Image
                src="data:image/png;base64,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"
                alt=""
                height={40}
                width={40}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          <div className={styles.applicants}>11 applicants</div>
          <div className={styles.posted}>
            <WatchLaterIcon />
            <span>Posted 2sec ago</span>
          </div>
        </div>
        <div className={styles.job}>
          <div className={styles.top}>
            <div className={styles.detail}>
              <div className={styles.title}>MERN Stack Developer</div>
              <div className={styles.company}>Spotify</div>
              <div className={styles.address}>
                {' '}
                <LocationOnIcon /> Kathmandu, Nepal{' '}
              </div>
            </div>
            <div className={styles.image}>
              <Image
                src="data:image/png;base64,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"
                alt=""
                height={40}
                width={40}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          <div className={styles.applicants}>11 applicants</div>
          <div className={styles.posted}>
            <WatchLaterIcon />
            <span>Posted 2sec ago</span>
          </div>
        </div>
        <div className={styles.job}>
          <div className={styles.top}>
            <div className={styles.detail}>
              <div className={styles.title}>MERN Stack Developer</div>
              <div className={styles.company}>Spotify</div>
              <div className={styles.address}>
                {' '}
                <LocationOnIcon /> Kathmandu, Nepal{' '}
              </div>
            </div>
            <div className={styles.image}>
              <Image
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEUuvVn///8nvFUAuEYiu1Ibuk8Xuk0LuEn8/v0RuUsrvVet4LnV79vD6Myl3rNmyoDK69KT2KSC0pbi9Ob3/Pi85sbp9+yJ1JzQ7ddnyoFxzYlUxXPb8eDy+vS0478zvl2c2qtFwmhSxXE/wWSE05iR16J4z46h3K9eyHo8hHDQAAAOWElEQVR4nOWd2ZaiMBCGkSREoiCyuCAgS7ft+z/hEKBdISQhKPb8VzPnOMo3IUtVatFmoyuOnMBeu+H5kBVHTdOORXY4h+7aDpwoHv/ntTG/3AvSMMPYNBCEuk4I0WqVf9J1CJFhYpyFaeCN+RBjEXrBNgfYgPovVZeIDg2M8+1omGMQeosQYQT72O44IcJGuBiDUjXh3HJ1jHQBuKt0hHXXmit+IqWEfrIChtDYPY+lAVaJr/Kh1BHOgxWQHLzHoQSrQNljKSNcuthQgddAGthdKnoyJYTzRYGhMrxaEBcLJVNSAeFmi9GQudclgvB2MwHCaA9UD99VEOyjNxMuz0Dd7GuTDs4DJ+QgwuiAx+WrGPFh0DgOINysRh6/CyNYDZiP0oS++yK+mtGVPgXIEtrKtwe2ILZfSrgsjJfyURmF3JIjQzg/gTH2vz4RcJI5AkgQWui1L+hVEFkvIJyH+B0DWIvgUHgYRQl38F0DWAvC3biE27fMwFsR8D0iYZyhN/NRoUzIQydC6Jiv2+NZ0k1nHMI1eDfaRSAdg3D1+k2+W8ZeOWFcvHcNfRQseCcjJ6GnxMekUjridK7yETpv3ySeRQDfesNFmExnjbkVSFQR2tMELBF5LCoOwnSqgHy7Rj/hGr+bgyG8Hk44aUAexD7CdNqAJWLfi9pDONlF5qq+5YZNONFt4l49mwaT0PkEwBKRufWzCL3PACwRWQc4BmE8yo3SGCKIcQxnEBZTO2x3Sy9kCFfTMpfYgt32YifhekoGb7+Mzm2xi/BDltGrOhfUDsJ46keZZ5kdq00HYfY5q8yv9EyEcDsFv6ioULuruJVw92mTsBZodfi3Ec4HBW69TwS2Xdu0EYaftBPeCoZ8hNbnraO/wi33i8+E8485jj6LoOf39Jnw9KnvKBU89RMuP3Md/RV4Cmd4Iiw+9x2lIk9WxiOh/VkH7mcZj26bB0L/c9fRX2GfSeh+8jJTC7oswo2KZaZOF6FCv6r+RnNKFHx9r8CGQbiSNSlKKogMw8QAoCI/h6ev73X6Yzf6SdffX6fwnBcQAIyNKodmNFp9300YiQ9hRYYBOZy+aR7TpjeEcB57O2uRuqvMBLhEHYEU3MWj3hEeRIaQ6CUaTVtKdpLRn77nLL7DAlNQlZz6oYtwybuQEohMUJxsR0GgeamNY7t1kpQiRHy77d8Snnl+gWa1HE+LperkndnGSvcID0u5aaSf2wn7ZyGly9bWiEmDG2t9AObgsIjbmXhDuGd/L0FY21pKU5I6tLT3eBjl7XJ6JWTvhQTnCzWzjk+RfR6SJHazJ14Jt6zjDMoGZ3YIa+5sNdlsHLh9JpyzFlK8bX2G8eXZOZCCxJeV8EK4YDgQjf54gPEULw4SkGjx++8vhAy7UOcPkxtH8SIDgnPyaif+ErJ2+0d75B3apEQsuvWy6/8SMrwz8F2T8EFOKPK2XoyohpC1zuDXL6Mdin+Iwc2Im3/UEAYM54XxNqIWWTlvupXR5BI3hAzDkBy6f+8dikK+lE59VX++JvQZ55m3r6RP2rhcjKBeIGvChLEZ3h3UJ6L4i4MR1ZFENSHLe0FGLQ4iq/jUOx+b17R6/Dnz0I1fUGJFQpt9X2g2qE5uFaHFdANfD0CcmsebaOk4VhAklYLAspxl5MWKTw7LjO2+NqwLIdtLyveaxp6T/GzDc4GoO800jVK/zkT6Z1qLBgN8zPfuemEtN0p8BAmzjkO96VdP3+PvQj9MtF2yDjOz8ifBXpcodTtSvyMGMD+lyW7gDPAzxuAQ/ZfQ6/NAPV/o1IqS7cGQdgnWjkgzdwd5tFhRI9hrCFmGU/PRpxiATbDNgKnCC0gop3FeW3KYPuOsWq0glDDsPwfdBcVvkpOuxil2Fa2lhPa2hAuPceDUw4aQ50IN6T/1/7GzPQI0kkteRyY4pMJJot0PY9SEvdOwEkHYyPLjwBpCHL8DDXC2RQpGpd2LDZ2IJWHAHQBFXnN5RAtGaVvuoVx2v4MoqAiZTrZ3iUDTPPHlpjOiDKnxXhLmU725h4bp8oxk95mT5BXhlIMvoKmv+3YR1s08oIR8C83bRCA4sCt/sQDKpUZjOjCmIWKgNeN0xzJujaAkZCy20xEEYac/jHUpCNOSkONEMwXp4Ny+6jDzXspTjTbLprqUPkrHeRsjcysgWUmodKGpjaPKIDRNahGav5ZiFW0y9NtbimL1ZE3gmaYmKp9Qo6+0cI+H0F3/LALL2S2jyCsVLXeltZ/Y6fZ0zhCoyrXKo+ogvF9z+vIjcax5puyvNb8JkYmNypr1OLwUcWQNi7/Qwc1FmL/v2wjMSHPkNwtq8Rjn72QpYahvdosvaj1LxF8gmNaHgGjbXy7OcDT+c/c9HcJY2mq9clrp3hA2NQnEKD9npsmxz6FAs8W3w5IOhQtl9zWVu0CYknMuQ1tbCxJS8019vV/f+i6AwgKo18dda67Q10Ljy1EeK9QoDk6Gqdq+1l1N6EgDxr7QX66PWG2MW6idBb4Pq6p8y5L3UyiEJGftwP9l7XlFY0CmmqqyjOSg8R9LX3qfv/zC/BfaLMJMK7g//OqQjCBXUb+30I68H9Xb0qbGlfclFxB1K24+iUs2FZrbAtEXQ2VI1J1UoSB7VSnKdxHOZk4+iJH7PX3LW9poJ8945F9LBVeauR9X8n0lpzwnM+UYC4H9EPc9qu/tAvv7tM+POqZX3Y0AMElx2FcJGTxGcocCTcbOK/dD/jMN7CwcOo+C9JRXGSLtN93k13+DaYbGWvJyW6b+dHmmETiXtl12+zv7dAQmR0OZy29Wl9vGYZtEou+vL16iuTyXitgW5r3Vuwnc0qiTvC6tslKyL8EGOpFogcrSthCyD6+X3XHgEsFuOS2iDXSQWAOdvdhsLO1DMRsfoW/L83Y/ucK7YB1heAq4Z6ZQcha18UX9NNAwywVF8SmDXm3nP3xDKebghbasr029CMLHNY97S+itQ8EQf6lyEYiPaa+DUujC03C0aKDPW7EIBHlfWVKRMTEjRfcWKkUM/MWckiK3ZThWfPekSBAcGJaMSGgFnuz9ITG0TltGYKWp7g+negdMkPHTeqzbCLx11R3whO/xkZG2MIo8cHWPP+lYDPRU5mI2F3neKhZj4vE0iDxE0/Qk896riqcZMyaKKIj1I2Z+e9JxhV45oDqurQniroLWAc3JJtWRszL4TaO6wZf4MXLt9rTJhQ6ZTVybgtjEpnaEkdFA/MBZepsH74wfe1XP3NNZk6kVAbFreZsoWQlawE1s4qCzdxWlXXkmHI/TZN/skvWeCAaJ04az4hnsTXyp7FJDAxVA7i7kIu395YJ6CMaNOG5ihIVOsrUIjcJYDQ5UmPlOOijtvk9NnLfoqYaU1up3oK78wG6dqWnR+qRLrH5/vsWtUKa8Ze8sTvZjxClc8i2EJiJHrX4pza1QOeQlZ6Yv7+lWHUVC1UAGZ9G0e6aueU8CFb7IcTxAqlg07Z6lm9w1dv7hrRBX45NBcs6qmtPe5B+yc0hvhV9RwYU2GFZBeJNDyl/FDLwAsJSfKnDJ3uYBM8Pd7wnHCvl6kg2HjuNdLjcrH/9OWHnMHoPRGMZ4l4/P/ZpCZsIszQbeBYv0K1zlGW2QTm0obECtyFenbUrTf0UQ5+sha859TQV+V0ZLGVsqP7Lsr9XxUjJQvzN9SV1KEdGqg9pqu+C+II0H9HR9qIvBrKF0K7h6/I+Oku8V4Tf6alMS8cYXR7msT/6htgn/po9Wl1Fs7n+lYu+p6UVOCQdlIhcy9Fifhr+iYDm90sj3vcQ9St//NiI6wvpX7zk+lvL1PNUYEqkfDKkfRlExxyopNmHPS5mqqs91ogRNKKXSUQnJGslv8SW1pdYX91ozikrIU3d8rogfv1FLvba3pwPr+Gh3xRMJv19tNffU1BAeJIKA2764Ct+PtdZNFHOXjyQI9m1X+aKraXvtS5kqwiNIB+en0KtY9Mk66pfy1aAdXyXjw/neFpyHXTVoBXb9kfWQZeiLLjSddYQFw43GFLzNzskFH6u7FvREZmItRJpYBeFgPVY9b/ma7COImEUaWPZB2H7S782fEerqK1N5ZpVx1zDr6v/93gj/QX+Lv9+j5D/oM/Mf9Ar6+/2e/oOeXX+/79p/0DvvP+h/+Pd7WH5qH9L2XPP/tZfsLJ5WjgKPBPsB//2ezp/Xl7szkOmv9FZ/vNbkIZwVn7Pa6E8WBRdh/DEHVIIY13OsauTMen1TEmBFiDDrrX/Igtq5jPYTzpJPQATsWLuemvn29BHBU1aNEGFvXcK3C6c9BL19D9bTRuwPWe7v7DBpRI6YbI7eFel05yLoe0X5CKe73PQtMtyEU900erYJEcJy65/eAY6wN3pBwpk3TlLLAOmIM5iXt5lTLHwTO65gwRujyt+uajUlk9jotgflCae0a4hUGRVpOeaoS2cZJN3kW2PECWdxNgU/KsqE6mgJto3bvn3bIECwyKhoY7wdfO+aCqFwKyHBz8/m4asKNbaI4FA4aUeiuaGF3jWMEElUp5Rp3zgfkOcxQAScZLKu5BpULovXb/9GIVeJWrYFp0wNwyGCmMdSUkk4813exrwKpF8rY7yOsGoE+hpGHawGpK4OahQbHfobTAzna2m98jLCcsk5jzyObYHtLyUsx3GvKvW6RR3JCa8lrFOvx9gfCcJbBanjSho2zxeF8s0D4mKhJK1aVUvqpYsVVrXQDeyq6jShsOl2sFJThEVHYBWoy4pX2lbcT1YD6+nQhMtVorQJg+rG6XPL1bHkUNKkWVd58ZsxWsN7ixAJZtHSksmGWMlkXo1BSLUJtjktNtCbCk1oVjfOt4Jlr/k1FmElz0ppT3LzsQjBTQUCnIXpaHCVRiWsFXu0Fp0bng9ZQTsxHIvscA7dtR040cDW6jz6B+BJ4DhFX007AAAAAElFTkSuQmCC"
                alt=""
                height={40}
                width={40}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          <div className={styles.applicants}>11 applicants</div>
          <div className={styles.posted}>
            <WatchLaterIcon />
            <span>Posted 2sec ago</span>
          </div>
        </div>
        <div className={styles.job}>
          <div className={styles.top}>
            <div className={styles.detail}>
              <div className={styles.title}>MERN Stack Developer</div>
              <div className={styles.company}>Spotify</div>
              <div className={styles.address}>
                {' '}
                <LocationOnIcon /> Kathmandu, Nepal{' '}
              </div>
            </div>
            <div className={styles.image}>
              <Image
                src="data:image/png;base64,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"
                alt=""
                height={40}
                width={40}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          <div className={styles.applicants}>11 applicants</div>
          <div className={styles.posted}>
            <WatchLaterIcon />
            <span>Posted 2sec ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyJobs;
