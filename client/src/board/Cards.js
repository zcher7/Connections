import React, { Fragment, useState } from "react";
import Game from "../game/Game";

const Cards = () => {

    const [selected, setSelected] = React.useState(false);

    const cardStyle = {
        backgroundColor: "rgb(239,239,230)",
        color: "rgb(0,0,0)",
        zIndex: 0
    }

    const onSubmitForm = async e => {
        e.preventDefault();
        Game.execute();
    }

    return (
        <Fragment>
            <div className="pz-game-field" id="pz-game-root">
                <article className="board">
                    <form id="default-choices" className="form">
                        <h2>Make Groups of 4</h2>
                        <fieldset className="boardContainer">
                            <div>
                                <div className="cardsContainer cardsContainer4">
                                    <label htmlFor ="inner-card-0" className="label labelXXLg" data-flip-config="{'translate':true,'scale':true,'opacity':true}"
                                    data-flip-id="LIGHT" style={cardStyle}>
                                        <input className="visually-hidden" type="checkbox" id="inner-card-0" name="inner-card-0" value="LIGHT"/>
                                        LIGHT
                                    </label>
                                    <label htmlFor ="inner-card-1" className="label labelXXLg" data-flip-config="{'translate':true,'scale':true,'opacity':true}"
                                    data-flip-id="DESERT" style={cardStyle}>
                                        <input className="visually-hidden" type="checkbox" id="inner-card-1" name="inner-card-1" value="DESERT"/>
                                        DESERT
                                    </label>
                                    <label htmlFor ="inner-card-2" className="label labelXXLg" data-flip-config="{'translate':true,'scale':true,'opacity':true}"
                                    data-flip-id="BAKE" style={cardStyle}>
                                        <input className="visually-hidden" type="checkbox" id="inner-card-2" name="inner-card-2" value="BAKE"/>
                                        BAKE
                                    </label>
                                    <label htmlFor ="inner-card-3" className="label labelXXLg" data-flip-config="{'translate':true,'scale':true,'opacity':true}"
                                    data-flip-id="WATCH" style={cardStyle}>
                                        <input className="visually-hidden" type="checkbox" id="inner-card-3" name="inner-card-3" value="WATCH"/>
                                        WATCH
                                    </label>
                                    <label htmlFor ="inner-card-4" className="label labelXXLg" data-flip-config="{'translate':true,'scale':true,'opacity':true}"
                                    data-flip-id="OASIS" style={cardStyle}>
                                        <input className="visually-hidden" type="checkbox" id="inner-card-4" name="inner-card-4" value="OASIS"/>
                                        OASIS
                                    </label>
                                    <label htmlFor ="inner-card-5" className="label labelXXLg" data-flip-config="{'translate':true,'scale':true,'opacity':true}"
                                    data-flip-id="HOURGLASS" style={cardStyle}>
                                        <input className="visually-hidden" type="checkbox" id="inner-card-5" name="inner-card-5" value="HOURGLASS"/>
                                        HOURGLASS
                                    </label>
                                    <label htmlFor ="inner-card-6" className="label labelXXLg" data-flip-config="{'translate':true,'scale':true,'opacity':true}"
                                    data-flip-id="MONITOR" style={cardStyle}>
                                        <input className="visually-hidden" type="checkbox" id="inner-card-6" name="inner-card-6" value="MONITOR"/>
                                        MONITOR
                                    </label>
                                    <label htmlFor ="inner-card-7" className="label labelXXLg" data-flip-config="{'translate':true,'scale':true,'opacity':true}"
                                    data-flip-id="BLUR" style={cardStyle}>
                                        <input className="visually-hidden" type="checkbox" id="inner-card-7" name="inner-card-7" value="BLUR"/>
                                        BLUR
                                    </label>
                                    <label htmlFor ="inner-card-8" className="label labelXXLg" data-flip-config="{'translate':true,'scale':true,'opacity':true}"
                                    data-flip-id="BEACH" style={cardStyle}>
                                        <input className="visually-hidden" type="checkbox" id="inner-card-8" name="inner-card-8" value="BEACH"/>
                                        BEACH
                                    </label>
                                    <label htmlFor ="inner-card-9" className="label labelXXLg" data-flip-config="{'translate':true,'scale':true,'opacity':true}"
                                    data-flip-id="TIMER" style={cardStyle}>
                                        <input className="visually-hidden" type="checkbox" id="inner-card-9" name="inner-card-9" value="TIMER"/>
                                        TIMER
                                    </label>
                                    <label htmlFor ="inner-card-10" className="label labelXXLg" data-flip-config="{'translate':true,'scale':true,'opacity':true}"
                                    data-flip-id="PULP" style={cardStyle}>
                                        <input className="visually-hidden" type="checkbox" id="inner-card-10" name="inner-card-10" value="PULP"/>
                                        PULP
                                    </label>
                                    <label htmlFor ="inner-card-11" className="label labelXXLg" data-flip-config="{'translate':true,'scale':true,'opacity':true}"
                                    data-flip-id="TRACK" style={cardStyle}>
                                        <input className="visually-hidden" type="checkbox" id="inner-card-11" name="inner-card-11" value="TRACK"/>
                                        TRACK
                                    </label>
                                    <label htmlFor ="inner-card-12" className="label labelXXLg" data-flip-config="{'translate':true,'scale':true,'opacity':true}"
                                    data-flip-id="BROIL" style={cardStyle}>
                                        <input className="visually-hidden" type="checkbox" id="inner-card-12" name="inner-card-12" value="BROIL"/>
                                        BROIL
                                    </label>
                                    <label htmlFor ="inner-card-13" className="label labelXXLg" data-flip-config="{'translate':true,'scale':true,'opacity':true}"
                                    data-flip-id="SURVEY" style={cardStyle}>
                                        <input className="visually-hidden" type="checkbox" id="inner-card-13" name="inner-card-13" value="SURVEY"/>
                                        SURVEY
                                    </label>
                                    <label htmlFor ="inner-card-14" className="label labelXXLg" data-flip-config="{'translate':true,'scale':true,'opacity':true}"
                                    data-flip-id="PLAYGROUND" style={cardStyle}>
                                        <input className="visually-hidden" type="checkbox" id="inner-card-14" name="inner-card-14" value="PLAYGROUND"/>
                                        PLAYGROUND
                                    </label>
                                    <label htmlFor ="inner-card-15" className="label labelXXLg" data-flip-config="{'translate':true,'scale':true,'opacity':true}"
                                    data-flip-id="SUEDE" style={cardStyle}>
                                        <input className="visually-hidden" type="checkbox" id="inner-card-15" name="inner-card-15" value="SUEDE"/>
                                        SUEDE
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