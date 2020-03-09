import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'

const FooterBar = () => <div className="footer">
  <NavLink to="/home" activeClassName="active" className="nav home"><label></label><span>首页</span></NavLink>
  <NavLink to="/products" activeClassName="active" className="nav product"><label></label><span>产品</span></NavLink>
  <NavLink to="/mine" activeClassName="active" className="nav my"><label></label><span>我的</span></NavLink>
</div>

export default FooterBar
