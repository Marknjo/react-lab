import { formatNumber } from '../../helpers/helperMethods';

const OrderItem = function (props) {
  const formatedPrice = formatNumber(props.price);
  const formatedTotalPrice = formatNumber(props.price * props.qty);
  return (
    <li className={props.className}>
      <span>{props.description}</span>
      <span>
        <small>&times;</small>
        {props.qty}
      </span>
      <span>{formatedPrice}</span>
      <span>{formatedTotalPrice}</span>
    </li>
  );
};

export default OrderItem;
