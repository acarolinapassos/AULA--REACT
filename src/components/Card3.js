// importando o react
import React from 'react';
// é como o : let React = require('react')
function Card3 () {
    return <div>
        
        <div className="row">
        <div className="col s4">
            <div class="card">
              <div class="card-image">
              <img src="https://avatars3.githubusercontent.com/u/45742312?s=400&u=0f995bf69e1f1f1ee9e4c52d18a676cb05fc406b&v=4"  />
              
              </div>

              <div class="card-content">
              <span class="card-title">Erica</span>
              <p><b>cor favorita:</b>Azul</p>
              <p><b>comida favorita:</b>Strogonoff</p>
              </div>
              <div class="card-action">
                    <a href="https://github.com/EricaSugui">Ver github</a>
               </div>
            </div>
        </div>
    </div>
</div>
          
}

export default Card3;