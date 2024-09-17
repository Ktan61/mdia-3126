import { Text, View } from "react-native"

export default function Message({ messageText }){
    return (
        <View>
            <Text style={{color:"#390a5b"}}>{messageText}</Text>
        </View>
    )
}
