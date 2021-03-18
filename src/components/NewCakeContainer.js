import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

const NewCakeContainer = (props) => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of Cakes: {props.numOfCakes}</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
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
    buyCake: (number) => dispatch(buyCake(number)),
    // here, we are creating a new prop function buyCake, and assigning a function which we got from our Redux store's action creators
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
