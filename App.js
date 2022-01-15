import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput, Pressable } from 'react-native';
import { SafeAreaView, ScrollView, TouchableOpacity, useColorScheme, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import { useFonts, Comfortaa_300Light, Comfortaa_400Regular, Comfortaa_500Medium, Comfortaa_600SemiBold, Comfortaa_700Bold, } from '@expo-google-fonts/comfortaa';
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


/* starting page -> this is what the user will first see when they download the app. they can sign up or log in */
function StartingPage({ navigation }){
  return (
    <View style={styles.container}>
      
      <Text style={styles.name}>Ecodes</Text>

      <Image style={styles.logo} source={require('./assets/logo.png')} />

          <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login Page')}>
          <Text style={styles.loginButtonText}>LOG IN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('Sign Up Page')}>
          <Text style={styles.signUpButtonText}>SIGN UP</Text>
          </TouchableOpacity>


      <StatusBar style="auto" />
    </View>
  );
}

/* login page -> the user will enter their email and password to login. this is only required once unless the user logs out of their account */
function LoginPage({ navigation }) {
  return (
    <View style={styles.container2}>
      <Text style ={styles.loginTitle}>Log In</Text>

      <TextInput style ={styles.loginInput} underlineColorAndroid="transparent" placeholder='Email'/>
      <TextInput style ={styles.loginInput} underlineColorAndroid="transparent" placeholder='Password'/>

      <TouchableOpacity style={styles.loginButton2} onPress={() => navigation.navigate('Home Page')}>
      <Text style={styles.loginButtonText2}>LOG IN</Text>
      </TouchableOpacity>
    </View>
  );
}

/* signup page -> the user will enter their email and password to sign up */
function SignUpPage({navigation}) {
  return (
    <View style={styles.container2}>
      <Text style ={styles.loginTitle}>Sign Up</Text>

      <TextInput style ={styles.loginInput} underlineColorAndroid="transparent" placeholder='Email'/>
      <TextInput style ={styles.loginInput} underlineColorAndroid="transparent" placeholder='Password'/>

      <TouchableOpacity style={styles.loginButton2} onPress={() => navigation.navigate('Enter Your Name Page')}>
      <Text style={styles.loginButtonText2}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
}

/* enter your name page -> after signing up, the user enter's their name for personalization in the app */
function EnterYourNamePage({navigation}) {
  return (
    <View style={styles.container2}>
      <Text style ={styles.loginTitle}>Enter Your Name</Text>

      <TextInput style ={styles.loginInput} underlineColorAndroid="transparent" placeholder='Enter your name'/>

      <TouchableOpacity style={styles.loginButton2} onPress={() => navigation.navigate('Home Page')}>
      <Text style={styles.loginButtonText2}>LET'S GO!</Text>
      </TouchableOpacity>
    </View>
  );
}

function HomePage({navigation}) {
  return (
    <View style={styles.container3}>
      
      <Image style={styles.miniLogo} source={require('./assets/logo.png')} />
      <Text style={styles.userName}>Hi Kemi,</Text>
      <Text style={styles.text1}>SCAN THE QR CODE. SAVE THE PLANT!</Text>
      <Ionicons name="earth" size={140} color="black" />

      <TouchableOpacity style={styles.cameraButton} onPress={() => navigation.navigate('Points Page')}>
      <Entypo name="camera" size={50} color="white" />
      </TouchableOpacity>

      <View style={styles.navContainer}>
        <View style={styles.navBar}>
          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Points Page')}>
          <AntDesign name="staro" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Home Page')}>
          <AntDesign name="home" size={24} color="white"/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Profile Page')}>
          <AntDesign name="user" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function PointsPage({navigation}) {
  return (
    <View style={styles.container3}>
      <View style={styles.banner}>
      </View>
      <Image style={styles.miniLogo2} source={require('./assets/logoGreen.png')} />
      <Text style={styles.point}>Points</Text>
      <Text style={styles.text2}>Here are all your points. Keep it going for a reward!</Text>
      <Text style={styles.text3}>43,070 pts</Text>

      <View></View>

      <View style={styles.navContainer}>
        <View style={styles.navBar}>
          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Points Page')}>
          <AntDesign name="staro" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Home Page')}>
          <AntDesign name="home" size={24} color="white"/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Profile Page')}>
          <AntDesign name="user" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


function ProfilePage({navigation}) {
  return (
    <View style={styles.container3}>

      <Image style={styles.profile} source={require('./assets/kemi.jpg')} />
      <Ionicons style={styles.location} name="location-outline" size={30} color="black" />
      <Text style={styles.text4}>OAKVILLE, ON, CANADA</Text>

      <TouchableOpacity style={styles.editProfileButton} onPress={() => navigation.navigate('Sign Up Page')}>
      <Text style={styles.loginButtonText2}>EDIT PROFILE</Text>
      </TouchableOpacity>

      <View style={styles.navContainer}>
        <View style={styles.navBar}>
          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Points Page')}>
          <AntDesign name="staro" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Home Page')}>
          <AntDesign name="home" size={24} color="white"/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Profile Page')}>
          <AntDesign name="user" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded, error] = useFonts ({
    Comfortaa_400Regular,
  });

  if (!fontsLoaded){
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Starting Page" component={StartingPage} />
        <Stack.Screen name="Login Page" component={LoginPage} />
        <Stack.Screen name="Sign Up Page" component={SignUpPage} />
        <Stack.Screen name="Enter Your Name Page" component={EnterYourNamePage} />
        <Stack.Screen name="Home Page" component={HomePage} />
        <Stack.Screen name="Points Page" component={PointsPage} />
        <Stack.Screen name="Profile Page" component={ProfilePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* STARTING PAGE ---------------------------------*/
  name: {
    fontSize: 40,
    fontFamily: 'Comfortaa_400Regular',
    marginBottom: 50,
  },

  logo: {
    width: 260,
    height: 300,
    marginBottom: 150,
  },

  loginButton: {
    width: "42%",
    borderRadius: 7,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#92B88F",
    position: 'absolute',
    left: 25,
    top: 570,
  },

  loginButtonText: {
    fontWeight: "bold",
    color: '#92B88F',
  },

  signUpButton: {
    width: "42%",
    borderRadius: 7,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#80A87D",
    position: 'absolute',
    right: 25,
    top: 570,
  },

  signUpButtonText: {
    fontWeight: "bold",
    color: 'white',
  },

  /* LOGIN PAGE -----------------------------*/
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginTitle: {
    fontSize: 30,
    fontFamily: 'Comfortaa_400Regular',
    marginBottom: 20,
  },

  loginInput: {
    width: "80%",
    backgroundColor: "white",
    borderColor: "black",
    marginBottom: 10,
  },

  loginButton2: {
    width: "80%",
    marginTop: 20,
    borderRadius: 7,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#80A87D",
    marginBottom: 10,
  },

  loginButtonText2: {
    fontWeight: "bold",
    color: 'white',
  },

  /* HOME PAGE ---------------------------*/
  container3: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  navContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
  },

  navBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    justifyContent: 'space-evenly',
    borderTopWidth: 0.5,
    borderTopColor: '#EBEBEB',
    paddingTop: 7, 
    paddingBottom: 5, 
  },

  iconBehave: {
    backgroundColor: '#80A87D',
    borderRadius: 20,
    padding: 8,
  },

  cameraButton: {
    backgroundColor: '#80A87D',
    borderRadius: 200,
    padding: 20,
    top: 30,
  },

  miniLogo: {
    width: 40,
    height: 60,
    bottom: 140,
  },

  plant: {
    width: 120,
    height: 150,
    bottom: 50,
  },

  userName: {
    fontSize: 35,
    right: 100,
    bottom: 140,
    fontFamily: 'Comfortaa_400Regular',
  },

  text1: {
    right: 47,
    fontSize: 15,
    fontWeight: "bold",
    bottom: 130,
  },

  /* PROFILE PAGE ---------------------------*/
  profile: {
    borderRadius: 100,
    width: 150,
    height: 150,
    bottom: 20,
  },

  editProfileButton: {
    width: "80%",
    marginTop: 20,
    borderRadius: 7,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#80A87D",
    bottom: 180,
  },

  text4: {
    fontSize: 15,
    fontWeight: "bold",
    bottom: 200,
  },

  location: {
    paddingBottom: 200,
  },

   /* POINTS PAGE ---------------------------*/
   banner: {
    flexDirection: 'row',
    backgroundColor: "#80A87D",
    width: '100%',
    height: '30%',
    justifyContent: 'space-evenly',
    bottom: 170,
   },

   point: {
    fontSize: 35,
    right: 110,
    bottom: 330,
    color: 'white',
    fontFamily: 'Comfortaa_400Regular',
  },

  miniLogo2: {
    width: 40,
    height: 60,
    bottom: 300,
  },

  text2: {
    right: 16,
    fontSize: 15,
    color: 'white',
    bottom: 320,
  },

  text3: {
    fontSize: 70,
    color: "#80A87D",
    bottom: 280,
    fontWeight: "bold"
  },

});
