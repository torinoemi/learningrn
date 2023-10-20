import { View, Text, image } from 'react-native'
import React from 'react'
import { SafeAreaView, } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import {MapPinIcon} from 'react-native-heroicons/solid'


export default function homeScreen() {
  return (
    <View className="flex-1 relative bg-white">
      <statusBar />
      <image source={require('../imagenes/imagendefondo.png')}
      className="W-full absolute -top-5 opacity-10"
      style={{height: 220}} 
      />
      <SafeAreaView className="flex-1">
        {/* avatar and bell icon */}
        <View className="">
          <image source={require('../imagenes/icono.png')}
          className="h-9 w-9 rounded-full" />
          <View className="flex-row items-center space-x-2">
            

          </View>

        </View >


      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
