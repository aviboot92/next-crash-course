import Link from "next/link";
import articlesStyles from "./../styles/Articles.module.css";

/**
 *
 */
const ArticleItem = ({ article }) => {
  return (
    <Link href="articles/[id" as={`articles/${article.id}`}>
      <a className={articlesStyles.card}>
        <h3>{article.title}</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  );
};

// #endregion

export default ArticleItem;
