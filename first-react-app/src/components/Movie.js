import React, { Component } from 'react';
import Review from './Review';

class Movie extends Component {
    render() {
        return (
            <div>
                <h1>Breakin 2: Electric Boogaloo</h1>

                <div>Rating: PG</div>
                <p>Description: Breakin 2: Electric Boogaloo is a 1984 film directed by Sam
                  Firstenberg. It is a sequel to the 1984 breakdancing film
                  Breakin. Electric Boogaloo was released nine months after its
                  predecessor by TriStar Pictures and by Cannon Films a few months
                  later. In some international locations the film was released under
                  the title Breakdance 2: Electric Boogaloo. Another sequel, Rappin
                  (also known as Breakdance 3) was made but had an unconnected plot
                  and different lead characters – only Ice-T features in all three
              movies.</p>
              <Review />
            </div>
        );
    }
}

export default Movie;