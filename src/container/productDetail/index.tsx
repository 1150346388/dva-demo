import React from 'react'
import { connect } from 'dva'
import _isEmpty from 'lodash/isEmpty'
import './index.scss'
import TopBar from '../../components/topBar'

@connect(({ product }) => ({ product }))
export default class ProductDetail extends React.Component<any, any>  {
  componentDidMount() {
    const { params: { pid = 0 } } = this.props.match
    console.log(pid)
    this.props.dispatch({ type: 'product/detail', payload: pid })
  }

  render() {
    const { productItem } = this.props.product
    console.log(productItem)
    return (!_isEmpty(productItem) && <div className="content" style={{ height: '110vh' }}>
      <TopBar history={this.props.history} titleText={productItem['page_title']} />
      <div className="ui-header">
        <div className="header-panle">
          <span className="header-panle-rate">
            <i className="percent">{productItem.min_rate_integer}</i>
            <i className="s percent">{productItem.min_rate_decimal}</i>
          </span>
        </div>
        <div className="header-panle-msg lightwhite">{productItem.rate_desc}</div>
        <ul className="header-product-des clearfix">
          {productItem.min_money && <li><div className="">{productItem.min_money.name}</div><p className="num">{productItem.min_money.value}</p></li>}
          {productItem.has_limit && <li><div className="">{productItem.has_limit.name}</div><p className="num">{productItem.has_limit.value}</p></li>}
        </ul>
      </div>
      <div className="detail-list">
        <ul>
          {productItem.detail.map(d => <li>
            <span className="take-out-left" style={{ color: d.color.name }}>{d.name}</span>
            {d.value && <span className="take-out-right" style={{ color: d.color.value }} >{d.value}</span>}
            {d.url && <a className="el-icon-arrow-right" style={{ color: d.color.value }} href={d.url}></a>}
          </li>)}
        </ul>
      </div>
      {/* <Calculator calculatorData="calculatorData"></Calculator> */}
    </div>)
  }
}
