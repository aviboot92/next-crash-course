import headerStyles from "./../styles/Header.module.css";

/**
 *
 */
const Header = () => {
  const x = 4;
  return (
    <div>
      <h1 className="title">Web Dev News</h1>
      <style jsx>
        {`
          .title {
            color: ${x > 3 ? "blue" : "red"};
          }
        `}
      </style>
    </div>
  );
};

// #endregion

export default Header;
