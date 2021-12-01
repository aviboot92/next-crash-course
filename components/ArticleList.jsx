import articlesStyles from "./../styles/Articles.module.css";
import ArticleItem from "./ArticleItem";

/**
 *
 */
const ArticleList = ({ articles }) => {
  return (
    <div className={articlesStyles.grid}>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
};

// #endregion

export default ArticleList;
