// // TabbarNavigation.tsx (dù tên là Tabbar, bạn đang dùng Stack)
// import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Home from "@/app/screens/home";
// import Cart from "@/app/screens/cart";
// import Notification from "@/app/screens/notification";
// import Profile from "@/app/screens/profile";
// import Login from "@/app/screens/login"; // nếu cần
// import TabbarLayout from "@/components/common/layout-tabbar";

// const Stack = createNativeStackNavigator();

// const TabbarNavigation = () => {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       {/* Màn hình không có tabbar */}
//       <Stack.Screen name="Login" component={Login} />

//       {/* Các màn có tabbar */}
//       <Stack.Screen
//         name="Home"
//         children={() => (
//           <TabbarLayout>
//             <Home />
//           </TabbarLayout>
//         )}
//       />
//       <Stack.Screen
//         name="Cart"
//         children={() => (
//           <TabbarLayout>
//             <Cart />
//           </TabbarLayout>
//         )}
//       />
//       <Stack.Screen
//         name="Notification"
//         children={() => (
//           <TabbarLayout>
//             <Notification />
//           </TabbarLayout>
//         )}
//       />
//       <Stack.Screen
//         name="Profile"
//         children={() => (
//           <TabbarLayout>
//             <Profile />
//           </TabbarLayout>
//         )}
//       />
//     </Stack.Navigator>
//   );
// };

// export default TabbarNavigation;
