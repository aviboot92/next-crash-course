import { articles } from "./../../../data";

const handler = ({ query: { id } }, res) => {
  const filtered = articles.filter((article) => article.id === id);
  if (!!filtered.length) return res.status(200).json(filtered[0]);
  else
    return res
      .status(404)
      .json({ message: `Article with id of ${id} not found` });
};

export default handler;
