// importando o react
import React from 'react';
// é como o : let React = require('react')
function Card2 () {
    return <div>
        
        <div className="row">
        <div className="col s4">
            <div class="card">
                <div class="card-image">
              <img src="https://avatars3.githubusercontent.com/u/54823475?s=400&u=780274777053e188d54edc02142567cfbef87172&v=4"  />
              
              </div>

              <div class="card-content">
              <span class="card-title">Murilo</span>
              <p><b>cor favorita:</b>Laranja</p>
              <p><b>comida favorita:</b>Feijoada</p>
              </div>
              <div class="card-action">
                    <a href="https://github.com/muriloignaccio">Ver github</a>
                    </div>
            </div>
        </div>
    </div>
</div>
          
}

export default Card2;