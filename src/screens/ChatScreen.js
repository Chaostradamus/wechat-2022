import { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import Message from "../components/Message";
import messages from "../../assets/data/messages.json";
import bg from "../../assets/images/BG.png";
import InputBox from "../components/InputBox";
import { useRoute, useNavigation } from "@react-navigation/native";

const ChatScreen = () => {
  const route = useRoute();
  const navigation = (useNavigation = useNavigation());

  useEffect(() => {
    navigation.setOptions({ title: route.params.name });
  }, [route.params.name]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.bg}
    >
      <ImageBackground src={bg} style={styles.bg}>
        <FlatList
          data={messages}
          renderItem={({ item }) => <Message message={item} />}
          style={styles.list}
          inverted
        />
        <InputBox />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
});

export default ChatScreen;
