import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Go.css'
import { observer } from 'mobx-react'
import { testInstance } from './../../data/models/testModel'
import { userInfo } from './../../data/models/UserInfo'
import history from './../../core/history'
import img from './images/6.jpg';
@observer
class Go extends React.Component {
   
   componentWillUnMount() {
    testInstance.clear();
  }

  render() {
  	const style={
  		left:testInstance.timerData.poleft
  	}
    return (
        <div className={s.wrap}>
            <ul className={s.list} style={style}>
		        {userInfo.imgrun.map((item,index)=>(<li key={index}><img src={img} /></li>))}
    		</ul>
    		<ul className={s.btn} >
    			{userInfo.imgrun.map((item,index)=>(<li id={index}  onClick={testInstance.imgrun}  key={index} className={testInstance.timerData.secondsPassed%5==index?s.active:""}></li>))}
		    </ul>
        </div>
     	)
  	}
}
export default withStyles(s)(Go);