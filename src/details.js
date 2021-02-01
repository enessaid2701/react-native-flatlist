import React, { Component } from 'react'
import { View, Text,StyleSheet } from 'react-native'

class Details extends Component  {
   render(){
      return (
         <View style= {{flex :1}}>
            <Text style={styles.itemContainer}>
            phone : {`${this.props.phone}`}
            </Text>
            <Text style={styles.itemContainer}>
            website : {`${this.props.website}`}
            </Text>
            <Text style={styles.itemContainer}>
               email : {`${this.props.email}`}
            </Text>
            <Text style={styles.itemContainer}>
            street : {`${this.props.address0}`}
            </Text>
            <Text style={styles.itemContainer}>
               suite : {`${this.props.address1}`}
            </Text>
            <Text style={styles.itemContainer}>
               city : {`${this.props.address2}`}
            </Text>
            <Text style={styles.itemContainer}>
               zipcode : {`${this.props.address3}`}
            </Text>
            <Text style={styles.itemContainer}>
               lat : {`${this.props.address4}`}
            </Text>
            <Text style={styles.itemContainer}>
               lng : {`${this.props.address5}`}
            </Text>
            <Text style={styles.itemContainer}>
               company name : {`${this.props.company}`}
            </Text>
            <Text style={styles.itemContainer}>
               catchPhrase : {`${this.props.company1}`}
            </Text>
            <Text style={styles.itemContainer}>
               bs : {`${this.props.company2}`}
            </Text>
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
      fontSize: 15
   }
})
export default Details