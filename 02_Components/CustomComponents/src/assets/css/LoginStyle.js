import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#222',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 25,
  },
    socialRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
    },

    socialButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eee',
    },

    appleButton: {
    backgroundColor: '#000',
    },

    icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    },

    socialText: {
    fontWeight: '500',
    color: '#333',
    },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  or: {
    marginHorizontal: 10,
    color: '#888',
  },
  inputContainer: {
    gap: 10,
  },
  label: {
    fontSize: 13,
    color: '#555',
    marginTop: 10,
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  rememberText: {
    color: '#555',
  },
  forgot: {
    color: '#000000',
    fontWeight: '500',
  },
  signInButton: {
    backgroundColor: '#000000',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  signInText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  footerText: {
    color: '#666',
  },
  signup: {
    color: '#000000',
    fontWeight: '600',
  },
});

export default styles;