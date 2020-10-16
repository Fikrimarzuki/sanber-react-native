Hari 5 – React Navigation
Pada materi kali ini kita akan membahas navigasi di React Native. Navigasi adalah cara berpindah halaman/screen pada React Native. Di sini kita akan menggunakan versi React Navigation terbaru yaitu versi 5.x yang merupakan versi terbaru. Kita akan mempelajari bagaimana cara berpindah halaman/screen di React Native.

Instalasi React Navigation
Sebelum memulai project, pertama install React Navigation dan Library lainnya yang di butuhkan dari folder project Expo/React Native Anda:

npm install @react-navigation/native
// atau
yarn add @react-navigation/native 
Selanjutnya instalasi dependencies yang diperlukan, tergantung metode init project yang digunakan:

Expo:

expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view 
untuk expo cukup sampai disini.

React Native CLI:

npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
// atau
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
jika menggunakan Mac dan mengembangkan aplikasi iOS, diperlukan install pods (melalui Cocoapods) jalankan perintah berikut:

$ npx pod-install ios
// atau
$ cd ios && pod install
jika menggunakan React Native dibawah versi 0.60 maka diperlukan konfigurasi tambahan. dapat dilihat pada web reactnavigation.org.

instalasi react navigation pada React Native CLI cukup sampai di sini.

Setup Awal
Selanjutnya lakukan instalasi package Navigator yang akan digunakan, misal Stack Navigator:

$ npm install @react-navigation/stack
// atau
$ yarn add @react-navigation/stack
Selanjutnya masuk ke root folder project cari App.js, atau buat file baru dengan nama index.js, bebas ditempatkan dimana saja, yang nantinya akan dipanggil ke App.js di root folder project. (File ini akan menjadi tempat utama dalam melakukan konfigurasi sistem navigasi pada aplikasi yang dibuat). Pada file tersebut tambahkan sintaks berikut:

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
Sampai pada tahap ini Anda siap menggunakan React Navigation versi 5.x

Contoh aplikasi:

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screen Home
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />

      <Button
        color="red"
        title="Go to Profile"
        onPress={() => navigation.navigate('Profiles')}
      />

    </View>
  );
}

// Screen Detail
function DetailsScreen({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

// Screen Profile
function ProfilesScreen({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button
        color="black"
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        color="green"
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

// Stack berguna untuk routing aplikasi
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
     {*/<Stack.Screen name="NamaRute" component={NamaRuteComponent} />*/}  
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Profiles" component={ProfilesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
Berpindah dan Mengirimkan Data antar Halaman
Untuk melakukan kegiatan pindah antar halaman yang terdapat dalam aplikasi, diperlukan suatu fungsi. Pada Class based component, fungsi yang digunakan sedikit berbeda dengan Function based component:

// pada class component umumnya digunakan sintaks berikut: 
export default class App extends React.Component {
  render() {
    return (
      <View>
        <Button
          title="Menuju Screen Lain"
          onPress={() => this.props.navigation.navigate('NamaRute')}
        />
        <Button
          title="Menuju Screen Lain"
          onPress={() => this.props.navigation.navigate('NamaRute', {key:'value'})}
        />
        <Text>{this.props.route.params.key}</Text> 
      </View>
    )
  }
} 

// sedangkan pada function component:
 export default function App ({route, navigation}) {
    return (
      <View>
        <Button
          title="Menuju Screen Lain"
          onPress={() => navigation.navigate('NamaRute')}
        />
        <Button
          title="Menuju Screen Lain"
          onPress={() => navigation.navigate('NamaRute', {key:'value'})}
        />
        <Text>{route.params.key}</Text> 
      </View>
    )
}  
React Navigation versi 5.x memang dibuat agar bisa digunakan secara optimal dengan menggunakan Function based Component dan Hooks.

Sumber:
https://reactnavigation.org/docs/getting-started/
https://www.konsepkoding.com/2020/03/tutorial-react-native-react-navigation.html

Updated on September 11, 2020
https://blog.sanbercode.com/docs/kurikulum-react-native-mobile-apps-development/week-3/react-native-navigation/