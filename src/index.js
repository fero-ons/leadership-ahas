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
    var slides = [];

    var dataX = 0
    var dataY = 0

    function addSlide({
            content, 
            id=null, 
            title=null, 
            slideType=null
    }={}) {
        // eval('debugger');

        var mainDivProps = {
            'className': "step slide",
            'data-x': dataX,
            'data-y': dataY,
        };

        if (slideType) {
            mainDivProps['className'] += ` ${slideType}`;
        }
        if (id) {
            mainDivProps['id'] = id;
        }

        dataX += 1000;
        dataY += 0;

        slides.push(
            <div {...mainDivProps}>
                {title && <p class="slide-title">{title}</p>}
                {content}
            </div>
        );
    }

    addSlide({
        id: 'title',
        content: <>
            <div>My leadership <span>AHA!</span> moments</div>
            <div>Fero Hajnovic</div>
            <div>Data scientist @ Office for National Statistics</div>
        </>
    });
    
    addSlide({
        id: 'intro',
        title: 'Once upon a time...',
        content: <>
            <span class="substep">5 AHA moments</span>
            <div class="substep">
                <span>Story</span>
                <span>AHA!</span>
                <span>Take-away points</span>
            </div>
        </>
    });

    // ----------------------------- Common goal ------------------------------

    addSlide({
        slideType: 'story',
        content: <>
            <p>WHY</p>
            <p>If I was a manager, I would...</p>
            <p>Oh,...</p>
        </>
    });

    addSlide({
        slideType: 'aha',
        content: <>
            <p>The common goal is the most important</p>
        </>
    });

    addSlide({
        slideType: 'take-away',
        content: <>
            <p>Say what you think</p>
            <p>Don't be afraid of (good) conflicts</p>
        </>
    });

    // ----------------------------- I delegate -----------------------------
    // ----------------------------- Leadership is lonely -------------------
    // ----------------------------- Flexible leadership
    // ----------------------------- Social capital


    return (
        <>
            {slides}
        </>
    )
}

render(
    <Main />, document.getElementById("react-container")
)

