Hari 4 – React Native – Components API & Lifecycle

Komponen (Components) merupakan blok pembangun dari suatu UI (User Interface). React Native akan melakukan konversi komponen JavaScript menjadi komponen native (Android/IOS) sehingga dapat muncul pada aplikasi. Komponen dalam React Native dapat dibentuk menggunakan Class atau Function.

Tampilan UI dari aplikasi merupakan kumpulan komponen yang dideklarasikan dalam kode untuk dimunculkan dengan urutan yang telah ditetapkan. Komponen biasanya bersarang (nested) dari satu komponen ke komponen lainnya, membentuk struktur pohon/hirarki. Komponen paling atas dikenal sebagai root component / parent sementara komponen di bawahnya dikenal sebagai children component.

Components API
Terdapat beberapa API yang dapat diakses di dalam sebuah component diantaranya adalah state.

State
Merupakan data yang dapat berubah di dalam suatu komponen. Namun state tidak dapat diakses oleh parent component. State dapat dipanggil atau digunakan dengan menggunakan this.state. State tidak dapat diubah secara langsung dengan operator assignment (=), jika ingin merubah state, maka digunakan this.setState({namaState: nilai}).

Pada contoh aplikasi di atas, terdapat 2 komponen, yaitu App (sebagai parent) dan Counter (sebagai children). Counter memiliki 2 props yang diterima dari App yaitu color dan size. Kemudian komponen Counter memiliki state yaitu count.

Lifecycle API
Pada React Native, setiap komponen memiliki siklus atau lebih dikenal sebagai lifecycle. Lifecycle dapat mempermudah proses eksekusi suatu method atau function sehingga performa proses rendering menjadi lebih baik. Secara umum ada 3 kelompok Lifecycle, yaitu Mounting cycle, Updating cycle, dan Unmounting cycle.

https://hackernoon.com/hn-images/1*sn-ftowp0_VVRbeUAFECMA.png
Sumber: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

Mounting cycle
constructor(object props), merupakan tahap inisiasi komponen Class. Parameter yang dimasukkan ke dalam constructor merupakan element awal dari props, yang diperoleh dari parent component. Pada bagian ini juga bisa ditambahkan elemen lainnya ke dalam this.state. Pada tahap ini belum terjadi proses render UI di komponen ini.

componentWillMount(), method ini hanya dipanggil satu kali sebelum terjadi proses render UI. Dan pada tahap ini juga belum terjadi proses render UI di komponen ini. (Perlu diketahui bahwa method ini akan/sudah dihapus oleh React).

render() -> React Element, merupakan tahap render UI komponen, harus memiliki return suatu React Element (seperti View, Text, dan sebagainya atau null sehingga tidak ada UI yang di render).

componentDidMount(), Method yang hanya dipanggil satu kali setelah proses render. Pada tahap ini UI untuk komponen ini telah selesai di render, dan komponen UI dapat diakses menggunakan this.ref untuk dimanipulasi lebih lanjut. Umumnya jika ingin mengeksekusi fungsi asynchronous dipanggil pada method ini.

Updating cycle
render() -> React Element, sama seperti pada Mounting cycle, merupakan tahap render UI komponen, harus memiliki return suatu React Element (seperti View, Text, dan sebagainya atau null sehingga tidak ada UI yang di render). Proses update atau re-render terjadi ketika terjadi perubahan state atau props yang di handle oleh method componentDidUpdate().

componentDidUpdate(prevProps prevState), method ini dipanggil setelah terjadi perubahan pada state atau props yang ditetapkan dalam method ini. Pada tahap ini terjadi render ulang terhadap komponen UI.

Unmounting
componentWillUnmount(), method ini dipanggil tepat sebelum komponen dilepas dan dihapus. Pada tahap ini disarankan untuk menghentikan timer, membatalkan network request (seperti memanggil API dari web), dan menghentikan listener/subscription yang dibuat pada method componentDidMount(), jika ada.

Contoh aplikasi Lifecycle menggunakan Class Component:

import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Counter extends Component {

  state = {count: 0}

  componentDidMount() {
    setInterval(() => {
      this.setState({count: this.state.count + 1})
    }, 1000)
  }

  render() {
    const {count} = this.state
    const {color, size} = this.props

    return (
      <Text style={{color, fontSize: size}}>
        {count}
      </Text>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Counter color={'lightblue'} size={16} />
        <Counter color={'skyblue'} size={32} />
        <Counter color={'steelblue'} size={80} />
        <Counter color={'darkblue'} size={140} />
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
})
Hooks
Hooks merupakan fitur baru di React 16.8 atau versi lebih baru dari itu. Dengan Hooks, kita dapat menggunakan state dan fitur React yang lain tanpa perlu menulis sebuah kelas baru. Hooks merupakan fungsi yang memungkinkan Anda untuk “mengaitkan” state dan fitur-fitur lifecycle React dari function component. Hooks tidak dapat berfungsi didalam kelas dan Hooks memungkinkan menggunakan React tanpa kelas

Function Component dengan hooks

Seperti yang sudah kita ketahui bahwa component dapat dibuat dengan dua cara yaitu menggunakan react subclass component atau dengan function component. sebelum React versi 16.8 beberapa frontend developer cenderung menggunakan class component karena di dalamnya kita bisa menggunakan state, namun permasalahan tersebut sudah ada solusinya yaitu hooks

berikut ini contoh penggunaan hooks:

import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';

const App = () => {
  // Deklarasi variabel state baru yang kita sebut "count"
  const [count, setCount] = useState(0);

  return (
    <View style={{justifyContent:"center", flex:1, paddingHorizontal:16}}>
      <Button onPress={() => setCount(count + 1)} title="Tambah"/>
      <Text style={{alignItems:'center'}}>Anda menekan sebanyak {count} kali</Text>
      <Button onPress={() => setCount(count - 1)} title="Kurang"/>
        
    </View>
  );
}

export default App
Implementasi Lifecycle Hooks (UseEffect)
useEffect adalah salah satu bagian dari hook yang berfungsi menggantikan lifecycle method yang ada dalam class component, useEffect memungkinkan Anda melakukan efek samping (side effects) didalam function component

Jika Anda familiar dengan React class lifecycle methods, Anda dapat menganggap Hook useEffect sebagaicomponentDidMount, componentDidUpdate, dan componentWillUnmount yang disatukan

berikut ini contoh penerapan useEffect:

import React, { useEffect, useState } from 'react';
import { Button, View, Text } from 'react-native';

const App = () => {
  // Deklarasi variabel state baru yang kita sebut "count"
  const [count, setCount] = useState(0);
  useEffect(()=>{
    setInterval(() => {
      setCount(count + 1);
    },3000);
  });

  return (
    <View style={{justifyContent:"center", flex:1, paddingHorizontal:16}}>
      <Text>Count Increment {count} times</Text>        
    </View>
  );
}

export default App
Updated on Oktober 13, 2020
https://blog.sanbercode.com/docs/kurikulum-react-native-mobile-apps-development/week-3/react-native-lifecycle/