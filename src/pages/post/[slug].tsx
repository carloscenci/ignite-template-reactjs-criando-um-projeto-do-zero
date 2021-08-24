import { GetStaticPaths, GetStaticProps } from 'next';
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi'
import Header from '../../components/Header';

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Header />
      <img src="/images/avatar.svg" alt="imagem" className={styles.banner} />
      <main className={commonStyles.container}>
        <div className={styles.post}>
          <div className={styles.postTop}>
            <h1>Algum titulo</h1>
            <ul>
              <li>
                <FiCalendar />
                {/* {formatedDate} */}
                12 Mar 2021
              </li>
              <li>
                <FiUser />
                {/* {post.data.author} */}
                Carlos Cenci
              </li>
              <li>
                <FiClock />
                {/* {`${readTime} min`} */}
                5 min
              </li>
            </ul>
          </div>

          <article>
            <h2>Titulo seção</h2>
            <p>Lorem ipsum dolor sit amet consectetur, <strong>adipisicing elit</strong>. Optio expedita <a href="#"></a>, natus vitae facere architecto nesciunt. Maiores provident quo at ipsum iste obcaecati repellendus quasi nisi.</p>
          </article>
        </div>
      </main>
    </>
  )
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient();
//   const posts = await prismic.query(TODO);

//   // TODO
// };

// export const getStaticProps = async context => {
//   const prismic = getPrismicClient();
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };
