import { StyleSheet } from 'react-native'
import { colors } from './constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  userCard: {
    padding: 20,
    elevation: 1,
    backgroundColor: '#fff',
    width: '100%',
    marginVertical: 8,
    borderRadius: 5,
    flexDirection: 'row',
    shadowColor: '#000',
    alignItems: 'center',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 3
  },
  avatarContainer: {
    marginRight: 15,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  cardName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555',
    textAlign: 'left'
  },
  cardEmail: {
    fontSize: 14,
    color: '#777'
  },
  cardDetails: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 15
  },
  profile: {
    height: 100,
    width: 100,
    borderRadius: 50
  }
})

export default styles