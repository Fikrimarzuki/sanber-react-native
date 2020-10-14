Hari 3 – React Native – Styling , Flexbox & Props

Styling
Dengan React Native, kita tidak perlu menggunakan bahasa lain yang khusus untuk melakukan styling. Cukup menggunakan Javascript. Hampir semua Component bawaan dari React Native menerima prop yang bernama style. Cara kerja dan kegunaannya mirip dengan CSS yang ada pada web, yaitu untuk melakukan styling. Beberapa sintaks yang digunakan di CSS untuk styling dapat dilihat pada w3school.com.

Namun ada sedikit perbedaan pada penulisannya, contoh pada CSS untuk mengatur warna latar suatu elemen, bisa menggunakan sintaks background-color, sementara di JavaScript/React Native dituliskan dengan backgroundColor (menghilangkan “-” dan menjadikan huruf pertama pada kata berikutnya sebagai huruf kapital). Begitu juga pada property lainnya, mengikuti cara penulisan khusus untuk JavaScript.

Untuk melakukan styling pada React Native kita bisa langsung mendefenisikannya dalam bentuk POJO (Plain old javascript object). Atau kita dapat menjadikan satu semua style ke dalam bentuk array untuk kemudian dapat kita panggil satu per satu.

Dengan style kita bisa melakukan banyak perubahan tampilan pada setiap Component yang ada pada aplikasi yang kita bangun. Misalnya, merubah warna, background, padding, margin dsb.

Sumber: https://www.galihlprakoso.com/2019/02/tutorial-react-native-indonesia-7-style.html

Box Model
Semua elemen dapat dianggap sebagai box. Pada CSS istilah “box model” digunakan ketika berbicara tentang desain dan layout. Box model pada dasarnya merupakan kotak yang mengelilingi setiap elemen/komponen. Hal ini terdiri dari margin, border, padding, dan konten/komponen itu sendiri. Contoh gambaran dari box model, adalah sebagai berikut:

https://blog.sanbercode.com/wp-content/uploads/2020/07/BoxModel.png
sumber: w3schools.com
Penjelasan:

Content: Konten/isi dari box, bisa berupa teks atau gambar yang muncul.
Padding: Memberi jarak di sekitar content. Padding ini bersifat transparan.
Border: Garis batas yang mengelilingi padding dan content.
Margin: Memberi jarak pada area di luar border. Margin bersifat transparan.
Box model membuat kita dapat menambahkan border yang mengelilingi elemen/komponen, dan memberikan jarak antar elemen/komponen.

Flexbox
Untuk mengatur layout dari komponen children, dapat menggunakan pendekatan/algoritma flexbox. Algoritma ini memungkinkan suatu layout mengembang atau mengecil sesuai dengan dimensi perangkat yang digunakan. Secara umum terdapat 3 property/props yang perlu diperhatikan, antara lain:

flexDirection 
flexDirection, mengatur arah urutan penyusunan komponen children, terdapat 2 pilihan yaitu “column” (default) dan “row”. “Column” menjadikan komponen children tersusun secara vertikal, sementara “row” membuat komponen children tersusun secara horizontal. Property ini menentukan arah sumbu utama (primary axis) yang akan mempengaruhi property lainnya

justifyContent
justifyContent, mengatur posisi children sepanjang sumbu utama (primary axis). Terdapat beberapa pilihan, antara lain:

Flex-start, mengumpulkan komponen children pada posisi paling awal, tergantung jenis flexDirection yang dipilih, yaitu posisi paling atas untuk “column” dan posisi paling kiri untuk “row”.
Flex-end, mengumpulkan komponen children pada posisi paling akhir, tergantung jenis flexDirection yang dipilih, yaitu posisi paling bawah untuk “column” dan posisi paling kanan untuk “row”.
Center, mengumpulkan komponen children pada posisi tengah sesuai sumbu utamanya.
Space-around, memberikan jeda/whitespace antar komponen termasuk jarak terhadap ujung layout.
Space-between, memberikan jeda/whitespace antar komponen dimana komponen awal berada di pojok kiri/atas dan komponen akhir berada di pojok kanan/bawah, tergantung flexDirection yang digunakan.
Space-evenly, membagi sama rata seluruh jeda/whitespace pada masing-masing komponen.
alignItems
alignItems, mengatur posisi children pada arah tegak lurus terhadap sumbu utama (atau disebut secondary axis). Terdapat beberapa pilihan, antara lain:

Flex-start, seperti pada justifyContent namun children dikumpulkan pada posisi paling kiri untuk “column”, dan posisi paling atas untuk “row”.
Flex-end, seperti pada justifyContent namun children dikumpulkan pada posisi paling kanan untuk “column”, dan posisi paling bawah untuk “row”.
Center, seperti pada justifyContent dimana children dikumpulkan pada posisi tengah sesuai secondary axis-nya.
Stretch, membuat container komponen children memenuhi/memanjang sesuai secondary axis-nya.
Baseline, membuat komponen children berada pada “alas” yang sama sesuai secondary axis-nya.
Contoh, buatlah 2 file, index.js dan Toggle.js dalam satu folder

Isi dari file index.js:

import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import Toggle from './Toggle'

export default class App extends Component {

  state = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }

  render() {
    const {flexDirection, alignItems, justifyContent} = this.state
    const layoutStyle = {flexDirection, justifyContent, alignItems}

    const primaryAxis = flexDirection === 'row' ? 'Horizontal' : 'Vertical'
    const secondaryAxis = flexDirection === 'row' ? 'Vertical' : 'Horizontal'

    return (
      <View style={styles.container}>
        <Toggle
          label={'Primary axis (flexDirection)'}
          value={flexDirection}
          options={['row', 'column']}
          onChange={(option) => this.setState({flexDirection: option})}
        />
        <Toggle
          label={primaryAxis + ' distribution (justifyContent)'}
          value={justifyContent}
          options={['flex-start', 'center', 'flex-end', 'space-around', 'space-between', ‘space-evenly’]}
          onChange={(option) => this.setState({justifyContent: option})}
        />
        <Toggle
          label={secondaryAxis + ' alignment (alignItems)'}
          value={alignItems}
          options={['flex-start', 'center', 'flex-end', 'stretch', ‘baseline’]}
          onChange={(option) => this.setState({alignItems: option})}
        />
        <View style={[styles.layout, layoutStyle]}>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  box: {
    padding: 25,
    backgroundColor: 'steelblue',
    margin: 5,
  },
})
Dan isi dari Toggle.js:

import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class Toggle extends Component {

  onPress = (option) => {
    const {onChange} = this.props

    onChange(option)
  }

  renderOption = (option, i) => {
    const {value} = this.props

    return (
      <TouchableOpacity
        style={[styles.option, option === value && styles.activeOption]}
        onPress={this.onPress.bind(this, option)}
        key={i}
      >
        <Text style={styles.text}>
          {option}
        </Text>
      </TouchableOpacity>
    )
  }

  render() {
    const {label, options} = this.props

    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.label]}>
          {label}
        </Text>
        <View style={styles.optionsContainer}>
          {options.map(this.renderOption)}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingBottom: 20,
  },
  text: {
    fontSize: 14,
  },
  label: {
    padding: 4,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  option: {
    padding: 4,
    backgroundColor: 'whitesmoke',
  },
  activeOption: {
    backgroundColor: 'skyblue',
  },
})
Sumber: http://www.reactnativeexpress.com/flexbox

Referensi lainnya yang bisa digunakan untuk mempelajari Flexbox ini dapat mengakses css-tricks.com atau w3schools.com.

Props

Menghubungkan data dari parent component ke children component. Pada Class component, props dapat dipanggil menggunakan this.props. Meskipun props dapat diakses pada children component, namun props tidak dapat diubah di dalam komponen yang menggunakannya. Jika ingin mengubah isi data pada props hanya bisa dilakukan pada parent component.

Contoh Props

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Card =({title})=>{
  return(
    <TouchableOpacity style={styles.Button2}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}
const App=()=> {
  return (
    <View style={styles.container}>    
        <Card title="monkey"/>    
        <Card title="One Piece"/>  
        <Card title="Naruto"/>   
        <Card title="Saitama"/>    
        <Card title="Dragon ball"/>  
        <Card title="Boku No Hero"/>          
    </View>
  )
}

export default App
const styles = StyleSheet.create({
  Button2:{
    width: 300,
    height: 30,
    backgroundColor:'skyblue',
    justifyContent:'center',
    alignItems:'center'
  },
  container:{
    padding: 16
  }
})
Updated on Oktober 14, 2020

https://blog.sanbercode.com/docs/kurikulum-react-native-mobile-apps-development/week-3/react-native-flexbox/