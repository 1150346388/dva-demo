import React from 'react'
import ProductList from './productList'

const MyHoc = (WraComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props)
    }
    // async componentDidMount() {
    //   await this.props.dispatch({ type: 'product/list' })
    //   console.log(this.props.product)
    // }
    render() {
      let arr = []
      const { list } = this.props
      if (list && list.length) {
        arr = list.map(l => Object({ ...l, ...(l['records'][0]) }))
      }
      return <WraComponent {...this.props} list={[...arr]}></WraComponent>
    }
  }
}
export default MyHoc(ProductList)
