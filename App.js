import React from 'react';

import {StyleSheet, Image, View,Text, ScrollView} from 'react-native';
//por defecto el flex viene como colums

const App = () => {
  return (
    <>
      <ScrollView>


        <View style={{flexDirection: 'row'}}>
          <Image source={require('./assets/img/bg.jpg')} style={styles.banner} />
        </View>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Qué hacer en Paris</Text>

          <ScrollView
            horizontal
          >
            <View>
                <Image source={require('./assets/img/actividad1.jpg')} style={styles.ciudad} />

            </View>
            <View>
                <Image source={require('./assets/img/actividad2.jpg')} style={styles.ciudad} />

            </View>
            <View>
                <Image source={require('./assets/img/actividad3.jpg')} style={styles.ciudad} />

            </View>
            <View>
                <Image source={require('./assets/img/actividad4.jpg')} style={styles.ciudad} />

            </View>
            <View>
                <Image source={require('./assets/img/actividad5.jpg')} style={styles.ciudad} />

            </View>
          </ScrollView>
          <Text style={styles.titulo}>Los mejores alojamientos</Text>

          <View>
            <View>
                <Image source={require('./assets/img/mejores1.jpg')} style={styles.mejores} />
            </View>

            <View>
                <Image source={require('./assets/img/mejores2.jpg')} style={styles.mejores} />
            </View> 
             <View>
                <Image source={require('./assets/img/mejores3.jpg')} style={styles.mejores} />
            </View>

          </View>

          <Text style={styles.titulo}>Hospedajes en los Angeles</Text>
          <View style={styles.listado}>
             <View  style={styles.listadoItems}>
                <Image source={require('./assets/img/hospedaje1.jpg')} style={styles.mejores} />
            </View>
            <View  style={styles.listadoItems}>
                <Image source={require('./assets/img/hospedaje2.jpg')} style={styles.mejores} />
            </View>
            <View  style={styles.listadoItems}>
                <Image source={require('./assets/img/hospedaje3.jpg')} style={styles.mejores} />
            </View>
            <View  style={styles.listadoItems}>
                <Image source={require('./assets/img/hospedaje4.jpg')} style={styles.mejores} />
            </View>




          </View>




        </View>

      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({

  banner:{
    height:250,
    flex:1
  }, 
  titulo:{
    fontWeight:'bold',
    fontSize:24,
    marginVertical:20
  },
  contenedor:{
    marginHorizontal:10

  },
  ciudad:{
    width:150,
    height:250,
    marginRight:10

  },
  mejores:{
    width:'100%',
    height:200,
    marginVertical:5

  },
  listado:{
    flexDirection:'row',
    flexWrap: 'wrap',
 justifyContent: 'space-between'


  },
listadoItems:{
  flexBasis:'49%'

}

});

export default App;
