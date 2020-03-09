import React, { useEffect, useState } from 'react'
import { Icon } from 'antd-mobile'
import './index.scss'

/** function component */
const TopBar = ({ titleText, history }) => {
  let [opacity, setState] = useState(0)
  let [count, setCount] = useState(0)

  useEffect(() => {
    console.log(pageYOffset)
    window.scrollTo({ top: 0 })
    window.addEventListener('scroll', (e: any) => {
      let [, w] = e.path
      const { pageYOffset } = w
      setState(pageYOffset ? pageYOffset / 74 : pageYOffset)
    })
    return window.removeEventListener('scroll', (e: any) => {
      let [, w] = e.path
      let { pageYOffset } = w
      setState(pageYOffset ? pageYOffset / 74 : pageYOffset)
    })
  }, [])

  return <div>
    <div className="header" style={{ backgroundColor: `rgba(255, 255, 255, ${opacity})` }}>
      <Icon className="goBack" onClick={() => history.goBack()} type="left" color={opacity === 1 ? 'rgb(51, 51, 51)' : '#fff'} size='lg' />
      <h4 className="product-title" style={{ color: opacity === 1 ? 'rgb(51, 51, 51)' : '#fff' }}>{titleText || '投资'}</h4>
    </div>
  </div>
}


/** class component  */
// class TopBar extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       opacity: 0
//     }
//   }
//   componentDidMount() {
//     window.addEventListener('scroll', (e) => {
//       let [, w] = e.path
//       const { pageYOffset } = w
//       console.log(pageYOffset)
//       this.setState({
//         opacity: !pageYOffset || pageYOffset / 74
//       })
//     })
//   }

//   render() {
//     const { opacity } = this.state
//     return <div>
//       <div className="header" style={{ opacity: opacity }}>
//         <a className="goBack" onClick={() => { }} >
//         </a>
//         <h4>{'投资'}</h4>
//       </div>
//     </div>
//   }
// }
export default TopBar
