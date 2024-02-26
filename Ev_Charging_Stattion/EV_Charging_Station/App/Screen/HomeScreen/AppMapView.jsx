import React, { useContext } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Image, StyleSheet, View } from 'react-native';
import MapViewStyle from '../../utils/MapViewStyle.json';
import { UserLocationContext } from '../../Context/UserLocationContext';

export default function AppMapView() {

    const { location, setLocation } = useContext(UserLocationContext);

    return location?.latitude && (
        <View>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                customMapStyle={MapViewStyle}
                region={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.0422,
                    longitudeDelta: 0.0421
                }}
            >
            <Marker
                coordinate={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.0422,
                    longitudeDelta: 0.0421
                }}
            >
                <Image 
                source={require('../../../assets/images/redcar.png')} 
                style={{
                    width:30,
                    height:60
                }} />
            </Marker>
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});