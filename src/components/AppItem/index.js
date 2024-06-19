// Write your code here
import {Component} from 'react'
import './index.css'

class AppItem extends Component {
  render() {
    const {allAppList} = this.props
    const {appName, imageUrl, category} = allAppList
    return (
      <li className="appList">
        <img src={imageUrl} alt={appName} className="img-style" />
        <p className="para">{appName}</p>
      </li>
    )
  }
}

export default AppItem
