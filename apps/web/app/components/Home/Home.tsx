import styles from './Home.module.css';

import { Header } from '@/app/components/Header';
import { Downvote, Upvote } from '@/app/components/Icons';
import Image from 'next/image';

export const Home = () => {
  return (
    <div>
      <Header />

      <main className={styles.main}>
        <div className={styles.postContainer}>
          <div className={styles.postDetails}>
            <div className={styles.postDetailsUserCommunity}>
              <Image
                src="https://placebeard.it/24/24/notag"
                alt="profile image"
                width={24}
                height={24}
              />
              <span>c/blog</span>
              <span>•</span>
              <span>1h</span>
            </div>

            <div className={styles.joinCommunity}>
              <button>Join</button>
            </div>
          </div>

          <div className={styles.postContent}>
            <p>Check out this awesome post</p>
          </div>

          <div className={styles.postActions}>
            <div className={styles.voteActions}>
              <button>
                <Upvote />
              </button>
              15k
              <button>
                <Downvote />
              </button>
            </div>

            <div>9.7k comments</div>
          </div>
        </div>
      </main>
    </div>
  );
};
