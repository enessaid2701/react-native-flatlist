import React, { Component } from 'react'
import { View, Text, FlatList,StyleSheet, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux';
import Headers from './header'




class HttpExample extends Component {
   state = {
      data: [],
   }

    goToHome = (index) => {
      Actions.details({email: this.state.data[index].email,
         address0: this.state.data[index].address.street,
         address1: this.state.data[index].address.suite,
         address2: this.state.data[index].address.city,
         address3: this.state.data[index].address.zipcode,
         address4: this.state.data[index].address.geo.lat,
         address5: this.state.data[index].address.geo.lng,
         phone: this.state.data[index].phone,
         website: this.state.data[index].website,
         company: this.state.data[index].company.name,
         company1: this.state.data[index].company.catchPhrase,
         company2: this.state.data[index].company.bs,


         });
    }
   
   componentDidMount = () => {
      fetch('https://jsonplaceholder.typicode.com/users', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         //console.log(responseJson);
         //console.log(responseJson[index].email)
         this.setState({
            data: responseJson
         })
      })
      .catch((error) => {
         console.error(error);
      });
   }
   render() {
      return (
         <View>
            <Headers/>
            <FlatList
               keyExtractor= {(item) => item.id.toString()}
               data={this.state.data}
               renderItem={({item, index})=> 
               <TouchableOpacity onPress={() => this.goToHome(index)}>
                  <View style= {[styles.itemContainer, {backgroundColor: index %2 == 0 ? 'white' : '#f7f7f7'}]}>
                     <Text style={{fontSize:20}}>
                        {`${item.name}`}
                     </Text>
                     <Text style={{fontSize:20}}>
                        {`${item.surname}`}
                     </Text>
                  </View>
               </TouchableOpacity>}/>
         </View>
      )
   }
}
const styles = StyleSheet.create({
   itemContainer:{
      borderBottomWidth:1,
      borderBottomColor:'#eee',
      flexDirection: 'row',
      paddingVertical:10,
      paddingLeft:7,
   }
})
export default HttpExample