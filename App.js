import { NavigationContainer, StackActions } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
       <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="StarMap" component={StartMapScreen} />
         <Stack.Screen name="DailyPic" component={DailyPicScreen} /> 
         <Stack.Screen name="SpaceCraft" component={SpaceCraftScreen} />
          </Stack.Navigator>
    </NavigationContainer>
  )
}
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
