import React, { Component } from 'react'
import { View, AsyncStorage, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import styles from './styles'

class TripScreen extends Component {
    static navigationOptions = {
        header: null
    }
    state = {
        trip: [],
        points: []
    }
    renderItem = item => {
        return(
            <View style={styles.item}>
                <View style={styles.wrapperInfo}>
                    <Text style={styles.itemName}>{item.item.pointName}</Text>
                    <Text>{item.item.description}</Text>
                </View>
                <View style={styles.wrapperItemPrice}>
                    <Text style={styles.itemPrice}>R$ {item.item.price.toFixed(2)}</Text>
                </View>
            </View>
        )
    }
        
    componentDidMount() {
        this.loadData()
    }
    loadData = async() => {
        console.log(this.props.navigation.state)
        const id = this.props.navigation.state.params.id
        const tripsAS = await AsyncStorage.getItem('trips')
        let trips = []
        if(tripsAS) {
            trips = JSON.parse(tripsAS)
        }

        const pointsAS = await AsyncStorage.getItem('trip-'+id)
        let points = []
        if(pointsAS) {
            points = JSON.parse(pointsAS)
        }

        let trip = {
            trip: '',
            points: 0
        }
        trips.forEach(t => {
            if(t.id === id) {
                trip.trip = t.trip
                trip.price = t.price ? t.price : 0
            }
        })

        this.setState({ 
            trip: trip,
            points: points
        })
    }
    render() {
        const id = this.props.navigation.state.params.id
        const { points, trip } = this.state
        return(
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <View style={styles.backButton}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.state.params.reflesh()
                            this.props.navigation.goBack()
                        }}>
                            <Image source={require('../../../assets/arrow-left-white.png')} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.tripName}>{trip.trip}</Text>
                    <Text style={styles.tripPrice}>R$ {parseFloat(trip.price).toFixed(2)}</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AddPoint', { id: id, reflesh: this.loadData })} style={{
                        position: 'absolute',
                        bottom: 40,
                        right: 20,
                        padding: 10
                    }}>
                        <Image source={require('../../../assets/add.png')} />
                    </TouchableOpacity>
                </View>
                <FlatList
                    style={{
                        flex: 1
                    }}
                    contentContainerStyle={{
                        paddingTop: 16,
                        paddingLeft: 16,
                    }}
                    keyExtractor={ item => item.id.toString() }
                    data={points}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}
export default TripScreen