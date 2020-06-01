// importando o react
import React from 'react';
// é como o : let React = require('react')
function Card () {
    return <div>
    
    <div className="row">
        <div className="col s4">
            <div class="card">
                <div class="card-image">
                    <img src="https://scontent.ffln1-1.fna.fbcdn.net/v/t1.0-1/p160x160/57716571_2690017284372875_45283596843352064_o.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=mPfNxbgajoMAX8JirQ1&_nc_ht=scontent.ffln1-1.fna&_nc_tp=6&oh=3d4887456ddf3aea3d3be1ab6d4a4add&oe=5EF8E89A"  />
                    
                </div>
                <div class="card-content">
                <span class="card-title">Victor</span>
                    <p><b>cor favorita:</b>Verde</p>
                    <p><b>comida favorita:</b> Macarrão com queijo  </p>
                </div>
                <div class="card-action">
                    <a href="https://github.com/vituhugo">Ver github</a>
                </div>
            </div>
        </div>
    </div>
</div>
          
}

export default Card;