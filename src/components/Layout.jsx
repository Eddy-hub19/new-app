import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from 'redux/store';

export const Layout = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.myValue);

  return (
    <>
      <div>
        <nav>{value}</nav>
        <button onClick={() => dispatch(increment(1))}>increment</button>
        <button onClick={() => dispatch(decrement(1))}>decrement</button>
      </div>
    </>
  );
};
