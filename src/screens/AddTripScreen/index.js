import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native'
import styles from './styles'

class AddPointScreen extends Component {
    static navigationOptions = {
        header: null
    }
    state = {
        trip: '',
    }
    renderItem = item => {
        return(
            <View style={styles.item}>
                <View style={styles.wrapperInfo}>
                    <Text style={styles.itemName}>{item.item.name}</Text>
                    <Text>{item.item.description}</Text>
                </View>
                <View style={styles.wrapperItemPrice}>
                    <Text style={styles.itemPrice}>{item.item.price}</Text>
                </View>
            </View>
        )
    }
    handleSave = async() => {
        const trip = {
            id: new Date().getTime(),
            trip: this.state.trip,
            price: 0,
            latitude: 0,
            longitude: 0,
        }
        const tripsAS = await AsyncStorage.getItem('trips')
        let trips = []
        if(tripsAS) {      //truthy não (null, undefined, 0)
            trips = JSON.parse(tripsAS)
        }
        trips.push(trip)
        await AsyncStorage.setItem('trips', JSON.stringify(trips))
        // this.props.navigation.navigate('AddPoint', { id: trip.id })
        this.props.navigation.state.params.reflesh()
        this.props.navigation.goBack()
    }
    render() {
        const trip = {
            name: 'Eurotrip 2019',
            price: 'R$ 5000',
            places: [
                { id: '1', name: 'Amsterdan', description: 'Chegada', price: 100, lat: 0, Long: 0 },
                { id: '2', name: 'Bruxelas', description: 'Hospedagem', price: 100, lat: 0, Long: 0 },
                { id: '3', name: 'Amsterdan', description: 'Chegada', price: 100, lat: 0, Long: 0 },
                { id: '4', name: 'Bruxelas', description: 'Hospedagem', price: 100, lat: 0, Long: 0 },
                { id: '5', name: 'Amsterdan', description: 'Chegada', price: 100, lat: 0, Long: 0 },
                { id: '6', name: 'Bruxelas', description: 'Hospedagem', price: 100, lat: 0, Long: 0 },
            ]
        }
        return(
            <View style={styles.wrapper}>
                <TextInput style={styles.input} placeholder='Nome da Viagem' onChangeText={ txt => this.setState({ trip: txt })} />
                <TouchableOpacity style={styles.btn} onPress={this.handleSave}>
                    <Text>Salvar Viagem</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default AddPointScreen