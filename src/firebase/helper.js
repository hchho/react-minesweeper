import React from 'react'

import { FirebaseContext } from './context'

export const FirebaseComponent = ({ InnerComponent, ...props }) => (
  <FirebaseContext.Consumer>
    {firebase => <InnerComponent {...{...props, firebase}} />}
  </FirebaseContext.Consumer>
)