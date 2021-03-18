import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

const CakeContainerWithHooks = () => {
  /* useSelector is equivalent to mapStateToProps */
  const cakesCount = useSelector((state) => state.cake.numOfCakes);

  /* useDispatch is equivalent to mapDispatchToProps */
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Cakes: {cakesCount}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
};

export default CakeContainerWithHooks;
