import React from 'react';
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native';
import {connect} from 'react-redux';
import fetchPeopleFromAPI from  "./actions";

let styles

const App = (props) => {
  const {
    container,
    text,
    button,
    buttonText
  } = styles
  
  return (
    <View style={container}>
      <Text style={text}>Redux App</Text>
      <TouchableHighlight style={button}>
        <Text style={buttonText}>Fetch Data</Text>
      </TouchableHighlight>
    </View>
  )
}

styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingLeft: 20,
    paddingTop: 20
  },

  text: {
    textAlign: 'center'
  },
  button: {
    backgroundColor: "#0b7eff",
    height: 60,
    justifyContent: 'center',
    alignItems: "center"
  },
  buttonText: {
    color: "white"
  }
})

function mapStateToProps(state) {
  return {
    people: state.people
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPeople: () => dispatch(fetchPeopleFromAPI)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)