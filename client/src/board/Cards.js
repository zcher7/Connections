import React, { Fragment, useState } from "react";
import Game from "../game/Game";
import "./board.css";
import "./card.css";

const Cards = () => {

    const [selected, setSelected] = React.useState(false);

    const onSubmitForm = async e => {
        e.preventDefault();
        Game.execute();
    }

    return (
        <Fragment>
            <head>
                <link rel="stylesheet" type="text/css" href="card.css" />
            </head>
            <div>
                <article>
                    <form id="default-choices" class="board">
                        <h2>Make Groups of 4</h2>
                        <fieldset>
                            <div>
                                <div>
                                    <label for ="c0" class="card" data-flip-config="{'translate':true,'scale':true,'opacity':true}"
                                    data-flip-id="LIGHT" styles="background-color: rgb(239,239,230); color: rgb(0,0,0); z-index: 0;">
                                        <input class="visually-hidden" type="checkbox" id="c0" name="c0" value="LIGHT"/>
                                        LIGHT
                                    </label>
                                    <label>
                                        <input class="visually-hidden" type="checkbox" id="c1" name="c1" value="DESERT"/>
                                        DESERT
                                    </label>
                                    <label>
                                        <input class="visually-hidden" type="checkbox" id="c2" name="c2" value="BAKE"/>
                                        BAKE
                                    </label>
                                    <label>
                                        <input class="visually-hidden" type="checkbox" id="c3" name="c3" value="WATCH"/>
                                        WATCH
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </article>
            </div>



            <form onSubmit={onSubmitForm} style={{justifyContent: "center", textAlign: "center"}}> 
                <button className="btn btn-success">Submit</button>  
            </form>
        </Fragment>
        
    )
}

export default Cards;