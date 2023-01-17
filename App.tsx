import * as React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {useState} from 'react';


const listTab = [
  {
    status: 'Home',
  },
  {
    status: 'About',
  },
  {
    status: 'Contact',
  },
];

// Linking content
const data = [
  {
    name: 'Home content',
    text: 'This is my homepage. Here I welcome you to my website and try me best to make a good impression. I tell you about the services I provide and encourage you to venture into my site.',
    status: 'Home',
  },
  {
    name: 'About content',
    text: 'Here I go into details about myself and my business, including the services we provide, how we started and our overall ethos.',
    status: 'About',
  },
  {
    name: 'Contact content',
    text: 'Here we give you information on how to contact us for business discussions and possible collaborations.',
    status: 'Contact',
  },
];

export default function App() {
  // the following code goes here
  const [status, setStatus] = useState('Home');
  const [dataList, setDataList] = useState([
    ...data.filter(e => e.status === 'Home'),
  ]);

  const setStatusFilter = status => {
    if (status !== 'Home') {
      setDataList([...data.filter(e => e.status === status)]);
    } else {
      setDataList([...data.filter(e => e.status === 'Home')]);
    }

    setStatus(status);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listTab}>
        {listTab.map(e => {
          return (
            <TouchableOpacity
              style={[
                styles.btnTab,
                status === e.status && styles.btnTabActive,
              ]}
              onPress={() => setStatusFilter(e.status)}>
              <Text
                style={
                  (styles.textTab, status === e.status && styles.textTabActive)
                }>
                {e.status}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <FlatList
        data={dataList}
        keyExtractor={(e, i) => i.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}
const renderItem = ({item, index}) => {
  return (
    <View key={index} style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text>{item.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  listTab: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 20,
    marginLeft: 5,
    height: 100,
  },
  btnTab: {
    width: 50,
    flexDirection: 'row',
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  textTab: {
    fontSize: 16,
  },
  btnTabActive: {
    backgroundColor: 'purple',
    borderRadius: 5,
  },
  textTabActive: {
    color: '#fff',
  },
  itemContainer: {
    justifyContent: 'flex-end',
    paddingVertical: 15,
    marginLeft: 30,
    marginTop: 10,
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
  },
});
