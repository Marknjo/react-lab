import { formatNumber } from '../../helpers/helperMethods';

const OrderItem = function (props) {
  const formatedPrice = formatNumber(props.price);
  return (
    <li className={props.className}>
      <span>{props.num}</span>
      <span>{props.description}</span>
      <span>{props.qty}</span>
      <span>{formatedPrice}</span>
    </li>
  );
};

export default OrderItem;
