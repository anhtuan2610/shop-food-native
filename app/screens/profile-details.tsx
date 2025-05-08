import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/types/navigation";
import BackScreenVector from "@/assets/vectors/introduce/BackScreenVector";

const ProfileDetails = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  const user = {
    firstName: "Carter",
    lastName: "Baker",
    age: 31,
    gender: "Male",
    email: "carter.baker@x.dummyjson.com",
    phone: "+49 787-512-9117",
    address: "625 Third Street, Denver, Oregon, 74622, United States",
    university: "Washington University in St. Louis",
    company: "Luettgen and Sons",
    title: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.contentHeader}>
          <Pressable style={styles.vectorContainer} onPress={handleGoBack}>
            <BackScreenVector />
          </Pressable>
          <Image source={{ uri: user.image }} style={styles.avatar} />
          <View style={[styles.vectorContainer, { opacity: 0 }]} />
        </View>
        <Text style={styles.name}>{`${user.firstName} ${user.lastName}`}</Text>
        <Text style={styles.title}>{user.title}</Text>
      </View>

      <View style={styles.infoContainer}>
        <InfoItem icon="person" label="Age" value={user.age.toString()} />
        <InfoItem icon="male-female" label="Gender" value={user.gender} />
        <InfoItem icon="mail" label="Email" value={user.email} />
        <InfoItem icon="call" label="Phone" value={user.phone} />
        <InfoItem icon="location" label="Address" value={user.address} />
        <InfoItem icon="school" label="University" value={user.university} />
        <InfoItem icon="briefcase" label="Company" value={user.company} />
      </View>
    </ScrollView>
  );
};

const InfoItem = ({ icon, label, value }: any) => (
  <TouchableOpacity style={styles.infoItem}>
    <Ionicons name={icon} size={24} color="#4B5EAA" style={styles.icon} />
    <View>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: "#F8FAFF",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#FFFFFF",
    marginBottom: 10,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1F2A44",
  },
  title: {
    fontSize: 16,
    color: "#6B7280",
    marginTop: 5,
  },
  infoContainer: {
    padding: 20,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  icon: {
    marginRight: 15,
  },
  label: {
    fontSize: 14,
    color: "#6B7280",
  },
  value: {
    fontSize: 16,
    color: "#1F2A44",
    fontWeight: "500",
  },
  contentHeader: {
    width: "100%",
    paddingBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  vectorContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "rgba(255, 255, 255, 1)",
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  textTitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 18,
  },
});

export default ProfileDetails;
