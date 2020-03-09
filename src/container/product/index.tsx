import React from 'react'
import { connect } from 'dva'
import FooterBar from '../../components/footerBar'
import ProductList from '../../components/productList'
import './index.scss'

@connect(({ product }) => ({ product }))
export default class product extends React.Component<any, any>{
  async componentDidMount() {
    await this.props.dispatch({
      type: 'product/list'
    })
  }
  render() {
    const { selling: { list = [] } = {} } = this.props.product
    return <div>
      <ProductList list={list} />
      <FooterBar></FooterBar>
    </div>
  }
}

