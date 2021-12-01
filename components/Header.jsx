import headerStyles from "./../styles/Header.module.css";

/**
 *
 */
const Header = () => {
  const x = 4;
  return (
    <>
      <h1 className="title">
        Techsophy <span>News</span>
      </h1>
      {/* 
      //----Just for a demo ----//
      <style jsx>
        {`
          .title {
            color: ${x > 3 ? "blue" : "red"};
          }
        `}
      </style> */}
    </>
  );
};

// #endregion

export default Header;
