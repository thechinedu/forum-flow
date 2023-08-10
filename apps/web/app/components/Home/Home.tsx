import styles from './Home.module.css';

import { Header } from '@/app/components/Header';
import { Comment, Downvote, Upvote } from '@/app/components/Icons';
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
            <h4>Check out this awesome post</h4>
            <p>Do check this out</p>
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

            <div className={styles.comments}>
              <Comment /> 9.7k
            </div>
          </div>
        </div>
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
            <h4>Check out this awesome post</h4>
            <p>Do check this out</p>
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

            <div className={styles.comments}>
              <Comment /> 9.7k
            </div>
          </div>
        </div>
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
            <h4>Check out this awesome post</h4>
            <p>Do check this out</p>
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

            <div className={styles.comments}>
              <Comment /> 9.7k
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
