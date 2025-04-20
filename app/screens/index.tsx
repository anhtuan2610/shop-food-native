import Banner1 from "@/components/introduce/banner-1";
import Banner2 from "@/components/introduce/banner-2";
import Banner3 from "@/components/introduce/banner-3";
import { RootStackParamList } from "@/types/navigation";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window"); // lay chieu dai man hinh de scroll
const BANNERS = [<Banner1 />, <Banner2 />, <Banner3 />];

const IntroduceScreen = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const scrollRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSignUp = () => {
    navigation.navigate("signup");
  };

  const handleLogin = () => {
    navigation.navigate("login");
  };

  const handleClickCarouselDot = (index: number) => {
    setCurrentIndex(index);
    scrollRef.current?.scrollTo({ x: index * width, animated: true });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = currentIndex + 1 < 3 ? currentIndex + 1 : 0;
      setCurrentIndex(nextIndex);
      scrollRef.current?.scrollTo({ x: nextIndex * width, animated: true }); // lay index phan tu tiep theo nhan voi chieu dai (vi du phan tu tiep theo la 1 va man hinh 1000px thi` de scroll toi phan tu 1 thi` lay 1 * voi chieu dai man hinh de scroll toi no)
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {BANNERS.map((Banner, index) => (
          <View key={index} style={{ width }}>
            {Banner}
          </View>
        ))}
      </ScrollView>
      <View style={styles.carouselDotsContainer}>
        {BANNERS.map((_, index) => (
          <Pressable
            key={index}
            style={[
              styles.carouselDot,
              currentIndex == index && styles.carouselDotSelected,
            ]}
            onPress={() => handleClickCarouselDot(index)}
          />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonSignup} onPress={handleSignUp}>
          <Text style={styles.textButton}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
          <Text style={styles.textButton}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carouselDotsContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 140,
    right: "50%",
    transform: [{ translateX: "50%" }],
    gap: 14,
  },
  carouselDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
  },
  carouselDotSelected: {
    backgroundColor: "grey",
    opacity: 0.4,
  },
  buttonContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    bottom: 40,
    left: 24,
    right: 24,
    gap: 16,
    display: "flex",
  },
  buttonSignup: {
    flex: 1,
    height: 60,
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#FFFFFF36",
  },
  buttonLogin: {
    flex: 1,
    height: 60,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#242731",
  },
  textButton: {
    fontFamily: "Poppins-SemiBold",
    borderColor: "#FFFFFF",
    fontSize: 16,
    color: "white",
  },
});

export default IntroduceScreen;
