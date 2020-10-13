Hari 2 – React Native – Components
Import dan Export
Sebelum membahas lebih mendalam terkait component dalam react native, ada sedikit materi tambahan yang perlu dibahas terlebih dahulu, yaitu terkait import dan export. 

Import merupakan sintaks yang digunakan untuk memanggil suatu modul (bisa berupa object, variable, function, atau class) atau komponen sehingga dapat digunakan pada modul/file yang sedang berjalan. Contoh penulisannya antara lain:

Import React from “react”; Import { View, Text, StyleSheet } from “react-native”; Import defaultComponent from “module/file” Import NamaFunction from “../path/to/module/file”;
Export adalah sintaks yang digunakan untuk membuat suatu object, variable, function, maupun class bisa digunakan pada modul/file lainnya dengan menggunakan sintaks Import. Contoh penulisannya:

Export default class NamaClass extends React.Component{};
Export default function NamaFunction{};
Export const namaVariabel = “value”; 
Core Components
React Native memiliki berbagai komponen inti (Core Components) yang bisa digunakan secara langsung (tanpa install package tambahan). Berbagai komponen yang lebih kompleks dapat dibangun dari komponen inti dengan cara/metode yang unik.

Hampir semua komponen merupakan bagian dari komponen “<View>” yang memiliki prop “style” masing-masing. Prop “style” dapat mengatur tampilan komponen seperti warna, border, dan konfigurasi layout. Dalam melakukan konfigurasi layout dapat menggunakan pendekatan / algoritma flexbox yang akan dibahas nanti.

View
Komponen View merupakan blok dasar dalam pembangunan aplikasi React Native, seperti tag <div> dalam HTML. Dalam implementasinya, View merupakan lapisan/komponen dengan hirarki tertinggi yang dapat mengatur style dan layout dari komponen di bawahnya (children-nya). Umumnya props yang digunakan dari komponen View ini adalah “style”. Selengkapnya, props yang terdapat pada komponen View dapat dilihat pada dokumentasi React Native (https://reactnative.dev/docs/view).

Contoh:

import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'skyblue',
    borderWidth: 2,
    borderColor: 'steelblue',
    borderRadius: 20,
  },
})
Text 
Sesuai namanya, komponen Text digunakan untuk menampilkan teks, dimana teks yang ingin ditampilkan harus berada dalam tag Text (contoh: <Text>Nama User</Text>). Text juga memiliki beberapa property, termasuk style yang dapat mengubah ukuran teks, warna, dekorasi, dan lainnya. Property Text yang lebih lengkap dapat dilihat pada dokumen React Native (https://reactnative.dev/docs/text-style-props).

Contoh:

import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    backgroundColor: 'whitesmoke',
    color: '#4A90E2',
    fontSize: 24,
    padding: 10,
  },
})
Image 
Komponen Image digunakan untuk menampilkan gambar, baik dari dalam aplikasi (asset) maupun yang diambil dari web/API.

Untuk gambar yang berasal dari dalam aplikasi (bagian dari bundle aplikasi), digunakan prop source = {require(“./path”)}. Sementara untuk gambar yang berasal dari web/API digunakan source ={{uri(“https://url/path”)}}. Setiap komponen Image mendefinisikan ukuran gambar yang akan ditampilkan dengan menambahkan atribut height dan width pada prop style-nya, misal style={{width: ‘100’, height: ‘100’}}.

Contoh:

import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <Image
        style={styles.image}
        source={{uri: 'http://www.reactnativeexpress.com/static/logo.png'}}
      />
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
})
ScrollView 
Komponen ScrollView digunakan pada konten yang dapat digeser. Cocok digunakan untuk jumlah konten yang sedikit (<30 konten). Dan dapat disusun secara vertikal (default) dan horizontal. Pada jumlah konten yang banyak, disarankan menggunakan FlatList agar performa aplikasi menjadi lebih baik.

Cara menggunakan ScrollView adalah dengan menjadikan konten sebagai children. Setiap menampilkan konten yang berulang memerlukan key di setiap kontennya. Jika konten tersebut dibungkus oleh komponen View, maka key dapat disimpan dalam View tersebut dengan menambahkan prop “key”.

Contoh: 

import React, { Component } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.boxLarge} />
        <ScrollView horizontal>
          <View style={styles.boxSmall} />
          <View style={styles.boxSmall} />
          <View style={styles.boxSmall} />
        </ScrollView>
        <View style={styles.boxLarge} />
        <View style={styles.boxSmall} />
        <View style={styles.boxLarge} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxSmall: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'skyblue',
  },
  boxLarge: {
    width: 300,
    height: 300,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'steelblue',
  },
})
FlatList 
Komponen FlatList digunakan untuk menampilkan sejumlah konten dalam jumlah yang banyak dan dapat digeser. Komponen ini memiliki fungsi yang menyerupai ScrollView tetapi dengan performa yang lebih baik, yaitu dengan menampilkan konten sebatas ukuran layar atau dibatasi per jumlah tertentu (misal dari 100 konten yang dimiliki, hanya menampilkan per 10 konten, sementara konten yang lain baru muncul ketika layar digeser). Sama seperti ScrollView, FlatList juga dapat disusun secara vertikal (default) dan horizontal.

Dalam menampilkan konten, FlatList hanya membutuhkan data array dari sekumpulan object dan dimasukkan dalam prop “data”, kemudian tampilan dari konten dapat diatur dalam prop “renderItem”. Dan dalam setiap menampilkan konten yang berulang selalu dibutuhkan “key” untuk membedakan konten yang satu dengan konten yang lain (menghindari terjadi duplikasi konten) yang dapat diatur dalam prop “keyExtractor”.

Contoh:

import React, { Component } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

const rows = [
  { id: 0, text: 'View' },
  { id: 1, text: 'Text' },
  { id: 2, text: 'Image' },
  { id: 3, text: 'ScrollView' },
  { id: 4, text: 'ListView' },
]

const extractKey = ({ id }) => id

export default class App extends Component {

  renderItem = ({ item }) => {
    return (
      <Text style={styles.row}>
        {item.text}
      </Text>
    )
  }

  render() {
    return (
      <FlatList
        style={styles.container}
        data={rows}
        renderItem={this.renderItem}
        keyExtractor={extractKey}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
})
TouchableOpacity
Pada React Native terdapat komponen Button yang merupakan komponen tombol dasar yang dapat tampil dengan baik pada berbagai platform. Namun komponen ini hanya didukung oleh tingkat kustomisasi yang minimal. Seringkali Button ini dirasa tidak tampil dengan cukup baik pada aplikasi, sehingga disarankan untuk membuat/desain tombol sendiri menggunakan TouchableOpacity atau TouchableNativeFeedback.

TouchableOpacity merupakan pembungkus dari suatu komponen View, yang dapat merespon ketika dilakukan sentuhan oleh user. Ketika komponen ini disentuh, maka opacity pada komponen tersebut akan berkurang, atau terlihat menjadi semakin samar.

Contoh:

import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default class App extends Component {
constructor(){
  super();
  this.state = {
    count : 3
  }
}

onPress (){
  this.setState({ count: this.state.count + 1 }); 
}

render(){
return (
 <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text>Count: {this.state.count}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => this.onPress()}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
}
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: "center",
     paddingHorizontal: 10
   },
   button: {
     alignItems: "center",
     backgroundColor: "#DDDDDD",
     padding: 10
   },
   countContainer: {
     alignItems: "center",
     padding: 10
   }
 }); 
TextInput
Merupakan komponen dasar dalam melakukan input teks pada aplikasi menggunakan keyboard. Props pada komponen ini memiliki berbagai fitur yang dapat diatur, seperti auto-correction, auto-capitalization, placeholder, dan memilih tipe keyboard tertentu, seperti numeric keypad.

Contoh paling dasar dalam penggunaan komponen ini adalah dengan memperhatikan event onChangeText dalam membaca input dari user. Terdapat juga beberapa event lain, seperti onSubmitEditing dan onFocus yang dapat kita konfigurasikan.

import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      value: 'Useless Placeholder',
    };
  }

  render() {
    return (
      <View>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => this.setState({ value: text })}
          value={this.state.value}
        />
        <Text>{this.state.value}</Text>
      </View>
    );
  }
}
Updated on September 8, 2020

https://blog.sanbercode.com/docs/kurikulum-react-native-mobile-apps-development/week-3/react-native-components/