import { ScrollView, StyleSheet, View } from "react-native";

import CategoriesProduct from "@/components/home/categories-product";
import SpecialOffers from "@/components/home/special-offers";
import TitleSearch from "@/components/home/title-search";
import { useEffect, useState } from "react";
import Products from "@/components/home/products";
import Posts from "@/components/home/posts";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/types/navigation";
import { useModalStore } from "@/stores/modal";

const Home = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const { setNavigationContext } = useModalStore();
  const [selectedCatId, setSelectedCatId] = useState<string>("3");
  useEffect(() => {
    setNavigationContext({ navigationContext: navigation });
    getToken();
  }, []);
  const getToken = async () => {
    // console.log(await AsyncStorage.getItem("accessToken"));
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <TitleSearch />
        <CategoriesProduct
          selectedCatId={selectedCatId}
          setSelectedCatId={setSelectedCatId}
        />
        <SpecialOffers selectedCatId={selectedCatId} />
        <Products />
        <Posts />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    paddingTop: 20, // dung` margin bi an mau cua thang cha
    backgroundColor: "#ffffff",
    paddingBottom: 80,
  },
});

export default Home;
