import React, { Component } from "react";
import {
    Text,
    View,
    ImageBackground
} from 'react-native';
import firebase from "firebase";

export default class AgendaScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        Data: "null",
        Links: "",
        Status_da_Tarefa: false,
        Tarefa: "",
        Tempo_de_Alerta: 5
      };
    }
}

initiateBookIssue = async (Data, Links, Status_da_Tarefa, Tarefa, Tempo_de_Alerta) => {
  db.collection("Agenda").add({
    Data: firebase.firestore.Timestamp.now().toDate()
  }); 
    this.setState({
      Tarefa: "",
      Links: "",
      Tempo_de_Alerta: this.state.Tempo_de_Alerta
    });
  };

<View>
    <View style={styles.appTitleText}>
      <Text> Agenda🗒️📋 </Text>
    </View>
    <ImageBackground source={require('../src/Agenda.jpg')} style={styles.backgroundImage}/>
</View>

    const styles = StyleSheet.create({
    appTitleTextContainer: {
        flex: 0.7,
        justifyContent: "center",
        textAlign:"center"
        },
        backgroundImage: {
            flex: 1,
            resizeMode: 'cover',
        }
    })