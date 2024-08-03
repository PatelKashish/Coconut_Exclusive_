import React from 'react'

import PropTypes from 'prop-types'

import {Link} from "react-router-dom";
import {Card,Button,Row,Col} from 'react-bootstrap'



const SearchCard = ({product}) => {
  return (
 
      <Card>
      <Card.Img variant="top" src={product.productimg} style={{width:'160px' ,float:'left',height:'180px'}}/>
      <Card.Body style={{paddingBottom: '40px',left:'40px' , position:'relative' }}>
        <b><Card.Title style={{ fontSize:'30px', color:'#3C6E71'}}>{product.productname}</Card.Title></b>
        <Card.Text style={{ fontSize:'15px'}}>
		
          brand : {product.brand}
		
		</Card.Text>
        <Link to={'/display/' + product._id}>
          <Button className="b1" variant="primary">View</Button></Link>
			<br/>
			<br/>
      </Card.Body>
    </Card>
    // <Card className="product-item flex flex-col md:flex-row bg-gray-100 rounded-lg overflow-hidden shadow-md">
    //   <div className="w-full md:w-1/2">
    //     <Card.Img variant="top" src={product.productimg} alt={product.productname} className="w-full h-auto" />
    //   </div>
    //   <div className="w-full md:w-1/2 p-4">
    //     <h3 className="text-lg font-semibold mb-2">{product.productname}</h3>
    //     <p>Brand: {product.brand}</p>
    //     <Link to={'/display/' + product._id}>
    //       <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">View</Button>
    //     </Link>
    //   </div>
    // </Card>
  );
};



export default SearchCard;
