/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Contact from './Contact';
import s from './Contact.css'
import Frame from './../lib/Frame'
import Go from './../go/Go'
export default {

  path: '/contact',

  // async action() {
  //   const Contact = await new Promise((resolve) => {
  //     require.ensure([], (require) => resolve(require('./Contact').default));
  //   });


  //   return <Contact />;
  // },
  async action({ next }) {
    const component = await next();
    return component;
  },
  children: [
    {
      path: '/', // Same as /parent
      action: () => {
        console.log('in name router')
        return (
          <div className={s.up}>
            <Go />
            <Contact />
          </div>
        )
      },
    },
    {
      path: '/name',
      action: async () => {
        console.log('in name router')
        return (
          <div className={s.up}>
            <Frame />
            <Contact />
          </div>
        )
      },
    },
  ],

};
