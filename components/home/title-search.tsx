import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import SearchInputVector from "@/assets/vectors/home/search-input-vector";
import { StyleSheet, Text, TextInput, View } from "react-native";

const TitleSearch = () => {
  return (
    <View style={styles.titleContainer}>
      <MaskedView
        maskElement={
          <Text style={[styles.title1, { backgroundColor: "transparent" }]}>
            Good Afternoon!
          </Text>
        }
      >
        <LinearGradient
          colors={["#FE724D", "#FFC529"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientText} // thêm style cố định chiều rộng / cao
        />
      </MaskedView>
      <View style={styles.searchContainer}>
        <View style={styles.searchVector}>
          <SearchInputVector />
        </View>
        <TextInput
          style={styles.searchInput}
          placeholder="Search dishes, restaurants"
          placeholderTextColor="#A9ABB4"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    gap: 7,
    paddingRight: 24,
  },
  title1: {
    fontFamily: "Poppins-Bold",
    fontSize: 20,
  },
  gradientText: {
    width: "100%",
    height: 30,
  },
  searchContainer: { position: "relative", justifyContent: "center" },
  searchInput: {
    paddingVertical: 16,
    paddingLeft: 47,
    backgroundColor: "#F9F9FA",
    borderRadius: 15,
  },
  searchVector: {
    position: "absolute",
    left: 16,
    zIndex: 1,
  },
});

export default TitleSearch;
