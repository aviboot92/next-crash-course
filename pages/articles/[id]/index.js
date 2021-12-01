import { useRouter } from "next/router";

/**
 *
 */
const Article = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>This is an Article with an id {id}</div>;
};

// #endregion

export default Article;
