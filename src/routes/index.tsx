import React, { lazy, Suspense } from 'react'
import { ActivityIndicator } from 'antd-mobile'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import productDetail from '../container/productDetail'
const Home = lazy(() => import('../container/home'))
const Product = lazy(() => import('../container/product'))
// import Home from '../container/home'

const Loading: React.FC<any> = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
      <ActivityIndicator size="large" />
    </div>
  )
}

const RouterConfig = () => {
  return (
    <Router>
      <Suspense fallback={<Loading></Loading>}>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/products" component={Product} />
          <Route path="/product-detail/:pid" component={productDetail} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default RouterConfig
