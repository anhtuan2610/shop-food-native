import { TPost } from "@/types";
import { RootStackParamList } from "@/types/navigation";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");
const cardWidth = width * 0.45;

const PostCard = ({ post }: { post: TPost }) => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const handleRedirectPostDetails = () => {
    navigation.navigate("post-details", { postId: post.id });
  };

  return (
    <TouchableOpacity
      style={styles.postCard}
      onPress={handleRedirectPostDetails}
    >
      <Text style={styles.title} numberOfLines={2}>
        {post.title}
      </Text>
      <Text style={styles.body} numberOfLines={4}>
        {post.body}
      </Text>
      <View style={styles.tagsContainer}>
        {post.tags.map((tag: string, index: number) => (
          <Text key={index} style={styles.tag}>
            #{tag}
          </Text>
        ))}
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          👍 {post.reactions.likes} | 👎 {post.reactions.dislikes}
        </Text>
        <Text style={styles.footerText}>👀 {post.views}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  postCard: {
    width: cardWidth,
    height: 260,
    backgroundColor: "#FFF9F5",
    borderRadius: 10,
    padding: 15,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  body: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 10,
    flex: 1,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  tag: {
    fontSize: 12,
    color: "#007AFF",
    marginRight: 5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerText: {
    fontSize: 12,
    color: "#888",
  },
});

export default PostCard;
