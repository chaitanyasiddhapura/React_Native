import React from "react";
import { View, Text, Dimensions, StyleSheet, Image } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

// const DATA = [
//   {
//     id: "1",
//     title: "Nike Air Max",
//     desc: "Comfortable running shoes with modern design",
//     price: "$120",
//     image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     id: "2",
//     title: "Apple Watch",
//     desc: "Smartwatch with fitness tracking",
//     price: "$299",
//     image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     id: "3",
//     title: "Headphones",
//     desc: "Noise cancelling premium sound",
//     price: "$180",
//     image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=900&q=80",
//   },
// ];

const DATA = [
  {
    id: "1",
    title: "Nike Air Max",
    desc: "Comfortable running shoes with modern design",
    price: "$120",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "2",
    title: "Adidas Ultraboost",
    desc: "High-performance running shoes with great cushioning",
    price: "$180",
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "3",
    title: "Puma RS-X",
    desc: "Trendy sneakers with bold design",
    price: "$110",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: "5",
    title: "Nike Revolution",
    desc: "Lightweight running shoes for daily training",
    price: "$85",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "6",
    title: "Adidas Stan Smith",
    desc: "Iconic white sneakers with clean design",
    price: "$95",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
  },

];
export default function ProductCarousel() {
  const scrollX = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  return (
    <View style={styles.container}>

      {DATA.map((item, index) => (
        <BackgroundItem key={item.id} item={item} index={index} scrollX={scrollX} />
      ))}

      <View style={styles.overlay} />

      <Animated.FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => (
          <Card item={item} index={index} scrollX={scrollX} />
        )}
      />
    </View>
  );
}

function BackgroundItem({ item, index, scrollX }) {
  const style = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * width,
      index * width,
      (index + 1) * width,
    ];

    const opacity = interpolate(
      scrollX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP
    );

    const scale = interpolate(
      scrollX.value,
      inputRange,
      [1.2, 1, 1.2],
      Extrapolate.CLAMP
    );

    return {
      opacity,
      transform: [{ scale }],
    };
  });

  return (
    <Animated.Image
      source={{ uri: item.image }}
      style={[styles.background, style]}
      blurRadius={30}
    />
  );
}

/* 🃏 MODERN CARD */
function Card({ item, index, scrollX }) {
  const style = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * width,
      index * width,
      (index + 1) * width,
    ];

    const scale = interpolate(
      scrollX.value,
      inputRange,
      [0.85, 1, 0.85],
      Extrapolate.CLAMP
    );

    const translateY = interpolate(
      scrollX.value,
      inputRange,
      [30, 0, 30],
      Extrapolate.CLAMP
    );

    const opacity = interpolate(
      scrollX.value,
      inputRange,
      [0.5, 1, 0.5],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ scale }, { translateY }],
      opacity,
    };
  });

  return (
    <View style={styles.page}>
      <Animated.View style={[styles.card, style]}>

        <View style={styles.imageBox}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>

        <View style={styles.contentBox}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.desc}</Text>

          <View style={styles.priceTag}>
            <Text style={styles.price}>{item.price}</Text>
          </View>

        </View>

      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.55)",
  },

  page: {
    width,
    justifyContent: "center",
    alignItems: "center",
  },

  /* 💎 CARD */
  card: {
    flexDirection: "row",
    width: width * 0.85,
    height: 240,
    borderRadius: 25,
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,0.08)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",
  },

  imageBox: {
    flex: 1,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  contentBox: {
    flex: 1,
    padding: 18,
    justifyContent: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: "800",
    color: "#fff",
  },

  desc: {
    fontSize: 13,
    color: "#ccc",
    marginTop: 8,
  },

  priceTag: {
    marginTop: 15,
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: "#00ffcc33",
  },

  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00ffcc",
  },
});
