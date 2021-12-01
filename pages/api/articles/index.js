import { articles } from "./../../../data";

const handler = (req, res) => {
  res.status(200).json(articles);
};

export default handler;
