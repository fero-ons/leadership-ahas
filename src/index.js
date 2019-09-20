import React from "react";
import { render } from "react-dom";

function Story({x}) {
    return (
        <div>
            {x}
        </div>
    );
}

function Main() {
    return (
        <>
            <div id="intro" className="step slide" data-x="-1000" data-y="-1000">
                intro
            </div>

            <div id="story-common-goal" className="step slide" data-x="0" data-y="-1000">
                story
                <Story x='hi'/>
            </div>

            <div id="aha-common-goal" className="step slide" data-x="1000" data-y="-1000">
                aha
            </div>

            <div id="take-away-common-goal" className="step slide" data-x="2000" data-y="-1000">
                take away
            </div>
        </>
    )
}

render(
    <Main />, document.getElementById("react-container")
)