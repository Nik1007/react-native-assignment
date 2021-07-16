import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  View,
  Text,
  Image,
  ScrollView,
} from "react-native";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Store from "./redux/store";
import Action from "./redux/action";

export default function IndexPage() {
  let [data, setData] = useState();
  let [employee, setEmployee] = useState();
  let [showEmployee, setShowEmployee] = useState(false);
  let [showHistory, setShowHistory] = useState(false);
  let dispatch = useDispatch();
  function handleOnPress() {
    setShowHistory(true);
  }

  // Store.dispatch(Add());
  let x = useSelector((state) => state);
  console.log(x, "x");

  useEffect(() => {
    let axios = Axios.create();
    axios.get("https://reqres.in/api/users").then((response) => {
      console.log(response);
      setData(response.data.data);
    });
  }, []);
  function getList(data) {
    console.log(data);
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <View
            style={{
              height: "100vh",
              flexDirection: "column",
              justifyContent: "center",
              margin: "45px",
              padding: "10px",
            }}
          >
            {data && !showEmployee && !showHistory ? (
              <View>
                {data.map((each) => (
                  <View key={each.id} style={styles.list}>
                    <Text
                      onPress={() => {
                        Store.dispatch(Action(each));
                        setEmployee(each);
                        setShowEmployee(true);
                      }}
                    >
                      {each.first_name} {each.last_name}
                    </Text>
                  </View>
                ))}
                <Button
                  onPress={() => handleOnPress()}
                  title="Watch History"
                  color="#841584"
                  accessibilityLabel="Learn more about this purple button"
                />
              </View>
            ) : (
              <Text></Text>
            )}

            {showEmployee ? (
              <View
                style={{
                  flexDirection: "column",
                  height: "100vh",
                  margin: "5px",
                  padding: "3px",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    borderWidth: "2px",
                    margin: "5px",
                    padding: "3px",
                    borderRadius: "5px",
                    justifyContent: "center",
                  }}
                >
                  <View>
                    <Image
                      style={{
                        flexDirection: "column",
                        width: 50,
                        height: 50,
                        margin: "10px",
                        borderRadius: "5px",
                        justifyContent: "center",
                      }}
                      source={{
                        uri: employee.avatar,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: "column",
                      margin: "15px",
                      padding: "10px",
                      borderRadius: "5px",
                      justifyContent: "center",
                    }}
                  >
                    <Text>Id : {employee.id}</Text>
                    <Text>
                      Full Name : {employee.first_name} {employee.last_name}
                    </Text>
                    <Text>Email : {employee.email}</Text>
                  </View>
                </View>
                <Button
                  onPress={() => setShowEmployee(false)}
                  title="Back"
                  color="#841584"
                  accessibilityLabel="Learn more about this purple button"
                />
              </View>
            ) : (
              <Text></Text>
            )}

            {showHistory ? (
              <View>
                <ScrollView>
                  {x.map((each) => (
                    <View
                      key={Math.ceil(Math.random * 100000)}
                      style={styles.list}
                    >
                      <Text>
                        {each.first_name} {each.last_name}
                      </Text>
                    </View>
                  ))}
                  <Button
                    onPress={() => setShowHistory(false)}
                    title="Back"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                  />
                </ScrollView>
              </View>
            ) : (
              <Text></Text>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: "100%",
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  list: {
    margin: "5px",
    padding: "2px",
    backgroundColor: "#a0b3bd",
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
