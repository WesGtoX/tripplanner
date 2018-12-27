import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import styles from './styles'

class TripScreen extends Component {
    static navigationOptions = {
        header: null
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
                <View style={styles.header}>
                    <View style={styles.backButton}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image source={require('../../../assets/arrow-left-white.png')} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.tripName}>{trip.name}</Text>
                    <Text style={styles.tripPrice}>R$ 5000</Text>
                </View>
                <FlatList
                    style={{
                        flex: 1
                    }}
                    contentContainerStyle={{
                        paddingTop: 16,
                        paddingLeft: 16,
                    }}
                    keyExtractor={ item => item.id }
                    data={trip.places}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}
export default TripScreen