/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import { StyleSheet, ScrollView, Text, View, Dimensions, RefreshControl } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.8;
const SPACING = 16;

export default function App(){
 const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  };

  return(
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView
               refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti incidunt facilis voluptate est tenetur dolor fugiat mollitia iure dolores, iusto quod animi non, deserunt sit nostrum nulla error qui quis?
            Quos vel aperiam sapiente magnam dolores fugiat sint! Voluptatem labore laboriosam aliquam debitis esse, ut veritatis nisi magni autem, blanditiis necessitatibus dolores iusto, ipsa distinctio suscipit ratione amet magnam eos!
            Nobis, nisi aspernatur et, eaque libero quibusdam cum blanditiis ullam saepe nemo labore autem itaque nam modi rerum, ut enim maxime? Assumenda dolores unde mollitia eos repellendus, beatae consequuntur fugiat.
            Consequatur veniam debitis quisquam facere. Repellat id sint dolor necessitatibus harum esse tenetur itaque? Pariatur ducimus animi ad, vitae sequi voluptas accusantium adipisci error in voluptate. Molestiae rerum nihil animi.
            Voluptatem modi, repellat deserunt amet ex dolore hic quis unde reprehenderit corrupti id quibusdam nobis libero dolor numquam earum rerum nesciunt itaque dicta nulla. Excepturi architecto laboriosam a! Iste, earum.
            Quis voluptate eveniet fuga, laborum facilis, alias nihil magni cumque, vero sequi quidem. Quasi, sed beatae qui inventore odit sit maiores vel labore consequatur architecto eum in optio totam ullam.
            Pariatur corporis iusto enim ex mollitia voluptatum in numquam repudiandae harum nostrum ratione, dolores provident asperiores ducimus officiis natus cum vel voluptatibus tempora perferendis veniam dolorum officia. Doloremque, earum iste?
            Obcaecati nesciunt saepe totam officia mollitia cupiditate aspernatur placeat est consectetur praesentium, nemo unde soluta sint incidunt sed expedita aut, odit fuga doloribus? Mollitia error sequi saepe aperiam, labore voluptate.
            Voluptate saepe numquam sapiente consequuntur dolores dignissimos dicta, necessitatibus ipsa libero beatae culpa magni. Voluptatum reiciendis eaque ea pariatur aspernatur inventore officiis aliquam expedita quas, quis error nulla quaerat atque?
            Nemo consequatur vero officia totam ipsum adipisci nostrum odit quis, non voluptate, culpa tempore porro modi fuga soluta rem aut, vel aperiam. Quas ad nulla, ex exercitationem dicta aspernatur delectus!
          </Text>

            <ScrollView
          horizontal
          pagingEnabled
          snapToInterval={CARD_WIDTH + SPACING}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: SPACING }}
          scrollEnabled={true}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="handled"
        >
        
          {[1, 2, 3, 4, 5].map((item) => (
            <View key={item} style={styles.card}>
              <Text style={styles.cardText}>Card {item}</Text>
            </View>
          ))}
        </ScrollView>

        </ScrollView>

  

      </SafeAreaView>
    
    </SafeAreaProvider>


  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    card: {
    width: CARD_WIDTH,
    height: 180,
    marginRight: SPACING,
    borderRadius: 20,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 26,
    padding: 12,
  },

});
