import React, { FC, useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import styled from 'styled-components/native'
import { Text } from 'react-native-elements'

/** Shows which type to use against another type. For example, if your opponent is water, and you know that already, this view shows which moves to use against water */
const Profile: FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState()

  return (
    <Root>
      <Container>
        <Text h2>Type 1</Text>
        <Picker selectedValue={selectedLanguage} onValueChange={itemValue => setSelectedLanguage(itemValue)}>
          <Picker.Item label='Java' value='java' />
          <Picker.Item label='JavaScript' value='js' />
        </Picker>
      </Container>
    </Root>
  )
}

const Root = styled.SafeAreaView``
const Container = styled.View`
  padding: 2%;
`

export default Profile
