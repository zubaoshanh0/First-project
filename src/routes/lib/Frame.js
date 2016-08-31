/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Frame.css'
import { observer } from 'mobx-react'
import { testInstance } from './../../data/models/testModel'
import { userInfo } from './../../data/models/UserInfo'
import history from './../../core/history'
@observer
class Frame extends React.Component {
  render() {
  	return (
  		<div className={s.page}>
	  		<div className={s.open}>
	  			<div className={s.hide} onClick={this.jump}>X</div>
	  			<div className={s.title} > title </div>
	  			<input className={s.name} type="text" placeholder="用户ID/注册邮箱" />
	  			<input className={s.password} type="password"  placeholder="密码" />
	  			<p className={s.remember}>
	  				<input type="checkbox"  />记住我
	  			</p>
	  			<input type="button" value="登录" className={s.register} />
	  			<div className={s.pw_lg}>
	  				<a href="javascript:;">忘记密码</a>|<a href="javascript:;">注册</a>
	  			</div>
	  		</div>
	  	</div>
  		)
  }
  jump() {
    history.goBack(-1)
  }
  
}


export default withStyles(s)(Frame);
