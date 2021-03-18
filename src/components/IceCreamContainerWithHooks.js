import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux";

const IceCreamContainerWithHooks = () => {
  /* useSelector is equivalent to mapStateToProps */
  const iceCreamsCount = useSelector((state) => state.iceCream.numOfIceCreams);

  /* useDispatch is equivalent to mapDispatchToProps */
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes: {iceCreamsCount}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
    </div>
  );
};

export default IceCreamContainerWithHooks;
