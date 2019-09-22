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

    var linear = false;

    var slideStepX = linear ? 2000 : 1200;
    var slideStepY = 1000;
    var slideStepZ = 1000;
    var lastDataX = 0;
    var lastDataY = 0;

    function addSlide({
            content, 
            id=null, 
            cssClasses="",
            x=null,
            y=null,
            z=0,
            yRot=0,
            others={}
    }={}) {
        // eval('debugger');

        if (linear) {
            x = null;
            y = null;
            z = 0;
            yRot = 0;
            others = {}
        }

        if (x === null) {
            x = lastDataX + slideStepX;
        }
        if (y === null) {
            y = lastDataY;
        }

        var mainDivProps = {
            'className': "step slide " + cssClasses,
            'data-x': x,
            'data-y': y,
            'data-z': z,
            'data-rotate-y': yRot,
            'data-transition-duration': linear ? 0 : 800,
            ...others
        };

        lastDataX = x;
        lastDataY = y;

        if (id) {
            mainDivProps['id'] = id;
        }

        slides.push(
            <div {...mainDivProps}>
                {content}
            </div>
        );
    }

    var rotDeg = 90;
    var storyTime = <span className="story-time">Story time: </span>
    var startX = 0;
    var startY = -3*slideStepY;
    var xDiffRotate = slideStepX*0.7

    addSlide({
        x: startX,
        y: startY,
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
        x: startX + slideStepX,
        y: startY,
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
        x: -xDiffRotate,
        y: -slideStepY,
        z: -slideStepX,
        yRot: -rotDeg,
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
        x: 0,
        y: -slideStepY,
        z: 0,
        id: 'common-goal',
        cssClasses: 'aha-slide common-goal',
        content: <>
            <div className="slide-center">
                <p>The common goal is the most important</p>
            </div>
        </>
    });

    addSlide({
        x: xDiffRotate,
        y: -slideStepY,
        z: -slideStepX,
        yRot: rotDeg,
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
        x: slideStepX - xDiffRotate,
        y: 0,
        z: -slideStepX,
        yRot: -rotDeg,
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
                    <img src="pics/conversation.png" className="img-center no-shadow" height="350px"/>
                </div>
            </div>
        </>
    });

    addSlide({
        x: slideStepX,
        y: 0,
        z: 0,
        yRot: 0,
        id: 'delegate',
        cssClasses: 'aha-slide delegate',
        content: <>
            <div className="slide-center">
                <p>"I delegate"<span className="substep rotate-on-show"> (let go)</span></p>
            </div>
        </>
    });

    addSlide({
        x: slideStepX + xDiffRotate,
        y: 0,
        z: -slideStepX,
        yRot: rotDeg,
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
        x: slideStepX*0.6 - xDiffRotate,
        y: slideStepY,
        z: -slideStepX,
        yRot: -rotDeg,
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
        x: slideStepX*0.6,
        y: slideStepY,
        z: 0,
        yRot: 0,
        id: 'leadership-lonely',
        cssClasses: 'aha-slide leadership-lonely',
        content: <>
            <div className="slide-center">
                <p>Leadership is lonely... <span className="substep rotate-on-show"> But...!</span></p>
            </div>
        </>
    });

    addSlide({
        x: slideStepX*0.6 + xDiffRotate,
        y: slideStepY,
        z: -slideStepX,
        yRot: rotDeg,
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
        x: -slideStepX*0.6 - xDiffRotate,
        y: slideStepY,
        z: -slideStepX,
        yRot: -rotDeg,
        cssClasses: 'story-slide flexible-leader',
        content: <>
            <div className="slide-heading">
                <span>{storyTime} <span className="story-start">But question first!</span></span>
            </div>
            <div className="slide-body">
                <div className="slide-bullets">
                    <li>Who likes supportive managers?</li>
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
        x: -slideStepX*0.6,
        y: slideStepY,
        z: 0,
        yRot: 0,
        id: 'flexible-leader',
        cssClasses: 'aha-slide flexible-leader',
        content: <>
            <div className="slide-center">
                <p>There's no single right leadership style!</p>
            </div>
        </>
    });

    addSlide({
        x: -slideStepX*0.6 + xDiffRotate,
        y: slideStepY,
        z: -slideStepX,
        yRot: rotDeg,
        cssClasses: 'take-away-slide flexible-leader',
        content: <>
            <div className="slide-heading">
                There's no single right leadership style!
            </div>
            <div className="slide-body">
                <div className="slide-bullets">
                    <li>It depends on the <i>situation</i></li>
                    <li>Catch up, struggling colleague etc...</li>
                    <li>End of meeting &amp; no agreement...</li>
                </div>
                <div className="content-center">
                    <img src="pics/yoga.jpg" className="img-center" height="300px"/>
                </div>
            </div>
        </>
    });

    // ----------------------------- Social capital

    addSlide({
        x: -slideStepX - xDiffRotate,
        y: 0,
        z: -slideStepX,
        yRot: -rotDeg,
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
        x: -slideStepX,
        y: 0,
        z: 0,
        yRot: 0,
        id: 'social-capital',
        cssClasses: 'aha-slide social-capital',
        content: <>
            <div className="slide-center">
                <p>Build social capital</p>
            </div>
        </>
    });

    addSlide({
        x: 0,
        y: 0,
        z: -slideStepX + xDiffRotate,
        yRot: rotDeg,
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

    // ----------------------------- Conclusion

    addSlide({
        x: startX + 2*slideStepX,
        y: startY,
        id: 'dont-manage',
        content: <>
            <div className="slide-heading">
                But what if I don't manage anyone?
            </div>
            <div className="slide-body">
                <div className="slide-bullets">
                    <li>Strive for common goal</li>
                    <li>Build social capital</li>
                    <li>Be supportive and decisive in the right moments</li>
                </div>
                <div className="content-center">
                    <img src="pics/glue.png" className="img-center no-shadow" height="300px"/>
                </div>
            </div>
        </>
    });

    addSlide({
        x: startX + 3*slideStepX,
        y: startY,
        id: 'final',
        content: <>
            <div className="slide-heading">
                <span>The biggest <span className="rotate-once aha">AHA</span></span>
            </div>
            <div className="slide-body">
                <div className="slide-bullets">
                <div className="final-aha">
                    Through proper leadership, one can achieve much more than with technical work
                </div>
                    <li>Individuals have limited time</li>
                    <li>Teams need leadership</li>
                </div>
                <div className="slide-center-horiz">
                    <img className="final-pt" src="pics/individuals.png"/>
                    <img className="final-pt" src="pics/magic.jpg"/>
                    <img className="final-pt" src="pics/team.png"/>
                </div>
            </div>
        </>
    });

    addSlide({
        id: 'resources',
        x: 0,
        y: 0,
        z: slideStepZ,
        content: <>
            <div className="slide-heading">
                <span>Resources &amp; links</span>
            </div>
            <div className="slide-body">
                <div className="slide-bullets">
                    <li>
                        <a target="_blank" href="https://www.amazon.co.uk/Five-Dysfunctions-Team-Leadership-Lencioni/dp/0787960756">
                            5 dysfunctions of a team (book by P. M. Lencioni)
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://noidea.dog/glue">Being glue (credit: Gareth Clews)</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.toastmasters.org/">Toastmasters.org</a>
                    </li>
                    <li>
                        Your managers and leaders :-)
                    </li>
                    <br/>
                    <i>
                        Built using <a target="_blank" href="https://github.com/impress/impress.js/">impress.js</a> 
                        and <a target="_blank" href="https://reactjs.org/">react</a>. 
                        Get the code for this presentation on <a target="_blank" href="https://github.com/fero-ons/leadership-ahas">GitHub</a>
                    </i>
                </div>
            </div>
        </>
    });

    if (!linear) {
        addSlide({
            id: 'overview',
            x: 0,
            y: 0,
            z: 0,
            others: {
                'data-scale':3.4
            },
            content: <div></div>
        });
    }

    return (
        <>
            {slides}
        </>
    )
}

render(
    <Main />, document.getElementById("react-container")
)

