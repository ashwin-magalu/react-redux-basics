import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";

const IceCreamContainerWithConnect = (props) => {
  return (
    <div>
      <h2>Number of IceCreams: {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy Ice Cream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
    // here, we are creating a new prop variable numOfCakes, and assigning a value which we got from our redux store's state
  };
};

/* Maps dispatch of an action creator to our React Component props */
const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
    // here, we are creating a new prop function buyCake, and assigning a function which we got from our Redux store's action creators
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IceCreamContainerWithConnect);
/* connect helps in connecting mapStateToProps and mapDispatchToProps to our react component */
