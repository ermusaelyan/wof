import {Link} from "react-router-dom";
import home from "../../assets/img/global/home.svg";
import history from "../../assets/img/desktop/history.svg";
import statistics from "../../assets/img/global/statistics.svg";
import statisticsGreen from "../../assets/img/global/statistics-green.svg";
import fullScreen from "../../assets/img/global/full-screen.svg";
import info from "../../assets/img/global/info.svg";
import classNames from "classnames";
import close from "../../assets/img/global/close.svg";
import {useState} from "react";

export const MobileHeader = ({toggleStatistics = (i) => i}) => {
  const [isHistoryActive, setIsHistoryActive] = useState(false);
  const [historyActiveTabIndex, setHistoryActiveTabIndex] = useState(1);
  const [isInfoActive, setIsInfoActive] = useState(false);
  const [infoActiveTabIndex, setInfoActiveTabIndex] = useState(1);

  return (
    <header className="header">
      <div className="header__nav">
        <div className="header__home">
          <Link to={"/"} className="home__button">
            <img src={home} alt="Home" className="home__button-svg"/>
          </Link>
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
        <div className="header__id">
          <span className="id__title">ID</span>
          <span className="id__title-colon">:</span>
          <span className="id__number">123456</span>
        </div>
        <div className="header__history">
          <button type="button" className="history__button" onClick={() => setIsHistoryActive(true)}>
            <img
              src={history}
              alt="History"
              className="history__button-svg"
            />
          </button>
        </div>
        <div className="header__statistics">
          <button type="button" className="statistics__button"
                  onClick={() => toggleStatistics(prevState => !prevState)}>
            <img
              src={statistics}
              alt="Statistics"
              className="statistics__button-svg statistics__button-svg--gradient"
            />
            <img
              src={statisticsGreen}
              alt="Statistics"
              className="statistics__button-svg statistics__button-svg--green"
            />
          </button>
        </div>
        <div className="header__full-screen">
          <button type="button" className="full-screen__button">
            <img
              src={fullScreen}
              alt="Full Screen"
              className="full-screen__button-svg"
            />
          </button>
        </div>
        <div className="header__info">
          <button type="button" className="info__button" onClick={() => setIsInfoActive(true)}>
            <img src={info} alt="Info" className="info__button-svg"/>
          </button>
        </div>
      </div>
      <div className="header__time">
        <div className="time__line-field"></div>
        <div className="time__panel">
          <span className="time__text">05:10</span>
        </div>
      </div>
      <div className={classNames("history__popup-field",
        "history__popup",
        isHistoryActive && "active"
      )}>
        <div className="history__body">
          <button type="button" className="history__close-field history__close"
                  onClick={() => setIsHistoryActive(false)}>
            <img src={close} alt="Close" className="history__close-svg"/>
          </button>
          <ul className="history__tab-list">
            <li className={classNames("history__tab-item",
              historyActiveTabIndex === 1 && "active")}
                onClick={() => setHistoryActiveTabIndex(1)}>
              <button type="button" className="history__tab-link">Draw history</button>
            </li>
            <li className={classNames("history__tab-item",
              historyActiveTabIndex === 2 && "active")}
                onClick={() => setHistoryActiveTabIndex(2)}>
              <button type="button" className="history__tab-link">My history</button>
            </li>
          </ul>
          <ul className="history__inner-list">
            <li className={classNames("history__inner-item",
              historyActiveTabIndex === 1 && "active")}>
              <div className="draw-history">
                <div className="draw-history__list">
                  <div className="draw-history__item">
                    <div className="draw-history__left">
                      <div className="draw-history__id">
                        <span className="draw-history__id-title">ID</span>
                        <span className="draw-history__id-colon">:</span>
                        <span className="draw-history__id-number">123654</span>
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
                        <span className="draw-history__id-number">123654</span>
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
                        <span className="draw-history__id-number">123654</span>
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
                        <span className="draw-history__id-number">123654</span>
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
                        <span className="draw-history__id-number">123654</span>
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
                        <span className="draw-history__id-number">123654</span>
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
                        <span className="draw-history__id-number">123654</span>
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
                        <span className="draw-history__id-number">123654</span>
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
                        <span className="draw-history__id-number">123654</span>
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
                        <span className="draw-history__id-number">123654</span>
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
                        <span className="draw-history__id-number">123654</span>
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
                        <span className="draw-history__id-number">123654</span>
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
                        <span className="draw-history__id-number">123654</span>
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
                        <span className="draw-history__id-number">123654</span>
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
                        <span className="draw-history__id-number">123654</span>
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
                        <span className="draw-history__id-number">123654</span>
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
                        <span className="draw-history__id-number">123654</span>
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
                        <span className="draw-history__id-number">123654</span>
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
                        <span className="draw-history__id-number">123654</span>
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
                        <span className="draw-history__id-number">123654</span>
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
                        <span className="draw-history__id-number">123654</span>
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
                        <span className="draw-history__id-number">123654</span>
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
                        <span className="draw-history__id-number">123654</span>
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
                        <span className="draw-history__id-number">123654</span>
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
                        <span className="draw-history__id-number">123654</span>
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
            <li className={classNames("history__inner-item",
              "my-history",
              historyActiveTabIndex === 2 && "active")}>
              <div className="my-history">
                <div className="my-history__list">
                  <div className="my-history__item">
                    <div className="my-history__item-id">
                      <span className="my-history__item-id-title">ID</span>
                      <span className="my-history__item-id-colon">:</span>
                      <span className="my-history__item-id-number">123456</span>
                    </div>
                    <div className=" my-history__ticket-list">
                      <div className="start__ticket-item  active">
                        <div className="start__ticket-head">
                          <div className="start__ticket-left">
                            <div className="start__ticket-title">Ticket 1</div>
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
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item ">
                                  6
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item start__ticket-odd-item--zoom">
                                  10
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  5
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  6
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  10
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  5
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  6
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  10
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  5
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                          </div>
                          <div className="start__ticket-odd-list">
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  5
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--ed">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  6
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  10
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  5
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  6
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  10
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  5
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="start__ticket-item  ">
                        <div className="start__ticket-head">
                          <div className="start__ticket-left">
                            <div className="start__ticket-title">Ticket 1</div>
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
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  6
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  10
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  5
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  6
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  10
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  5
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  6
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  10
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  5
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                          </div>
                          <div className="start__ticket-odd-list">
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  10
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  5
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  6
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  10
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  5
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="start__ticket-item  ">
                        <div className="start__ticket-head">
                          <div className="start__ticket-left">
                            <div className="start__ticket-title">Ticket 1</div>
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
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  6
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  10
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  5
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  6
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  10
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  5
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  6
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  10
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  5
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="start__ticket-item  ">
                        <div className="start__ticket-head">
                          <div className="start__ticket-left">
                            <div className="start__ticket-title">Ticket 1</div>
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
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  5
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  6
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  10
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  5
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  6
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  10
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  5
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
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
                      <span className="my-history__item-id-number">123456</span>
                    </div>
                    <div className=" my-history__ticket-list">
                      <div className="start__ticket-item  active">
                        <div className="start__ticket-head">
                          <div className="start__ticket-left">
                            <div className="start__ticket-title">Ticket 1</div>
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
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  6
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  10
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  5
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  6
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  10
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  5
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  6
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  10
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  5
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                          </div>
                          <div className="start__ticket-odd-list">
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  5
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  5
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  5
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>

                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--ed">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  6
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  10
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  5
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  6
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  10
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  5
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="start__ticket-item  ">
                        <div className="start__ticket-head">
                          <div className="start__ticket-left">
                            <div className="start__ticket-title">Ticket 1</div>
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
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  6
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  10
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  5
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  6
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  10
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  5
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  6
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  10
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  5
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                          </div>
                          <div className="start__ticket-odd-list">
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  10
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  5
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  6
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  10
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  5
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="start__ticket-item  ">
                        <div className="start__ticket-head">
                          <div className="start__ticket-left">
                            <div className="start__ticket-title">Ticket 1</div>
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
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  6
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  10
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  5
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  6
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  10
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  5
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  6
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  10
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  5
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="start__ticket-item  ">
                        <div className="start__ticket-head">
                          <div className="start__ticket-left">
                            <div className="start__ticket-title">Ticket 1</div>
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
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  5
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  6
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  10
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  5
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  6
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  10
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
                              </div>
                            </div>
                            <div className="start__ticket-odd-item-field ">
                              <div className="start__ticket-odd-item-field-inner">
                                <span className="start__ticket-odd-item">
                                  5
                                </span>
                                <span className="start__ticket-odd-item-chip-list"></span>
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
          </ul>
        </div>
      </div>
      <div className={classNames("history__popup-field",
        "info__popup",
        isInfoActive && "active"
      )}>
        <div className="history__body">
          <button type="button" className="history__close-field info__close " onClick={() => setIsInfoActive(false)}>
            <img src={close} alt="Close" className="history__close-svg"/>
          </button>
          <ul className="history__tab-list">
            <li className={classNames("history__tab-item",
              infoActiveTabIndex === 1 && "active")}
                onClick={() => setInfoActiveTabIndex(1)}>
              <button type="button" className="history__tab-link">How to Play</button>
            </li>
            <li className={classNames("history__tab-item",
              infoActiveTabIndex === 2 && "active")}
                onClick={() => setInfoActiveTabIndex(2)}>
              <button type="button" className="history__tab-link">Rules</button>
            </li>
          </ul>
          <ul className="history__inner-list">
            <li className={classNames("history__inner-item",
              "draw-history",
              infoActiveTabIndex === 1 && "active")}>
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
              infoActiveTabIndex === 2 && "active")}>
              <div className="info__text">
                My history
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
