import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import PostCard from "./post-card";
import { getListPosts } from "@/services/post";
import { TPost } from "@/types";

const PostList = () => {
  const [posts, setPosts] = useState<TPost[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await getListPosts();
      if (response.posts.length > 0) {
        setPosts(response.posts);
      }
    };
    getPosts();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title1}>Posts</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.postCard}>
            <PostCard post={item} />
          </View>
        )}
        contentContainerStyle={styles.containerPostList}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title1: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
    paddingHorizontal: 24,
    marginBottom: 4,
  },

  containerPostList: {
    paddingHorizontal: 10,
  },
  postCard: {
    width: "49.5%",
    marginRight: 4,
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
});

export default PostList;
