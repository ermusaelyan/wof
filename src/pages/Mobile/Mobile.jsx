import {useCallback, useReducer, useState} from "react";
import classNames from "classnames";
import {Link} from "react-router-dom";
import {MobileHeader} from "../../components/MobileHeader/MobileHeader";

import roulette from '../../assets/img/global/roulette.png'
import rouletteArrow from '../../assets/img/global/roulette-arrow.png'
import arrowLeft from '../../assets/img/global/arrow-left.svg'
import more from '../../assets/img/global/more.svg'
import chip from '../../assets/img/global/chip.svg'
import close from '../../assets/img/global/close.svg'
import insufficientFound from '../../assets/img/global/insufficient-funds.svg'
import {oddsData} from "../../utilits/odds";

const SET_ODD_ACTIVITY = 'SET_ODD_ACTIVITY';
const CLICK_ODD = 'CLICK_ODD';
const CLICK_EVEN = 'CLICK_EVEN';
const CLICK_RED = 'CLICK_RED';
const CLICK_BLACK = 'CLICK_BLACK';
const CLICK_1_18 = 'CLICK_1_18';
const CLICK_19_36 = 'CLICK_19_36';
const CLICK_1_12 = 'CLICK_1_12';
const CLICK_13_24 = 'CLICK_13_24';
const CLICK_25_36 = 'CLICK_25_36';
const CLICK_A = 'CLICK_A';
const CLICK_B = 'CLICK_B';
const CLICK_C = 'CLICK_C';
const CLICK_ZERO = 'CLICK_ZERO';

const initialState = {
  odds: [],
  isOdd: false,
  isEven: false,
  isRed: false,
  isBlack: false,
  is1_18: false,
  is19_36: false,
  is1_12: false,
  is13_24: false,
  is25_36: false,
  isA: false,
  isB: false,
  isC: false,
  isZero: false,
}

const checkOdds = (odds) => ({
  isEven: odds.every((odd) => (!odd.isEven || odd.isActive)),
  isOdd: odds.every((odd) => (odd.isEven || odd.isActive)),
  isRed: odds.every((odd) => (!odd.isRed || odd.isActive)),
  isBlack: odds.every((odd) => (odd.isRed || odd.isActive)),
  is1_18: odds.every((odd, i) => (i < 18) ? odd.isActive : !odd.isActive),
  is19_36: odds.every((odd, i) => (i >= 18) ? odd.isActive : !odd.isActive),
  is1_12: odds.every((odd, i) => (i < 12) ? odd.isActive : !odd.isActive),
  is13_24: odds.every((odd, i) => (i >= 12 && i < 24) ? odd.isActive : !odd.isActive),
  is25_36: odds.every((odd, i) => (i >= 24) ? odd.isActive : !odd.isActive),
  isA: odds.every((odd, i) => (i % 3 === 0) ? odd.isActive : !odd.isActive),
  isB: odds.every((odd, i) => (i % 3 === 1) ? odd.isActive : !odd.isActive),
  isC: odds.every((odd, i) => (i % 3 === 2) ? odd.isActive : !odd.isActive),
})

const stateReducer = (state, action) => {
  switch (action.type) {
    case SET_ODD_ACTIVITY: {
      const {id, active} = action.payload;
      const odds = state.odds;
      const isZero = state.isZero;
      const index = odds.findIndex(e => e.id === id);
      let count = 18;
      isZero && --count;
      !!active && --count;
      odds[index].isActive = (odds.filter(e => e.isActive).length <= count) ? active : !active;
      return {
        ...state,
        ...checkOdds(odds),
        odds,
      };
    }
    case CLICK_ODD: {
      const newOdds = state.odds.map((e) => ({...e, isActive: e.isEven ? false : !state.isOdd}));
      return {
        ...state,
        ...checkOdds(newOdds),
        odds: newOdds,
        isZero: false,
      }
    }
    case CLICK_EVEN: {
      const newOdds = state.odds.map((e) => ({...e, isActive: e.isEven ? !state.isEven : false}));
      return {
        ...state,
        ...checkOdds(newOdds),
        odds: newOdds,
        isZero: false,
      }
    }
    case CLICK_RED: {
      const newOdds = state.odds.map((e) => ({...e, isActive: e.isRed ? !state.isRed : false}));
      return {
        ...state,
        ...checkOdds(newOdds),
        odds: newOdds,
        isZero: false,
      }
    }
    case CLICK_BLACK: {
      const newOdds = state.odds.map((e) => ({...e, isActive: !e.isRed ? !state.isBlack : false}));
      return {
        ...state,
        ...checkOdds(newOdds),
        odds: newOdds,
        isZero: false,
      }
    }
    case CLICK_1_18: {
      const newOdds = state.odds.map((e, i) => ({...e, isActive: i < 18 ? !state.is1_18 : false}));
      return {
        ...state,
        ...checkOdds(newOdds),
        odds: newOdds,
        isZero: false,
      }
    }
    case CLICK_19_36: {
      const newOdds = state.odds.map((e, i) => ({...e, isActive: i >= 18 ? !state.is19_36 : false}));
      return {
        ...state,
        ...checkOdds(newOdds),
        odds: newOdds,
        isZero: false,
      }
    }
    case CLICK_1_12: {
      const newOdds = state.odds.map((e, i) => ({...e, isActive: i < 12 ? !state.is1_12 : false}));
      return {
        ...state,
        ...checkOdds(newOdds),
        odds: newOdds,
        isZero: false,
      }
    }
    case CLICK_13_24: {
      const newOdds = state.odds.map((e, i) => ({...e, isActive: (i >= 12 && i < 24) ? !state.is13_24 : false}));
      return {
        ...state,
        ...checkOdds(newOdds),
        odds: newOdds,
        isZero: false,
      }
    }
    case CLICK_25_36: {
      const newOdds = state.odds.map((e, i) => ({...e, isActive: i >= 24 ? !state.is25_36 : false}));
      return {
        ...state,
        ...checkOdds(newOdds),
        odds: newOdds,
        isZero: false,
      }
    }
    case CLICK_A: {
      const newOdds = state.odds.map((e, i) => ({...e, isActive: i % 3 === 0 ? !state.isA : false}));
      return {
        ...state,
        ...checkOdds(newOdds),
        odds: newOdds,
        isZero: false,
      }
    }
    case CLICK_B: {
      const newOdds = state.odds.map((e, i) => ({...e, isActive: i % 3 === 1 ? !state.isB : false}));
      return {
        ...state,
        ...checkOdds(newOdds),
        odds: newOdds,
        isZero: false,
      }
    }
    case CLICK_C: {
      const newOdds = state.odds.map((e, i) => ({...e, isActive: i % 3 === 2 ? !state.isC : false}));
      return {
        ...state,
        ...checkOdds(newOdds),
        odds: newOdds,
        isZero: false,
      }
    }
    case CLICK_ZERO: {
      const odds = state.odds;
      const isZero = state.isZero;
      return {
        ...state,
        ...checkOdds(odds),
        isZero: ((odds.filter(e => e.isActive).length + (!isZero ? 1 : 0)) <= 18) ? !isZero : isZero,
      }
    }
    default:
      return state;
  }
}

export const Mobile = () => {
  const [isStatisticsActive, setIsStatisticsActive] = useState(false);

  const [{odds, isZero}, dispatchState] = useReducer(stateReducer, {...initialState, odds: oddsData});

  const setActive = (item) => {
    dispatchState({type: SET_ODD_ACTIVITY, payload: {id: item.id, active: !item.isActive}});
  }

  const renderColumn = useCallback((index) => (
      odds.filter((e, i) => i % 3 === index).map((e) => (
        <div className="main__grid-middle-odd" key={e.id}>
          <button
            onClick={() => setActive(e)}
            type="button"
            className={classNames('main__grid-middle-odd-button', {active: e.isActive})}
          >
            <span className={classNames("main__grid-middle-odd-button-inner", {'red': e.isRed})}>
              {e.title}
            </span>
            <span className="main__grid-middle-odd-button-chip">
              <img src={chip} alt="Chip" className="main__grid-middle-odd-button-chip-img"/>
            </span>
          </button>
        </div>
        )
      )
  ), [odds]);

  const renderSpinnerValue = useCallback(() => (
      new Array(10).fill('q').map((e, i) => (
          <div className="spinner__amount-container-value" key={i.toString()}>{i.toString()}</div>
      ))
  ), [])

  const oddHandler = () => dispatchState({type: CLICK_ODD});
  const evenHandler = () => dispatchState({type: CLICK_EVEN});
  const redHandler = () => dispatchState({type: CLICK_RED});
  const blackHandler = () => dispatchState({type: CLICK_BLACK});
  const f18Handler = () => dispatchState({type: CLICK_1_18});
  const l18Handler = () => dispatchState({type: CLICK_19_36});
  const f12Handler = () => dispatchState({type: CLICK_1_12});
  const m12Handler = () => dispatchState({type: CLICK_13_24});
  const l12Handler = () => dispatchState({type: CLICK_25_36});
  const aHandler = () => dispatchState({type: CLICK_A});
  const bHandler = () => dispatchState({type: CLICK_B});
  const cHandler = () => dispatchState({type: CLICK_C});
  const zeroHandler = () => dispatchState({type: CLICK_ZERO});

  return (
    <div className="wof">
      <MobileHeader toggleStatistics={setIsStatisticsActive}/>
      <div className="wrapper">
        <div className="container">
          <aside className="aside">
            <div className="small__roulette-field">
              <div className="small__roulette">
                <img
                  src={roulette}
                  alt="Roulette"
                  className="small__roulette-img"
                />
              </div>
              <div className="small__roulette-arrow">
                <img
                  src={rouletteArrow}
                  alt="Roulette Arrow"
                  className="small__roulette-arrow-img"
                />
              </div>
            </div>
            <div className="aside__ticket-field">
              <div className="aside__ticket-inserted">
                <div className="aside__ticket">
                  <div className="aside__ticket-head">Ticket 5</div>
                  <div className="aside__ticket-body">
                    <div className="aside__ticket-body-amount">10.000.000</div>
                  </div>
                </div>
              </div>
              <ul className="aside__ticket-list">
                <li className="aside__ticket-item">
                  <div className="aside__ticket">
                    <div className="aside__ticket-head">Ticket 5</div>
                    <div className="aside__ticket-body">
                      <div className="aside__ticket-body-amount">
                        10.000.000
                      </div>
                      <div className="aside__ticket-body-amount">x2</div>
                      <div className="aside__ticket-odd-list">
                        <div className="aside__ticket-odd-list-inner">
                          <div className="aside__ticket-odd-item-field">
                            <span className="aside__ticket-odd-item">2</span>
                          </div>
                          <div className="aside__ticket-odd-item-field">
                            <span className="aside__ticket-odd-item aside__ticket-odd-item--red">
                              12
                            </span>
                          </div>
                          <div className="aside__ticket-odd-item-field">
                            <span className="aside__ticket-odd-item">6</span>
                          </div>
                          <div className="aside__ticket-odd-item-field">
                            <span className="aside__ticket-odd-item">21</span>
                          </div>
                          <div className="aside__ticket-odd-item-field">
                            <span className="aside__ticket-odd-item">2</span>
                          </div>
                          <div className="aside__ticket-odd-item-field">
                            <span className="aside__ticket-odd-item aside__ticket-odd-item--red">
                              2
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="aside__ticket-item">
                  <div className="aside__ticket">
                    <div className="aside__ticket-head">Ticket 5</div>
                    <div className="aside__ticket-body">
                      <div className="aside__ticket-body-amount">
                        10.000.000
                      </div>
                      <div className="aside__ticket-body-amount">x5</div>
                      <div className="aside__ticket-odd-color-field ">
                        <div className="aside__ticket-odd-color aside__ticket-odd-color--red"/>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="aside__ticket-item">
                  <div className="aside__ticket">
                    <div className="aside__ticket-head">Ticket 5</div>
                    <div className="aside__ticket-body">
                      <div className="aside__ticket-body-amount">
                        10.000.000
                      </div>
                      <div className="aside__ticket-body-amount">x5</div>
                      <div className="aside__ticket-odd-color-field ">
                        <div className="aside__ticket-odd-color "/>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="aside__ticket-item">
                  <div className="aside__ticket">
                    <div className="aside__ticket-head">Ticket 5</div>
                    <div className="aside__ticket-body">
                      <div className="aside__ticket-body-amount">
                        10.000.000
                      </div>
                      <div className="aside__ticket-body-amount">x2</div>
                      <div className="aside__ticket-odd-list">
                        <div className="aside__ticket-odd-list-inner">
                          <div className="aside__ticket-odd-item-field">
                            <span className="aside__ticket-odd-item">2</span>
                          </div>
                          <div className="aside__ticket-odd-item-field">
                            <span className="aside__ticket-odd-item aside__ticket-odd-item--red">
                              12
                            </span>
                          </div>
                          <div className="aside__ticket-odd-item-field">
                            <span className="aside__ticket-odd-item">6</span>
                          </div>
                          <div className="aside__ticket-odd-item-field">
                            <span className="aside__ticket-odd-item">21</span>
                          </div>
                          <div className="aside__ticket-odd-item-field">
                            <span className="aside__ticket-odd-item">2</span>
                          </div>
                          <div className="aside__ticket-odd-item-field">
                            <span className="aside__ticket-odd-item aside__ticket-odd-item--red">
                              2
                            </span>
                          </div>
                          <div className="aside__ticket-odd-item-field">
                            <span className="aside__ticket-odd-item aside__ticket-odd-item--red">
                              2
                            </span>
                          </div>
                          <div className="aside__ticket-odd-item-field">
                            <span className="aside__ticket-odd-item aside__ticket-odd-item--red">
                              2
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="aside__ticket-item">
                  <div className="aside__ticket">
                    <div className="aside__ticket-head">Ticket 5</div>
                    <div className="aside__ticket-body">
                      <div className="aside__ticket-body-amount">
                        10.000.000
                      </div>
                      <div className="aside__ticket-body-amount">x5</div>
                      <div className="aside__ticket-odd-color-field ">
                        <div className="aside__ticket-odd-color "/>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="aside__ticket-item">
                  <div className="aside__ticket">
                    <div className="aside__ticket-head">Ticket 5</div>
                    <div className="aside__ticket-body">
                      <div className="aside__ticket-body-amount">
                        10.000.000
                      </div>
                      <div className="aside__ticket-body-amount">x2</div>
                      <div className="aside__ticket-odd-list">
                        <div className="aside__ticket-odd-list-inner">
                          <div className="aside__ticket-odd-item-field">
                            <span className="aside__ticket-odd-item">2</span>
                          </div>
                          <div className="aside__ticket-odd-item-field">
                            <span className="aside__ticket-odd-item aside__ticket-odd-item--red">
                              12
                            </span>
                          </div>
                          <div className="aside__ticket-odd-item-field">
                            <span className="aside__ticket-odd-item">6</span>
                          </div>
                          <div className="aside__ticket-odd-item-field">
                            <span className="aside__ticket-odd-item">21</span>
                          </div>
                          <div className="aside__ticket-odd-item-field">
                            <span className="aside__ticket-odd-item">2</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
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
                        {renderSpinnerValue()}
                      </div>
                    </li>
                    <li className="spinner__amount-item spinner__amount--8">
                      <div className="spinner__amount-container">
                        <div className="spinner__amount-container-value"/>
                        {renderSpinnerValue()}
                      </div>
                    </li>
                    <li className="spinner__amount-item spinner__amount--3">
                      <div className="spinner__amount-container">
                        <div className="spinner__amount-container-value"/>
                        {renderSpinnerValue()}
                      </div>
                    </li>
                    <li className="spinner__amount-item spinner__amount--2">
                      <div className="spinner__amount-container ">
                        <div className="spinner__amount-container-value"/>
                        {renderSpinnerValue()}
                      </div>
                    </li>
                    <li className="spinner__amount-item spinner__amount--0">
                      <div className="spinner__amount-container">
                        <div className="spinner__amount-container-value"/>
                        {renderSpinnerValue()}
                      </div>
                    </li>
                    <li className="spinner__amount-item spinner__amount--4">
                      <div className="spinner__amount-container">
                        <div className="spinner__amount-container-value"/>
                        {renderSpinnerValue()}
                      </div>
                    </li>
                    <li className="spinner__amount-item spinner__amount--5">
                      <div className="spinner__amount-container ">
                        <div className="spinner__amount-container-value"/>
                        {renderSpinnerValue()}
                      </div>
                    </li>
                    <li className="spinner__amount-item spinner__amount--6">
                      <div className="spinner__amount-container">
                        <div className="spinner__amount-container-value"/>
                        {renderSpinnerValue()}
                      </div>
                    </li>
                    <li className="spinner__amount-item spinner__amount--7">
                      <div className="spinner__amount-container">
                        <div className="spinner__amount-container-value"/>
                        {renderSpinnerValue()}
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
                        <stop offset="0" stopColor="#ffdfb1"/>
                        <stop offset="0.5" stopColor="#ffce85"/>
                        <stop offset="1" stopColor="#d98011"/>
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
              <div className={classNames("main__statistics ",
                isStatisticsActive && 'active')}>
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
                        <div className="statistics__item-stake-number">1</div>
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
                        <div className="statistics__item-stake-number statistics__item-stake-number--red">
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
                        <div className="statistics__item-stake-number">1</div>
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
                        <div className="statistics__item-stake-number">15</div>
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
                        <div className="statistics__item-stake-number statistics__item-stake-number--red">
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
                        <div className="statistics__item-stake-number statistics__item-stake-number--red">
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
                        <div className="statistics__item-stake-number">20</div>
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
                        <div className="statistics__item-stake-number">11</div>
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
                        <div className="statistics__item-stake-number">5</div>
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
                        <div className="statistics__item-stake-number statistics__item-stake-number--red">
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
                        <div className="statistics__item-stake-number">4</div>
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
                        <div className="statistics__item-stake-number">20</div>
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
                        <div className="statistics__item-stake-number">11</div>
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
                        <div className="statistics__item-stake-number">5</div>
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
                        <div className="statistics__item-stake-number">1</div>
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
                        <div className="statistics__item-stake-number">4</div>
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
                        <div className="statistics__item-stake-number">20</div>
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
                        <div className="statistics__item-stake-number">11</div>
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
                        <div className="statistics__item-stake-number">5</div>
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

              <div className="main__grid">
                <div className="main__grid-top">
                  <button
                    type="button"
                    className={classNames("main__grid-top-button", {active: isZero})} onClick={zeroHandler}>
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
                      <button className="main__grid-left-button" onClick={f18Handler}>
                        <span className="main__grid-left-button-inner">
                          1-18
                        </span>
                      </button>
                    </div>
                    <div className="main__grid-left-group">
                      <button className="main__grid-left-button" onClick={evenHandler}>
                        <span className="main__grid-left-button-inner">
                          EVEN
                        </span>
                      </button>
                    </div>
                    <div className="main__grid-left-group main__grid-left-group-color">
                      <button className="main__grid-left-button" onClick={redHandler}>
                        <span className="main__grid-left-button-color main__grid-left-button-color--red"/>
                      </button>
                    </div>
                    <div className="main__grid-left-group main__grid-left-group-color">
                      <button className="main__grid-left-button" onClick={blackHandler}>
                        <span className="main__grid-left-button-color"/>
                      </button>
                    </div>
                    <div className="main__grid-left-group">
                      <button className="main__grid-left-button" onClick={oddHandler}>
                        <span className="main__grid-left-button-inner">
                          ODD
                        </span>
                      </button>
                    </div>
                    <div className="main__grid-left-group">
                      <button className="main__grid-left-button" onClick={l18Handler}>
                        <span className="main__grid-left-button-inner">
                          19-36
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="main__grid-middle">
                    <div className="main__grid-middle-column">
                      {renderColumn(0)}
                    </div>
                    <div className="main__grid-middle-column">
                      {renderColumn(1)}
                    </div>
                    <div className="main__grid-middle-column">
                      {renderColumn(2)}
                    </div>
                  </div>
                  <div className="main__grid-right">
                    <div className="main__grid-left-group">
                      <button className="main__grid-left-button" onClick={f12Handler}>
                        <span className="main__grid-left-button-inner">
                          1<strong>ST</strong>12
                        </span>
                      </button>
                    </div>
                    <div className="main__grid-left-group">
                      <button className="main__grid-left-button" onClick={m12Handler}>
                        <span className="main__grid-left-button-inner">
                          2<strong>ND</strong>12
                        </span>
                      </button>
                    </div>
                    <div className="main__grid-left-group">
                      <button className="main__grid-left-button" onClick={l12Handler}>
                        <span className="main__grid-left-button-inner">
                          3<strong>RD</strong> 12
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="main__grid-bottom">
                  <div className="main__grid-bottom-group">
                    <button type="button" className="main__grid-bottom-button" onClick={aHandler}>
                      A
                    </button>
                  </div>
                  <div className="main__grid-bottom-group">
                    <button type="button" className="main__grid-bottom-button" onClick={bHandler}>
                      B
                    </button>
                  </div>
                  <div className="main__grid-bottom-group">
                    <button type="button" className="main__grid-bottom-button" onClick={cHandler}>
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
                      d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"/>
                  </svg>
                </button>
              </div>
              <div className="main__button-field">
                <Link to={"/mobile-start"} className="main__button">
                  OK
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="error__popup-field ">
        <div className="error__popup-close"/>
        <div className="error__popup">
          <button className="error__popup-close-button">
            <img src={close} alt="Close" className="history__close-svg"/>
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
