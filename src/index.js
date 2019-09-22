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

    var storyTime = <span className="story-time">Story time: </span>

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
            <div className="slide-heading">
                <span>{storyTime} <span className="story-start">I used to...</span></span>
                </div>
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
            <div className="slide-heading">The common goal is the most important</div>
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
            <div className="slide-heading">
                <span>{storyTime} <span className="story-start">I once talked to...</span></span>
            </div>
            <div className="slide-body">
                <div className="slide-bullets">
                    <li>Managing all the projects</li>
                    <li>Managing all the people</li>
                    <li>Yet still time for a chat?</li>
                </div>
                <div className="content-center">
                    <img src="pics/conversation.png" className="img-center" height="350px"/>
                </div>
            </div>
        </>
    });

    addSlide({
        cssClasses: 'aha-slide delegate',
        content: <>
            <div className="slide-center">
                <p>"I delegate"<span className="substep rotate-on-show"> (let go)</span></p>
            </div>
        </>
    });

    addSlide({
        cssClasses: 'take-away-slide delegate',
        content: <>
            <div className="slide-heading"><span>"I delegate"<span className="rotate-once"> (let go)</span></span></div>
            <div className="slide-body">
                <div className="slide-bullets">
                    <li>Sounds obvious?</li>
                    <li>Collaboration and team-work</li>
                    <li>Lead or do - choose one</li>
                </div>
                <div className="content-center">
                    <img src="pics/pizza.jpg" className="img-center" height="300px"/>
                </div>
            </div>
        </>
    });

    // ----------------------------- Leadership is lonely -------------------

    addSlide({
        cssClasses: 'story-slide leadership-lonely',
        content: <>
            <div className="slide-heading">
                <span>{storyTime} <span className="story-start">Toastmasters...</span></span>
            </div>
            <div className="slide-body">
                <div className="slide-bullets">
                    <li>Member and later president</li>
                    <li>Team of volunteers</li>
                    <li>Decisions</li>
                </div>
                <div className="content-center">
                    <img src="pics/alone.jpg" className="img-center" height="350px"/>
                </div>
            </div>
        </>
    });

    addSlide({
        cssClasses: 'aha-slide leadership-lonely',
        content: <>
            <div className="slide-center">
                <p>Leadership is lonely... <span className="substep rotate-on-show"> But...!</span></p>
            </div>
        </>
    });

    addSlide({
        cssClasses: 'take-away-slide leadership-lonely',
        content: <>
            <div className="slide-heading">
                <span>Leadership is lonely... <span className="rotate-once"> But...!</span></span>
            </div>
            <div className="slide-body">
                <div className="slide-bullets">
                    <li>You still have support</li>
                    <li>Say "I need help" and "I don't know"</li>
                    <li>Do you want to do it?</li>
                </div>
                <div className="content-center">
                    <img src="pics/support.jpeg" className="img-center" height="300px"/>
                </div>
            </div>
        </>
    });

    // ----------------------------- Flexible leadership

    addSlide({
        cssClasses: 'story-slide flexible-leader',
        content: <>
            <div className="slide-heading">
                <span>{storyTime} <span className="story-start">But question first!</span></span>
            </div>
            <div className="slide-body">
                <div className="slide-bullets">
                    <li>Who here likes supportive managers?</li>
                    <li>Vow to be supportive</li>
                    <li>But is that the right style?</li>
                </div>
                <div className="content-center">
                    <img src="pics/scratch.jpg" className="img-center" height="350px"/>
                </div>
            </div>
        </>
    });

    addSlide({
        cssClasses: 'aha-slide flexible-leader',
        content: <>
            <div className="slide-center">
                <p>There's no single right leadership style!</p>
            </div>
        </>
    });

    addSlide({
        cssClasses: 'take-away-slide flexible-leader',
        content: <>
            <div className="slide-heading">
                There's no single right leadership style!
            </div>
            <div className="slide-body">
                <div className="slide-bullets">
                    <li>It depends on the <i>situation</i></li>
                    <li>Catch up, struggling colleague etc...</li>
                    <li>End of the meeting, no agreement in sight</li>
                </div>
                <div className="content-center">
                    <img src="pics/yoga.jpg" className="img-center" height="300px"/>
                </div>
            </div>
        </>
    });

    // ----------------------------- Social capital

    addSlide({
        cssClasses: 'story-slide social-capital',
        content: <>
            <div className="slide-heading">
                <span>{storyTime} <span className="story-start">I started this project...</span></span>
            </div>
            <div className="slide-body">
                <div className="slide-bullets">
                    <li>Slow start, days of research...</li>
                    <li>Libraries, papers, keywords</li>
                    <li>Colleague --> 90 minutes</li>
                </div>
                <div className="content-center">
                    <img src="pics/krivan.jpg" className="img-center" height="350px"/>
                </div>
            </div>
        </>
    });

    addSlide({
        cssClasses: 'aha-slide social-capital',
        content: <>
            <div className="slide-center">
                <p>Build social capital</p>
            </div>
        </>
    });

    addSlide({
        cssClasses: 'take-away-slide social-capital',
        content: <>
            <div className="slide-heading">
                Build social capital
            </div>
            <div className="slide-body">
                <div className="slide-bullets">
                    <li>Knowing <i>people</i> that helped</li>
                    <li><i>Put people first</i></li>
                    <li>Leadership is about <i>people</i></li>
                </div>
                <div className="content-center">
                    <img src="pics/time.jpg" className="img-center" height="300px"/>
                </div>
            </div>
        </>
    });


    return (
        <>
            {slides}
        </>
    )
}

render(
    <Main />, document.getElementById("react-container")
)

