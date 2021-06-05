import { formatNumber } from '../../helpers/helperMethods';

const OrderItem = function (props) {
  const formatedPrice = formatNumber(props.price);
  return (
    <li className={props.className}>
      <span>{props.qty}</span>
      <span>{props.description}</span>
      <span>{formatedPrice}</span>
      <span>{props.amount}</span>
    </li>
  );
};

export default OrderItem;
