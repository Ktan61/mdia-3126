import { View, TextInput } from "react-native";
import Name from "../atoms/Name";
import Message from "../atoms/Message";
import ProfileImage from "../atoms/ProfileImage";

export default function Post({ messageText, nameText, imageLink }){
    return (
        <View
            style={{
                padding: 10,
                flexDirection: "row",
                gap: 15,
                alignItems:"center",
                backgroundColor:"#eee1f8",
                borderRadius: 15
            }}
        >
            <ProfileImage imageLink={imageLink}/> 
            <View style={{width: 300}}>
                <Name nameText={nameText}/>
                <Message messageText={messageText}/>
            </View>
        </View>
    )
}
