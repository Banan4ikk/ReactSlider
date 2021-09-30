import React from 'react';

function Slides({slides}) {
    const [index, setIndex] = React.useState(0);
    const [slide, setSlide] = React.useState(slides[0]);

    const onCLickNext = () => {
        setIndex(index + 1);
    }

    const onCLickPrev = () => {
        setIndex(index - 1);
    }

    const onCLickRestart = () => {
        setIndex(0);
    }

    React.useEffect(() => {
        setSlide(slides[index]);
    }, [index]);

    return (
        <div>
            <div id="navigation" className="text-center">
                <button onClick={onCLickRestart} disabled={index === 0} data-testid="button-restart"
                        className="small outlined">Restart
                </button>
                <button onClick={onCLickPrev} disabled={index === 0} data-testid="button-prev"
                        className="small">Prev
                </button>
                <button onClick={onCLickNext} disabled={ index >= (slides.length - 1)} data-testid="button-next"
                        className="small">Next
                </button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slide.title}</h1>
                <p data-testid="text">{slide.text}</p>
            </div>
        </div>
    );
}

export default Slides;
