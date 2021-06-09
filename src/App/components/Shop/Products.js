import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_DATA = [
  {
    id: 'p1',
    title: 'Nike Shoe',
    description: 'Sports and outdoor favourite shoe',
    price: 125,
  },
  {
    id: 'p2',
    title: 'Merino runners men',
    description:
      'Our men’s merino runners are designed for maximum comfort, grip and performance.',
    price: 129.95,
  },
];

const Products = props => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map(item => (
          <ProductItem
            title={item.title}
            price={item.price}
            description={item.description}
            id={item.id}
            key={item.key}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
