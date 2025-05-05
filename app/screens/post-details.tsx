import PostHeader from "@/components/post-details/post-header";
import { getPostById } from "@/services/post";
import { TPost } from "@/types";
import { RootStackParamList } from "@/types/navigation";
import {
  NavigationProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const PostDetails = () => {
  const route = useRoute();
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const [post, setPost] = useState<TPost>();
  const { postId } = route.params as { postId: number };

  useEffect(() => {
    const getSinglePost = async () => {
      const response = await getPostById({ postId });
      if (response) {
        setPost(response);
      }
    };
    getSinglePost();
  }, []);

  if (!post) {
    return (
      <View
        style={[
          styles.container,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <Text>...is loading</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <PostHeader />
      <View>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.userId}>Posted by User #{post.userId}</Text>
        <Text style={styles.body}>{post.body}</Text>
        <View style={styles.tagsContainer}>
          {post.tags.map((tag, index) => (
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 24,
    color: "#333",
    marginBottom: 8,
  },
  userId: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#888",
    marginBottom: 16,
  },
  body: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
    marginBottom: 16,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16,
  },
  tag: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#007AFF",
    marginRight: 8,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 12,
  },
  footerText: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#888",
  },
});

export default PostDetails;
