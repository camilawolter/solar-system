import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="solarSystemContainer">
          {
            planets.map(({ name, image }) => (
              <PlanetCard
                key={ name }
                planetName={ name }
                planetImage={ image }
                img={ name }
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
