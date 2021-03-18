import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

const ItemContainer = (props) => {
  return (
    <div>
      <h2>Item: {props.item}</h2>
      <button onClick={() => props.buyItem()}>
        Buy {props.cake ? "Cake" : "Ice Cream"}
      </button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  /* here, state is a redux store state and ownProps is an initial props present in this React Container, which are passed by its parent */
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
