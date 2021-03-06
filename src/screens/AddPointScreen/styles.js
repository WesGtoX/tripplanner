import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    header: {
        height: 192,
        backgroundColor: 'grey'
    },
    backButton:{
        position: 'absolute',
        top: 16,
        left: 16,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10
    },
    tripName: {
        position: 'absolute',
        left: 16,
        bottom: 16
    },
    tripPrice: {
        position: 'absolute',
        bottom: 16,
        right: 32,
        textAlign: 'right',
        backgroundColor: '#24C6DC',
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 4,
        paddingRight: 4,
        color: 'white'
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 20
    },
    wrapperInfo: {
        flex: 1
    },
    itemName: {
        fontWeight: 'bold',
        fontSize: 18
    },
    wrapperItemPrice: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 16,
    },
    itemPrice: {
        textAlign: 'center',
        color: '#24C6DC',
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#E5E5E5',
        padding: 20,
        marginBottom: 16,
    },
    btn: {
        backgroundColor: '#E5E5E5',
        padding: 20,
        marginBottom: 16,
    },

})
export default styles