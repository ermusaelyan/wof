import home from '../../assets/img/global/home.svg'
import info from '../../assets/img/global/info.svg'
import fullScreen from '../../assets/img/global/full-screen.svg'
import logo from '../../assets/img/global/logo.svg'
import demoRoulette from '../../assets/img/global/demo-roulette.png'
import startRouletteArrow from '../../assets/img/global/start-roulette-arrow.png'
import nrgaming from '../../assets/img/global/nrgaming.svg'
import {Link} from "react-router-dom";


export const Demo = () => {
  return (
    <div className="wof">
      <div className="demo__field">
        <header className="header">
          <div className="container">
            <div className="header__main">
              <Link to={"/home"} className="home__button">
                <img src={home} alt="Home" className="home__button-svg"/>
              </Link>
              <div className="header__time">
                <div className="time__line-field">
                </div>
                <div className="time__panel">
                  <span className="time__text">05:10</span>
                </div>
              </div>
              <div className="header__id">
                <span className="id__title">ID</span><span className="id__title-colon">:</span>
                <span className="id__number">123456</span>
              </div>
              <div className="header__amount">
                <label className="amount__label">
                  <input type="text" className="amount__input" value="20.000.000" readOnly=""/>
                  <span className="amount-currency">TZS</span>
                </label>
              </div>
            </div>
            <div className="header__buttons">
              <div className="header__info">
                <button type="button" className="header__info-button info__button">
                  <img src={info} alt="Info" className="header__info-button-img"/>
                  <span className="header__info-button-text">How to play</span>
                </button>
              </div>
              <div className="header__full-screen">
                <button type="button" className="header__full-screen-button">
                  <img src={fullScreen} alt="Full Screen"
                       className="header__full-screen-button-img"/>
                  <span className="header__full-screen-button-text">Full Screen</span>
                </button>
              </div>
            </div>
          </div>
        </header>
        <div className="demo__main">
          <div className="demo__roulette-field">
            <div className="demo__roulette-inner">
              <div className="demo__logo">
                <img src={logo} alt="Logo" className="logo-svg"/>
              </div>
              <div className="demo__roulette">
                <img className="demo__roulette-img" src={demoRoulette}
                     alt="Roulette"/>
              </div>
              <div className="demo__roulette-arrow">
                <img src={startRouletteArrow} alt="Roulette Arrow"
                     className="demo__roulette-arrow-img"/>
              </div>
            </div>
          </div>
          <div className="demo__coins"></div>
        </div>
        <div className="demo__layer">
          <div className="demo-play__field">
            <div className="demo-play">
              <div className="demo-play-top">
                <div className="demo-play__time">00:33</div>
                <div className="demo-play__buttons">
                  <div className="demo-play__play">
                    <Link to={"/game"} className="demo-play__play-button">
                      PLAY
                    </Link>
                  </div>
                  <div className="demo-play__demo">
                    <Link to={"/game"} className="demo-play__demo-button">
                      DEMO
                    </Link>
                  </div>
                </div>
              </div>
              <div className="demo-play-bottom">
                <div className="nrgaming">
                  <img src={nrgaming} alt="NRGaming" className="nrgaming-img"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

