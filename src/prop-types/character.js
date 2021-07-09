import PropTypes from 'prop-types';

export const characterPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string,
  species: PropTypes.string,
  type: PropTypes.string,
  gender: PropTypes.string,
  origin: PropTypes.object,
  location: PropTypes.object,
  image: PropTypes.string.isRequired,
  episode: PropTypes.array,
  url: PropTypes.string,
  created: PropTypes.string,
});
