import React, { Componenet, useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const styles = StyleSheet.create({
 
  homebutton:{
    backgroundColor: "black",
    padding: 5,
    margin: 25,
    borderRadius: 50,
    borderWidth: 30,
  },
    newpageheading:{
    textAlign:'center', marginTop: 40, fontWeight: 'bold', fontSize: 30, marginBottom: 25
  },
  homebuttontext:{
    color: "pink",
    fontSize: 15,
  },
  
 first:{
    backgroundColor: "seagreen",
    alignItems: 'center',
     flex: 1,
    justifyContent: 'center'
  },
  scrollviewlist:{
    padding: 15,
    paddingHorizontal: 115,
    marginBottom: 5,  
    borderRadius: 50,
    backgroundColor: "black",
    fontSize: 18,
    color: "pink",
    fontWeight: "bold",
  },

});

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
     <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Products" component={ManageProducts} />
        <Stack.Screen name="Employees" component={ManageEmployees} />
        <Stack.Screen name="Orders" component={ManageOrders} />
        <Stack.Screen name="ProductDetails" component={ProductPage} />
        <Stack.Screen name="EmployeeDetails" component={EmployeePage} />
        <Stack.Screen name="OrderDetails" component={OrderPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.first}>
      <TouchableOpacity
        style={styles.homebutton}
        onPress = {() => navigation.navigate("Products")}
      >
        <Text style={styles.homebuttontext}>Manage Products</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.homebutton}
        onPress = {() => navigation.navigate("Employees")}
      >
        <Text style={styles.homebuttontext}>Manage Employees</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.homebutton}
        onPress = {() => navigation.navigate("Orders")}
      >
        <Text style={styles.homebuttontext}>Manage Orders</Text>
      </TouchableOpacity>
    </View>
  );
}
const ManageProducts = ({navigation}) => {

  const [getProducts, setProducts] = useState([
    {name: "CornFlour", price: 50, stock: 33},
    {name: "bread", price: 110, stock: 55},
    {name: "potato", price: 30, stock: 500},
    {name: "Chocolate", price: 105, stock: 66},
    {name: "Milk", price: 110, stock: 120}
  ]);
  return (
    <View style={styles.first}>
      <ScrollView>
        <Text style={styles.newpageheading}> Products</Text>
        <View style={styles.productscrollview}>
          {getProducts.map((item) => 
            <TouchableOpacity 
              style={styles.scrollviewlist} 
              onPress = {() => navigation.navigate("ProductDetails", { name: item.name, price: item.price , stock: item.stock})}
            >
              {item.name}
            </TouchableOpacity>)}
        </View>
      </ScrollView>
    </View>
  );
}
const ManageEmployees = ({navigation}) => {
  const [getEmployees, setEmployees] = useState([
    {name: "Sami", designation: "Manager", age: 22},
    {name: "RajaSami", designation: "Assistant Manager", age: 31},
    {name: "Sameen", designation: " IT head", age: 24},
    {name: "Zafeer", designation: "SalesMan", age: 60},
    {name: "Raheel", designation: "Peon", age: 20},
  ]);
  return (
    <View style={styles.first}>
      <ScrollView>
        <Text style={styles.newpageheading}>Employees</Text>
        <View style={styles.productscrollview}>
          {getEmployees.map((item) => 
            <TouchableOpacity 
              style={styles.scrollviewlist} 
              onPress = {() => navigation.navigate("EmployeeDetails", { name: item.name, designation: item.designation , age: item.age})}
            >
              {item.name}
            </TouchableOpacity>)}
        </View>
      </ScrollView>
    </View>
  );
}
const ManageOrders = ({navigation}) => {
  const [getOrders, setOrders] = useState([
    {orderNumber: (1), product: "potato", amount: 2500},
    {orderNumber: (2), product: "cornFlour", amount: 1956},
    {orderNumber: (3), product: "bread", amount: 3482},
    {orderNumber: (4), product: "Chocolate", amount: 1874},
    {orderNumber: (5), product: "Milk", amount: 9844},
  ]);
  return (
    <View style={styles.first}>
      <ScrollView>
        <Text style={styles.newpageheading}>List of Orders</Text>
        <View style={styles.productscrollview}>
          {getOrders.map((item) => 
            <TouchableOpacity 
              style={styles.scrollviewlist} 
              onPress = {() => navigation.navigate("OrderDetails", { orderNumber: item.orderNumber, product: item.product , amount: item.amount})}
            >
              {item.orderNumber}
            </TouchableOpacity>)}
        </View>
      </ScrollView>
    </View>
  );
}
const ProductPage = ({route}) => {
  return (
    <View style={styles.first}>
      <Text style={styles.newpageheading}>Product Details</Text>
      <Text style={{fontSize:18, fontWeight: 'bold', marginBottom: 5}}>   Name          Price           Stock</Text>
      <View>
      </View>
      <Text>{route.params.name}                   {route.params.price}                    {route.params.stock}</Text>
    </View>
  );
}
const EmployeePage = ({route}) => {
  return (
    <View style={styles.first}>
      <Text style={styles.newpageheading}>Employee Details</Text>
      <Text style={{fontSize:18, fontWeight: 'bold', marginBottom: 5}}>   Name          Designation           Age</Text>
      <View>
      </View>
      <Text>{route.params.name}                   {route.params.designation}                    {route.params.age}</Text>
    </View>
  );
}
const OrderPage = ({route}) => {
  return (
    <View style={styles.first}>
      <Text style={styles.newpageheading}>Employee Details</Text>
      <Text style={{fontSize:18, fontWeight: 'bold', marginBottom: 5}}>   Order Number          Product           Amount</Text>
      <View>
      </View>
      <Text>   {route.params.orderNumber}                             {route.params.product}                       {route.params.amount}</Text>
    </View>
  );
}



export default App;