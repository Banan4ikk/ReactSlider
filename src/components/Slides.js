import React from 'react';

function Slides({slides}) {
  let index = 0;

  const [slide, setSlide] = React.useState(slides[0]);
  const [disabledButtonRestart, setDisabledButtonRestart] = React.useState(true);
  const [disabledButtonNext, setDisabledButtonNext] = React.useState(true);
  const [disabledButtonPrevious, setDisabledButtonPrevious] = React.useState(true);


  const onCLickNext = () =>{
    setSlide(slides[index++]);
    index === slides.length ? disabledButtonNext(true) : disabledButtonNext(false);
  }

  const onCLickPrev = () =>{
    setSlide(slides[index--]);
    index === 0 ? disabledButtonPrevious(true) : disabledButtonPrevious(false);
  }

  const onCLickRestart = () =>{
    setSlide(slides[0]);
    index === 0 ? disabledButtonRestart(true) : disabledButtonRestart(false)
  }

    return (
        <div>
            <div id="navigation" className="text-center">
                <button onClick={onCLickRestart} disabled={disabledButtonRestart} data-testid="button-restart" className="small outlined">Restart</button>
                <button onClick={onCLickPrev} disabled={disabledButtonPrevious} data-testid="button-prev" className="small">Prev</button>
                <button onClick={onCLickNext} disabled={disabledButtonNext} data-testid="button-next" className="small">Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slide.title}</h1>
                <p data-testid="text">{slide.text}</p>
            </div>
        </div>
    );

}

export default Slides;
