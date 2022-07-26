import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, img } = this.props;
    return (
      <div data-testid="planet-card" className="planetDiv">
        <div>
          <img src={ planetImage } alt={ `Planeta ${planetName}` } className={ img } />
        </div>
        <p data-testid="planet-name" className="planetsNames">{planetName}</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
  img: PropTypes.string,
}.isRequired;

export default PlanetCard;
