import React from "react";
import {
  SafeAreaView,
  Animated,
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

const todoList = [
  { id: "1", text: "Learn JavaScript" },
  { id: "2", text: "Learn React" },
  { id: "3", text: "Learn TypeScript" },
];

const Separator = () => <View style={styles.itemSeparator} />;

const LeftSwipeActions = () => {
  return (
    <View
      style={{ flex: 1, backgroundColor: "#ccffbd", justifyContent: "center" }}
    >
      <Text
        style={{
          color: "#40394a",
          paddingHorizontal: 10,
          fontWeight: "600",
          paddingHorizontal: 30,
          paddingVertical: 20,
        }}
      >
        Bookmark
      </Text>
    </View>
  );
};

const rightSwipeActions = () => {
  return (
    <View
      style={{
        backgroundColor: "#ff8303",
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      <Text
        style={{
          color: "#1b1a17",
          paddingHorizontal: 10,
          fontWeight: "600",
          paddingHorizontal: 30,
          paddingVertical: 20,
        }}
      >
        Delete
      </Text>
    </View>
  );
};

const swipeFromLeftOpen = () => {
  alert("Swipe from left");
};
const swipeFromRightOpen = () => {
  alert("Swipe from right");
};

const swipePeteFromLeftOpen = () => {
  console.log("Swipe Pete from left");
};
const swipePeteFromRightOpen = () => {
  console.log("Swipe Pete from right");
};

const ListItem = ({ text }) => (
  <Swipeable
    renderLeftActions={LeftSwipeActions}
    renderRightActions={rightSwipeActions}
    onSwipeableRightOpen={swipeFromRightOpen}
    onSwipeableLeftOpen={swipeFromLeftOpen}
  >
    <View
      style={{
        paddingHorizontal: 30,
        paddingVertical: 20,
        backgroundColor: "white",
      }}
    >
      <Text style={{ fontSize: 24 }} style={{ fontSize: 20 }}>
        {text}
      </Text>
    </View>
  </Swipeable>
);

const SwipeGesture = () => {
  return (
    <>
      <StatusBar />
      {/* <Swipeable
        onSwipeableRightOpen={swipePeteFromRightOpen}
        onSwipeableLeftOpen={swipePeteFromLeftOpen}
        onSwipeableOpen={(direction) => {
          console.log(`Opening swipeable from the ${direction}`);
        }}
        onSwipeableClose={(direction) => {
          console.log(`Closing swipeable to the ${direction}`);
        }}
        onSwipeableWillOpen={() => {
          console.log(`onSwipeableWillOpen swipeable`);
        }}
        onSwipeableWillClose={() => {
          console.log(`onSwipeableWillClose swipeable`);
        }}
      > */}
      <SafeAreaView
        style={styles.container}
        onTouchStart={(e) => (this.touchX = e.nativeEvent.pageX)}
        onTouchEnd={(e) => {
          if (this.touchX - e.nativeEvent.pageX > 20)
            console.log(
              "Swiped left" +
                this.touchX +
                ", e.nativeEvent.pageX:" +
                e.nativeEvent.pageX +
                ", subtracted:" +
                (this.touchX - e.nativeEvent.pageX)
            );
          if (this.touchX - e.nativeEvent.pageX < -20)
            console.log(
              "Swiped right, this.touchX" +
                this.touchX +
                ", e.nativeEvent.pageX:" +
                e.nativeEvent.pageX +
                ", subtracted:" +
                (this.touchX - e.nativeEvent.pageX)
            );
        }}
      >
        <View>
          <Text style={{ textAlign: "center", marginVertical: 20 }}>
            Swipe right or left
          </Text>
          <FlatList
            data={todoList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ListItem {...item} />}
            ItemSeparatorComponent={() => <Separator />}
          />
        </View>
      </SafeAreaView>
      {/* </Swipeable> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemSeparator: {
    flex: 1,
    height: 1,
    backgroundColor: "#444",
  },
});

export default SwipeGesture;
