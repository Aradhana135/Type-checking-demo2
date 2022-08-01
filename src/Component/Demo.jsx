import React, {Component} from 'react';
import PropTypes from 'prop-types';
  
// Component
 class SamplePrice extends Component {
   render() {
     return (
        <div>
          <p>Type Validation</p>
  
          <h1>
           {/* Printing the props */}
            {
               this.props.ArrayProp.map((item, index)=>{
                   return (
                      <p key={index}>{item}</p>
  
                   )
               })
            }
          </h1>
  
          <p>Shape Validation</p>
  
          <h1>
           {this.props.ShapeOfProp.CarName}
          </h1>
          <h1>
           {this.props.ShapeOfProp.Price}
          </h1>
        </div>
     )
   }
 }
   
// Creating default props
SamplePrice.defaultProps = {
  ArrayProp: ["Car", "Driver", "Cost"],
  ShapeOfProp: ({CarName: "Ferrari", Price: "56"})
}
   
// Validating the props
SamplePrice.propTypes = {
   // Types validation
   ArrayProp: PropTypes.arrayOf(PropTypes.number),
     
   // Shapes validation
   ShapeOfProp: PropTypes.shape({
      CarName: PropTypes.string,
      Price: PropTypes.number
  })
 }
   
 // Export the Component
 export default SamplePrice