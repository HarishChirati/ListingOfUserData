import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from '../styles/global'
import { User } from '../types/types'

type Props = {
  user: User
  getDetails: Function
  navigation: {
    navigate: Function
  }
}

const imgUrl: string = 'https://cdn0.iconfinder.com/data/icons/professional-avatar-5/48/Gamer_male_avatar_men_character_professions-512.png'

const UserCard = ({ user, navigation, getDetails }: Props) => {

  const { userCard, avatar, avatarContainer, cardName, cardEmail } = styles

  return(
    <TouchableOpacity
      style={ userCard }
      activeOpacity={ 0.8 }
      onPress={ () => {
        getDetails(user)
        navigation.navigate('SingleUser')
      }}
    >
      <View style={ avatarContainer }>
        <Image style={ avatar } source={{ uri: user.picture.thumbnail || imgUrl }} />
      </View>
      <View>
        <Text style={ cardName }>{ `${user.name.first} ${user.name.last}` }</Text>
        <Text style={ cardEmail }>{ user.email }</Text>
      </View>
    </TouchableOpacity>
  )
}

export default UserCard