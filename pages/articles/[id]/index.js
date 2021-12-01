// import { useRouter } from "next/router";
import { server } from "./../../../config";
import Link from "next/link";

/**
 *
 */
const Article = ({ article }) => {
  // const router = useRouter();
  // const { id } = router.query;
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <button>
        <Link href="/">Go Back</Link>
      </button>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();
  const paths = articles.map((article) => {
    return {
      params: { id: article.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
//   const articles = await res.json();
//   const paths = articles.map((article) => {
//     return {
//       params: { id: article.id.toString() },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// #endregion

export default Article;
