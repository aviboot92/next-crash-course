// import { useRouter } from "next/router";
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

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

// #endregion

export default Article;
