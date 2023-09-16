import chip from '../../assets/img/global/chip.svg'
import home from '../../assets/img/global/home.svg'
import fullScreen from '../../assets/img/global/full-screen.svg'
import info from '../../assets/img/global/info.svg'
import startRoulette from '../../assets/img/global/start-roulette.png'
import roulette from '../../assets/img/desktop/roulette.png'
import startRouletteArrow from '../../assets/img/global/start-roulette-arrow.png'
import zoomShadow from '../../assets/img/global/zoom-shadow.png'
import arrowLeft from '../../assets/img/global/arrow-left.svg'
import currentGame from '../../assets/img/desktop/current-game.svg'
import statistics from '../../assets/img/desktop/statistics.svg'
import history from '../../assets/img/desktop/history.svg'
import myHistory from '../../assets/img/desktop/my-history.svg'
import logo from '../../assets/img/global/logo.svg'
import nrgaming from '../../assets/img/global/nrgaming.svg'
import more from '../../assets/img/global/more.svg'
import close from '../../assets/img/global/close.svg'
import insufficientFound from '../../assets/img/global/insufficient-funds.svg'
import {useState} from "react";
import classNames from "classnames";
import {Link} from "react-router-dom";

export const Desktop = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(1)
  const [infoActiveTabIndex, setInfoActiveTabIndex] = useState(1)
  const [isInfo, setIsInfo] = useState(false)
  return (
    <div className="wof">
      <header className="header">
        <div className="container">
          <div className="header__main">
            <Link to={"/game"} className="home__button">
              <img
                src={home}
                alt="Home"
                className="home__button-svg"
              />
            </Link>
            <div className="header__time">
              <div className="time__line-field"/>
              <div className="time__panel">
                <span className="time__text">05:10</span>
              </div>
            </div>
            <div className="header__id">
              <span className="id__title">ID</span>
              <span className="id__title-colon">:</span>
              <span className="id__number">123456</span>
            </div>
            <div className="header__amount">
              <label className="amount__label">
                <input
                  type="text"
                  className="amount__input"
                  value="20.000.000"
                  readOnly=""
                />
                <span className="amount-currency">TZS</span>
              </label>
            </div>
          </div>
          <div className="header__buttons">
            <div className="header__info">
              <button
                type="button"
                className="header__info-button info__button"
                onClick={() => setIsInfo(true)}
              >
                <img
                  src={info}
                  alt="Info"
                  className="header__info-button-img"
                />
                <span className="header__info-button-text">How to play</span>
              </button>
            </div>
            <div className="header__full-screen">
              <button type="button" className="header__full-screen-button">
                <img
                  src={fullScreen}
                  alt="Full Screen"
                  className="header__full-screen-button-img"
                />
                <span className="header__full-screen-button-text">
                  Full Screen
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="wrapper">
        <div className="container">
          <aside className="aside">
            <div className="start__roulette-field">
              <div className="start__roulette">
                <img
                  src={startRoulette}
                  alt="Roulette"
                  className="start__roulette-img start__roulette-img--mobile"
                />
                <img
                  src={roulette}
                  alt="Roulette"
                  className="start__roulette-img start__roulette-img--desktop"
                />
              </div>
              <div className="start__roulette-arrow">
                <img
                  src={startRouletteArrow}
                  alt="Roulette Arrow"
                  className="start__roulette-arrow-img"
                />
              </div>
              <div className="start__roulette-zoom active">
                <div className="zoom">
                  <img
                    src={zoomShadow}
                    alt=""
                    className="zoom-shadow"
                  />
                  <div className="zoom__roulette-field">
                    <div className="zoom__roulette">
                      <img
                        src={startRoulette}
                        alt="Roulette"
                        className="zoom__roulette-img start__roulette-img--mobile"
                      />
                      <img
                        src={roulette}
                        alt="Roulette"
                        className="zoom__roulette-img start__roulette-img--desktop"
                      />
                    </div>
                  </div>
                  <div className="zoom__roulette-arrow">
                    <img
                      src={startRouletteArrow}
                      alt="Roulette Arrow"
                      className="zoom__roulette-arrow-img"
                    />
                  </div>
                  <div className="zoom-inner-shadow"/>
                </div>
              </div>
            </div>

            <div className="game-grid">
              <ul className="game-grid__tab-list">
                <li className={classNames('game-grid__tab-item',
                  activeTabIndex === 1 && 'active'
                )}
                    onClick={() => setActiveTabIndex(1)}
                >
                  <div className="game-grid__tab-icon">
                    <img
                      src={currentGame}
                      alt="Current Game"
                      className="current-game__img"
                    />
                  </div>
                  <div className="game-grid__tab-text">Current Game</div>
                </li>
                <li className={classNames('game-grid__tab-item',
                  activeTabIndex === 2 && 'active'
                )}
                    onClick={() => setActiveTabIndex(2)}
                >
                  <div className="game-grid__tab-icon">
                    <img
                      src={statistics}
                      alt="Statistics"
                      className="statistics__img"
                    />
                  </div>
                  <div className="game-grid__tab-text">Statistics</div>
                </li>
                <li className={classNames('game-grid__tab-item',
                  activeTabIndex === 3 && 'active'
                )}
                    onClick={() => setActiveTabIndex(3)}
                >
                  <div className="game-grid__tab-icon">
                    <img
                      src={history} alt="Draw History"
                      className="draw-history__img"
                    />
                  </div>
                  <div className="game-grid__tab-text">Draw History</div>
                </li>
                <li className={classNames('game-grid__tab-item',
                  activeTabIndex === 4 && 'active'
                )}
                    onClick={() => setActiveTabIndex(4)}
                >
                  <div className="game-grid__tab-icon">
                    <img
                      src={myHistory}
                      alt="My History"
                      className="my-history__img"
                    />
                  </div>
                  <div className="game-grid__tab-text">My History</div>
                </li>
              </ul>
              <ul className="game-grid__inner-list">
                {activeTabIndex === 1 && (
                  <li className="game-grid__inner-item ">
                    <div className="start__ticket-list-field">
                      <div className="start__ticket-list">
                        <ul className="start__ticket-list-inner">
                          <li className="start__ticket-item active">
                            <div className="start__ticket-head">
                              <div className="start__ticket-title">Ticket 1</div>
                              <div className="start__ticket-time">14:22</div>
                              <div className="start__ticket-bet">
                                <div className="start__ticket-bet-title">Bet</div>
                                <div className="start__ticket-bet-amount">
                                  500
                                </div>
                                <div className="start__ticket-bet-amount-x">
                                  2x
                                </div>
                              </div>
                            </div>
                            <div className="start__ticket-body">
                              <div className="start__ticket-odd-list">
                                <div
                                  className="start__ticket-odd-item-field start__ticket-odd-item-field--red ">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    6
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div className="start__ticket-odd-item-field ">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    10
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div
                                  className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    5
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div className="start__ticket-odd-item-field ">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    6
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div className="start__ticket-odd-item-field win-animate">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    10
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div
                                  className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    5
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div
                                  className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    6
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div className="start__ticket-odd-item-field ">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    10
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div className="start__ticket-odd-item-field ">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    5
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                              </div>
                              <div className="start__ticket-odd-list">
                                <div
                                  className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    6
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div className="start__ticket-odd-item-field ">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    10
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div
                                  className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    5
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div
                                  className="start__ticket-odd-item-field start__ticket-odd-item-field--ed">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    6
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div className="start__ticket-odd-item-field ">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    10
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div
                                  className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    5
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div
                                  className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    6
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div className="start__ticket-odd-item-field ">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    10
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div className="start__ticket-odd-item-field ">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    5
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="start__ticket-item ">
                            <div className="start__ticket-head">
                              <div className="start__ticket-title">Ticket 1</div>
                              <div className="start__ticket-time">14:22</div>
                              <div className="start__ticket-bet">
                                <div className="start__ticket-bet-title">Bet</div>
                                <div className="start__ticket-bet-amount">
                                  500
                                </div>
                                <div className="start__ticket-bet-amount-x">
                                  2x
                                </div>
                              </div>
                            </div>
                            <div className="start__ticket-body">
                              <div className="start__ticket-odd-list">
                                <div
                                  className="start__ticket-odd-item-field start__ticket-odd-item-field--red ">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    6
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div className="start__ticket-odd-item-field ">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    10
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div
                                  className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    5
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div className="start__ticket-odd-item-field ">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    6
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div className="start__ticket-odd-item-field ">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    10
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div
                                  className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    5
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div
                                  className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    6
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div className="start__ticket-odd-item-field ">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    10
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div className="start__ticket-odd-item-field ">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    5
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                              </div>
                              <div className="start__ticket-odd-list">
                                <div
                                  className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    6
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div className="start__ticket-odd-item-field ">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    10
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div
                                  className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    5
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div
                                  className="start__ticket-odd-item-field start__ticket-odd-item-field--ed">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    6
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div className="start__ticket-odd-item-field ">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    10
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div
                                  className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    5
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div
                                  className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    6
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div className="start__ticket-odd-item-field ">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    10
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div className="start__ticket-odd-item-field ">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    5
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="start__ticket-item ">
                            <div className="start__ticket-head">
                              <div className="start__ticket-title">Ticket 1</div>
                              <div className="start__ticket-time">14:22</div>
                              <div className="start__ticket-bet">
                                <div className="start__ticket-bet-title">Bet</div>
                                <div className="start__ticket-bet-amount">
                                  500
                                </div>
                                <div className="start__ticket-bet-amount-x">
                                  2x
                                </div>
                              </div>
                            </div>
                            <div className="start__ticket-body">
                              <div className="start__ticket-odd-list">
                                <div
                                  className="start__ticket-odd-item-field start__ticket-odd-item-field--red ">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    6
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div className="start__ticket-odd-item-field ">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    10
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div
                                  className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    5
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div className="start__ticket-odd-item-field ">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    6
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div className="start__ticket-odd-item-field ">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    10
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div
                                  className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    5
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div
                                  className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    6
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div className="start__ticket-odd-item-field ">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    10
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div className="start__ticket-odd-item-field ">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    5
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                              </div>
                              <div className="start__ticket-odd-list">
                                <div
                                  className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    6
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div className="start__ticket-odd-item-field ">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    10
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div
                                  className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    5
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div
                                  className="start__ticket-odd-item-field start__ticket-odd-item-field--ed">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    6
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div className="start__ticket-odd-item-field ">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    10
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div
                                  className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    5
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div
                                  className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    6
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div className="start__ticket-odd-item-field ">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    10
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div className="start__ticket-odd-item-field ">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    5
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="start__ticket-item ">
                            <div className="start__ticket-head">
                              <div className="start__ticket-title">Ticket 1</div>
                              <div className="start__ticket-time">14:22</div>
                              <div className="start__ticket-bet">
                                <div className="start__ticket-bet-title">Bet</div>
                                <div className="start__ticket-bet-amount">
                                  500
                                </div>
                                <div className="start__ticket-bet-amount-x">
                                  2x
                                </div>
                              </div>
                            </div>
                            <div className="start__ticket-body">
                              <div className="start__ticket-odd-list">
                                <div
                                  className="start__ticket-odd-item-field start__ticket-odd-item-field--red ">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    6
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div className="start__ticket-odd-item-field ">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    10
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div
                                  className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    5
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div className="start__ticket-odd-item-field ">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    6
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div className="start__ticket-odd-item-field ">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    10
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div
                                  className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    5
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div
                                  className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    6
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div className="start__ticket-odd-item-field ">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    10
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                                <div className="start__ticket-odd-item-field ">
                                  <div className="start__ticket-odd-item-field-inner">
                                  <span className="start__ticket-odd-item">
                                    5
                                  </span>
                                    <span
                                      className="start__ticket-odd-item-chip-list"/>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="current__game-empty">
                      <div className="current__game-empty-logo">
                        <img
                          src={logo}
                          alt="Logo"
                          className="current__game-empty-img"
                        />
                      </div>
                      <div className="current__game-empty-text">
                        Please choose numbers for the next draw
                      </div>
                    </div>
                  </li>
                )}
                {activeTabIndex === 2 && (
                  <li className="game-grid__inner-item">
                    <div className="main__statistics ">
                      <div className="main__statistics-inner">
                        <div className="statistics__header">
                          <div className="statistics__header-top">
                            <div className="statistics__arrow">
                              <img
                                src={arrowLeft}
                                alt="Arrow Left"
                                className="statistics__arrow-svg"
                              />
                            </div>
                            <div className="statistics__title">Statistics</div>
                          </div>
                          <div className="statistics__subtitle">
                            Choose numbers from statistics
                          </div>
                        </div>
                        <div className="statistics__header-desktop">
                          You can choose numbers from statistics
                        </div>
                        <ul className="statistics__list">
                          <li className="statistics__item active">
                            <div className="statistics__item-stake">
                              <div className="statistics__item-stake-number">
                                1
                              </div>
                              <div className="statistics__item-stake-chip">
                                <img
                                  src={chip}
                                  alt="Chip"
                                  className="statistics__item-stake-chip-img"
                                />
                              </div>
                            </div>
                            <div className="statistics__item-line-field">
                              <div className="statistics__item-line"/>
                            </div>
                          </li>
                          <li className="statistics__item">
                            <div className="statistics__item-stake">
                              <div
                                className="statistics__item-stake-number statistics__item-stake-number--red">
                                1
                              </div>
                              <div className="statistics__item-stake-chip">
                                <img
                                  src={chip}
                                  alt="Chip"
                                  className="statistics__item-stake-chip-img"
                                />
                              </div>
                            </div>
                            <div className="statistics__item-line-field">
                              <div className="statistics__item-line"/>
                            </div>
                          </li>
                          <li className="statistics__item">
                            <div className="statistics__item-stake">
                              <div className="statistics__item-stake-number">
                                1
                              </div>
                              <div className="statistics__item-stake-chip">
                                <img
                                  src={chip}
                                  alt="Chip"
                                  className="statistics__item-stake-chip-img"
                                />
                              </div>
                            </div>
                            <div className="statistics__item-line-field">
                              <div className="statistics__item-line"/>
                            </div>
                          </li>
                          <li className="statistics__item">
                            <div className="statistics__item-stake">
                              <div className="statistics__item-stake-number">
                                15
                              </div>
                              <div className="statistics__item-stake-chip">
                                <img
                                  src={chip}
                                  alt="Chip"
                                  className="statistics__item-stake-chip-img"
                                />
                              </div>
                            </div>
                            <div className="statistics__item-line-field">
                              <div className="statistics__item-line"/>
                            </div>
                          </li>
                          <li className="statistics__item">
                            <div className="statistics__item-stake">
                              <div
                                className="statistics__item-stake-number statistics__item-stake-number--red">
                                1
                              </div>
                              <div className="statistics__item-stake-chip">
                                <img
                                  src={chip}
                                  alt="Chip"
                                  className="statistics__item-stake-chip-img"
                                />
                              </div>
                            </div>
                            <div className="statistics__item-line-field">
                              <div className="statistics__item-line"/>
                            </div>
                          </li>
                          <li className="statistics__item">
                            <div className="statistics__item-stake">
                              <div
                                className="statistics__item-stake-number statistics__item-stake-number--red">
                                4
                              </div>
                              <div className="statistics__item-stake-chip">
                                <img
                                  src={chip}
                                  alt="Chip"
                                  className="statistics__item-stake-chip-img"
                                />
                              </div>
                            </div>
                            <div className="statistics__item-line-field">
                              <div className="statistics__item-line"/>
                            </div>
                          </li>
                          <li className="statistics__item">
                            <div className="statistics__item-stake">
                              <div className="statistics__item-stake-number">
                                20
                              </div>
                              <div className="statistics__item-stake-chip">
                                <img
                                  src={chip}
                                  alt="Chip"
                                  className="statistics__item-stake-chip-img"
                                />
                              </div>
                            </div>
                            <div className="statistics__item-line-field">
                              <div className="statistics__item-line"/>
                            </div>
                          </li>
                          <li className="statistics__item">
                            <div className="statistics__item-stake">
                              <div className="statistics__item-stake-number">
                                11
                              </div>
                              <div className="statistics__item-stake-chip">
                                <img
                                  src={chip}
                                  alt="Chip"
                                  className="statistics__item-stake-chip-img"
                                />
                              </div>
                            </div>
                            <div className="statistics__item-line-field">
                              <div className="statistics__item-line"/>
                            </div>
                          </li>
                          <li className="statistics__item">
                            <div className="statistics__item-stake">
                              <div className="statistics__item-stake-number">
                                5
                              </div>
                              <div className="statistics__item-stake-chip">
                                <img
                                  src={chip}
                                  alt="Chip"
                                  className="statistics__item-stake-chip-img"
                                />
                              </div>
                            </div>
                            <div className="statistics__item-line-field">
                              <div className="statistics__item-line"/>
                            </div>
                          </li>

                          <li className="statistics__item">
                            <div className="statistics__item-stake">
                              <div
                                className="statistics__item-stake-number statistics__item-stake-number--red">
                                1
                              </div>
                              <div className="statistics__item-stake-chip">
                                <img
                                  src={chip}
                                  alt="Chip"
                                  className="statistics__item-stake-chip-img"
                                />
                              </div>
                            </div>
                            <div className="statistics__item-line-field">
                              <div className="statistics__item-line"/>
                            </div>
                          </li>
                          <li className="statistics__item">
                            <div className="statistics__item-stake">
                              <div className="statistics__item-stake-number">
                                4
                              </div>
                              <div className="statistics__item-stake-chip">
                                <img
                                  src={chip}
                                  alt="Chip"
                                  className="statistics__item-stake-chip-img"
                                />
                              </div>
                            </div>
                            <div className="statistics__item-line-field">
                              <div className="statistics__item-line"/>
                            </div>
                          </li>
                          <li className="statistics__item">
                            <div className="statistics__item-stake">
                              <div className="statistics__item-stake-number">
                                20
                              </div>
                              <div className="statistics__item-stake-chip">
                                <img
                                  src={chip}
                                  alt="Chip"
                                  className="statistics__item-stake-chip-img"
                                />
                              </div>
                            </div>
                            <div className="statistics__item-line-field">
                              <div className="statistics__item-line"/>
                            </div>
                          </li>
                          <li className="statistics__item">
                            <div className="statistics__item-stake">
                              <div className="statistics__item-stake-number">
                                11
                              </div>
                              <div className="statistics__item-stake-chip">
                                <img
                                  src={chip}
                                  alt="Chip"
                                  className="statistics__item-stake-chip-img"
                                />
                              </div>
                            </div>
                            <div className="statistics__item-line-field">
                              <div className="statistics__item-line"/>
                            </div>
                          </li>
                          <li className="statistics__item">
                            <div className="statistics__item-stake">
                              <div className="statistics__item-stake-number">
                                5
                              </div>
                              <div className="statistics__item-stake-chip">
                                <img
                                  src={chip}
                                  alt="Chip"
                                  className="statistics__item-stake-chip-img"
                                />
                              </div>
                            </div>
                            <div className="statistics__item-line-field">
                              <div className="statistics__item-line"/>
                            </div>
                          </li>
                          <li className="statistics__item">
                            <div className="statistics__item-stake">
                              <div className="statistics__item-stake-number">
                                1
                              </div>
                              <div className="statistics__item-stake-chip">
                                <img
                                  src={chip}
                                  alt="Chip"
                                  className="statistics__item-stake-chip-img"
                                />
                              </div>
                            </div>
                            <div className="statistics__item-line-field">
                              <div className="statistics__item-line"/>
                            </div>
                          </li>
                          <li className="statistics__item">
                            <div className="statistics__item-stake">
                              <div className="statistics__item-stake-number">
                                4
                              </div>
                              <div className="statistics__item-stake-chip">
                                <img
                                  src={chip}
                                  alt="Chip"
                                  className="statistics__item-stake-chip-img"
                                />
                              </div>
                            </div>
                            <div className="statistics__item-line-field">
                              <div className="statistics__item-line"/>
                            </div>
                          </li>
                          <li className="statistics__item">
                            <div className="statistics__item-stake">
                              <div className="statistics__item-stake-number">
                                20
                              </div>
                              <div className="statistics__item-stake-chip">
                                <img
                                  src={chip}
                                  alt="Chip"
                                  className="statistics__item-stake-chip-img"
                                />
                              </div>
                            </div>
                            <div className="statistics__item-line-field">
                              <div className="statistics__item-line"/>
                            </div>
                          </li>
                          <li className="statistics__item">
                            <div className="statistics__item-stake">
                              <div className="statistics__item-stake-number">
                                11
                              </div>
                              <div className="statistics__item-stake-chip">
                                <img
                                  src={chip}
                                  alt="Chip"
                                  className="statistics__item-stake-chip-img"
                                />
                              </div>
                            </div>
                            <div className="statistics__item-line-field">
                              <div className="statistics__item-line"/>
                            </div>
                          </li>
                          <li className="statistics__item">
                            <div className="statistics__item-stake">
                              <div className="statistics__item-stake-number">
                                5
                              </div>
                              <div className="statistics__item-stake-chip">
                                <img
                                  src={chip}
                                  alt="Chip"
                                  className="statistics__item-stake-chip-img"
                                />
                              </div>
                            </div>
                            <div className="statistics__item-line-field">
                              <div className="statistics__item-line"/>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                )}
                {activeTabIndex === 3 && (
                  <li className="game-grid__inner-item">
                    <div className="draw-history">
                      <div className="draw-history__list">
                        <div className="draw-history__item">
                          <div className="draw-history__left">
                            <div className="draw-history__id">
                              <span className="draw-history__id-title">ID</span>
                              <span className="draw-history__id-colon">:</span>
                              <span className="draw-history__id-number">
                              123654
                            </span>
                            </div>
                            <div className="draw-history__time">14:22</div>
                          </div>
                          <div className="draw-history__right">
                            <div className="draw-history__odd">15</div>
                          </div>
                        </div>
                        <div className="draw-history__item ">
                          <div className="draw-history__left">
                            <div className="draw-history__id">
                              <span className="draw-history__id-title">ID</span>
                              <span className="draw-history__id-colon">:</span>
                              <span className="draw-history__id-number">
                              123654
                            </span>
                            </div>
                            <div className="draw-history__time">14:22</div>
                          </div>
                          <div className="draw-history__right">
                            <div className="draw-history__odd draw-history__odd--red">
                              15
                            </div>
                          </div>
                        </div>
                        <div className="draw-history__item">
                          <div className="draw-history__left">
                            <div className="draw-history__id">
                              <span className="draw-history__id-title">ID</span>
                              <span className="draw-history__id-colon">:</span>
                              <span className="draw-history__id-number">
                              123654
                            </span>
                            </div>
                            <div className="draw-history__time">14:22</div>
                          </div>
                          <div className="draw-history__right">
                            <div className="draw-history__odd">15</div>
                          </div>
                        </div>
                        <div className="draw-history__item ">
                          <div className="draw-history__left">
                            <div className="draw-history__id">
                              <span className="draw-history__id-title">ID</span>
                              <span className="draw-history__id-colon">:</span>
                              <span className="draw-history__id-number">
                              123654
                            </span>
                            </div>
                            <div className="draw-history__time">14:22</div>
                          </div>
                          <div className="draw-history__right">
                            <div className="draw-history__odd">15</div>
                          </div>
                        </div>
                        <div className="draw-history__item">
                          <div className="draw-history__left">
                            <div className="draw-history__id">
                              <span className="draw-history__id-title">ID</span>
                              <span className="draw-history__id-colon">:</span>
                              <span className="draw-history__id-number">
                              123654
                            </span>
                            </div>
                            <div className="draw-history__time">14:22</div>
                          </div>
                          <div className="draw-history__right">
                            <div className="draw-history__odd draw-history__odd--red">
                              15
                            </div>
                          </div>
                        </div>
                        <div className="draw-history__item">
                          <div className="draw-history__left">
                            <div className="draw-history__id">
                              <span className="draw-history__id-title">ID</span>
                              <span className="draw-history__id-colon">:</span>
                              <span className="draw-history__id-number">
                              123654
                            </span>
                            </div>
                            <div className="draw-history__time">14:22</div>
                          </div>
                          <div className="draw-history__right">
                            <div className="draw-history__odd">15</div>
                          </div>
                        </div>
                        <div className="draw-history__item ">
                          <div className="draw-history__left">
                            <div className="draw-history__id">
                              <span className="draw-history__id-title">ID</span>
                              <span className="draw-history__id-colon">:</span>
                              <span className="draw-history__id-number">
                              123654
                            </span>
                            </div>
                            <div className="draw-history__time">14:22</div>
                          </div>
                          <div className="draw-history__right">
                            <div className="draw-history__odd draw-history__odd--red">
                              15
                            </div>
                          </div>
                        </div>
                        <div className="draw-history__item">
                          <div className="draw-history__left">
                            <div className="draw-history__id">
                              <span className="draw-history__id-title">ID</span>
                              <span className="draw-history__id-colon">:</span>
                              <span className="draw-history__id-number">
                              123654
                            </span>
                            </div>
                            <div className="draw-history__time">14:22</div>
                          </div>
                          <div className="draw-history__right">
                            <div className="draw-history__odd">15</div>
                          </div>
                        </div>
                        <div className="draw-history__item ">
                          <div className="draw-history__left">
                            <div className="draw-history__id">
                              <span className="draw-history__id-title">ID</span>
                              <span className="draw-history__id-colon">:</span>
                              <span className="draw-history__id-number">
                              123654
                            </span>
                            </div>
                            <div className="draw-history__time">14:22</div>
                          </div>
                          <div className="draw-history__right">
                            <div className="draw-history__odd">15</div>
                          </div>
                        </div>
                        <div className="draw-history__item">
                          <div className="draw-history__left">
                            <div className="draw-history__id">
                              <span className="draw-history__id-title">ID</span>
                              <span className="draw-history__id-colon">:</span>
                              <span className="draw-history__id-number">
                              123654
                            </span>
                            </div>
                            <div className="draw-history__time">14:22</div>
                          </div>
                          <div className="draw-history__right">
                            <div className="draw-history__odd draw-history__odd--red">
                              15
                            </div>
                          </div>
                        </div>
                        <div className="draw-history__item">
                          <div className="draw-history__left">
                            <div className="draw-history__id">
                              <span className="draw-history__id-title">ID</span>
                              <span className="draw-history__id-colon">:</span>
                              <span className="draw-history__id-number">
                              123654
                            </span>
                            </div>
                            <div className="draw-history__time">14:22</div>
                          </div>
                          <div className="draw-history__right">
                            <div className="draw-history__odd">15</div>
                          </div>
                        </div>
                        <div className="draw-history__item ">
                          <div className="draw-history__left">
                            <div className="draw-history__id">
                              <span className="draw-history__id-title">ID</span>
                              <span className="draw-history__id-colon">:</span>
                              <span className="draw-history__id-number">
                              123654
                            </span>
                            </div>
                            <div className="draw-history__time">14:22</div>
                          </div>
                          <div className="draw-history__right">
                            <div className="draw-history__odd draw-history__odd--red">
                              15
                            </div>
                          </div>
                        </div>
                        <div className="draw-history__item">
                          <div className="draw-history__left">
                            <div className="draw-history__id">
                              <span className="draw-history__id-title">ID</span>
                              <span className="draw-history__id-colon">:</span>
                              <span className="draw-history__id-number">
                              123654
                            </span>
                            </div>
                            <div className="draw-history__time">14:22</div>
                          </div>
                          <div className="draw-history__right">
                            <div className="draw-history__odd">15</div>
                          </div>
                        </div>
                        <div className="draw-history__item ">
                          <div className="draw-history__left">
                            <div className="draw-history__id">
                              <span className="draw-history__id-title">ID</span>
                              <span className="draw-history__id-colon">:</span>
                              <span className="draw-history__id-number">
                              123654
                            </span>
                            </div>
                            <div className="draw-history__time">14:22</div>
                          </div>
                          <div className="draw-history__right">
                            <div className="draw-history__odd">15</div>
                          </div>
                        </div>
                        <div className="draw-history__item">
                          <div className="draw-history__left">
                            <div className="draw-history__id">
                              <span className="draw-history__id-title">ID</span>
                              <span className="draw-history__id-colon">:</span>
                              <span className="draw-history__id-number">
                              123654
                            </span>
                            </div>
                            <div className="draw-history__time">14:22</div>
                          </div>
                          <div className="draw-history__right">
                            <div className="draw-history__odd draw-history__odd--red">
                              15
                            </div>
                          </div>
                        </div>
                        <div className="draw-history__item">
                          <div className="draw-history__left">
                            <div className="draw-history__id">
                              <span className="draw-history__id-title">ID</span>
                              <span className="draw-history__id-colon">:</span>
                              <span className="draw-history__id-number">
                              123654
                            </span>
                            </div>
                            <div className="draw-history__time">14:22</div>
                          </div>
                          <div className="draw-history__right">
                            <div className="draw-history__odd">15</div>
                          </div>
                        </div>
                        <div className="draw-history__item ">
                          <div className="draw-history__left">
                            <div className="draw-history__id">
                              <span className="draw-history__id-title">ID</span>
                              <span className="draw-history__id-colon">:</span>
                              <span className="draw-history__id-number">
                              123654
                            </span>
                            </div>
                            <div className="draw-history__time">14:22</div>
                          </div>
                          <div className="draw-history__right">
                            <div className="draw-history__odd draw-history__odd--red">
                              15
                            </div>
                          </div>
                        </div>
                        <div className="draw-history__item">
                          <div className="draw-history__left">
                            <div className="draw-history__id">
                              <span className="draw-history__id-title">ID</span>
                              <span className="draw-history__id-colon">:</span>
                              <span className="draw-history__id-number">
                              123654
                            </span>
                            </div>
                            <div className="draw-history__time">14:22</div>
                          </div>
                          <div className="draw-history__right">
                            <div className="draw-history__odd">15</div>
                          </div>
                        </div>
                        <div className="draw-history__item ">
                          <div className="draw-history__left">
                            <div className="draw-history__id">
                              <span className="draw-history__id-title">ID</span>
                              <span className="draw-history__id-colon">:</span>
                              <span className="draw-history__id-number">
                              123654
                            </span>
                            </div>
                            <div className="draw-history__time">14:22</div>
                          </div>
                          <div className="draw-history__right">
                            <div className="draw-history__odd">15</div>
                          </div>
                        </div>
                        <div className="draw-history__item">
                          <div className="draw-history__left">
                            <div className="draw-history__id">
                              <span className="draw-history__id-title">ID</span>
                              <span className="draw-history__id-colon">:</span>
                              <span className="draw-history__id-number">
                              123654
                            </span>
                            </div>
                            <div className="draw-history__time">14:22</div>
                          </div>
                          <div className="draw-history__right">
                            <div className="draw-history__odd draw-history__odd--red">
                              15
                            </div>
                          </div>
                        </div>
                        <div className="draw-history__item">
                          <div className="draw-history__left">
                            <div className="draw-history__id">
                              <span className="draw-history__id-title">ID</span>
                              <span className="draw-history__id-colon">:</span>
                              <span className="draw-history__id-number">
                              123654
                            </span>
                            </div>
                            <div className="draw-history__time">14:22</div>
                          </div>
                          <div className="draw-history__right">
                            <div className="draw-history__odd">15</div>
                          </div>
                        </div>
                        <div className="draw-history__item ">
                          <div className="draw-history__left">
                            <div className="draw-history__id">
                              <span className="draw-history__id-title">ID</span>
                              <span className="draw-history__id-colon">:</span>
                              <span className="draw-history__id-number">
                              123654
                            </span>
                            </div>
                            <div className="draw-history__time">14:22</div>
                          </div>
                          <div className="draw-history__right">
                            <div className="draw-history__odd draw-history__odd--red">
                              15
                            </div>
                          </div>
                        </div>
                        <div className="draw-history__item">
                          <div className="draw-history__left">
                            <div className="draw-history__id">
                              <span className="draw-history__id-title">ID</span>
                              <span className="draw-history__id-colon">:</span>
                              <span className="draw-history__id-number">
                              123654
                            </span>
                            </div>
                            <div className="draw-history__time">14:22</div>
                          </div>
                          <div className="draw-history__right">
                            <div className="draw-history__odd">15</div>
                          </div>
                        </div>
                        <div className="draw-history__item ">
                          <div className="draw-history__left">
                            <div className="draw-history__id">
                              <span className="draw-history__id-title">ID</span>
                              <span className="draw-history__id-colon">:</span>
                              <span className="draw-history__id-number">
                              123654
                            </span>
                            </div>
                            <div className="draw-history__time">14:22</div>
                          </div>
                          <div className="draw-history__right">
                            <div className="draw-history__odd">15</div>
                          </div>
                        </div>
                        <div className="draw-history__item">
                          <div className="draw-history__left">
                            <div className="draw-history__id">
                              <span className="draw-history__id-title">ID</span>
                              <span className="draw-history__id-colon">:</span>
                              <span className="draw-history__id-number">
                              123654
                            </span>
                            </div>
                            <div className="draw-history__time">14:22</div>
                          </div>
                          <div className="draw-history__right">
                            <div className="draw-history__odd draw-history__odd--red">
                              15
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                )}
                {activeTabIndex === 4 && (
                  <li className="game-grid__inner-item">
                    <div className="my-history">
                      <div className="my-history__list">
                        <div className="my-history__item">
                          <div className="my-history__item-id">
                            <span className="my-history__item-id-title">ID</span>
                            <span className="my-history__item-id-colon">:</span>
                            <span className="my-history__item-id-number">
                            123456
                          </span>
                          </div>
                          <div className=" my-history__ticket-list">
                            <div className="start__ticket-item  active">
                              <div className="start__ticket-head">
                                <div className="start__ticket-left">
                                  <div className="start__ticket-title">
                                    Ticket 1
                                  </div>
                                  <div className="start__ticket-bet">
                                    <div className="start__ticket-bet-title">
                                      Bet
                                    </div>
                                    <div className="start__ticket-bet-amount">
                                      500
                                    </div>
                                    <div className="start__ticket-bet-amount-x">
                                      2x
                                    </div>
                                  </div>
                                </div>
                                <div className="start__ticket-time">14:22</div>
                                <div className="start__ticket-right">
                                  <div className="start__ticket-win">
                                  <span className="start__ticket-win--win">
                                    Win
                                  </span>
                                    <span className="start__ticket-win--loss">
                                    Loss
                                  </span>
                                  </div>
                                  <div className="start__ticket-amount">
                                  <span className="start__ticket-amount--win">
                                    $1000
                                  </span>
                                    <span className="start__ticket-amount--loss">
                                    -
                                  </span>
                                  </div>
                                </div>
                              </div>
                              <div className="start__ticket-body">
                                <div className="start__ticket-odd-list">
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item ">
                                      6
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item start__ticket-odd-item--zoom">
                                      10
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      5
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      6
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      10
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      5
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      6
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      10
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      5
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                </div>
                                <div className="start__ticket-odd-list">
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      5
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--ed">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      6
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      10
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      5
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      6
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      10
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      5
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="start__ticket-item  ">
                              <div className="start__ticket-head">
                                <div className="start__ticket-left">
                                  <div className="start__ticket-title">
                                    Ticket 1
                                  </div>
                                  <div className="start__ticket-bet">
                                    <div className="start__ticket-bet-title">
                                      Bet
                                    </div>
                                    <div className="start__ticket-bet-amount">
                                      500
                                    </div>
                                    <div className="start__ticket-bet-amount-x">
                                      2x
                                    </div>
                                  </div>
                                </div>
                                <div className="start__ticket-time">14:22</div>
                                <div className="start__ticket-right">
                                  <div className="start__ticket-win">
                                  <span className="start__ticket-win--win">
                                    Win
                                  </span>
                                    <span className="start__ticket-win--loss">
                                    Loss
                                  </span>
                                  </div>
                                  <div className="start__ticket-amount">
                                  <span className="start__ticket-amount--win">
                                    $1000
                                  </span>
                                    <span className="start__ticket-amount--loss">
                                    -
                                  </span>
                                  </div>
                                </div>
                              </div>
                              <div className="start__ticket-body">
                                <div className="start__ticket-odd-list">
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      6
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      10
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      5
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      6
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      10
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      5
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      6
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      10
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      5
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                </div>
                                <div className="start__ticket-odd-list">
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      10
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      5
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      6
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      10
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      5
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="start__ticket-item  ">
                              <div className="start__ticket-head">
                                <div className="start__ticket-left">
                                  <div className="start__ticket-title">
                                    Ticket 1
                                  </div>
                                  <div className="start__ticket-bet">
                                    <div className="start__ticket-bet-title">
                                      Bet
                                    </div>
                                    <div className="start__ticket-bet-amount">
                                      500
                                    </div>
                                    <div className="start__ticket-bet-amount-x">
                                      2x
                                    </div>
                                  </div>
                                </div>
                                <div className="start__ticket-time">14:22</div>
                                <div className="start__ticket-right">
                                  <div className="start__ticket-win">
                                  <span className="start__ticket-win--win">
                                    Win
                                  </span>
                                    <span className="start__ticket-win--loss">
                                    Loss
                                  </span>
                                  </div>
                                  <div className="start__ticket-amount">
                                  <span className="start__ticket-amount--win">
                                    $1000
                                  </span>
                                    <span className="start__ticket-amount--loss">
                                    -
                                  </span>
                                  </div>
                                </div>
                              </div>
                              <div className="start__ticket-body">
                                <div className="start__ticket-odd-list">
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      6
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      10
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      5
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      6
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      10
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      5
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      6
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      10
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      5
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="start__ticket-item  ">
                              <div className="start__ticket-head">
                                <div className="start__ticket-left">
                                  <div className="start__ticket-title">
                                    Ticket 1
                                  </div>
                                  <div className="start__ticket-bet">
                                    <div className="start__ticket-bet-title">
                                      Bet
                                    </div>
                                    <div className="start__ticket-bet-amount">
                                      500
                                    </div>
                                    <div className="start__ticket-bet-amount-x">
                                      2x
                                    </div>
                                  </div>
                                </div>
                                <div className="start__ticket-time">14:22</div>
                                <div className="start__ticket-right">
                                  <div className="start__ticket-win">
                                  <span className="start__ticket-win--win">
                                    Win
                                  </span>
                                    <span className="start__ticket-win--loss">
                                    Loss
                                  </span>
                                  </div>
                                  <div className="start__ticket-amount">
                                  <span className="start__ticket-amount--win">
                                    $1000
                                  </span>
                                    <span className="start__ticket-amount--loss">
                                    -
                                  </span>
                                  </div>
                                </div>
                              </div>
                              <div className="start__ticket-body">
                                <div className="start__ticket-odd-list">
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      5
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      6
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      10
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      5
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      6
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      10
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      5
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="my-history__item">
                          <div className="my-history__item-id">
                            <span className="my-history__item-id-title">ID</span>
                            <span className="my-history__item-id-colon">:</span>
                            <span className="my-history__item-id-number">
                            123456
                          </span>
                          </div>
                          <div className=" my-history__ticket-list">
                            <div className="start__ticket-item  active">
                              <div className="start__ticket-head">
                                <div className="start__ticket-left">
                                  <div className="start__ticket-title">
                                    Ticket 1
                                  </div>
                                  <div className="start__ticket-bet">
                                    <div className="start__ticket-bet-title">
                                      Bet
                                    </div>
                                    <div className="start__ticket-bet-amount">
                                      500
                                    </div>
                                    <div className="start__ticket-bet-amount-x">
                                      2x
                                    </div>
                                  </div>
                                </div>
                                <div className="start__ticket-time">14:22</div>
                                <div className="start__ticket-right">
                                  <div className="start__ticket-win">
                                  <span className="start__ticket-win--win">
                                    Win
                                  </span>
                                    <span className="start__ticket-win--loss">
                                    Loss
                                  </span>
                                  </div>
                                  <div className="start__ticket-amount">
                                  <span className="start__ticket-amount--win">
                                    $1000
                                  </span>
                                    <span className="start__ticket-amount--loss">
                                    -
                                  </span>
                                  </div>
                                </div>
                              </div>
                              <div className="start__ticket-body">
                                <div className="start__ticket-odd-list">
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      6
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      10
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      5
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      6
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      10
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      5
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      6
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      10
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      5
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                </div>
                                <div className="start__ticket-odd-list">
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      5
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      5
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      5
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>

                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--ed">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      6
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      10
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      5
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      6
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      10
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      5
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="start__ticket-item  ">
                              <div className="start__ticket-head">
                                <div className="start__ticket-left">
                                  <div className="start__ticket-title">
                                    Ticket 1
                                  </div>
                                  <div className="start__ticket-bet">
                                    <div className="start__ticket-bet-title">
                                      Bet
                                    </div>
                                    <div className="start__ticket-bet-amount">
                                      500
                                    </div>
                                    <div className="start__ticket-bet-amount-x">
                                      2x
                                    </div>
                                  </div>
                                </div>
                                <div className="start__ticket-time">14:22</div>
                                <div className="start__ticket-right">
                                  <div className="start__ticket-win">
                                  <span className="start__ticket-win--win">
                                    Win
                                  </span>
                                    <span className="start__ticket-win--loss">
                                    Loss
                                  </span>
                                  </div>
                                  <div className="start__ticket-amount">
                                  <span className="start__ticket-amount--win">
                                    $1000
                                  </span>
                                    <span className="start__ticket-amount--loss">
                                    -
                                  </span>
                                  </div>
                                </div>
                              </div>
                              <div className="start__ticket-body">
                                <div className="start__ticket-odd-list">
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      6
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      10
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      5
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      6
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      10
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      5
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      6
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      10
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      5
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                </div>
                                <div className="start__ticket-odd-list">
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      10
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      5
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      6
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      10
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      5
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="start__ticket-item  ">
                              <div className="start__ticket-head">
                                <div className="start__ticket-left">
                                  <div className="start__ticket-title">
                                    Ticket 1
                                  </div>
                                  <div className="start__ticket-bet">
                                    <div className="start__ticket-bet-title">
                                      Bet
                                    </div>
                                    <div className="start__ticket-bet-amount">
                                      500
                                    </div>
                                    <div className="start__ticket-bet-amount-x">
                                      2x
                                    </div>
                                  </div>
                                </div>
                                <div className="start__ticket-time">14:22</div>
                                <div className="start__ticket-right">
                                  <div className="start__ticket-win">
                                  <span className="start__ticket-win--win">
                                    Win
                                  </span>
                                    <span className="start__ticket-win--loss">
                                    Loss
                                  </span>
                                  </div>
                                  <div className="start__ticket-amount">
                                  <span className="start__ticket-amount--win">
                                    $1000
                                  </span>
                                    <span className="start__ticket-amount--loss">
                                    -
                                  </span>
                                  </div>
                                </div>
                              </div>
                              <div className="start__ticket-body">
                                <div className="start__ticket-odd-list">
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      6
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      10
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      5
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      6
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      10
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      5
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      6
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      10
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      5
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="start__ticket-item  ">
                              <div className="start__ticket-head">
                                <div className="start__ticket-left">
                                  <div className="start__ticket-title">
                                    Ticket 1
                                  </div>
                                  <div className="start__ticket-bet">
                                    <div className="start__ticket-bet-title">
                                      Bet
                                    </div>
                                    <div className="start__ticket-bet-amount">
                                      500
                                    </div>
                                    <div className="start__ticket-bet-amount-x">
                                      2x
                                    </div>
                                  </div>
                                </div>
                                <div className="start__ticket-time">14:22</div>
                                <div className="start__ticket-right">
                                  <div className="start__ticket-win">
                                  <span className="start__ticket-win--win">
                                    Win
                                  </span>
                                    <span className="start__ticket-win--loss">
                                    Loss
                                  </span>
                                  </div>
                                  <div className="start__ticket-amount">
                                  <span className="start__ticket-amount--win">
                                    $1000
                                  </span>
                                    <span className="start__ticket-amount--loss">
                                    -
                                  </span>
                                  </div>
                                </div>
                              </div>
                              <div className="start__ticket-body">
                                <div className="start__ticket-odd-list">
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      5
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      6
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      10
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      5
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div
                                    className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      6
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      10
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                  <div className="start__ticket-odd-item-field ">
                                    <div className="start__ticket-odd-item-field-inner">
                                    <span className="start__ticket-odd-item">
                                      5
                                    </span>
                                      <span
                                        className="start__ticket-odd-item-chip-list"/>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </aside>
          <div className="main__field">
            <div className="main__jackpot">
              <div className="main__jackpot-inner">
                <span className="main__jackpot-title">Jackpot</span>
                <div className="main__jackpot-amount">
                  <ul className="spinner__amount-list">
                    <li className="spinner__amount-item spinner__amount--empty">
                      <div className="spinner__amount-container ">
                        <div className="spinner__amount-container-value"/>
                        <div className="spinner__amount-container-value">0</div>
                        <div className="spinner__amount-container-value">1</div>
                        <div className="spinner__amount-container-value">2</div>
                        <div className="spinner__amount-container-value">3</div>
                        <div className="spinner__amount-container-value">4</div>
                        <div className="spinner__amount-container-value">5</div>
                        <div className="spinner__amount-container-value">6</div>
                        <div className="spinner__amount-container-value">7</div>
                        <div className="spinner__amount-container-value">8</div>
                        <div className="spinner__amount-container-value">9</div>
                      </div>
                    </li>
                    <li className="spinner__amount-item spinner__amount--8">
                      <div className="spinner__amount-container">
                        <div className="spinner__amount-container-value"/>
                        <div className="spinner__amount-container-value">0</div>
                        <div className="spinner__amount-container-value">1</div>
                        <div className="spinner__amount-container-value">2</div>
                        <div className="spinner__amount-container-value">3</div>
                        <div className="spinner__amount-container-value">4</div>
                        <div className="spinner__amount-container-value">5</div>
                        <div className="spinner__amount-container-value">6</div>
                        <div className="spinner__amount-container-value">7</div>
                        <div className="spinner__amount-container-value">8</div>
                        <div className="spinner__amount-container-value">9</div>
                      </div>
                    </li>
                    <li className="spinner__amount-item spinner__amount--3">
                      <div className="spinner__amount-container">
                        <div className="spinner__amount-container-value"/>
                        <div className="spinner__amount-container-value">0</div>
                        <div className="spinner__amount-container-value">1</div>
                        <div className="spinner__amount-container-value">2</div>
                        <div className="spinner__amount-container-value">3</div>
                        <div className="spinner__amount-container-value">4</div>
                        <div className="spinner__amount-container-value">5</div>
                        <div className="spinner__amount-container-value">6</div>
                        <div className="spinner__amount-container-value">7</div>
                        <div className="spinner__amount-container-value">8</div>
                        <div className="spinner__amount-container-value">9</div>
                      </div>
                    </li>
                    <li className="spinner__amount-item spinner__amount--2">
                      <div className="spinner__amount-container ">
                        <div className="spinner__amount-container-value"/>
                        <div className="spinner__amount-container-value">0</div>
                        <div className="spinner__amount-container-value">1</div>
                        <div className="spinner__amount-container-value">2</div>
                        <div className="spinner__amount-container-value">3</div>
                        <div className="spinner__amount-container-value">4</div>
                        <div className="spinner__amount-container-value">5</div>
                        <div className="spinner__amount-container-value">6</div>
                        <div className="spinner__amount-container-value">7</div>
                        <div className="spinner__amount-container-value">8</div>
                        <div className="spinner__amount-container-value">9</div>
                      </div>
                    </li>
                    <li className="spinner__amount-item spinner__amount--0">
                      <div className="spinner__amount-container">
                        <div className="spinner__amount-container-value"/>
                        <div className="spinner__amount-container-value">0</div>
                        <div className="spinner__amount-container-value">1</div>
                        <div className="spinner__amount-container-value">2</div>
                        <div className="spinner__amount-container-value">3</div>
                        <div className="spinner__amount-container-value">4</div>
                        <div className="spinner__amount-container-value">5</div>
                        <div className="spinner__amount-container-value">6</div>
                        <div className="spinner__amount-container-value">7</div>
                        <div className="spinner__amount-container-value">8</div>
                        <div className="spinner__amount-container-value">9</div>
                      </div>
                    </li>
                    <li className="spinner__amount-item spinner__amount--4">
                      <div className="spinner__amount-container">
                        <div className="spinner__amount-container-value"/>
                        <div className="spinner__amount-container-value">0</div>
                        <div className="spinner__amount-container-value">1</div>
                        <div className="spinner__amount-container-value">2</div>
                        <div className="spinner__amount-container-value">3</div>
                        <div className="spinner__amount-container-value">4</div>
                        <div className="spinner__amount-container-value">5</div>
                        <div className="spinner__amount-container-value">6</div>
                        <div className="spinner__amount-container-value">7</div>
                        <div className="spinner__amount-container-value">8</div>
                        <div className="spinner__amount-container-value">9</div>
                      </div>
                    </li>
                    <li className="spinner__amount-item spinner__amount--5">
                      <div className="spinner__amount-container ">
                        <div className="spinner__amount-container-value"/>
                        <div className="spinner__amount-container-value">0</div>
                        <div className="spinner__amount-container-value">1</div>
                        <div className="spinner__amount-container-value">2</div>
                        <div className="spinner__amount-container-value">3</div>
                        <div className="spinner__amount-container-value">4</div>
                        <div className="spinner__amount-container-value">5</div>
                        <div className="spinner__amount-container-value">6</div>
                        <div className="spinner__amount-container-value">7</div>
                        <div className="spinner__amount-container-value">8</div>
                        <div className="spinner__amount-container-value">9</div>
                      </div>
                    </li>
                    <li className="spinner__amount-item spinner__amount--6">
                      <div className="spinner__amount-container">
                        <div className="spinner__amount-container-value"/>
                        <div className="spinner__amount-container-value">0</div>
                        <div className="spinner__amount-container-value">1</div>
                        <div className="spinner__amount-container-value">2</div>
                        <div className="spinner__amount-container-value">3</div>
                        <div className="spinner__amount-container-value">4</div>
                        <div className="spinner__amount-container-value">5</div>
                        <div className="spinner__amount-container-value">6</div>
                        <div className="spinner__amount-container-value">7</div>
                        <div className="spinner__amount-container-value">8</div>
                        <div className="spinner__amount-container-value">9</div>
                      </div>
                    </li>
                    <li className="spinner__amount-item spinner__amount--7">
                      <div className="spinner__amount-container">
                        <div className="spinner__amount-container-value"/>
                        <div className="spinner__amount-container-value">0</div>
                        <div className="spinner__amount-container-value">1</div>
                        <div className="spinner__amount-container-value">2</div>
                        <div className="spinner__amount-container-value">3</div>
                        <div className="spinner__amount-container-value">4</div>
                        <div className="spinner__amount-container-value">5</div>
                        <div className="spinner__amount-container-value">6</div>
                        <div className="spinner__amount-container-value">7</div>
                        <div className="spinner__amount-container-value">8</div>
                        <div className="spinner__amount-container-value">9</div>
                      </div>
                    </li>
                  </ul>
                </div>
                <span className="main__jackpot-currency">
                  <svg
                    viewBox="0 0 45 30"
                    className="main__jackpot-currency-img">
                    <defs>
                      <linearGradient
                        id="rainbow"
                        x1="0"
                        x2="0"
                        y1="0"
                        y2="100%"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#ffdfb1"></stop>
                        <stop offset="0.5" stopColor="#ffce85"></stop>
                        <stop offset="1" stopColor="#d98011"></stop>
                      </linearGradient>
                    </defs>
                    <text fill="url(#rainbow)">
                      <tspan fontSize="20" x="0" y="25">
                        TZS
                      </tspan>
                    </text>
                  </svg>
                </span>
                <span className="main__jackpot-arrow">
                  <img
                    src={more}
                    alt="More"
                    className="main__jackpot-arrow-arrow"
                  />
                </span>
              </div>
            </div>

            <div className="main">
              <div className="main__grid">
                <div className="main__grid-top">
                  <button
                    type="button"
                    className="main__grid-top-button active">
                    <span className="main__grid-top-button-inner">0</span>
                    <span className="main__grid-middle-odd-button-chip">

                                            <img
                                              src={chip}
                                              alt="Chip"
                                              className="main__grid-middle-odd-button-chip-img"
                                            />
                    </span>
                  </button>
                </div>
                <div className="main__grid-middle-field">
                  <div className="main__grid-left">
                    <div className="main__grid-left-group">
                      <button className="main__grid-left-button">
                        <span className="main__grid-left-button-inner">
                          1-18
                        </span>
                      </button>
                    </div>
                    <div className="main__grid-left-group">
                      <button className="main__grid-left-button">

                                                <span className="main__grid-left-button-inner">
                          EVEN
                        </span>
                      </button>
                    </div>
                    <div className="main__grid-left-group main__grid-left-group-color">
                      <button className="main__grid-left-button">
                                                <span
                                                  className="main__grid-left-button-color main__grid-left-button-color--red"/>
                      </button>
                    </div>
                    <div className="main__grid-left-group main__grid-left-group-color">
                      <button className="main__grid-left-button">
                        <span className="main__grid-left-button-color"/>
                      </button>
                    </div>
                    <div className="main__grid-left-group">
                      <button className="main__grid-left-button">
                        <span className="main__grid-left-button-inner">
                          ODD
                        </span>
                      </button>
                    </div>
                    <div className="main__grid-left-group">
                      <button className="main__grid-left-button">
                        <span className="main__grid-left-button-inner">
                          19-36
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="main__grid-middle">
                    <div className="main__grid-middle-column">
                      <div className="main__grid-middle-odd">
                        <button
                          type="button"
                          className="main__grid-middle-odd-button active">
                          <span className="main__grid-middle-odd-button-inner main__grid-middle-odd-button-inner--red">
                            1
                          </span>
                          <span className="main__grid-middle-odd-button-chip">

                                                        <img
                                                          src={chip}
                                                          alt="Chip"
                                                          className="main__grid-middle-odd-button-chip-img"
                                                        />
                          </span>
                        </button>
                      </div>
                      <div className="main__grid-middle-odd">
                        <button
                          type="button"
                          className="main__grid-middle-odd-button">
                          <span className="main__grid-middle-odd-button-inner ">
                            4
                          </span>
                          <span className="main__grid-middle-odd-button-chip">

                                                        <img
                                                          src={chip}
                                                          alt="Chip"
                                                          className="main__grid-middle-odd-button-chip-img"
                                                        />
                          </span>
                        </button>
                      </div>
                      <div className="main__grid-middle-odd">
                        <button
                          type="button"
                          className="main__grid-middle-odd-button">
                          <span className="main__grid-middle-odd-button-inner ">
                            7
                          </span>
                          <span className="main__grid-middle-odd-button-chip">

                                                        <img
                                                          src={chip}
                                                          alt="Chip"
                                                          className="main__grid-middle-odd-button-chip-img"
                                                        />
                          </span>
                        </button>
                      </div>
                      <div className="main__grid-middle-odd">
                        <button
                          type="button"
                          className="main__grid-middle-odd-button active">
                          <span className="main__grid-middle-odd-button-inner ">
                            10
                          </span>
                          <span className="main__grid-middle-odd-button-chip">

                                                        <img
                                                          src={chip}
                                                          alt="Chip"
                                                          className="main__grid-middle-odd-button-chip-img"
                                                        />
                          </span>
                        </button>
                      </div>
                      <div className="main__grid-middle-odd">
                        <button
                          type="button"
                          className="main__grid-middle-odd-button">
                          <span className="main__grid-middle-odd-button-inner main__grid-middle-odd-button-inner--red">
                            13
                          </span>
                          <span className="main__grid-middle-odd-button-chip">

                                                        <img
                                                          src={chip}
                                                          alt="Chip"
                                                          className="main__grid-middle-odd-button-chip-img"
                                                        />
                          </span>
                        </button>
                      </div>
                      <div className="main__grid-middle-odd">
                        <button
                          type="button"
                          className="main__grid-middle-odd-button">
                          <span className="main__grid-middle-odd-button-inner ">
                            16
                          </span>
                          <span className="main__grid-middle-odd-button-chip">

                                                        <img
                                                          src={chip}
                                                          alt="Chip"
                                                          className="main__grid-middle-odd-button-chip-img"
                                                        />
                          </span>
                        </button>
                      </div>
                      <div className="main__grid-middle-odd">
                        <button
                          type="button"
                          className="main__grid-middle-odd-button">
                          <span className="main__grid-middle-odd-button-inner main__grid-middle-odd-button-inner--red">
                            19
                          </span>
                          <span className="main__grid-middle-odd-button-chip">

                                                        <img
                                                          src={chip}
                                                          alt="Chip"
                                                          className="main__grid-middle-odd-button-chip-img"
                                                        />
                          </span>
                        </button>
                      </div>
                      <div className="main__grid-middle-odd">
                        <button
                          type="button"
                          className="main__grid-middle-odd-button">
                          <span className="main__grid-middle-odd-button-inner">
                            22
                          </span>
                          <span className="main__grid-middle-odd-button-chip">

                                                        <img
                                                          src={chip}
                                                          alt="Chip"
                                                          className="main__grid-middle-odd-button-chip-img"
                                                        />
                          </span>
                        </button>
                      </div>
                      <div className="main__grid-middle-odd">
                        <button
                          type="button"
                          className="main__grid-middle-odd-button">
                          <span className="main__grid-middle-odd-button-inner main__grid-middle-odd-button-inner--red">
                            25
                          </span>
                          <span className="main__grid-middle-odd-button-chip">

                                                        <img
                                                          src={chip}
                                                          alt="Chip"
                                                          className="main__grid-middle-odd-button-chip-img"
                                                        />
                          </span>
                        </button>
                      </div>
                      <div className="main__grid-middle-odd">
                        <button
                          type="button"
                          className="main__grid-middle-odd-button">
                          <span className="main__grid-middle-odd-button-inner">
                            28
                          </span>
                          <span className="main__grid-middle-odd-button-chip">

                                                        <img
                                                          src={chip}
                                                          alt="Chip"
                                                          className="main__grid-middle-odd-button-chip-img"
                                                        />
                          </span>
                        </button>
                      </div>
                      <div className="main__grid-middle-odd">
                        <button
                          type="button"
                          className="main__grid-middle-odd-button">
                          <span className="main__grid-middle-odd-button-inner main__grid-middle-odd-button-inner--red">
                            31
                          </span>
                          <span className="main__grid-middle-odd-button-chip">

                                                        <img
                                                          src={chip}
                                                          alt="Chip"
                                                          className="main__grid-middle-odd-button-chip-img"
                                                        />
                          </span>
                        </button>
                      </div>
                      <div className="main__grid-middle-odd">
                        <button
                          type="button"
                          className="main__grid-middle-odd-button">
                          <span className="main__grid-middle-odd-button-inner">
                            34
                          </span>
                          <span className="main__grid-middle-odd-button-chip">

                                                        <img
                                                          src={chip}
                                                          alt="Chip"
                                                          className="main__grid-middle-odd-button-chip-img"
                                                        />
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="main__grid-middle-column">
                      <div className="main__grid-middle-odd">
                        <button
                          type="button"
                          className="main__grid-middle-odd-button">
                          <span className="main__grid-middle-odd-button-inner ">
                            2
                          </span>
                          <span className="main__grid-middle-odd-button-chip">

                                                        <img
                                                          src={chip}
                                                          alt="Chip"
                                                          className="main__grid-middle-odd-button-chip-img"
                                                        />
                          </span>
                        </button>
                      </div>
                      <div className="main__grid-middle-odd">
                        <button
                          type="button"
                          className="main__grid-middle-odd-button">
                          <span className="main__grid-middle-odd-button-inner main__grid-middle-odd-button-inner--red ">
                            5
                          </span>
                          <span className="main__grid-middle-odd-button-chip">

                                                        <img
                                                          src={chip}
                                                          alt="Chip"
                                                          className="main__grid-middle-odd-button-chip-img"
                                                        />
                          </span>
                        </button>
                      </div>
                      <div className="main__grid-middle-odd">
                        <button
                          type="button"
                          className="main__grid-middle-odd-button">
                          <span className="main__grid-middle-odd-button-inner ">
                            8
                          </span>
                          <span className="main__grid-middle-odd-button-chip">

                                                        <img
                                                          src={chip}
                                                          alt="Chip"
                                                          className="main__grid-middle-odd-button-chip-img"
                                                        />
                          </span>
                        </button>
                      </div>
                      <div className="main__grid-middle-odd">
                        <button
                          type="button"
                          className="main__grid-middle-odd-button active">
                          <span className="main__grid-middle-odd-button-inner main__grid-middle-odd-button-inner--red">
                            11
                          </span>
                          <span className="main__grid-middle-odd-button-chip">

                                                        <img
                                                          src={chip}
                                                          alt="Chip"
                                                          className="main__grid-middle-odd-button-chip-img"
                                                        />
                          </span>
                        </button>
                      </div>
                      <div className="main__grid-middle-odd">
                        <button
                          type="button"
                          className="main__grid-middle-odd-button">
                          <span className="main__grid-middle-odd-button-inner ">
                            14
                          </span>
                          <span className="main__grid-middle-odd-button-chip">

                                                        <img
                                                          src={chip}
                                                          alt="Chip"
                                                          className="main__grid-middle-odd-button-chip-img"
                                                        />
                          </span>
                        </button>
                      </div>
                      <div className="main__grid-middle-odd">
                        <button
                          type="button"
                          className="main__grid-middle-odd-button">
                          <span className="main__grid-middle-odd-button-inner main__grid-middle-odd-button-inner--red">
                            17
                          </span>
                          <span className="main__grid-middle-odd-button-chip">

                                                        <img
                                                          src={chip}
                                                          alt="Chip"
                                                          className="main__grid-middle-odd-button-chip-img"
                                                        />
                          </span>
                        </button>
                      </div>
                      <div className="main__grid-middle-odd">
                        <button
                          type="button"
                          className="main__grid-middle-odd-button active">
                          <span className="main__grid-middle-odd-button-inner ">
                            20
                          </span>
                          <span className="main__grid-middle-odd-button-chip">

                                                        <img
                                                          src={chip}
                                                          alt="Chip"
                                                          className="main__grid-middle-odd-button-chip-img"
                                                        />
                          </span>
                        </button>
                      </div>
                      <div className="main__grid-middle-odd">
                        <button
                          type="button"
                          className="main__grid-middle-odd-button">
                          <span className="main__grid-middle-odd-button-inner main__grid-middle-odd-button-inner--red">
                            23
                          </span>
                          <span className="main__grid-middle-odd-button-chip">

                                                        <img
                                                          src={chip}
                                                          alt="Chip"
                                                          className="main__grid-middle-odd-button-chip-img"
                                                        />
                          </span>
                        </button>
                      </div>
                      <div className="main__grid-middle-odd">
                        <button
                          type="button"
                          className="main__grid-middle-odd-button">
                          <span className="main__grid-middle-odd-button-inner ">
                            26
                          </span>
                          <span className="main__grid-middle-odd-button-chip">

                                                        <img
                                                          src={chip}
                                                          alt="Chip"
                                                          className="main__grid-middle-odd-button-chip-img"
                                                        />
                          </span>
                        </button>
                      </div>
                      <div className="main__grid-middle-odd">
                        <button
                          type="button"
                          className="main__grid-middle-odd-button">
                          <span className="main__grid-middle-odd-button-inner main__grid-middle-odd-button-inner--red">
                            29
                          </span>
                          <span className="main__grid-middle-odd-button-chip">

                                                        <img
                                                          src={chip}
                                                          alt="Chip"
                                                          className="main__grid-middle-odd-button-chip-img"
                                                        />
                          </span>
                        </button>
                      </div>
                      <div className="main__grid-middle-odd">
                        <button
                          type="button"
                          className="main__grid-middle-odd-button">
                          <span className="main__grid-middle-odd-button-inner ">
                            32
                          </span>
                          <span className="main__grid-middle-odd-button-chip">

                                                        <img
                                                          src={chip}
                                                          alt="Chip"
                                                          className="main__grid-middle-odd-button-chip-img"
                                                        />
                          </span>
                        </button>
                      </div>
                      <div className="main__grid-middle-odd">
                        <button
                          type="button"
                          className="main__grid-middle-odd-button">
                          <span className="main__grid-middle-odd-button-inner main__grid-middle-odd-button-inner--red">
                            35
                          </span>
                          <span className="main__grid-middle-odd-button-chip">

                                                        <img
                                                          src={chip}
                                                          alt="Chip"
                                                          className="main__grid-middle-odd-button-chip-img"
                                                        />
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="main__grid-middle-column">
                      <div className="main__grid-middle-odd">
                        <button
                          type="button"
                          className="main__grid-middle-odd-button">
                          <span className="main__grid-middle-odd-button-inner main__grid-middle-odd-button-inner--red">
                            3
                          </span>
                          <span className="main__grid-middle-odd-button-chip">

                                                        <img
                                                          src={chip}
                                                          alt="Chip"
                                                          className="main__grid-middle-odd-button-chip-img"
                                                        />
                          </span>
                        </button>
                      </div>
                      <div className="main__grid-middle-odd">
                        <button
                          type="button"
                          className="main__grid-middle-odd-button active">
                          <span className="main__grid-middle-odd-button-inner ">
                            6
                          </span>
                          <span className="main__grid-middle-odd-button-chip">

                                                        <img
                                                          src={chip}
                                                          alt="Chip"
                                                          className="main__grid-middle-odd-button-chip-img"
                                                        />
                          </span>
                        </button>
                      </div>
                      <div className="main__grid-middle-odd">
                        <button
                          type="button"
                          className="main__grid-middle-odd-button">
                          <span className="main__grid-middle-odd-button-inner main__grid-middle-odd-button-inner--red">
                            9
                          </span>
                          <span className="main__grid-middle-odd-button-chip">

                                                        <img
                                                          src={chip}
                                                          alt="Chip"
                                                          className="main__grid-middle-odd-button-chip-img"
                                                        />
                          </span>
                        </button>
                      </div>
                      <div className="main__grid-middle-odd">
                        <button
                          type="button"
                          className="main__grid-middle-odd-button">
                          <span className="main__grid-middle-odd-button-inner ">
                            12
                          </span>
                          <span className="main__grid-middle-odd-button-chip">

                                                        <img
                                                          src={chip}
                                                          alt="Chip"
                                                          className="main__grid-middle-odd-button-chip-img"
                                                        />
                          </span>
                        </button>
                      </div>
                      <div className="main__grid-middle-odd">
                        <button
                          type="button"
                          className="main__grid-middle-odd-button">
                          <span className="main__grid-middle-odd-button-inner main__grid-middle-odd-button-inner--red">
                            15
                          </span>
                          <span className="main__grid-middle-odd-button-chip">

                                                        <img
                                                          src={chip}
                                                          alt="Chip"
                                                          className="main__grid-middle-odd-button-chip-img"
                                                        />
                          </span>
                        </button>
                      </div>
                      <div className="main__grid-middle-odd">
                        <button
                          type="button"
                          className="main__grid-middle-odd-button">
                          <span className="main__grid-middle-odd-button-inner ">
                            18
                          </span>
                          <span className="main__grid-middle-odd-button-chip">

                                                        <img
                                                          src={chip}
                                                          alt="Chip"
                                                          className="main__grid-middle-odd-button-chip-img"
                                                        />
                          </span>
                        </button>
                      </div>
                      <div className="main__grid-middle-odd">
                        <button
                          type="button"
                          className="main__grid-middle-odd-button">
                          <span className="main__grid-middle-odd-button-inner main__grid-middle-odd-button-inner--red">
                            21
                          </span>
                          <span className="main__grid-middle-odd-button-chip">

                                                        <img
                                                          src={chip}
                                                          alt="Chip"
                                                          className="main__grid-middle-odd-button-chip-img"
                                                        />
                          </span>
                        </button>
                      </div>
                      <div className="main__grid-middle-odd">
                        <button
                          type="button"
                          className="main__grid-middle-odd-button">
                          <span className="main__grid-middle-odd-button-inner">
                            24
                          </span>
                          <span className="main__grid-middle-odd-button-chip">

                                                        <img
                                                          src={chip}
                                                          alt="Chip"
                                                          className="main__grid-middle-odd-button-chip-img"
                                                        />
                          </span>
                        </button>
                      </div>
                      <div className="main__grid-middle-odd">
                        <button
                          type="button"
                          className="main__grid-middle-odd-button">
                          <span className="main__grid-middle-odd-button-inner main__grid-middle-odd-button-inner--red">
                            27
                          </span>
                          <span className="main__grid-middle-odd-button-chip">

                                                        <img
                                                          src={chip}
                                                          alt="Chip"
                                                          className="main__grid-middle-odd-button-chip-img"
                                                        />
                          </span>
                        </button>
                      </div>
                      <div className="main__grid-middle-odd">
                        <button
                          type="button"
                          className="main__grid-middle-odd-button">
                          <span className="main__grid-middle-odd-button-inner">
                            30
                          </span>
                          <span className="main__grid-middle-odd-button-chip">

                                                        <img
                                                          src={chip}
                                                          alt="Chip"
                                                          className="main__grid-middle-odd-button-chip-img"
                                                        />
                          </span>
                        </button>
                      </div>
                      <div className="main__grid-middle-odd">
                        <button
                          type="button"
                          className="main__grid-middle-odd-button">
                          <span className="main__grid-middle-odd-button-inner main__grid-middle-odd-button-inner--red">
                            33
                          </span>
                          <span className="main__grid-middle-odd-button-chip">

                                                        <img
                                                          src={chip}
                                                          alt="Chip"
                                                          className="main__grid-middle-odd-button-chip-img"
                                                        />
                          </span>
                        </button>
                      </div>
                      <div className="main__grid-middle-odd">
                        <button
                          type="button"
                          className="main__grid-middle-odd-button active">
                          <span className="main__grid-middle-odd-button-inner">
                            36
                          </span>
                          <span className="main__grid-middle-odd-button-chip">

                                                        <img
                                                          src={chip}
                                                          alt="Chip"
                                                          className="main__grid-middle-odd-button-chip-img"
                                                        />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="main__grid-right">
                    <div className="main__grid-left-group">
                      <button className="main__grid-left-button">
                        <span className="main__grid-left-button-inner">
                          1<strong>ST</strong>12
                        </span>
                      </button>
                    </div>
                    <div className="main__grid-left-group">
                      <button className="main__grid-left-button">
                        <span className="main__grid-left-button-inner">
                          2<strong>ND</strong>12
                        </span>
                      </button>
                    </div>
                    <div className="main__grid-left-group">
                      <button className="main__grid-left-button">
                        <span className="main__grid-left-button-inner">
                          3<strong>RD</strong> 12
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="main__grid-bottom">
                  <div className="main__grid-bottom-group">
                    <button type="button" className="main__grid-bottom-button">
                      A
                    </button>
                  </div>
                  <div className="main__grid-bottom-group">
                    <button type="button" className="main__grid-bottom-button">
                      B
                    </button>
                  </div>
                  <div className="main__grid-bottom-group">
                    <button type="button" className="main__grid-bottom-button">
                      C
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="main__stake-field">
              <div className="main__stake disable">
                <button type="button" className="main__stake-minus">
                  <span className="main__stake-minus-line"/>
                </button>
                <label className="main__stake-label">
                  <input
                    type="text"
                    className="main__stake-input"
                    value="10.000.000"
                  />
                </label>
                <button type="button" className="main__stake-minus">
                  <svg
                    className="main__stake-plus"
                    height="448pt"
                    viewBox="0 0 448 448"
                    width="448pt"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"></path>
                  </svg>
                </button>
              </div>
              <div className="main__button-field">
                <Link to={"/game"} className="main__button">
                  OK
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="demo-play-bottom">
          <div className="nrgaming">
            <img
              src={nrgaming}
              alt="NRGaming"
              className="nrgaming-img"
            />
          </div>
        </div>
      </div>

      <div className={classNames("history__popup-field",
        "info__popup",
        isInfo && 'active'
      )}>
        <div className="info__popup-close" onClick={() => setIsInfo(false)}/>
        <div className="history__body">
          <button type="button" className="history__close-field info__close" onClick={() => setIsInfo(false)}>
            <img
              src={close}
              alt="Close"
              className="history__close-svg"
            />
          </button>
          <ul className="history__tab-list">
            <li className={classNames("history__tab-item",
              infoActiveTabIndex === 1 && 'active')}
                onClick={() => setInfoActiveTabIndex(1)}>
              <a className="history__tab-link">How to Play</a>
            </li>
            <li className={classNames("history__tab-item",
              infoActiveTabIndex === 2 && 'active')}
                onClick={() => setInfoActiveTabIndex(2)}>
              <a className="history__tab-link">Rules</a>
            </li>
          </ul>
          <ul className="history__inner-list">
            <li className={classNames("history__inner-item",
              "draw-history",
              infoActiveTabIndex === 1 && 'active')}>
              <div className="info__text">
                Lorem ipsum, or lipsum as it is sometimes know n, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book.
              </div>
              <div className="info__text">
                Lorem ipsum, or lipsum as it is sometimes know n, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book.
              </div>
              <div className="info__text">
                Lorem ipsum, or lipsum as it is sometimes know n, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book.
              </div>
              <div className="info__text">
                Lorem ipsum, or lipsum as it is sometimes know n, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book.
              </div>
              <div className="info__text">
                Lorem ipsum, or lipsum as it is sometimes know n, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book.
              </div>
            </li>
            <li className={classNames("history__inner-item",
              "my-history",
              infoActiveTabIndex === 2 && 'active')}>
              <div className="info__text">
                Rules
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="error__popup-field ">
        <div className="error__popup-close"/>
        <div className="error__popup">
          <button className="error__popup-close-button">
            <img
              src={close}
              alt="Close"
              className="history__close-svg"
            />
          </button>
          <div className="error__popup-body">
            <div className="error__popup-icon">
              <img
                src={insufficientFound}
                alt="Error"
                className="error__popup-icon-img"
              />
            </div>
            <div className="error__popup-text">You have insufficient funds</div>
          </div>
        </div>
      </div>
    </div>
  )
};

