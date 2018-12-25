import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native'
import assets from './assets'
import styles from './styles'

class HomeScreen extends Component {
    state = {
        show: true
    }

    handleCounter = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return(
            <ImageBackground 
                source={assets.background}
                imageStyle={{ resizeMode: 'stretch' }}
                style={styles.background}>

                <View style={styles.wrapperLogoTripPlanner}>
                    <Image source={assets.tripplanner} />
                </View>

                <View style={styles.wrapperLogoDevPLeno}>
                    <Image source={assets.devpleno} />
                </View>

                {
                    !this.state.show ? <TouchableWithoutFeedback onPress={ this.handleCounter }>
                        <View style={styles.buttonBackground }>
                            <Text style={styles.buttonText}>COMEÇAR!</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    :
                    <TouchableWithoutFeedback onPress={ this.handleCounter }>
                        <View style={styles.buttonBackground }>
                            <Text style={styles.buttonText}>Vamos planejar sua primeira viagem?</Text>
                        </View>
                    </TouchableWithoutFeedback>
                }

            </ImageBackground>
        )
    }
}

export default HomeScreen