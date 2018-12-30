import React from 'react'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import styles from './styles'

const Trip = props => {
    const dim = Dimensions.get('window')
    return(
        <TouchableOpacity onPress={props.onPress} style={styles.wrapperTrip}>
            <View style={[styles.image, { width: dim.width-32 }]}><Text>Image</Text></View>
            <Text>{props.title}</Text>
            <Text style={styles.price}>R$ {parseFloat(props.price).toFixed(2)}</Text>
        </TouchableOpacity>
    )
}
export default Trip