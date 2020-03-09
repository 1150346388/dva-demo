import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const ProductItem = ({ p }) => {
  console.log(p)
  return (
    <div>
      <div className="product" key={p.pid}>
        <div className="title">
          <span className="name">{p.title}</span>
          <span className="info">{p.cat_desc}</span>
        </div>
        <div className="body">
          <Link to={`/product-detail/${p.pid}`}>
            <em>{p.min_rate_integer}</em>
            <span>{p.min_rate_decimal}</span>
            <div className="limit">{p.right_desc}</div>
          </Link>
        </div>
        <div className="button">
          <div className="btn">
            <Link to={`/product-buy/${p.pid}`} className="btn">{p.button}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductItem.propTypes = {

};

const MyHoc = WraComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props)
      console.log(props)
    }
    render() {
      return <WraComponent {...this.props}></WraComponent>
    }
  }
}
export default MyHoc(ProductItem);
