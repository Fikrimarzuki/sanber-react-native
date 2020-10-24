React Native – State Management (Redux)
Sebelumnya, telah dipelajari tentang state dan props, termasuk bagaimana cara mengirim data dari suatu komponen ke komponen lainnya dengan menggunakan props.

Namun bagaimana caranya memperoleh data yang sama pada komponen yang berbeda, misal data user yang diperoleh dari komponen Login dibutuhkan oleh komponen Checkout pada suatu aplikasi ecommerce?

Salah satunya adalah dengan props drilling, yaitu mengirimkan data tersebut melalui props. Namun melihat kompleksnya aplikasi ecommerce, cara tersebut sangat tidak efisien.

Untuk itulah diperlukan suatu komponen khusus yang dapat menyimpan data untuk bisa diakses oleh seluruh komponen pada aplikasi yang dikenal dengan istilah State Management.

Pada pengembangan aplikasi React Native, terdapat beberapa pilihan library untuk state management, mulai dari Redux, MobX, dan Context. Khusus Context, ia sudah terpasang langsung pada setiap project React Native yang baru. Sementara Redux dan MobX memerlukan proses instalasi dan konfigurasi sebelum dapat menggunakannya.

Pada materi kali ini kita akan membahas tentang Redux. Redux merupakan library yang umum digunakan untuk mengelola state dan data pada aplikasi skala menengah sampai besar. Komponen utama dari Redux dapat dikelompokkan menjadi beberapa bagian:

Store
merupakan tempat disimpannya data atau state dari aplikasi, atau gudangnya state. Isi dari store bisa didapat menggunakan store.getState(). State dari store tidak boleh diubah secara langsung namun bisa dilakukan melalui method dispatch, misal store.dispatch(action).
Actions
merupakan komponen object yang umumnya memiliki key ‘type‘ (misal {type: 'INCREMENT}). kita bisa menambahkan key lainnya, termasuk diantaranya ‘payload‘ yang biasa digunakan sebagai data tambahan di dalam actions (misal, {type: 'INCREMENT', payload: 42}).
Reducers
merupakan suatu fungsi yang akan menerima action dan mengubah state dalam store. Proses perubahan state tersebut didefinisikan pada fungsi ini sesuai dengan jenis action yang dipanggil sampai mengembalikan suatu state baru : (state, action) => newState.
Sebelum menggunakan Redux, Anda perlu melakukan proses instalasi berikut:

$ npm install redux react-redux
Contoh Redux
Contoh aplikasi sederhana menggunakan Redux:

import React from 'react'
import { Text } from 'react-native'
import { createStore } from 'redux'

// Membuat action types
const types = {
  INCREMENT: 'INCREMENT',
}

// Membuat reducer
const reducer = (state, action) => {
  if (action.type === types.INCREMENT) {
    return { count: state.count + 1 }
  }
  return state
}

// Mendefinisikan initial state dari store
const initialState = { count: 0 }

// Membuat store, menambahkan fungsi reducer dan nilai initial state
const store = createStore(reducer, initialState)

/// Setup Redux telah selesai, berikut cara menggunakannya:
// Lakukan dispatch actions, yang terdaftar pada store/reducer
store.dispatch({ type: types.INCREMENT })
store.dispatch({ type: types.INCREMENT })
store.dispatch({ type: types.INCREMENT })

// Menggunakan store.getState() untuk memperoleh nilai dari object state
 export default function App() {
  return (
    <Text style={{ fontSize: 100 }}>
      {store.getState().count}
    </Text>
  )
} 
Contoh Redux + React-Redux
Contoh Aplikasi lainnya menggunakan Redux dan React Redux, buatlah beberapa file, index.js, App.js, store.js, todoListRedux.js, List.js, Input.js, dan Title.js dalam satu folder atau pada level yang sama. Catatan: index.js merupakan root dari aplikasi ini.

pada index.js masukkan kode berikut:

import React from 'react'
import { View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Import komponen App
import App from './App'

// Import store
import store from './store'

// Memasukkan store pada Provider
export default function AppWithStore() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
selanjutnya pada App.js:

import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { actionCreators } from './todoListRedux'
import List from './List'
import Input from './Input'
import Title from './Title'

const mapStateToProps = (state) => ({
  todos: state.todos,
})

class App extends React.Component {

  onAddTodo = (text) => {
    const { dispatch } = this.props

    dispatch(actionCreators.add(text))
  }

  onRemoveTodo = (index) => {
    const { dispatch } = this.props

    dispatch(actionCreators.remove(index))
  }

  render() {
    const { todos } = this.props

    return (
      <View>
        <Title>
          To-Do List
        </Title>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        <List
          list={todos}
          onPressItem={this.onRemoveTodo}
        />
      </View>
    )
  }
}

export default connect(mapStateToProps)(App)
dan pada store.js:

import { createStore } from 'redux'
import { reducer } from './todoListRedux'

// Mendefinisikan store menggunakan reducer
const store = createStore(reducer)

export default store
kemudian pada todoListRedux.js:

// Mendefinisikan types yang merupakan action yang akan digunakan untuk 
// memodifikasi state pada store
export const types = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
}

// Fungsi tambahan untuk men-dispatch action, dengan tambahan data payload
export const actionCreators = {
  add: item => {
    return { type: types.ADD, payload: item }
  },
  remove: index => {
    return { type: types.REMOVE, payload: index }
  },
}

// Initial state dari store
const initialState = {
  todos: ['Click to remove', 'Learn React Native', 'Write Code', 'Ship App'],
}

// Fungsi untuk mengatur action dan update state yang terdapat pada store.
// Catatan:
// - reducer harus me-return state baru dalam bentuk object. Tidak boleh 
//   secara langsung mengubah (assign) state secara langsung. State harus 
//   diperlakukan sebagai immutable.
// - Pada reducer ditambahkan default value dari state = initialState.
//   Redux akan memanggil reducer() tanpa state di awal, sehingga pada 
//   aplikasi ini state awal sudah terisi dengan initialState.
export const reducer = (state = initialState, action) => {
  const { todos } = state
  const { type, payload } = action

  switch (type) {
    case types.ADD: {
      return {
        ...state,
        todos: [payload, ...todos],
      }
    }
    case types.REMOVE: {
      return {
        ...state,
        todos: todos.filter((todo, i) => i !== payload),
      }
    }
  }

  return state
}
pada List.js:

import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

export default class List extends Component {
  renderItem = (text, i) => {
    const { onPressItem } = this.props

    return (
      <TouchableOpacity key={i} style={styles.item} onPress={() => onPressItem(i)}>
        <Text>{text}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const { list } = this.props

    return <View>{list.map(this.renderItem)}</View>
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'whitesmoke',
    marginBottom: 5,
    padding: 15,
  },
})
dan Input.js:

import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default class Input extends Component {
  state = {
    text: '',
  }

  onChangeText = text => this.setState({ text })

  onSubmitEditing = () => {
    const { onSubmitEditing } = this.props
    const { text } = this.state

    if (!text) return // Don't submit if empty

    onSubmitEditing(text)
    this.setState({ text: '' })
  }

  render() {
    const { placeholder } = this.props
    const { text } = this.state

    return (
      <TextInput
        style={styles.input}
        value={text}
        placeholder={placeholder}
        onChangeText={this.onChangeText}
        onSubmitEditing={this.onSubmitEditing}
      />
    )
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    height: 50,
  },
})
terakhir Title.js:

import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Title extends Component {
  render() {
    const { children } = this.props

    return (
      <View style={styles.header}>
        <Text style={styles.title}>{children}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'skyblue',
    padding: 15,
  },
  title: {
    textAlign: 'center',
    color: 'white',
  },
})
Sumber: http://www.reactnativeexpress.com/redux

Updated on September 16, 2020
https://blog.sanbercode.com/docs/kurikulum-react-native-mobile-apps-development/week-4/react-native-state-management-redux/