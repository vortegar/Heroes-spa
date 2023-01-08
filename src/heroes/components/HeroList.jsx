import { HeroCard } from './HeroCard';

import { getHeroesByPublisher } from '../helpers';
import { useMemo } from 'react';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [publisher]);
    // const heroes = getHeroesByPublisher( publisher )

    const heroesMap = heroes.map( hero => hero === hero.publisher)

    return (
        
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroes.map( hero => (
                    <HeroCard 
                        key={ hero.id }
                        {...hero }
                    />
                ))
            }
        </div>
    )
}
