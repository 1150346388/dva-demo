import React from 'react'
import { Carousel, WingBlank } from 'antd-mobile'
import FooterBar from '../../components/footerBar'
import { connect } from 'dva'
import './index.scss'
import ProductListHoc from '../../components/productListHoc'

@connect(({ home }) => ({ home }))
export default class Home extends React.Component<any, any>{
  async componentDidMount() {
    await this.props.dispatch({
      type: 'home/newhome'
    })
    console.log(this.props.home)
  }
  render() {
    const { banners, hot, products, invest } = this.props.home
    return <div>
      <div className="home">
        <div className="carousel">
          <WingBlank>
            <Carousel
              autoplay={false}
              infinite
              beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
              afterChange={index => console.log('slide to', index)}
            >
              {banners.map(val => (
                <img
                  src={val['img']}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    window.dispatchEvent(new Event('resize'));
                  }}
                />
              ))}
            </Carousel>
          </WingBlank>
        </div>
        <div className="tags">
          {hot.map(h =>
            <a href={h.url} key={h.cid}>
              <div className="tag" style={{ 'backgroundImage': 'url(\'' + h.img + '\')' }}>
                <span>{h.title}</span>
              </div>
            </a>)}

        </div>
        <div className="usualPud">
          <ProductListHoc list={products} />
        </div>
        <div className="total">
          <div className="item">
            <span>累计投资金额（元）</span>
            <p>{invest.invest_total}</p>
          </div>
          <i className="break"></i>
          <a className="item" href="invest.invest_url">
            <span>累计投资人次（次）</span>
            <p>{invest.invest_num}</p>
            <i className="el-icon-arrow-right"></i>
          </a>
        </div>
        <FooterBar></FooterBar>
      </div>
    </div>
  }
}

