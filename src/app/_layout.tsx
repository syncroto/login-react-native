import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import { StatusBar, Platform, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Routes from "../routes/"

export default function RootLayout() {
  const { top } = useSafeAreaInsets();

  return (
      <NavigationIndependentTree>
        <NavigationContainer>
          {/* Android edge-to-edge: a status bar é transparente, então pintamos a área dela */}
          {Platform.OS == "android" && (
            <View style={{ height: top, backgroundColor: "#353A40" }}>
              <StatusBar barStyle="light-content"/>
            </View>
          )}
          <Routes/>
        </NavigationContainer>
      </NavigationIndependentTree>
  );
}
