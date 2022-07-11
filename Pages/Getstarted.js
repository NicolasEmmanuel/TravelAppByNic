import { ImageBackground, StyleSheet, Text, View, Button, } from 'react-native'
import React from 'react'
import { Alert } from 'react-native'


const Getstarted = ({ navigation }) => {
  return (

    <View style={styles.container}>
        <ImageBackground 
            style={styles.imageBg}
            source={require('../asset/1.jpg')}>

    {/* Header */}
                <View   
                    style={styles.header}>
                </View>

    {/* Bottom */}
                <View 
                    style={styles.bottom}>

                    {/* Title */}
                            <Text style={styles.title}>Discover World With Us</Text>

                    {/* SubTitle */}
                            <Text style={styles.subTitle}>
                            Lorem ipsum dolor sit amet. Nam quibusdam dicta hic assumenda blanditiis At neque sequi vel fugit facere in accusamus quae
                            </Text>
            
            {/* Button */}        
                        <View>
                            <Button
                                style={styles.buttonStart}
                                title="Get Started"
                                onPress={() => navigation.navigate('Home')}/>
                        </View>
                        
                </View>

        </ImageBackground>
    </View>


  )
}

export default Getstarted

const styles = StyleSheet.create({

    container: {
        flex: 1,
      },
    
    imageBg: {
        flex: 1, 
        padding: 10
    },

    header: {
        flex: 3, 
       
    },

    bottom: {
        flex: 1,
        padding: 20, 
        backgroundColor: 'rgba(0,0,0,0.5)'
    },

    title: { 
        fontSize: 20,
        fontWeight: "bold",
        color:"white",
        paddingBottom: 10,
        
    },
    
    subTitle: {
        fontSize: 12,
        color:"white",
        paddingBottom: 55,
    },

    buttonStart: {
       
       
    }

})
