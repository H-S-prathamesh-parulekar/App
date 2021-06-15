import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native';
// import {Table, TableWrapper, Row, Cell} from 'react-native-table-component';
import { NativeRouter, Route, Link } from 'react-router-native';
import New1 from './android/app/src/New1';

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

////////////////////////////////////////////////////////////
// first our route components
function MTECH() {
  return <Text style={styles.header,styles.btn}>MTECH</Text>;
}
function BTECH() {
  return <Text style={(styles.header, styles.btn)}>BTECH</Text>;
}


function MCASEM1() {
  return <Text style={styles.subHeader}>SEM1</Text>;
}
function MCASEM5() {
  return (<>
    <Text style={styles.subHeader}>SEM2</Text>
    <Text style={styles.subHeader}>SEM2</Text>
    {/* <View style={styles.boxContainer}></View> */}
    <New1/>
  </>
    );
}







function MCA({routes}) {
  return (
    <View>
      <Text style={(styles.header, styles.btn2)}>MCA : SELECT SEM</Text>
      <View style={styles.nav}>
        <Link to="/MCA/MCASEM1" style={styles.navItem} underlayColor="#f0f4f7">
          <Text style={styles.btn}>1</Text>
        </Link>
        <Link to="/MCA/MCASEM5" style={styles.navItem} underlayColor="#f0f4f7">
          <Text style={styles.btn}>2</Text>
        </Link>
        <Link to="/MCA/MCASEM1" style={styles.navItem} underlayColor="#f0f4f7">
          <Text style={styles.btn}>3</Text>
        </Link>
        <Link to="/MCA/MCASEM5" style={styles.navItem} underlayColor="#f0f4f7">
          <Text style={styles.btn}>4</Text>
        </Link>
        <Link to="/MCA/MCASEM1" style={styles.navItem} underlayColor="#f0f4f7">
          <Text style={styles.btn}>5</Text>
        </Link>
        <Link to="/MCA/MCASEM5" style={styles.navItem} underlayColor="#f0f4f7">
          <Text style={styles.btn}>6</Text>
        </Link>
      </View>

      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </View>
  );
}



////////////////////////////////////////////////////////////
// then our route config
const routes = [
  {
    path: '/MTECH',
    component: MTECH,
  },
  {
    path: '/BTECH',
    component: BTECH,
  },
  {
    path: '/MCA',
    component: MCA,
    routes: [
      {
        path: '/MCA/MCASEM1',
        component: MCASEM1,
      },
      {
        path: '/MCA/MCASEM5',
        component: MCASEM5,
      },
    ],
  },
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

function App() {
  
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Text style={styles.btn2}> SELECT DEGREE</Text>
        <View style={styles.nav}>
          <Link to="/MCA" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text style={styles.btn}>MCA</Text>
          </Link>
          <Link to="/MTECH" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text style={styles.btn}>M.TECH</Text>
          </Link>
          <Link to="/BTECH" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text style={styles.btn}>B.TECH</Text>
          </Link>
        </View>
  
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10,
  },
  header: {
    fontSize: 20,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  subHeader: {
    fontSize: 15,
  },
  btn: {
    fontSize: 20,
    width: '100%',
    // marginTop: 50,
    backgroundColor: '#465881',
    borderRadius: 10,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 10,
    // marginBottom: 10,
    textAlign: 'center',
    color: 'white',
  },
  btn2: {
    fontSize: 20,
    width: '100%',
    // marginTop: 50,
    backgroundColor: 'red',
    borderRadius: 10,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 40,
    // marginBottom: 10,
    textAlign: 'center',
    color: 'white',
  },
  boxContainer: {
    shadowColor: 'red',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    height: '55%',
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
});

export default App;
