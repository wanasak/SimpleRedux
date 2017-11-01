import React from 'react';
import { AppRegistry, Text, View, StyleSheet } from "react-native";
import { createStore } from "redux";

// Define action types
const types = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT"
};

// Define a reducer
const reducer = (state, action) => {
  if (action.type === types.INCREMENT) {
    return { count: state.count + 1 };
  }
  if (action.type === types.DECREMENT) {
    return { count: state.count - 1 };
  }

  return state;
};

// Define the initial state of our store
const initialState = { count: 0 };

// Create the store, passing reducer function and initial state
const store = createStore(reducer, initialState);

// Dispatch actions
store.dispatch({ type: types.INCREMENT });
store.dispatch({ type: types.INCREMENT });
store.dispatch({ type: types.INCREMENT });

const App = () => (
  <View style={styles.container}>
    <Text style={styles.font}>{store.getState().count}</Text>
  </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    font: {
        fontSize: 100
    }
})

AppRegistry.registerComponent("SimpleRedux", () => App);
