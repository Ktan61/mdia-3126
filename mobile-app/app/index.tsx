import { View } from "react-native";
import InputForm from "@/components/molecules/InputForm";
import Post from "@/components/molecules/Post";

export default function Index() {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Post
        nameText="Kathryn Tan"
        messageText="My name kind of sounds like 'cat', so it's pretty convenient that I also like cats. You know what else I like? The colour purr-ple. Hope you have a nice day! "
        imageLink="https://images.unsplash.com/photo-1549545931-59bf067af9ab?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </View>
  );
}
