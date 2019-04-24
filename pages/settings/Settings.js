import React from "react";
import {Button, View, Text} from "react-native";
import ImageCropper from 'react-native-image-crop-picker';

class SettingsScreen extends React.Component {

  openImageCropper(){
    ImageCropper.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
      alert(JSON.stringify(image))
    });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Text>SettingsScreen SCREEN</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium consectetur cupiditate dolor dolore doloremque doloribus eligendi eum ex, expedita illo illum impedit inventore laboriosam maxime natus neque odio officia praesentium quibusdam saepe sed temporibus vero vitae voluptatibus. Expedita, harum, reiciendis. Asperiores assumenda cum delectus eos et fugiat sed, tenetur voluptas voluptates? Blanditiis, distinctio eum illum incidunt itaque magni minima omnis quia. Culpa dolore ducimus eveniet exercitationem fuga fugiat harum illum magnam necessitatibus nemo quibusdam ratione, reiciendis sunt velit vero. A aliquid animi, aut beatae cum ducimus eaque eligendi, eum eveniet exercitationem libero magnam minima, nesciunt non odit quia voluptate!</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.push('Details')}
        />

        <Button
          title="openImageCropper"
          onPress={() => this.openImageCropper()}
        />
      </View>
    );
  }
}
export default SettingsScreen
