import React, { Fragment, useState } from "react";
import Game from "../game/Game";

const Cards = () => {

    const [selected, setSelected] = React.useState(false);

    const onSubmitForm = async e => {
        e.preventDefault();
        Game.execute();
    }

    return (
        <Fragment>
            <div>
                <article className="board">
                    <form id="default-choices" className="form">
                        <h2>Make Groups of 4</h2>
                        <fieldset className="boardContainer">
                            <div>
                                <div className="cardsContainer cardsContainer4">
                                    <label htmlFor ="inner-card-0" className="label labelXXLg" data-flip-config="{'translate':true,'scale':true,'opacity':true}"
                                    data-flip-id="LIGHT" styles="background-color: rgb(239,239,230); color: rgb(0,0,0); z-index: 0;">
                                        <input className="visually-hidden" type="checkbox" id="inner-card-0" name="inner-card-0" value="LIGHT"/>
                                        LIGHT
                                    </label>
                                    <label htmlFor ="inner-card-1" className="label labelXXLg" data-flip-config="{'translate':true,'scale':true,'opacity':true}"
                                    data-flip-id="LIGHT" styles="background-color: rgb(239,239,230); color: rgb(0,0,0); z-index: 0;">
                                        <input className="visually-hidden" type="checkbox" id="inner-card-1" name="inner-card-1" value="DESERT"/>
                                        DESERT
                                    </label>
                                    <label htmlFor ="inner-card-2" className="label labelXXLg" data-flip-config="{'translate':true,'scale':true,'opacity':true}"
                                    data-flip-id="LIGHT" styles="background-color: rgb(239,239,230); color: rgb(0,0,0); z-index: 0;">
                                        <input className="visually-hidden" type="checkbox" id="inner-card-2" name="inner-card-2" value="BAKE"/>
                                        BAKE
                                    </label>
                                    <label htmlFor ="inner-card-3" className="label labelXXLg" data-flip-config="{'translate':true,'scale':true,'opacity':true}"
                                    data-flip-id="LIGHT" styles="background-color: rgb(239,239,230); color: rgb(0,0,0); z-index: 0;">
                                        <input className="visually-hidden" type="checkbox" id="inner-card-3" name="inner-card-3" value="WATCH"/>
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