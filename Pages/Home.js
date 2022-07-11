import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed'
import { Icon } from "@rneui/themed";

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Solid Button" />

      
      <Icon
        name='rowing' />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})