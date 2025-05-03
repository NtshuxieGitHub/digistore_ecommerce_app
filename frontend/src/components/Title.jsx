import PropTypes from "prop-types";

const Title = ({ title1, title2, titleStyles, title1Styles, paraStyles }) => {
  return (
    <div className={`${titleStyles} pb-1`}>
      <h3 className={`${title1Styles} h3`}>
        {title1}
        <span className="text-secondary !font-light"> {title2}</span>
      </h3>
      <p className={`${paraStyles} hidden`}>
        Step into the season with our freshest arrivals — thoughtfully designed
        for comfort, style, and everyday confidence.
        <br />
        Explore quality pieces that blend modern trends with lasting wear, all
        at prices that make sense.
      </p>
    </div>
  );
};

Title.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string,
  titleStyles: PropTypes.string,
  title1Styles: PropTypes.string,
  paraStyles: PropTypes.string,
};

export default Title;
