React Native – Build & Release APK
Expo
Proses untuk membuat APK (Android) atau IPA (iOS) pada expo cukup sederhana. Secara umum hanya diperlukan beberapa langkah:

Publish
Pada tahap ini Anda cukup mengunakan command berikut pada terminal di folder project Expo Anda:

$ expo publish
Pastikan sebelum melakukan publish ini, Anda sudah mendaftar di expo.io karena Anda akan diminta untuk login terlebih dahulu menggunakan akun expo Anda.

Atau Anda juga bisa klik “Publish or republish project…” pada halaman yang muncul ketika running aplikasi expo atau npm start. Kemudian klik “Publish project”. Setelah proses publish selesai, Anda dapat melihat aplikasi Expo yang dipublish di dashboard expo.io.

https://blog.sanbercode.com/wp-content/uploads/2020/07/expo-publish3-1024x491.png

Melakukan publish aplikasi Expo di melalui browser
Build
Setelah melakukan publish, selanjutnya untuk membuat APK atau IPA, Anda perlu melakukan build, berikut beberapa tahapannya:

1. Setting app.json
Bukalah file app.json yang terdapat di folder project expo Anda, dan tambahkan “bundleIdentifier” dan “buildNumber” pada object “ios” (untuk build IPA) dan “package” dan “versionCode” pada object “android” (untuk build APK/AAB) di dalam object “expo”.

Pada “bundleIdentifier” dan “package” boleh diisi dengan format “com.mycompany.myapp” dengan teks bebas, tanpa harus memiliki domain yang dimasukkan.

Perlu diperhatikan pada “buildNumber” dan “versionCode” agar setiap melakukan publish/build baru nilainya ditambahkan 1, misal pada “buildNumber” setiap publish baru maka diubah dari 1.0.0 menjadi 1.0.1 dan seterusnya, sementara pada”versionCode” ditambahkan dari 1 menjadi 2 dan seterusnya.

Contoh:

     "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.sanbercode.sanberapp",
      "buildNumber": "1.0.0"
    },
    "android": {
      "package": "com.sanbercode.sanberapp",
      "versionCode": 1
    }, 
Selain itu, Anda juga dapat mengubah nama, icon, splash screen, dan konfigurasi lainnya di app.json. Contoh konfigurasi akhir dari app.json sebelum melakukan build:

 {
  "expo": {
    "name": "SanberApp",          // nama aplikasi
    "slug": "SanberApp",
    "platforms": [
      "ios",
      "android",
      "web"
    ],
    "version": "1.0.0",          // update version setiap build
    "orientation": "portrait",
    "icon": "./assets/icon.png", // ganti icon di sini
    "splash": {                  // ganti splash screen disini
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.sanbercode.sanberapp",
      "buildNumber": "1.0.0"
    },
    "android": {
      "package": "com.sanbercode.sanberapp",
      "versionCode": 1
    },
    "description": ""
  }
}
2. Build APK/IPA
Selanjutnya Anda bisa melakukan build menggunakan terminal. Masuk ke folder project expo Anda dan tuliskan command berikut:

// untuk build android:
$ expo build:android

// atau untuk generate apk: 
$ expo build:android -t apk 

// atau untuk generate aab: 
$ expo build:android -t app-bundle

// atau untuk build ios:
$ expo build:ios
Jika Anda menggunakan command expo build:android, maka Anda akan diminta untuk memilih apakah build dalam bentuk APK atau AAB.

Selanjutnya Anda akan diminta untuk memilih keystore yang akan digunakan pada aplikasi, anda bisa memilih untuk membiarkan Expo mengatur keystore aplikasi Anda (keystore dapat di backup kemudian) atau Anda bisa menggunakan keystore Anda sendiri dan Anda akan diminta untuk melakukan input path dari keystore aplikasi Anda.

Selanjutnya proses build akan berlangsung, tunggu sampai muncul tulisan berikut di terminal: You can press Ctrl+C to exit. It won't cancel the build, you'll be able to monitor it at the printed URL . Tekan Ctrl + C, kemudian Anda dapat melihat proses build selanjutnya di URL yang muncul di terminal Anda atau melalui dashboard akun expo.io Anda. (Setelah tahap ini, Anda bisa meninggalkan atau mematikan PC/Laptop selama proses build karena akan dilanjutkan oleh Expo secara otomatis).

Jika proses build sudah selesai Anda bisa mendownload APK dari aplikasi Anda di dashboard expo.io.

Contoh cara melakukan build project Expo dapat dilihat pada video berikut (Catatan: Pada video diperlihatkan bagaimana cara build menggunakan keystore sendiri):

https://youtu.be/SzwTGDDXTAE

Lebih lengkapnya Anda bisa mengunjungi dokumentasi Expo berikut: https://docs.expo.io/distribution/building-standalone-apps/

React Native CLI
Sebelum melakukan build, pastikan Anda sudah mengikuti tahapan dalam setting environment React Native di https://reactnative.dev/docs/environment-setup.

Untuk melakukan build menggunakan React Native CLI terdapat beberapa tahapan yang diperlukan:

1. Membuat Keystore (Upload Key)
Pada tahap ini dilakukan pembuatan keystore. Pada OS Windows proses ini harus dilakukan dari lokasi C:\Program Files\Java\jdkx.x.x_x\bin. Jadi buka terminal/command prompt (sebagai administrator) dan arahkan ke lokasi tersebut. Lalu ketikkan perintah berikut:

$ keytool -genkeypair -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000 
my-upload-key pada my-upload-key.keystore dan my-key-alias dapat diubah sesuai dengan nama yang diinginkan.

Selanjutnya Anda akan diminta memasukkan password keystore dan key (2 password) dan beberapa isian lainnya. Kemudian akan dibuatkan file dengan nama my-upload-key.keystore (atau sesuai nama yang diinputkan). Pastikan Anda hafal nama alias dan password yang telah diinputkan.

Pada MacOs, jika tidak mengetahui lokasi folder JDK bin, gunakan command berikut

$ /usr/libexec/java_home

// akan menampilkan output:
/Library/Java/JavaVirtualMachines/jdkX.X.X_XXX.jdk/Contents/Home
Arahkan ke lokasi folder tersebut (pada terminal) menggunakan command: $ cd /your/jdk/path dan gunakan command keytool yang sama dengan menambahkan sudo di depannya, contoh:

$ sudo keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
Keystore ini bersifat private, sehingga informasi dan datanya perlu dijaga dengan baik.

2. Konfigurasi Gradle variables
Simpan keystore yang telah dibuat ke dalam folder project React Native, di dalam folder android/app. Edit file pada lokasi ~/.gradle/gradle.properties atau android/gradle.properties dan tambahkan kode berikut (sesuaikan nama keystore, alias, keystore password dan key password), bisa disimpan dilokasi paling bawah:

MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=**** 
MYAPP_UPLOAD_KEY_PASSWORD=****
Atau Anda dapat mengikuti contoh berikut untuk menggunakan cara yang lebih aman: https://pilloxa.gitlab.io/posts/safer-passwords-in-gradle/

3. Menambahkan signing config pada Gradle config di aplikasi
Tahap akhir yang perlu dilakukan adalah melakukan setup release build. Edit file android/app/build.gradle dan tambahkan signing config (sekitar line 146),

…
android {
  …
  defaultConfig { … }
  signingConfigs {
           debug {
               storeFile file('debug.keystore')
               storePassword 'android'
               keyAlias 'androiddebugkey'
               keyPassword 'android'
           } 
// tambahkan bagian di bawah ini
           release {
               if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                   storeFile file(MYAPP_UPLOAD_STORE_FILE)
                   storePassword MYAPP_UPLOAD_STORE_PASSWORD
                   keyAlias MYAPP_UPLOAD_KEY_ALIAS
                   keyPassword MYAPP_UPLOAD_KEY_PASSWORD
               }
           }
       }
       buildTypes {
           debug {
               signingConfig signingConfigs.debug
           }
           release { 
// tambahkan/edit bagian ini dari .debug menjadi .release
             signingConfig signingConfigs.release 
         }
     }
4. Merilis APK
Selanjutnya jalankan command berikut:

// untuk merilis APK gunakan command berikut:
$ gradlew  assembleRelease // untuk Windows
$ ./gradlew assembleRelease // untuk MacOs dan Linux? 

// atau untuk merilis AAB gunakan command berikut: 
$ cd android // masuk ke folder android di dalam project
$ gradlew bundleRelease   // untuk Windows
$ ./gradlew bundleRelease // untuk MacOS dan Linux?
Anda akan menemukan file APK di lokasi berikut android/app/build/outputs/bundle/release/apk-release.apk

Untuk melakukan publish di Google Play Store disarankan oleh Google untuk menggunakan AAB.

Lebih lengkapnya Anda bisa mengunjungi dokumentasi React Native berikut: https://reactnative.dev/docs/signed-apk-android

Updated on September 16, 2020
https://blog.sanbercode.com/docs/kurikulum-react-native-mobile-apps-development/week-4/react-native-build-release-apk/