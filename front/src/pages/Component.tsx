import { FunctionComponent } from 'react';
import HeaderCatalogTickets from '../components/HeaderCatalogTickets';
import FilterSidebar from '../components/FilterSidebar';
import Ticket from '../components/Ticket';
import AviacompanyLogo from '../components/AviacompanyLogo';
import Waytime from '../components/Waytime';
import ButtonWithIconAfter from '../components/ButtonWithIconAfter';
import FlightTimePortDetails from '../components/FlightTimePortDetails';
import FlightArrow from '../components/FlightArrow';
import FlightDuration from '../components/FlightDuration';
import FlightTransfer from '../components/FlightTransfer';
import FlightPortDetails from '../components/FlightPortDetails';
import Button from '../components/Button';
import Footer from '../components/Footer';
import styles from './Component.module.css';

const Component: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <div className={styles.tickets}>
        <HeaderCatalogTickets />
        <div className={styles.filtertickets}>
          <FilterSidebar />
          <div className={styles.tickets1}>
            <button className={styles.button}>
              <img className={styles.icons16px} alt="" src="../icons/icons-16px10.svg" />
              <div className={styles.div1}>Фильтр</div>
            </button>
            <Ticket
              companyName="Победа"
              dateFrom="23 ноября, Ср"
              timeFrom="12:10"
              airportFrom="Москва, Внуково (VKO) "
              price="9 985 ₽"
            />
            <div className={styles.ticket}>
              <div className={styles.waytimeavia}>
                <AviacompanyLogo logo="../icons/logo2.svg" companyName="Nordwind" />
                <Waytime
                  dateFrom="11:12"
                  timeFrom="23 ноября, Ср"
                  airportFrom="Москва, Внуково (VKO) "
                  dateTo="05:22"
                  timeTo="24 ноября, Ср"
                  airportTo="Санкт-Петербург, Пулково (LED)"
                  duration="13 ч 10 мин"
                  tag="1 пересадка"
                />
              </div>
              <div className={styles.rectangleDiv} />
              <div className={styles.pricedetailsButton}>
                <div className={styles.pricebutton}>
                  <div className={styles.div2}>12 985 ₽</div>
                  <button className={styles.button1}>
                    <div className={styles.div3}>Забронировать</div>
                  </button>
                </div>
                <ButtonWithIconAfter reviewText="Детали перелета" icons16px="../icons/icons-16px18.svg" />
              </div>
            </div>
            <div className={styles.ticket1}>
              <div className={styles.waytimeavia}>
                <div className={styles.avia}>
                  <img className={styles.logoIcon} alt="" src="../icons/logo2.svg" />
                  <div className={styles.div4}>Nordwind</div>
                </div>
                <div className={styles.waytime}>
                  <div className={styles.way}>
                    <FlightTimePortDetails date="20:10" time="23 ноября, Ср" airport="Москва, Внуково (VKO) " />
                    <FlightArrow />
                    <FlightTimePortDetails date="22:41" time="24 ноября, Ср" airport="Саратов, Гагарин (GSV)" />
                  </div>
                  <div className={styles.timestatus}>
                    <FlightDuration duration="5 ч 31 мин" />
                    <div className={styles.div5}>1 пересадка</div>
                  </div>
                </div>
                <FlightTransfer duation="13 ч 24 мин" />
                <div className={styles.waytime1}>
                  <div className={styles.way}>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div6}>23 ноября, Ср</div>
                        <span className={styles.span}>20:10</span>
                      </div>
                      <FlightPortDetails airport="Саратов, Гагарин (GSV)" />
                    </div>
                    <FlightArrow />
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div6}>23 ноября, Ср</div>
                        <span className={styles.span}>22:41</span>
                      </div>
                      <FlightPortDetails airport="Санкт-Петербург, Пулково (LED)" />
                    </div>
                  </div>
                  <div className={styles.timestatus1}>
                    <FlightDuration duration="5 ч 31 мин" />
                    <div className={styles.div5}>1 пересадка</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleDiv} />
              <div className={styles.pricedetailsButton1}>
                <div className={styles.pricebutton}>
                  <div className={styles.div2}>9 985 ₽</div>
                  <Button>Забронировать</Button>
                </div>
                <Button iconAfter="../icons/icons-16px20.svg" variant="text" className={styles.ticketExpand}>
                  Cкрыть детали
                </Button>
              </div>
            </div>
            <div className={styles.ticket1}>
              <div className={styles.waytimeavia}>
                <div className={styles.avia}>
                  <img className={styles.logoIcon} alt="" src="../icons/logo10.svg" />
                  <div className={styles.div4}>Turkish airlines</div>
                </div>
                <div className={styles.waytime1}>
                  <div className={styles.way}>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div6}>23 ноября, Ср</div>
                        <span className={styles.span}>20:10</span>
                      </div>
                      <div className={styles.vKO}>{`Москва, Внуково (VKO) `}</div>
                    </div>
                    <div className={styles.line}>
                      <img className={styles.vectorIcon} alt="" src="../icons/vector-272.svg" />
                      <img className={styles.vectorIcon1} alt="" src="../icons/vector-271.svg" />
                    </div>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div6}>23 ноября, Ср</div>
                        <span className={styles.span}>22:41</span>
                      </div>
                      <div className={styles.vKO}>Санкт-Петербург, Пулково (LED)</div>
                    </div>
                  </div>
                  <div className={styles.timestatus1}>
                    <div className={styles.div13}>5 ч 31 мин</div>
                    <div className={styles.div14}>Прямой</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleDiv} />
              <div className={styles.pricebutton2}>
                <div className={styles.div15}>9 985 ₽</div>
                <button className={styles.button1}>
                  <div className={styles.div3}>Забронировать</div>
                </button>
              </div>
            </div>
            <div className={styles.ticket1}>
              <div className={styles.waytimeavia}>
                <div className={styles.avia}>
                  <img className={styles.logoIcon} alt="" src="../icons/logo4.svg" />
                  <div className={styles.div4}>SAS</div>
                </div>
                <div className={styles.waytime1}>
                  <div className={styles.way}>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div6}>23 ноября, Ср</div>
                        <span className={styles.span}>20:10</span>
                      </div>
                      <div className={styles.vKO}>{`Москва, Внуково (VKO) `}</div>
                    </div>
                    <div className={styles.line}>
                      <img className={styles.vectorIcon} alt="" src="../icons/vector-272.svg" />
                      <img className={styles.vectorIcon1} alt="" src="../icons/vector-271.svg" />
                    </div>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div6}>23 ноября, Ср</div>
                        <span className={styles.span}>22:41</span>
                      </div>
                      <div className={styles.vKO}>Санкт-Петербург, Пулково (LED)</div>
                    </div>
                  </div>
                  <div className={styles.timestatus1}>
                    <div className={styles.div13}>5 ч 31 мин</div>
                    <div className={styles.div14}>Прямой</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleDiv} />
              <div className={styles.pricebutton2}>
                <div className={styles.div15}>9 985 ₽</div>
                <button className={styles.button1}>
                  <div className={styles.div3}>Забронировать</div>
                </button>
              </div>
            </div>
            <div className={styles.ticket1}>
              <div className={styles.waytimeavia}>
                <div className={styles.avia}>
                  <img className={styles.logoIcon} alt="" src="../icons/logo5.svg" />
                  <div className={styles.div4}>Qatar Airways</div>
                </div>
                <div className={styles.waytime1}>
                  <div className={styles.way}>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div6}>23 ноября, Ср</div>
                        <span className={styles.span}>20:10</span>
                      </div>
                      <div className={styles.vKO}>{`Москва, Внуково (VKO) `}</div>
                    </div>
                    <div className={styles.line}>
                      <img className={styles.vectorIcon} alt="" src="../icons/vector-272.svg" />
                      <img className={styles.vectorIcon1} alt="" src="../icons/vector-271.svg" />
                    </div>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div6}>23 ноября, Ср</div>
                        <span className={styles.span}>22:41</span>
                      </div>
                      <div className={styles.vKO}>Санкт-Петербург, Пулково (LED)</div>
                    </div>
                  </div>
                  <div className={styles.timestatus1}>
                    <div className={styles.div13}>5 ч 31 мин</div>
                    <div className={styles.div14}>Прямой</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleDiv} />
              <div className={styles.pricebutton2}>
                <div className={styles.div15}>9 985 ₽</div>
                <button className={styles.button1}>
                  <div className={styles.div3}>Забронировать</div>
                </button>
              </div>
            </div>
            <div className={styles.ticket1}>
              <div className={styles.waytimeavia}>
                <div className={styles.avia}>
                  <img className={styles.logoIcon} alt="" src="../icons/logo13.svg" />
                  <div className={styles.div4}>Lufthansa</div>
                </div>
                <div className={styles.waytime1}>
                  <div className={styles.way}>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div6}>23 ноября, Ср</div>
                        <span className={styles.span}>20:10</span>
                      </div>
                      <div className={styles.vKO}>{`Москва, Внуково (VKO) `}</div>
                    </div>
                    <div className={styles.line}>
                      <img className={styles.vectorIcon} alt="" src="../icons/vector-272.svg" />
                      <img className={styles.vectorIcon1} alt="" src="../icons/vector-271.svg" />
                    </div>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div6}>23 ноября, Ср</div>
                        <span className={styles.span}>22:41</span>
                      </div>
                      <div className={styles.vKO}>Санкт-Петербург, Пулково (LED)</div>
                    </div>
                  </div>
                  <div className={styles.timestatus1}>
                    <div className={styles.div13}>5 ч 31 мин</div>
                    <div className={styles.div14}>Прямой</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleDiv} />
              <div className={styles.pricebutton2}>
                <div className={styles.div15}>9 985 ₽</div>
                <button className={styles.button1}>
                  <div className={styles.div3}>Забронировать</div>
                </button>
              </div>
            </div>
            <div className={styles.ticket1}>
              <div className={styles.waytimeavia}>
                <div className={styles.avia}>
                  <img className={styles.logoIcon} alt="" src="../icons/logo2.svg" />
                  <div className={styles.div4}>Nordwind</div>
                </div>
                <div className={styles.waytime1}>
                  <div className={styles.way}>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div6}>23 ноября, Ср</div>
                        <span className={styles.span}>11:12</span>
                      </div>
                      <div className={styles.vKO}>{`Москва, Внуково (VKO) `}</div>
                    </div>
                    <div className={styles.line4}>
                      <img className={styles.vectorIcon} alt="" src="../icons/vector-2721.svg" />
                      <div className={styles.pointTransfer}>
                        <div className={styles.tagTransfer}>
                          <div className={styles.price}>
                            <div className={styles.div40}>от 600 ₽</div>
                          </div>
                          <img className={styles.vectorIcon9} alt="" src="../icons/vector-167.svg" />
                        </div>
                        <img className={styles.pointTransferIcon} alt="" src="../icons/point-transfer.svg" />
                      </div>
                      <img className={styles.vectorIcon1} alt="" src="../icons/vector-2711.svg" />
                    </div>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div6}>24 ноября, Ср</div>
                        <span className={styles.span}>05:22</span>
                      </div>
                      <div className={styles.vKO}>Санкт-Петербург, Пулково (LED)</div>
                    </div>
                  </div>
                  <div className={styles.timestatus1}>
                    <div className={styles.div13}>13 ч 10 мин</div>
                    <div className={styles.div43}>1 пересадка</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleDiv} />
              <div className={styles.pricedetailsButton1}>
                <div className={styles.pricebutton}>
                  <div className={styles.div2}>12 985 ₽</div>
                  <button className={styles.button1}>
                    <div className={styles.div3}>Забронировать</div>
                  </button>
                </div>
                <div className={styles.arrowFuther}>
                  <button className={styles.reviewText}>Детали перелета</button>
                  <img className={styles.icons16px} alt="" src="../icons/icons-16px18.svg" />
                </div>
              </div>
            </div>
            <div className={styles.ticket1}>
              <div className={styles.waytimeavia}>
                <div className={styles.avia}>
                  <img className={styles.logoIcon} alt="" src="../icons/logo15.svg" />
                  <div className={styles.div4}>Turkish airlines</div>
                </div>
                <div className={styles.waytime1}>
                  <div className={styles.way}>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div6}>23 ноября, Ср</div>
                        <span className={styles.span}>20:10</span>
                      </div>
                      <div className={styles.vKO}>{`Москва, Внуково (VKO) `}</div>
                    </div>
                    <div className={styles.line}>
                      <img className={styles.vectorIcon} alt="" src="../icons/vector-272.svg" />
                      <img className={styles.vectorIcon1} alt="" src="../icons/vector-271.svg" />
                    </div>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div6}>23 ноября, Ср</div>
                        <span className={styles.span}>22:41</span>
                      </div>
                      <div className={styles.vKO}>Санкт-Петербург, Пулково (LED)</div>
                    </div>
                  </div>
                  <div className={styles.timestatus1}>
                    <div className={styles.div13}>5 ч 31 мин</div>
                    <div className={styles.div14}>Прямой</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleDiv} />
              <div className={styles.pricebutton2}>
                <div className={styles.div15}>9 985 ₽</div>
                <button className={styles.button1}>
                  <div className={styles.div3}>Забронировать</div>
                </button>
              </div>
            </div>
            <div className={styles.ticket1}>
              <div className={styles.waytimeavia}>
                <div className={styles.avia}>
                  <img className={styles.logoIcon} alt="" src="../icons/logo16.svg" />
                  <div className={styles.div4}>SAS</div>
                </div>
                <div className={styles.waytime1}>
                  <div className={styles.way}>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div6}>23 ноября, Ср</div>
                        <span className={styles.span}>20:10</span>
                      </div>
                      <div className={styles.vKO}>{`Москва, Внуково (VKO) `}</div>
                    </div>
                    <div className={styles.line}>
                      <img className={styles.vectorIcon} alt="" src="../icons/vector-272.svg" />
                      <img className={styles.vectorIcon1} alt="" src="../icons/vector-271.svg" />
                    </div>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div6}>23 ноября, Ср</div>
                        <span className={styles.span}>22:41</span>
                      </div>
                      <div className={styles.vKO}>Санкт-Петербург, Пулково (LED)</div>
                    </div>
                  </div>
                  <div className={styles.timestatus1}>
                    <div className={styles.div13}>5 ч 31 мин</div>
                    <div className={styles.div14}>Прямой</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleDiv} />
              <div className={styles.pricebutton2}>
                <div className={styles.div15}>9 985 ₽</div>
                <button className={styles.button1}>
                  <div className={styles.div3}>Забронировать</div>
                </button>
              </div>
            </div>
            <div className={styles.ticket1}>
              <div className={styles.waytimeavia}>
                <div className={styles.avia}>
                  <img className={styles.logoIcon} alt="" src="../icons/logo5.svg" />
                  <div className={styles.div4}>Qatar Airways</div>
                </div>
                <div className={styles.waytime1}>
                  <div className={styles.way}>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div6}>23 ноября, Ср</div>
                        <span className={styles.span}>20:10</span>
                      </div>
                      <div className={styles.vKO}>{`Москва, Внуково (VKO) `}</div>
                    </div>
                    <div className={styles.line}>
                      <img className={styles.vectorIcon} alt="" src="../icons/vector-272.svg" />
                      <img className={styles.vectorIcon1} alt="" src="../icons/vector-271.svg" />
                    </div>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div6}>23 ноября, Ср</div>
                        <span className={styles.span}>22:41</span>
                      </div>
                      <div className={styles.vKO}>Санкт-Петербург, Пулково (LED)</div>
                    </div>
                  </div>
                  <div className={styles.timestatus1}>
                    <div className={styles.div13}>5 ч 31 мин</div>
                    <div className={styles.div14}>Прямой</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleDiv} />
              <div className={styles.pricebutton2}>
                <div className={styles.div15}>9 985 ₽</div>
                <button className={styles.button1}>
                  <div className={styles.div3}>Забронировать</div>
                </button>
              </div>
            </div>
            <div className={styles.ticket1}>
              <div className={styles.waytimeavia}>
                <div className={styles.avia}>
                  <img className={styles.logoIcon} alt="" src="../icons/logo18.svg" />
                  <div className={styles.div4}>Lufthansa</div>
                </div>
                <div className={styles.waytime1}>
                  <div className={styles.way}>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div6}>23 ноября, Ср</div>
                        <span className={styles.span}>20:10</span>
                      </div>
                      <div className={styles.vKO}>{`Москва, Внуково (VKO) `}</div>
                    </div>
                    <div className={styles.line}>
                      <img className={styles.vectorIcon} alt="" src="../icons/vector-272.svg" />
                      <img className={styles.vectorIcon1} alt="" src="../icons/vector-271.svg" />
                    </div>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div6}>23 ноября, Ср</div>
                        <span className={styles.span}>22:41</span>
                      </div>
                      <div className={styles.vKO}>Санкт-Петербург, Пулково (LED)</div>
                    </div>
                  </div>
                  <div className={styles.timestatus1}>
                    <div className={styles.div13}>5 ч 31 мин</div>
                    <div className={styles.div14}>Прямой</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleDiv} />
              <div className={styles.pricebutton2}>
                <div className={styles.div15}>9 985 ₽</div>
                <button className={styles.button1}>
                  <div className={styles.div3}>Забронировать</div>
                </button>
              </div>
            </div>
            <div className={styles.ticket1}>
              <div className={styles.waytimeavia}>
                <div className={styles.avia}>
                  <img className={styles.logoIcon} alt="" src="../icons/logo2.svg" />
                  <div className={styles.div4}>Nordwind</div>
                </div>
                <div className={styles.waytime1}>
                  <div className={styles.way}>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div6}>23 ноября, Ср</div>
                        <span className={styles.span}>11:12</span>
                      </div>
                      <div className={styles.vKO}>{`Москва, Внуково (VKO) `}</div>
                    </div>
                    <div className={styles.line4}>
                      <img className={styles.vectorIcon} alt="" src="../icons/vector-2721.svg" />
                      <div className={styles.pointTransfer}>
                        <div className={styles.tagTransfer}>
                          <div className={styles.price}>
                            <div className={styles.div40}>от 600 ₽</div>
                          </div>
                          <img className={styles.vectorIcon9} alt="" src="../icons/vector-167.svg" />
                        </div>
                        <img className={styles.pointTransferIcon} alt="" src="../icons/point-transfer.svg" />
                      </div>
                      <img className={styles.vectorIcon1} alt="" src="../icons/vector-2711.svg" />
                    </div>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div6}>24 ноября, Ср</div>
                        <span className={styles.span}>05:22</span>
                      </div>
                      <div className={styles.vKO}>Санкт-Петербург, Пулково (LED)</div>
                    </div>
                  </div>
                  <div className={styles.timestatus1}>
                    <div className={styles.div13}>13 ч 10 мин</div>
                    <div className={styles.div43}>1 пересадка</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleDiv} />
              <div className={styles.pricedetailsButton1}>
                <div className={styles.pricebutton}>
                  <div className={styles.div2}>12 985 ₽</div>
                  <button className={styles.button1}>
                    <div className={styles.div3}>Забронировать</div>
                  </button>
                </div>
                <div className={styles.arrowFuther}>
                  <button className={styles.reviewText}>Детали перелета</button>
                  <img className={styles.icons16px} alt="" src="../icons/icons-16px18.svg" />
                </div>
              </div>
            </div>
            <div className={styles.ticket1}>
              <div className={styles.waytimeavia}>
                <div className={styles.avia}>
                  <img className={styles.logoIcon} alt="" src="../icons/logo20.svg" />
                  <div className={styles.div4}>Lufthansa</div>
                </div>
                <div className={styles.waytime1}>
                  <div className={styles.way}>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div6}>23 ноября, Ср</div>
                        <span className={styles.span}>20:10</span>
                      </div>
                      <div className={styles.vKO}>{`Москва, Внуково (VKO) `}</div>
                    </div>
                    <div className={styles.line}>
                      <img className={styles.vectorIcon} alt="" src="../icons/vector-272.svg" />
                      <img className={styles.vectorIcon1} alt="" src="../icons/vector-271.svg" />
                    </div>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div6}>23 ноября, Ср</div>
                        <span className={styles.span}>22:41</span>
                      </div>
                      <div className={styles.vKO}>Санкт-Петербург, Пулково (LED)</div>
                    </div>
                  </div>
                  <div className={styles.timestatus1}>
                    <div className={styles.div13}>5 ч 31 мин</div>
                    <div className={styles.div14}>Прямой</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleDiv} />
              <div className={styles.pricebutton2}>
                <div className={styles.div15}>9 985 ₽</div>
                <button className={styles.button1}>
                  <div className={styles.div3}>Забронировать</div>
                </button>
              </div>
            </div>
            <div className={styles.ticket1}>
              <div className={styles.waytimeavia}>
                <div className={styles.avia}>
                  <img className={styles.logoIcon} alt="" src="../icons/logo2.svg" />
                  <div className={styles.div4}>Nordwind</div>
                </div>
                <div className={styles.waytime1}>
                  <div className={styles.way}>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div6}>23 ноября, Ср</div>
                        <span className={styles.span}>11:12</span>
                      </div>
                      <div className={styles.vKO}>{`Москва, Внуково (VKO) `}</div>
                    </div>
                    <div className={styles.line4}>
                      <img className={styles.vectorIcon} alt="" src="../icons/vector-2721.svg" />
                      <div className={styles.pointTransfer}>
                        <div className={styles.tagTransfer}>
                          <div className={styles.price}>
                            <div className={styles.div40}>от 600 ₽</div>
                          </div>
                          <img className={styles.vectorIcon9} alt="" src="../icons/vector-167.svg" />
                        </div>
                        <img className={styles.pointTransferIcon} alt="" src="../icons/point-transfer.svg" />
                      </div>
                      <img className={styles.vectorIcon1} alt="" src="../icons/vector-2711.svg" />
                    </div>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div6}>24 ноября, Ср</div>
                        <span className={styles.span}>05:22</span>
                      </div>
                      <div className={styles.vKO}>Санкт-Петербург, Пулково (LED)</div>
                    </div>
                  </div>
                  <div className={styles.timestatus1}>
                    <div className={styles.div13}>13 ч 10 мин</div>
                    <div className={styles.div43}>1 пересадка</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleDiv} />
              <div className={styles.pricedetailsButton1}>
                <div className={styles.pricebutton}>
                  <div className={styles.div2}>12 985 ₽</div>
                  <button className={styles.button1}>
                    <div className={styles.div3}>Забронировать</div>
                  </button>
                </div>
                <div className={styles.arrowFuther}>
                  <button className={styles.reviewText}>Детали перелета</button>
                  <img className={styles.icons16px} alt="" src="../icons/icons-16px18.svg" />
                </div>
              </div>
            </div>
            <div className={styles.ticket1}>
              <div className={styles.waytimeavia}>
                <div className={styles.avia}>
                  <img className={styles.logoIcon} alt="" src="../icons/logo22.svg" />
                  <div className={styles.div4}>Turkish airlines</div>
                </div>
                <div className={styles.waytime1}>
                  <div className={styles.way}>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div6}>23 ноября, Ср</div>
                        <span className={styles.span}>20:10</span>
                      </div>
                      <div className={styles.vKO}>{`Москва, Внуково (VKO) `}</div>
                    </div>
                    <div className={styles.line}>
                      <img className={styles.vectorIcon} alt="" src="../icons/vector-272.svg" />
                      <img className={styles.vectorIcon1} alt="" src="../icons/vector-271.svg" />
                    </div>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div6}>23 ноября, Ср</div>
                        <span className={styles.span}>22:41</span>
                      </div>
                      <div className={styles.vKO}>Санкт-Петербург, Пулково (LED)</div>
                    </div>
                  </div>
                  <div className={styles.timestatus1}>
                    <div className={styles.div13}>5 ч 31 мин</div>
                    <div className={styles.div14}>Прямой</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleDiv} />
              <div className={styles.pricebutton2}>
                <div className={styles.div15}>9 985 ₽</div>
                <button className={styles.button1}>
                  <div className={styles.div3}>Забронировать</div>
                </button>
              </div>
            </div>
            <div className={styles.ticket1}>
              <div className={styles.waytimeavia}>
                <div className={styles.avia}>
                  <img className={styles.logoIcon} alt="" src="../icons/logo16.svg" />
                  <div className={styles.div4}>SAS</div>
                </div>
                <div className={styles.waytime1}>
                  <div className={styles.way}>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div6}>23 ноября, Ср</div>
                        <span className={styles.span}>20:10</span>
                      </div>
                      <div className={styles.vKO}>{`Москва, Внуково (VKO) `}</div>
                    </div>
                    <div className={styles.line}>
                      <img className={styles.vectorIcon} alt="" src="../icons/vector-272.svg" />
                      <img className={styles.vectorIcon1} alt="" src="../icons/vector-271.svg" />
                    </div>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div6}>23 ноября, Ср</div>
                        <span className={styles.span}>22:41</span>
                      </div>
                      <div className={styles.vKO}>Санкт-Петербург, Пулково (LED)</div>
                    </div>
                  </div>
                  <div className={styles.timestatus1}>
                    <div className={styles.div13}>5 ч 31 мин</div>
                    <div className={styles.div14}>Прямой</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleDiv} />
              <div className={styles.pricebutton2}>
                <div className={styles.div15}>9 985 ₽</div>
                <button className={styles.button1}>
                  <div className={styles.div3}>Забронировать</div>
                </button>
              </div>
            </div>
            <div className={styles.ticket1}>
              <div className={styles.waytimeavia}>
                <div className={styles.avia}>
                  <img className={styles.logoIcon} alt="" src="../icons/logo5.svg" />
                  <div className={styles.div4}>Qatar Airways</div>
                </div>
                <div className={styles.waytime1}>
                  <div className={styles.way}>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div6}>23 ноября, Ср</div>
                        <span className={styles.span}>20:10</span>
                      </div>
                      <div className={styles.vKO}>{`Москва, Внуково (VKO) `}</div>
                    </div>
                    <div className={styles.line}>
                      <img className={styles.vectorIcon} alt="" src="../icons/vector-272.svg" />
                      <img className={styles.vectorIcon1} alt="" src="../icons/vector-271.svg" />
                    </div>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div6}>23 ноября, Ср</div>
                        <span className={styles.span}>22:41</span>
                      </div>
                      <div className={styles.vKO}>Санкт-Петербург, Пулково (LED)</div>
                    </div>
                  </div>
                  <div className={styles.timestatus1}>
                    <div className={styles.div13}>5 ч 31 мин</div>
                    <div className={styles.div14}>Прямой</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleDiv} />
              <div className={styles.pricebutton2}>
                <div className={styles.div15}>9 985 ₽</div>
                <button className={styles.button1}>
                  <div className={styles.div3}>Забронировать</div>
                </button>
              </div>
            </div>
            <div className={styles.ticket1}>
              <div className={styles.waytimeavia}>
                <div className={styles.avia}>
                  <img className={styles.logoIcon} alt="" src="../icons/logo25.svg" />
                  <div className={styles.div4}>Lufthansa</div>
                </div>
                <div className={styles.waytime1}>
                  <div className={styles.way}>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div6}>23 ноября, Ср</div>
                        <span className={styles.span}>20:10</span>
                      </div>
                      <div className={styles.vKO}>{`Москва, Внуково (VKO) `}</div>
                    </div>
                    <div className={styles.line}>
                      <img className={styles.vectorIcon} alt="" src="../icons/vector-272.svg" />
                      <img className={styles.vectorIcon1} alt="" src="../icons/vector-271.svg" />
                    </div>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div6}>23 ноября, Ср</div>
                        <span className={styles.span}>22:41</span>
                      </div>
                      <div className={styles.vKO}>Санкт-Петербург, Пулково (LED)</div>
                    </div>
                  </div>
                  <div className={styles.timestatus1}>
                    <div className={styles.div13}>5 ч 31 мин</div>
                    <div className={styles.div14}>Прямой</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleDiv} />
              <div className={styles.pricebutton2}>
                <div className={styles.div15}>9 985 ₽</div>
                <button className={styles.button1}>
                  <div className={styles.div3}>Забронировать</div>
                </button>
              </div>
            </div>
            <div className={styles.ticket1}>
              <div className={styles.waytimeavia}>
                <div className={styles.avia}>
                  <img className={styles.logoIcon} alt="" src="../icons/logo2.svg" />
                  <div className={styles.div4}>Nordwind</div>
                </div>
                <div className={styles.waytime1}>
                  <div className={styles.way}>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div6}>23 ноября, Ср</div>
                        <span className={styles.span}>11:12</span>
                      </div>
                      <div className={styles.vKO}>{`Москва, Внуково (VKO) `}</div>
                    </div>
                    <div className={styles.line4}>
                      <img className={styles.vectorIcon} alt="" src="../icons/vector-2721.svg" />
                      <div className={styles.pointTransfer}>
                        <div className={styles.tagTransfer}>
                          <div className={styles.price}>
                            <div className={styles.div40}>от 600 ₽</div>
                          </div>
                          <img className={styles.vectorIcon9} alt="" src="../icons/vector-167.svg" />
                        </div>
                        <img className={styles.pointTransferIcon} alt="" src="../icons/point-transfer.svg" />
                      </div>
                      <img className={styles.vectorIcon1} alt="" src="../icons/vector-2711.svg" />
                    </div>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div6}>24 ноября, Ср</div>
                        <span className={styles.span}>05:22</span>
                      </div>
                      <div className={styles.vKO}>Санкт-Петербург, Пулково (LED)</div>
                    </div>
                  </div>
                  <div className={styles.timestatus1}>
                    <div className={styles.div13}>13 ч 10 мин</div>
                    <div className={styles.div43}>1 пересадка</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleDiv} />
              <div className={styles.pricedetailsButton1}>
                <div className={styles.pricebutton}>
                  <div className={styles.div2}>12 985 ₽</div>
                  <button className={styles.button1}>
                    <div className={styles.div3}>Забронировать</div>
                  </button>
                </div>
                <div className={styles.arrowFuther}>
                  <button className={styles.reviewText}>Детали перелета</button>
                  <img className={styles.icons16px} alt="" src="../icons/icons-16px18.svg" />
                </div>
              </div>
            </div>

            <Button iconAfter="../icons/icons-12px.svg" variant="outlined" className={styles.showMore}>
              Показать ещё
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Component;
