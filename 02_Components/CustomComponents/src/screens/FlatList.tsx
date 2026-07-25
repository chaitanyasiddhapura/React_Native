import React, { memo, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const DATA = Array.from({ length: 50 }, (_, i) => ({
  id: i.toString(),
  title: `Item ${i + 1}`,
  subtitle: "Modern UI + High Performance",
}));

// 🔹 Memoized Item (critical for performance)
const ListItem = memo(({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(item)}>
      <View style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
});

export default function ModernFlatList() {
  // 🔹 Stable callback (prevents re-renders)
  const handlePress = useCallback((item) => {
    console.log("Pressed:", item.title);
  }, []);

  // 🔹 Key extractor
  const keyExtractor = useCallback((item) => item.id, []);

  // 🔹 Render item
  const renderItem = useCallback(
    ({ item }) => <ListItem item={item} onPress={handlePress} />,
    [handlePress]
  );

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      
      // 🔹 Performance tuning
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      windowSize={5}
      removeClippedSubviews={true}
      
      // 🔹 UX improvements
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
      
      // 🔹 Empty state
      ListEmptyComponent={
        <Text style={styles.empty}>No data available</Text>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#F7F8FA",
  },
  card: {
    flexDirection: "row",
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    marginBottom: 12,

    // 🔹 Modern shadow (iOS + Android)
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#E0E7FF",
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
  subtitle: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 4,
  },
  empty: {
    textAlign: "center",
    marginTop: 50,
    color: "#999",
  },
});