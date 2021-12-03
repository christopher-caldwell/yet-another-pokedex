import React, { FC, useState } from 'react'
import { View } from 'react-native'
import { Picker } from '@react-native-picker/picker'

/** Shows which type to use against another type. For example, if your opponent is water, and you know that already, this view shows which moves to use against water */
const Profile: FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState()

  return (
    <View>
      <Picker selectedValue={selectedLanguage} onValueChange={itemValue => setSelectedLanguage(itemValue)}>
        <Picker.Item label='Java' value='java' />
        <Picker.Item label='JavaScript' value='js' />
      </Picker>
    </View>
  )
}

export default Profile
