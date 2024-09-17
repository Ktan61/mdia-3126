import { Image, View } from "react-native"

export default function ProfileImage({ imageLink }){
    return (
        <View>
            <Image 
                source={{ uri: imageLink }} style={{ width: 100, height: 100 }} 
            />
        </View>
    )
}
