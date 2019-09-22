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
            cssClasses=""
    }={}) {
        // eval('debugger');

        var mainDivProps = {
            'className': "step slide " + cssClasses,
            'data-x': dataX,
            'data-y': dataY,
        };

        if (id) {
            mainDivProps['id'] = id;
        }

        dataX += 1000;
        dataY += 0;

        slides.push(
            <div {...mainDivProps}>
                {content}
            </div>
        );
    }

    addSlide({
        id: 'title-slide',
        content: <>
            <div className="slide-center">
                <div className="main">My leadership <br/> <b className="aha-title">AHA!</b><br/> moments</div>
                <div className="author">
                    <div className="name">Fero Hajnovic</div>
                    <div className="affiliation">Office for National Statistics</div>
                </div>
            </div>
        </>
    });
    
    addSlide({
        id: 'intro',
        content: <>
            <div className="slide-heading">Once upon a time...</div>
            <div className="slide-body">
                <div className="slide-center">
                    <img className="intro-pt substep" src="pics/story.jpg"/>
                    <img className="intro-pt substep" src="pics/aha.jpg"/>
                    <img className="intro-pt substep" src="pics/takeaway.jpg"/>
                </div>
            </div>
        </>
    });

    // ----------------------------- Common goal ------------------------------

    addSlide({
        cssClasses: 'story-slide common-goal',
        content: <>
            <div className="slide-heading">Story time: I used to...</div>
            <div className="slide-body">
                <div className="slide-bullets">
                    <li>Strong opinions...</li>
                    <li><i>If I was a manager, I would...</i></li>
                    <li>Conflicts</li>
                </div>
                <div className="content-center">
                    <img src="pics/critic.jpg" className="img-center" height="350px"/>
                </div>
            </div>
        </>
    });

    addSlide({
        cssClasses: 'aha-slide common-goal',
        content: <>
            <div className="slide-center">
                <p>The common goal is the most important</p>
            </div>
        </>
    });

    addSlide({
        cssClasses: 'take-away-slide common-goal',
        content: <>
            <div className="slide-heading">Take-aways</div>
            <div className="slide-body">
                <div className="slide-bullets">
                    <li>Think of the common goal</li>
                    <li>Say what you think</li>
                    <li>(Good) conflicts are good</li>
                </div>
                <div className="content-center">
                    <img src="pics/handshake.jpg" className="img-center" height="300px"/>
                </div>
            </div>
        </>
    });

    // ----------------------------- I delegate -----------------------------

    addSlide({
        cssClasses: 'story-slide delegate',
        content: <>
            <div className="slide-heading">Story time: I used to...</div>
            <div className="slide-body">
                <div className="slide-bullets">
                    <li>Strong opinions...</li>
                    <li><i>If I was a manager, I would...</i></li>
                    <li>Conflicts</li>
                </div>
                <div className="content-center">
                    <img src="pics/critic.jpg" className="img-center" height="350px"/>
                </div>
            </div>
        </>
    });

    addSlide({
        cssClasses: 'aha-slide delegate',
        content: <>
            <div className="slide-center">
                <p>The common goal is the most important</p>
            </div>
        </>
    });

    addSlide({
        cssClasses: 'take-away-slide delegate',
        content: <>
            <div className="slide-heading">Take-aways</div>
            <div className="slide-body">
                <div className="slide-bullets">
                    <li>Think of the common goal</li>
                    <li>Say what you think</li>
                    <li>(Good) conflicts are good</li>
                </div>
                <div className="content-center">
                    <img src="pics/handshake.jpg" className="img-center" height="300px"/>
                </div>
            </div>
        </>
    });

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

