import React from 'react'

import { FirebaseContext } from './context'

export const withFirebase = InnerComponent => (
  <FirebaseContext.Consumer>
    {firebase => <InnerComponent firebase={firebase} />}
  </FirebaseContext.Consumer>
)