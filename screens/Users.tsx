import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import styles from '../styles/global'
import { getUsers, getSingleUser } from '../redux/actions/userActions'
import UserCard from '../components/UserCard'
import { User, Storetype } from '../types/types'

type Props = {
  users: User[]
  getUsers: Function
  getSingleUser: Function
  navigation: {
    navigate: Function
  }
}

const Posts = ({ users, getUsers, navigation, getSingleUser }: Props) => {

  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getUsers(10, page)
    setLoading(false)
  }, [page])

  const { container, headerText } = styles

  return (
    <View style={container}>
      <Text style={headerText}>List of users</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserCard navigation={ navigation } getDetails={ getSingleUser } user={ item } />}
        keyExtractor={(item) => item.email}
        ListEmptyComponent={<Text>No users found</Text>}
        onEndReached={() => {
          setLoading(true)
          setPage(page + 1)
        }}
        onEndReachedThreshold={ 10 }
        refreshing={ loading }
        onRefresh={() => setPage(1)}
      />
      { loading && <ActivityIndicator size="large" /> }
    </View>
  )
}

const mapStateToProps = (state: Storetype) => ({
  users: state.userState.users
})

export default connect(mapStateToProps, { getUsers, getSingleUser })(Posts)