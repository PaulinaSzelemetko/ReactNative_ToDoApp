import React, {useState} from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [typedTask, setTypedTask] = useState('');
  const [tasksList, setTasksList] = useState([]);

  const typedTaskHandler = (typedText) => {
    setTypedTask(typedText);
  }

  const addTaskHandler = () => {
    setTasksList([...tasksList, typedTask ]);
    }


  return (
    <View style={styles.container}>
      <View>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}><TextInput style={styles.input} placeholder='Type a new task...' onChangeText={typedTaskHandler} value={typedTask}></TextInput></View>
      <View style={styles.buttonWrapper}><Button style={styles.button} title='+' onPress={addTaskHandler}></Button></View>
      </View>
      <ScrollView>
  {tasksList.map(task => (
   <View style={styles.listItem} key={task}><Text>{task}</Text></View>))}
      </ScrollView>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    padding: 30,    

    paddingTop: 80,

  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,

  },
  inputWrapper: {
    width: '75%',
    height: 47,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 7,
  },
  input: {
    margin: 10,
  },
  buttonWrapper: {
    width: '20%',
    justifyContent: 'center',
    height: 47,
    borderWidth: 1,
    borderColor: 'grey',
    color: 'red',
    borderRadius: 7,
    backgroundColor: '#DDDDDD',  },
  button: {
    backgroundColor: '#DDDDDD',

  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 7,

  }
});
