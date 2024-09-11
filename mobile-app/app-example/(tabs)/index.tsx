import { View } from "react-native";
import InputForm from "@/components/molecules/InputForm";


export default function Index() {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <InputForm 
        textForLabel="I'm a label"
        textForButton="I'm a button!"
        textForPlaceholder="I'm a placeholder!"
      />
    </View>
  );
}
