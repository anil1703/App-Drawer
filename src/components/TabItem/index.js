// Write your code here
import './index.css'

const TabItem = props => {
  let specil = ""
  const {tabItemsList, moduleClick} = props
  const {tabId, displayText} = tabItemsList
  const clickingModule = () => {
    moduleClick(tabId)
    
  }
  return (
    <button onClick={clickingModule} className="list-tab-style">
      <li className="list-tab">
        <p>{displayText}</p>
      </li>
    </button>
  )
}

export default TabItem
