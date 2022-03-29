import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";
const Product = ({ image, name, price }) => {
   const url = image && image.url;
   // The line above checks if the image exists, if it exists it returns the url
   //If the image does not exist, then it returns nothing,
   //So it just uses the url IF there is an image
   return (
      <article className="product">
         <img src={url || defaultImage} alt={name || "default name"} />
         {/* The OR operator here checks if there is an url, if it exists it uses the url, if not it uses the Default Image*/}
         <h4>{name}</h4>
         <p>${price || 3.99}</p>
      </article>
   );
};

Product.propTypes = {
   image: PropTypes.object.isRequired,
   name: PropTypes.string.isRequired,
   price: PropTypes.number.isRequired,
};
//Here is set that the image object, the name and the price is Required to ths aplication
// If they are not specified the an Error message is shown to us

// Product.defaultProps = {
//   name: 'default name',
//   price: 3.99,
//   image: defaultImage,
// };

export default Product;
