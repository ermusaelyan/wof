import roulette from '../../assets/img/global/roulette.png'
import startRoulette from '../../assets/img/global/start-roulette.png'
import startRouletteArrow from '../../assets/img/global/start-roulette-arrow.png'
import rouletteZoom from '../../assets/img/desktop/roulette-zoom.png'
import zoomShadow from '../../assets/img/global/zoom-shadow.png'
import close from '../../assets/img/global/close.svg'
import logo from '../../assets/img/global/logo.svg'
import insufficientFound from '../../assets/img/global/insufficient-funds.svg'
import {MobileHeader} from "../../components/MobileHeader/MobileHeader";

export const MobileStart = () => {
  return (
    <div className="wof">
      <MobileHeader/>
      <div className="wrapper">
        <div className="start">
          <div className="start__roulette-field">
            <div className="start__roulette">
              <img src={startRoulette} alt="Roulette"
                   className="start__roulette-img start__roulette-img--mobile"/>
              <img src={roulette} alt="Roulette"
                   className="start__roulette-img start__roulette-img--desktop"/>
            </div>
            <div className="start__roulette-arrow">
              <img src={startRouletteArrow} alt="Roulette Arrow"
                   className="start__roulette-arrow-img"/>
            </div>
            <div className="start__roulette-zoom active">
              <div className="zoom">
                <img src={zoomShadow} alt="" className="zoom-shadow"/>
                <div className="zoom__roulette-field">
                  <div className="zoom__roulette">
                    <img src={startRoulette} alt="Roulette"
                         className="zoom__roulette-img start__roulette-img--mobile"/>
                    <img src={rouletteZoom} alt="Roulette"
                         className="zoom__roulette-img start__roulette-img--desktop"/>
                  </div>
                </div>
                <div className="zoom__roulette-arrow">
                  <img src={startRouletteArrow} alt="Roulette Arrow"
                       className="zoom__roulette-arrow-img"/>
                </div>
                <div className="zoom-inner-shadow">
                </div>
              </div>
            </div>
          </div>

          <div className="start__ticket-list-field">
            <div className="start__ticket-list">
              <ul className="start__ticket-list-inner">
                <li className="start__ticket-item active">
                  <div className="start__ticket-head">
                    <div className="start__ticket-title">Ticket 1</div>
                    <div className="start__ticket-time">14:22</div>
                    <div className="start__ticket-bet">
                      <div className="start__ticket-bet-title">Bet</div>
                      <div className="start__ticket-bet-amount">500</div>
                      <div className="start__ticket-bet-amount-x">2x</div>
                    </div>
                  </div>
                  <div className="start__ticket-body">
                    <div className="start__ticket-odd-list">
                      <div
                        className="start__ticket-odd-item-field start__ticket-odd-item-field--red ">
                        <div className="start__ticket-odd-item-field-inner">
                            <span className="start__ticket-odd-item">6</span>
                            <span className="start__ticket-odd-item-chip-list"/>
                        </div>
                      </div>
                      <div className="start__ticket-odd-item-field ">
                        <div className="start__ticket-odd-item-field-inner">
                            <span className="start__ticket-odd-item">10</span>
                            <span className="start__ticket-odd-item-chip-list"/>
                        </div>
                      </div>
                      <div className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                        <div className="start__ticket-odd-item-field-inner">
                            <span className="start__ticket-odd-item">5</span>
                            <span className="start__ticket-odd-item-chip-list" />
                        </div>
                      </div>
                      <div className="start__ticket-odd-item-field ">
                        <div className="start__ticket-odd-item-field-inner">
                            <span className="start__ticket-odd-item">6</span>
                            <span className="start__ticket-odd-item-chip-list"/>
                        </div>
                      </div>
                      <div className="start__ticket-odd-item-field win-animate">
                        <div className="start__ticket-odd-item-field-inner">
                            <span className="start__ticket-odd-item">10</span>
                            <span className="start__ticket-odd-item-chip-list"/>
                        </div>
                      </div>
                      <div
                        className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                        <div className="start__ticket-odd-item-field-inner">
                            <span className="start__ticket-odd-item">5</span>
                            <span className="start__ticket-odd-item-chip-list"/>
                        </div>
                      </div>
                      <div
                        className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  6
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div className="start__ticket-odd-item-field ">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div className="start__ticket-odd-item-field ">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
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
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div className="start__ticket-odd-item-field ">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div
                        className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div
                        className="start__ticket-odd-item-field start__ticket-odd-item-field--ed">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  6
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div className="start__ticket-odd-item-field ">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div
                        className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div
                        className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  6
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div className="start__ticket-odd-item-field ">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div className="start__ticket-odd-item-field ">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
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
                      <div className="start__ticket-bet-amount">500</div>
                      <div className="start__ticket-bet-amount-x">2x</div>
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
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div className="start__ticket-odd-item-field ">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div
                        className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div className="start__ticket-odd-item-field ">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  6
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div className="start__ticket-odd-item-field ">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div
                        className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div
                        className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  6
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div className="start__ticket-odd-item-field ">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div className="start__ticket-odd-item-field ">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
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
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div className="start__ticket-odd-item-field ">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div
                        className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div
                        className="start__ticket-odd-item-field start__ticket-odd-item-field--ed">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  6
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div className="start__ticket-odd-item-field ">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div
                        className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div
                        className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  6
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div className="start__ticket-odd-item-field ">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div className="start__ticket-odd-item-field ">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
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
                      <div className="start__ticket-bet-amount">500</div>
                      <div className="start__ticket-bet-amount-x">2x</div>
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
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div className="start__ticket-odd-item-field ">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div
                        className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div className="start__ticket-odd-item-field ">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  6
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div className="start__ticket-odd-item-field ">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div
                        className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div
                        className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  6
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div className="start__ticket-odd-item-field ">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div className="start__ticket-odd-item-field ">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
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
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div className="start__ticket-odd-item-field ">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div
                        className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div
                        className="start__ticket-odd-item-field start__ticket-odd-item-field--ed">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  6
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div className="start__ticket-odd-item-field ">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div
                        className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div
                        className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  6
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div className="start__ticket-odd-item-field ">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div className="start__ticket-odd-item-field ">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
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
                      <div className="start__ticket-bet-amount">500</div>
                      <div className="start__ticket-bet-amount-x">2x</div>
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
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div className="start__ticket-odd-item-field ">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div
                        className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div className="start__ticket-odd-item-field ">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  6
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div className="start__ticket-odd-item-field ">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div
                        className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div
                        className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  6
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div className="start__ticket-odd-item-field ">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
                        </div>
                      </div>
                      <div className="start__ticket-odd-item-field ">
                        <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                          <span className="start__ticket-odd-item-chip-list">
                  </span>
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
              <img src={logo} alt="Logo" className="current__game-empty-img"/>
            </div>
            <div className="current__game-empty-text">Please choose numbers
              for the next draw
            </div>
          </div>

        </div>
        <div className="popup__field">
          <div className="history__popup-field history__popup">
            <div className="history__body">
              <button type="button" className="history__close-field history__close">
                <img src={close} alt="Close" className="history__close-svg"/>
              </button>
              <ul className="history__tab-list">
                <li className="history__tab-item active">
                  <a className="history__tab-link">Draw history</a>
                </li>
                <li className="history__tab-item ">
                  <a className="history__tab-link">My history</a>
                </li>
              </ul>
              <ul className="history__inner-list">
                <li className="history__inner-item draw-history active">
                  <div className="draw-history__list">
                    <div className="draw-history__item">
                      <div className="draw-history__left">
                        <div className="draw-history__id">
                          <span className="draw-history__id-title">ID</span><span
                          className="draw-history__id-colon">:</span>
                          <span className="draw-history__id-number">123654</span>
                        </div>
                        <div className="draw-history__time">14:22</div>
                      </div>
                      <div className="draw-history__right">
                        <div className="draw-history__odd">
                          15
                        </div>
                      </div>
                    </div>
                    <div className="draw-history__item ">
                      <div className="draw-history__left">
                        <div className="draw-history__id">
                          <span className="draw-history__id-title">ID</span><span
                          className="draw-history__id-colon">:</span>
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
                          <span className="draw-history__id-title">ID</span><span
                          className="draw-history__id-colon">:</span>
                          <span className="draw-history__id-number">123654</span>
                        </div>
                        <div className="draw-history__time">14:22</div>
                      </div>
                      <div className="draw-history__right">
                        <div className="draw-history__odd">
                          15
                        </div>
                      </div>
                    </div>
                    <div className="draw-history__item ">
                      <div className="draw-history__left">
                        <div className="draw-history__id">
                          <span className="draw-history__id-title">ID</span><span
                          className="draw-history__id-colon">:</span>
                          <span className="draw-history__id-number">123654</span>
                        </div>
                        <div className="draw-history__time">14:22</div>
                      </div>
                      <div className="draw-history__right">
                        <div className="draw-history__odd">
                          15
                        </div>
                      </div>
                    </div>
                    <div className="draw-history__item">
                      <div className="draw-history__left">
                        <div className="draw-history__id">
                          <span className="draw-history__id-title">ID</span><span
                          className="draw-history__id-colon">:</span>
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
                          <span className="draw-history__id-title">ID</span><span
                          className="draw-history__id-colon">:</span>
                          <span className="draw-history__id-number">123654</span>
                        </div>
                        <div className="draw-history__time">14:22</div>
                      </div>
                      <div className="draw-history__right">
                        <div className="draw-history__odd">
                          15
                        </div>
                      </div>
                    </div>
                    <div className="draw-history__item ">
                      <div className="draw-history__left">
                        <div className="draw-history__id">
                          <span className="draw-history__id-title">ID</span><span
                          className="draw-history__id-colon">:</span>
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
                          <span className="draw-history__id-title">ID</span><span
                          className="draw-history__id-colon">:</span>
                          <span className="draw-history__id-number">123654</span>
                        </div>
                        <div className="draw-history__time">14:22</div>
                      </div>
                      <div className="draw-history__right">
                        <div className="draw-history__odd">
                          15
                        </div>
                      </div>
                    </div>
                    <div className="draw-history__item ">
                      <div className="draw-history__left">
                        <div className="draw-history__id">
                          <span className="draw-history__id-title">ID</span><span
                          className="draw-history__id-colon">:</span>
                          <span className="draw-history__id-number">123654</span>
                        </div>
                        <div className="draw-history__time">14:22</div>
                      </div>
                      <div className="draw-history__right">
                        <div className="draw-history__odd">
                          15
                        </div>
                      </div>
                    </div>
                    <div className="draw-history__item">
                      <div className="draw-history__left">
                        <div className="draw-history__id">
                          <span className="draw-history__id-title">ID</span><span
                          className="draw-history__id-colon">:</span>
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
                          <span className="draw-history__id-title">ID</span><span
                          className="draw-history__id-colon">:</span>
                          <span className="draw-history__id-number">123654</span>
                        </div>
                        <div className="draw-history__time">14:22</div>
                      </div>
                      <div className="draw-history__right">
                        <div className="draw-history__odd">
                          15
                        </div>
                      </div>
                    </div>
                    <div className="draw-history__item ">
                      <div className="draw-history__left">
                        <div className="draw-history__id">
                          <span className="draw-history__id-title">ID</span><span
                          className="draw-history__id-colon">:</span>
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
                          <span className="draw-history__id-title">ID</span><span
                          className="draw-history__id-colon">:</span>
                          <span className="draw-history__id-number">123654</span>
                        </div>
                        <div className="draw-history__time">14:22</div>
                      </div>
                      <div className="draw-history__right">
                        <div className="draw-history__odd">
                          15
                        </div>
                      </div>
                    </div>
                    <div className="draw-history__item ">
                      <div className="draw-history__left">
                        <div className="draw-history__id">
                          <span className="draw-history__id-title">ID</span><span
                          className="draw-history__id-colon">:</span>
                          <span className="draw-history__id-number">123654</span>
                        </div>
                        <div className="draw-history__time">14:22</div>
                      </div>
                      <div className="draw-history__right">
                        <div className="draw-history__odd">
                          15
                        </div>
                      </div>
                    </div>
                    <div className="draw-history__item">
                      <div className="draw-history__left">
                        <div className="draw-history__id">
                          <span className="draw-history__id-title">ID</span><span
                          className="draw-history__id-colon">:</span>
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
                          <span className="draw-history__id-title">ID</span><span
                          className="draw-history__id-colon">:</span>
                          <span className="draw-history__id-number">123654</span>
                        </div>
                        <div className="draw-history__time">14:22</div>
                      </div>
                      <div className="draw-history__right">
                        <div className="draw-history__odd">
                          15
                        </div>
                      </div>
                    </div>
                    <div className="draw-history__item ">
                      <div className="draw-history__left">
                        <div className="draw-history__id">
                          <span className="draw-history__id-title">ID</span><span
                          className="draw-history__id-colon">:</span>
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
                          <span className="draw-history__id-title">ID</span><span
                          className="draw-history__id-colon">:</span>
                          <span className="draw-history__id-number">123654</span>
                        </div>
                        <div className="draw-history__time">14:22</div>
                      </div>
                      <div className="draw-history__right">
                        <div className="draw-history__odd">
                          15
                        </div>
                      </div>
                    </div>
                    <div className="draw-history__item ">
                      <div className="draw-history__left">
                        <div className="draw-history__id">
                          <span className="draw-history__id-title">ID</span><span
                          className="draw-history__id-colon">:</span>
                          <span className="draw-history__id-number">123654</span>
                        </div>
                        <div className="draw-history__time">14:22</div>
                      </div>
                      <div className="draw-history__right">
                        <div className="draw-history__odd">
                          15
                        </div>
                      </div>
                    </div>
                    <div className="draw-history__item">
                      <div className="draw-history__left">
                        <div className="draw-history__id">
                          <span className="draw-history__id-title">ID</span><span
                          className="draw-history__id-colon">:</span>
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
                          <span className="draw-history__id-title">ID</span><span
                          className="draw-history__id-colon">:</span>
                          <span className="draw-history__id-number">123654</span>
                        </div>
                        <div className="draw-history__time">14:22</div>
                      </div>
                      <div className="draw-history__right">
                        <div className="draw-history__odd">
                          15
                        </div>
                      </div>
                    </div>
                    <div className="draw-history__item ">
                      <div className="draw-history__left">
                        <div className="draw-history__id">
                          <span className="draw-history__id-title">ID</span><span
                          className="draw-history__id-colon">:</span>
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
                          <span className="draw-history__id-title">ID</span><span
                          className="draw-history__id-colon">:</span>
                          <span className="draw-history__id-number">123654</span>
                        </div>
                        <div className="draw-history__time">14:22</div>
                      </div>
                      <div className="draw-history__right">
                        <div className="draw-history__odd">
                          15
                        </div>
                      </div>
                    </div>
                    <div className="draw-history__item ">
                      <div className="draw-history__left">
                        <div className="draw-history__id">
                          <span className="draw-history__id-title">ID</span><span
                          className="draw-history__id-colon">:</span>
                          <span className="draw-history__id-number">123654</span>
                        </div>
                        <div className="draw-history__time">14:22</div>
                      </div>
                      <div className="draw-history__right">
                        <div className="draw-history__odd">
                          15
                        </div>
                      </div>
                    </div>
                    <div className="draw-history__item">
                      <div className="draw-history__left">
                        <div className="draw-history__id">
                          <span className="draw-history__id-title">ID</span><span
                          className="draw-history__id-colon">:</span>
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
                </li>
                <li className="history__inner-item my-history ">
                  <div className="my-history__list">
                    <div className="my-history__item">
                      <div className="my-history__item-id">
                        <span className="my-history__item-id-title">ID</span><span
                        className="my-history__item-id-colon">:</span>
                        <span className="my-history__item-id-number">123456</span>
                      </div>
                      <div className=" my-history__ticket-list">
                        <div className="start__ticket-item  active">
                          <div className="start__ticket-head">
                            <div className="start__ticket-left">
                              <div className="start__ticket-title">Ticket 1</div>
                              <div className="start__ticket-bet">
                                <div className="start__ticket-bet-title">Bet</div>
                                <div className="start__ticket-bet-amount">500</div>
                                <div className="start__ticket-bet-amount-x">2x</div>
                              </div>

                            </div>
                            <div className="start__ticket-time">14:22</div>
                            <div className="start__ticket-right">
                              <div className="start__ticket-win">
                                <span className="start__ticket-win--win">Win</span>
                                <span className="start__ticket-win--loss">Loss</span>
                              </div>
                              <div className="start__ticket-amount">
                                <span className="start__ticket-amount--win">$1000</span>
                                <span className="start__ticket-amount--loss">-</span>
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
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div
                                className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  6
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div
                                className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div
                                className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  6
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
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
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div
                                className="start__ticket-odd-item-field start__ticket-odd-item-field--ed">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  6
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div
                                className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div
                                className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  6
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
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
                                <div className="start__ticket-bet-amount">500</div>
                                <div className="start__ticket-bet-amount-x">2x</div>
                              </div>

                            </div>
                            <div className="start__ticket-time">14:22</div>
                            <div className="start__ticket-right">
                              <div className="start__ticket-win">
                                <span className="start__ticket-win--win">Win</span>
                                <span className="start__ticket-win--loss">Loss</span>
                              </div>
                              <div className="start__ticket-amount">
                                <span className="start__ticket-amount--win">$1000</span>
                                <span className="start__ticket-amount--loss">-</span>
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
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div
                                className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  6
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div
                                className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div
                                className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  6
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="start__ticket-odd-list">

                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div
                                className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div
                                className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  6
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
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
                                <div className="start__ticket-bet-amount">500</div>
                                <div className="start__ticket-bet-amount-x">2x</div>
                              </div>

                            </div>
                            <div className="start__ticket-time">14:22</div>
                            <div className="start__ticket-right">
                              <div className="start__ticket-win">
                                <span className="start__ticket-win--win">Win</span>
                                <span className="start__ticket-win--loss">Loss</span>
                              </div>
                              <div className="start__ticket-amount">
                                <span className="start__ticket-amount--win">$1000</span>
                                <span className="start__ticket-amount--loss">-</span>
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
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div
                                className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  6
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div
                                className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div
                                className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  6
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
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
                                <div className="start__ticket-bet-amount">500</div>
                                <div className="start__ticket-bet-amount-x">2x</div>
                              </div>

                            </div>
                            <div className="start__ticket-time">14:22</div>
                            <div className="start__ticket-right">
                              <div className="start__ticket-win">
                                <span className="start__ticket-win--win">Win</span>
                                <span className="start__ticket-win--loss">Loss</span>
                              </div>
                              <div className="start__ticket-amount">
                                <span className="start__ticket-amount--win">$1000</span>
                                <span className="start__ticket-amount--loss">-</span>
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
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  6
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div
                                className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div
                                className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  6
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="my-history__item">
                      <div className="my-history__item-id">
                        <span className="my-history__item-id-title">ID</span><span
                        className="my-history__item-id-colon">:</span>
                        <span className="my-history__item-id-number">123456</span>
                      </div>
                      <div className=" my-history__ticket-list">
                        <div className="start__ticket-item  active">
                          <div className="start__ticket-head">
                            <div className="start__ticket-left">
                              <div className="start__ticket-title">Ticket 1</div>
                              <div className="start__ticket-bet">
                                <div className="start__ticket-bet-title">Bet</div>
                                <div className="start__ticket-bet-amount">500</div>
                                <div className="start__ticket-bet-amount-x">2x</div>
                              </div>

                            </div>
                            <div className="start__ticket-time">14:22</div>
                            <div className="start__ticket-right">
                              <div className="start__ticket-win">
                                <span className="start__ticket-win--win">Win</span>
                                <span className="start__ticket-win--loss">Loss</span>
                              </div>
                              <div className="start__ticket-amount">
                                <span className="start__ticket-amount--win">$1000</span>
                                <span className="start__ticket-amount--loss">-</span>
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
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div
                                className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  6
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div
                                className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div
                                className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  6
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
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
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div
                                className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div
                                className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>

                              <div
                                className="start__ticket-odd-item-field start__ticket-odd-item-field--ed">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  6
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div
                                className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div
                                className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  6
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
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
                                <div className="start__ticket-bet-amount">500</div>
                                <div className="start__ticket-bet-amount-x">2x</div>
                              </div>

                            </div>
                            <div className="start__ticket-time">14:22</div>
                            <div className="start__ticket-right">
                              <div className="start__ticket-win">
                                <span className="start__ticket-win--win">Win</span>
                                <span className="start__ticket-win--loss">Loss</span>
                              </div>
                              <div className="start__ticket-amount">
                                <span className="start__ticket-amount--win">$1000</span>
                                <span className="start__ticket-amount--loss">-</span>
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
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div
                                className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  6
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div
                                className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div
                                className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  6
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="start__ticket-odd-list">

                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div
                                className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div
                                className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  6
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
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
                                <div className="start__ticket-bet-amount">500</div>
                                <div className="start__ticket-bet-amount-x">2x</div>
                              </div>

                            </div>
                            <div className="start__ticket-time">14:22</div>
                            <div className="start__ticket-right">
                              <div className="start__ticket-win">
                                <span className="start__ticket-win--win">Win</span>
                                <span className="start__ticket-win--loss">Loss</span>
                              </div>
                              <div className="start__ticket-amount">
                                <span className="start__ticket-amount--win">$1000</span>
                                <span className="start__ticket-amount--loss">-</span>
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
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div
                                className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  6
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div
                                className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div
                                className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  6
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
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
                                <div className="start__ticket-bet-amount">500</div>
                                <div className="start__ticket-bet-amount-x">2x</div>
                              </div>

                            </div>
                            <div className="start__ticket-time">14:22</div>
                            <div className="start__ticket-right">
                              <div className="start__ticket-win">
                                <span className="start__ticket-win--win">Win</span>
                                <span className="start__ticket-win--loss">Loss</span>
                              </div>
                              <div className="start__ticket-amount">
                                <span className="start__ticket-amount--win">$1000</span>
                                <span className="start__ticket-amount--loss">-</span>
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
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  6
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div
                                className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div
                                className="start__ticket-odd-item-field start__ticket-odd-item-field--red">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  6
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  10
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
                                </div>
                              </div>
                              <div className="start__ticket-odd-item-field ">
                                <div className="start__ticket-odd-item-field-inner">
                  <span className="start__ticket-odd-item">
                  5
                  </span>
                                  <span className="start__ticket-odd-item-chip-list">
                  </span>
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
          <div className="history__popup-field info__popup">
            <div className="history__body">
              <button type="button" className="history__close-field info__close">
                <img src={close} alt="Close" className="history__close-svg"/>
              </button>
              <ul className="history__tab-list">
                <li className="history__tab-item active">
                  <a className="history__tab-link">How to Play</a>
                </li>
                <li className="history__tab-item ">
                  <a className="history__tab-link">Rules</a>
                </li>
              </ul>
              <ul className="history__inner-list">
                <li className="history__inner-item draw-history active">
                  <div className="info__text">Lorem ipsum, or lipsum as it is sometimes know n, is
                    dummy text used in laying out
                    print, graphic or web designs. The passage is attributed to an unknown
                    typesetter in the 15th century
                    who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum
                    for use in a type
                    specimen book.
                  </div>
                  <div className="info__text">Lorem ipsum, or lipsum as it is sometimes know n, is
                    dummy text used in laying out
                    print, graphic or web designs. The passage is attributed to an unknown
                    typesetter in the 15th century
                    who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum
                    for use in a type
                    specimen book.
                  </div>
                  <div className="info__text">Lorem ipsum, or lipsum as it is sometimes know n, is
                    dummy text used in laying out
                    print, graphic or web designs. The passage is attributed to an unknown
                    typesetter in the 15th century
                    who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum
                    for use in a type
                    specimen book.
                  </div>
                </li>
                <li className="history__inner-item my-history ">

                </li>
              </ul>
            </div>
          </div>
          <div className="error__popup-field ">
            <div className="error__popup-close"/>
            <div className="error__popup">
              <button className="error__popup-close-button">
                <svg className="error__close-svg" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 80.2 80.11">
                  <path
                    d="M65.9,1.51,40.1,27.31,14.3,1.51a5,5,0,0,0-7.1,0L1.5,7.21a5,5,0,0,0,0,7.1l25.8,25.8L1.6,65.81a5,5,0,0,0,0,7.1l5.7,5.7a5,5,0,0,0,7.1,0l25.7-25.9,25.8,25.8a5,5,0,0,0,7.1,0l5.7-5.7a5,5,0,0,0,0-7.1L52.8,40l25.8-25.8a5,5,0,0,0,0-7.1l-5.7-5.7A4.92,4.92,0,0,0,65.9,1.51Z"></path>
                </svg>
              </button>
              <div className="error__popup-body">
                <div className="error__popup-icon">
                  <img src={insufficientFound} alt="Error"
                       className="error__popup-icon-img"/>
                </div>
                <div className="error__popup-text">You have insufficient funds</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
