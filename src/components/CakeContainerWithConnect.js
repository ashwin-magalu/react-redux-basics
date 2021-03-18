import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

const CakeContainer = (props) => {
  return (
    <div>
      <h2>Number of Cakes: {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
};

/* State from our redux store is mapped to our React Component props */
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
    // here, we are creating a new prop variable numOfCakes, and assigning a value which we got from our redux store's state
  };
};

/* Maps dispatch of an action creator to our React Component props */
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    // here, we are creating a new prop function buyCake, and assigning a function which we got from our Redux store's action creators
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
/* connect helps in connecting mapStateToProps and mapDispatchToProps to our react component */
