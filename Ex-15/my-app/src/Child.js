import PropTypes from 'prop-types'

export default function Child({ message }) {
  return <p>Message from Parent: {message}</p>
}

Child.propTypes = {
  message: PropTypes.string.isRequired
}