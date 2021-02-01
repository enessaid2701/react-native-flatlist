import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import HttpExample from './http_example'
import Details from './details'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "HttpExample" component = {HttpExample}  initial = {true} hideNavBar={true} />
         <Scene key = "details" component = {Details} title = "Ana Sayfa" activeBackgroundColor={'#42515a'}/>
      </Scene>
   </Router>
)
export default Routes