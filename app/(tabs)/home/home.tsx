import { StyleSheet, View } from "react-native";

import CategoriesFood from "@/components/home/categories-food";
import SpecialOffers from "@/components/home/special-offers";
import TitleSearch from "@/components/home/title-search";
import Restaurants from "@/components/home/restaurants";

const Home = () => {
  return (
    <View style={styles.container}>
      <TitleSearch />
      <CategoriesFood />
      <SpecialOffers />
      <Restaurants />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    paddingTop: 20, // dung` margin bi an mau cua thang cha
    paddingLeft: 24,
    backgroundColor: "#ffffff",
  },
});

export default Home;
