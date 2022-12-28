import { FunctionComponent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import CalendarSelect from '../components/CalendarSelect';
import Button from '../components/Button';
import styles from './Component7.module.css';

const Component7: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonIconContainerClick = useCallback(() => {
    // Please sync "Личный кабинет-Персональные данные" to the project
  }, []);

  const onField1Click = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const onField3Click = useCallback(() => {
    navigate('/3');
  }, [navigate]);

  return (
    <div className={styles.div}>
      <div className={styles.tickets}>
        <div className={styles.filtertickets}>
          <div className={styles.filter}>
            <button className={styles.button}>
              <img className={styles.icons16px} alt="" src="../icons/icons-16px10.svg" />
              <div className={styles.div1}>Фильтр</div>
            </button>
            <div className={styles.filter1}>
              <div className={styles.filter2}>
                <div className={styles.filter3}>
                  <div className={styles.nameFilter}>
                    <div className={styles.div2}>Цена</div>
                    <img className={styles.icons16px} alt="" src="../icons/icons-16px11.svg" />
                  </div>
                  <div className={styles.filterLists}>
                    <div className={styles.list}>
                      <div className={styles.checkbox}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv} />
                        </div>
                        <div className={styles.div3}>1 пересадка</div>
                      </div>
                      <div className={styles.checkbox}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv} />
                        </div>
                        <div className={styles.div3}>2 пересадки</div>
                      </div>
                      <div className={styles.checkbox}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv} />
                        </div>
                        <div className={styles.div3}>3 пересадки</div>
                      </div>
                      <div className={styles.checkbox}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv} />
                        </div>
                        <div className={styles.div3}>4 пересадки</div>
                      </div>
                    </div>
                    <div className={styles.slider}>
                      <div className={styles.rectangleDiv4} />
                    </div>
                  </div>
                  <div className={styles.lineFilter}>
                    <div className={styles.price}>
                      <div className={styles.div7}>2 985 ₽</div>
                      <div className={styles.div8}>19 985 ₽</div>
                    </div>
                    <div className={styles.line}>
                      <div className={styles.line1}>
                        <div className={styles.rectangleDiv5} />
                      </div>
                      <div className={styles.point}>
                        <img className={styles.bulletIcon} alt="" src="../icons/bullet.svg" />
                        <img className={styles.bulletIcon} alt="" src="../icons/bullet.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.filter4}>
                  <div className={styles.nameFilter1}>
                    <div className={styles.div2}>Пересадки</div>
                    <img className={styles.icons16px} alt="" src="../icons/icons-16px11.svg" />
                  </div>
                  <div className={styles.filterLists1}>
                    <div className={styles.list}>
                      <div className={styles.checkbox4}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv} />
                        </div>
                        <div className={styles.div3}>Без пересадок</div>
                      </div>
                      <div className={styles.checkbox4}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv} />
                        </div>
                        <div className={styles.div3}>1 пересадок</div>
                      </div>
                      <div className={styles.checkbox4}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv} />
                        </div>
                        <div className={styles.div3}>2 и более</div>
                      </div>
                      <div className={styles.checkbox4}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv} />
                        </div>
                        <div className={styles.div3}>Без ночных пересадок</div>
                      </div>
                      <div className={styles.checkbox4}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv} />
                        </div>
                        <div className={styles.div3}>Без смены аэропорта</div>
                      </div>
                    </div>
                    <div className={styles.slider1}>
                      <div className={styles.rectangleDiv4} />
                    </div>
                  </div>
                </div>
                <div className={styles.filter3}>
                  <div className={styles.nameFilter}>
                    <div className={styles.div2}>Длительность пересадки</div>
                    <img className={styles.icons16px} alt="" src="../icons/icons-16px11.svg" />
                  </div>
                  <div className={styles.filterLists}>
                    <div className={styles.list}>
                      <div className={styles.checkbox}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv} />
                        </div>
                        <div className={styles.div3}>1 пересадка</div>
                      </div>
                      <div className={styles.checkbox}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv} />
                        </div>
                        <div className={styles.div3}>2 пересадки</div>
                      </div>
                      <div className={styles.checkbox}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv} />
                        </div>
                        <div className={styles.div3}>3 пересадки</div>
                      </div>
                      <div className={styles.checkbox}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv} />
                        </div>
                        <div className={styles.div3}>4 пересадки</div>
                      </div>
                    </div>
                    <div className={styles.slider}>
                      <div className={styles.rectangleDiv4} />
                    </div>
                  </div>
                  <div className={styles.lineFilter}>
                    <div className={styles.price}>
                      <div className={styles.div7}>1 ч 15 мин</div>
                      <div className={styles.div8}>12 ч 40 мин</div>
                    </div>
                    <div className={styles.line}>
                      <div className={styles.line3}>
                        <div className={styles.rectangleDiv5} />
                      </div>
                      <div className={styles.point1}>
                        <img className={styles.bulletIcon} alt="" src="../icons/bullet.svg" />
                        <img className={styles.bulletIcon} alt="" src="../icons/bullet.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.filter6}>
                  <div className={styles.nameFilter3}>
                    <div className={styles.div2}>Авиакомпании</div>
                    <img className={styles.icons16px} alt="" src="../icons/icons-16px11.svg" />
                  </div>
                  <div className={styles.filterLists3}>
                    <div className={styles.list3}>
                      <div className={styles.checkbox4}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv} />
                        </div>
                        <img className={styles.logoIcon} alt="" src="../icons/logo27.svg" />
                        <div className={styles.div3}>Победа</div>
                      </div>
                      <div className={styles.checkbox4}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv} />
                        </div>
                        <img className={styles.logoIcon} alt="" src="../icons/logo74.svg" />
                        <div className={styles.div3}>S7 Airlines</div>
                      </div>
                      <div className={styles.checkbox4}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv} />
                        </div>
                        <img className={styles.logoIcon} alt="" src="../icons/logo29.svg" />
                        <div className={styles.div3}>Nordwind</div>
                      </div>
                      <div className={styles.checkbox4}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv} />
                        </div>
                        <img className={styles.logoIcon} alt="" src="../icons/logo76.svg" />
                        <div className={styles.div3}>Turkish airlines</div>
                      </div>
                      <div className={styles.checkbox4}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv} />
                        </div>
                        <img className={styles.logoIcon} alt="" src="../icons/logo31.svg" />
                        <div className={styles.div3}>SAS</div>
                      </div>
                      <div className={styles.checkbox4}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv} />
                        </div>
                        <img className={styles.logoIcon} alt="" src="../icons/logo5.svg" />
                        <div className={styles.div3}>Qatar Airways</div>
                      </div>
                      <div className={styles.checkbox4}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv} />
                        </div>
                        <img className={styles.logoIcon} alt="" src="../icons/logo79.svg" />
                        <div className={styles.div3}>Lufthansa</div>
                      </div>
                      <div className={styles.checkbox4}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv} />
                        </div>
                        <div className={styles.div3}>2 пересадки</div>
                      </div>
                      <div className={styles.checkbox4}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv} />
                        </div>
                        <div className={styles.div3}>3 пересадки</div>
                      </div>
                      <div className={styles.checkbox4}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv} />
                        </div>
                        <div className={styles.div3}>4 пересадки</div>
                      </div>
                    </div>
                    <div className={styles.slider}>
                      <div className={styles.rectangleDiv4} />
                    </div>
                  </div>
                  <div className={styles.rectangleDiv29} />
                </div>
                <div className={styles.filter3}>
                  <div className={styles.nameFilter}>
                    <div className={styles.div2}>Вылет и прибытие</div>
                    <img className={styles.icons16px} alt="" src="../icons/icons-16px11.svg" />
                  </div>
                  <div className={styles.filterLists}>
                    <div className={styles.list}>
                      <div className={styles.checkbox}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv} />
                        </div>
                        <div className={styles.div3}>1 пересадка</div>
                      </div>
                      <div className={styles.checkbox}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv} />
                        </div>
                        <div className={styles.div3}>2 пересадки</div>
                      </div>
                      <div className={styles.checkbox}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv} />
                        </div>
                        <div className={styles.div3}>3 пересадки</div>
                      </div>
                      <div className={styles.checkbox}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv} />
                        </div>
                        <div className={styles.div3}>4 пересадки</div>
                      </div>
                    </div>
                    <div className={styles.slider}>
                      <div className={styles.rectangleDiv4} />
                    </div>
                  </div>
                  <div className={styles.group}>
                    <div className={styles.div38}>ТУДА</div>
                    <div className={styles.lineFilter}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div3}>Вылет из Москвы</div>
                        <div className={styles.price2}>
                          <div className={styles.div7}>00:00</div>
                          <div className={styles.div8}>23:59</div>
                        </div>
                      </div>
                      <div className={styles.line}>
                        <div className={styles.line1}>
                          <div className={styles.rectangleDiv5} />
                        </div>
                        <div className={styles.point}>
                          <img className={styles.bulletIcon} alt="" src="../icons/bullet.svg" />
                          <img className={styles.bulletIcon} alt="" src="../icons/bullet.svg" />
                        </div>
                      </div>
                    </div>
                    <div className={styles.lineFilter}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div3}>Прибытие в Санкт-Петербург</div>
                        <div className={styles.price2}>
                          <div className={styles.div7}>00:00</div>
                          <div className={styles.div8}>12:00</div>
                        </div>
                      </div>
                      <div className={styles.line}>
                        <div className={styles.line3}>
                          <div className={styles.rectangleDiv5} />
                        </div>
                        <div className={styles.point1}>
                          <img className={styles.bulletIcon} alt="" src="../icons/bullet.svg" />
                          <img className={styles.bulletIcon} alt="" src="../icons/bullet.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.group}>
                    <div className={styles.div38}>ОБРАТНО</div>
                    <div className={styles.lineFilter}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div3}>Вылет из Санкт-Петербург</div>
                        <div className={styles.price2}>
                          <div className={styles.div7}>00:00</div>
                          <div className={styles.div8}>12:00</div>
                        </div>
                      </div>
                      <div className={styles.line}>
                        <div className={styles.line3}>
                          <div className={styles.rectangleDiv5} />
                        </div>
                        <div className={styles.point1}>
                          <img className={styles.bulletIcon} alt="" src="../icons/bullet.svg" />
                          <img className={styles.bulletIcon} alt="" src="../icons/bullet.svg" />
                        </div>
                      </div>
                    </div>
                    <div className={styles.lineFilter}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div3}>Прибытие в Москву</div>
                        <div className={styles.price2}>
                          <div className={styles.div7}>00:00</div>
                          <div className={styles.div8}>12:00</div>
                        </div>
                      </div>
                      <div className={styles.line}>
                        <div className={styles.line3}>
                          <div className={styles.rectangleDiv5} />
                        </div>
                        <div className={styles.point1}>
                          <img className={styles.bulletIcon} alt="" src="../icons/bullet.svg" />
                          <img className={styles.bulletIcon} alt="" src="../icons/bullet.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className={styles.arrowFuther}>
              <img className={styles.icons16px} alt="" src="../icons/icons-16px16.svg" />
              <button className={styles.reviewText}>Сбросить фильтр</button>
            </button>
          </div>
          <div className={styles.tickets1}>
            <button className={styles.button}>
              <img className={styles.icons16px} alt="" src="../icons/icons-16px10.svg" />
              <div className={styles.div1}>Фильтр</div>
            </button>
            <div className={styles.ticket}>
              <div className={styles.waytimeavia}>
                <div className={styles.avia}>
                  <img className={styles.logoIcon7} alt="" src="../icons/logo27.svg" />
                  <div className={styles.div53}>Победа</div>
                </div>
                <div className={styles.waytime}>
                  <div className={styles.way}>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv4}>
                        <div className={styles.div54}>23 ноября, Ср</div>
                        <span className={styles.span}>12:10</span>
                      </div>
                      <div className={styles.vKO}>{`Москва, Внуково (VKO) `}</div>
                    </div>
                    <div className={styles.line12}>
                      <img className={styles.vectorIcon} alt="" src="../icons/vector-272.svg" />
                      <img className={styles.vectorIcon1} alt="" src="../icons/vector-271.svg" />
                    </div>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv4}>
                        <div className={styles.div54}>24 ноября, Ср</div>
                        <span className={styles.span}>22:41</span>
                      </div>
                      <div className={styles.vKO}>Санкт-Петербург, Пулково (LED)</div>
                    </div>
                  </div>
                  <div className={styles.timestatus}>
                    <div className={styles.div56}>10 ч 31 мин</div>
                    <div className={styles.div57}>Прямой</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleDiv39} />
              <div className={styles.pricebutton}>
                <div className={styles.div58}>9 985 ₽</div>
                <button className={styles.button2}>
                  <div className={styles.div59}>Забронировать</div>
                </button>
              </div>
            </div>
            <div className={styles.ticket}>
              <div className={styles.waytimeavia}>
                <div className={styles.avia}>
                  <img className={styles.logoIcon7} alt="" src="../icons/logo29.svg" />
                  <div className={styles.div53}>Nordwind</div>
                </div>
                <div className={styles.waytime}>
                  <div className={styles.way}>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv4}>
                        <div className={styles.div54}>23 ноября, Ср</div>
                        <span className={styles.span}>11:12</span>
                      </div>
                      <div className={styles.vKO}>{`Москва, Внуково (VKO) `}</div>
                    </div>
                    <div className={styles.line13}>
                      <img className={styles.vectorIcon} alt="" src="../icons/vector-2721.svg" />
                      <div className={styles.pointTransfer}>
                        <div className={styles.tagTransfer}>
                          <div className={styles.price6}>
                            <div className={styles.div3}>от 600 ₽</div>
                          </div>
                          <img className={styles.vectorIcon3} alt="" src="../icons/vector-167.svg" />
                        </div>
                        <img className={styles.pointTransferIcon} alt="" src="../icons/point-transfer.svg" />
                      </div>
                      <img className={styles.vectorIcon1} alt="" src="../icons/vector-2711.svg" />
                    </div>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv4}>
                        <div className={styles.div54}>24 ноября, Ср</div>
                        <span className={styles.span}>05:22</span>
                      </div>
                      <div className={styles.vKO}>Санкт-Петербург, Пулково (LED)</div>
                    </div>
                  </div>
                  <div className={styles.timestatus}>
                    <div className={styles.div56}>13 ч 10 мин</div>
                    <div className={styles.div65}>1 пересадка</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleDiv39} />
              <div className={styles.pricedetailsButton}>
                <div className={styles.pricebutton1}>
                  <div className={styles.div66}>12 985 ₽</div>
                  <button className={styles.button2}>
                    <div className={styles.div59}>Забронировать</div>
                  </button>
                </div>
                <div className={styles.arrowFuther1}>
                  <button className={styles.reviewText1}>Детали перелета</button>
                  <img className={styles.icons16px} alt="" src="../icons/icons-16px18.svg" />
                </div>
              </div>
            </div>
            <div className={styles.ticket}>
              <div className={styles.waytimeavia}>
                <div className={styles.avia}>
                  <img className={styles.logoIcon7} alt="" src="../icons/logo29.svg" />
                  <div className={styles.div53}>Nordwind</div>
                </div>
                <div className={styles.waytime}>
                  <div className={styles.way}>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv4}>
                        <div className={styles.div54}>23 ноября, Ср</div>
                        <span className={styles.span}>20:10</span>
                      </div>
                      <div className={styles.vKO}>{`Москва, Внуково (VKO) `}</div>
                    </div>
                    <div className={styles.line12}>
                      <img className={styles.vectorIcon} alt="" src="../icons/vector-272.svg" />
                      <img className={styles.vectorIcon1} alt="" src="../icons/vector-271.svg" />
                    </div>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv4}>
                        <div className={styles.div54}>24 ноября, Ср</div>
                        <span className={styles.span}>22:41</span>
                      </div>
                      <div className={styles.vKO}>Саратов, Гагарин (GSV)</div>
                    </div>
                  </div>
                  <div className={styles.timestatus}>
                    <div className={styles.div56}>5 ч 31 мин</div>
                    <div className={styles.div72}>1 пересадка</div>
                  </div>
                </div>
                <div className={styles.iconheading}>
                  <img className={styles.icons16px} alt="" src="../icons/icons-16px19.svg" />
                  <div className={styles.div2}>Пересадка</div>
                  <div className={styles.div74}>13 ч 24 мин</div>
                </div>
                <div className={styles.waytime}>
                  <div className={styles.way}>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv4}>
                        <div className={styles.div54}>23 ноября, Ср</div>
                        <span className={styles.span}>20:10</span>
                      </div>
                      <div className={styles.vKO}>Саратов, Гагарин (GSV)</div>
                    </div>
                    <div className={styles.line12}>
                      <img className={styles.vectorIcon} alt="" src="../icons/vector-272.svg" />
                      <img className={styles.vectorIcon1} alt="" src="../icons/vector-271.svg" />
                    </div>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv4}>
                        <div className={styles.div54}>23 ноября, Ср</div>
                        <span className={styles.span}>22:41</span>
                      </div>
                      <div className={styles.vKO}>Санкт-Петербург, Пулково (LED)</div>
                    </div>
                  </div>
                  <div className={styles.timestatus}>
                    <div className={styles.div56}>5 ч 31 мин</div>
                    <div className={styles.div72}>1 пересадка</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleDiv39} />
              <div className={styles.pricedetailsButton}>
                <div className={styles.pricebutton1}>
                  <div className={styles.div66}>9 985 ₽</div>
                  <button className={styles.button2}>
                    <div className={styles.div59}>Забронировать</div>
                  </button>
                </div>
                <div className={styles.arrowFuther1}>
                  <button className={styles.reviewText1}>Cкрыть детали</button>
                  <img className={styles.icons16px} alt="" src="../icons/icons-16px20.svg" />
                </div>
              </div>
            </div>
            <div className={styles.ticket}>
              <div className={styles.waytimeavia}>
                <div className={styles.avia}>
                  <img className={styles.logoIcon7} alt="" src="../icons/logo83.svg" />
                  <div className={styles.div53}>Turkish airlines</div>
                </div>
                <div className={styles.waytime}>
                  <div className={styles.way}>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv4}>
                        <div className={styles.div54}>23 ноября, Ср</div>
                        <span className={styles.span}>20:10</span>
                      </div>
                      <div className={styles.vKO}>{`Москва, Внуково (VKO) `}</div>
                    </div>
                    <div className={styles.line12}>
                      <img className={styles.vectorIcon} alt="" src="../icons/vector-272.svg" />
                      <img className={styles.vectorIcon1} alt="" src="../icons/vector-271.svg" />
                    </div>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv4}>
                        <div className={styles.div54}>23 ноября, Ср</div>
                        <span className={styles.span}>22:41</span>
                      </div>
                      <div className={styles.vKO}>Санкт-Петербург, Пулково (LED)</div>
                    </div>
                  </div>
                  <div className={styles.timestatus}>
                    <div className={styles.div56}>5 ч 31 мин</div>
                    <div className={styles.div57}>Прямой</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleDiv39} />
              <div className={styles.pricebutton}>
                <div className={styles.div58}>9 985 ₽</div>
                <button className={styles.button2}>
                  <div className={styles.div59}>Забронировать</div>
                </button>
              </div>
            </div>
            <div className={styles.ticket}>
              <div className={styles.waytimeavia}>
                <div className={styles.avia}>
                  <img className={styles.logoIcon7} alt="" src="../icons/logo31.svg" />
                  <div className={styles.div53}>SAS</div>
                </div>
                <div className={styles.waytime}>
                  <div className={styles.way}>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv4}>
                        <div className={styles.div54}>23 ноября, Ср</div>
                        <span className={styles.span}>20:10</span>
                      </div>
                      <div className={styles.vKO}>{`Москва, Внуково (VKO) `}</div>
                    </div>
                    <div className={styles.line12}>
                      <img className={styles.vectorIcon} alt="" src="../icons/vector-272.svg" />
                      <img className={styles.vectorIcon1} alt="" src="../icons/vector-271.svg" />
                    </div>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv4}>
                        <div className={styles.div54}>23 ноября, Ср</div>
                        <span className={styles.span}>22:41</span>
                      </div>
                      <div className={styles.vKO}>Санкт-Петербург, Пулково (LED)</div>
                    </div>
                  </div>
                  <div className={styles.timestatus}>
                    <div className={styles.div56}>5 ч 31 мин</div>
                    <div className={styles.div57}>Прямой</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleDiv39} />
              <div className={styles.pricebutton}>
                <div className={styles.div58}>9 985 ₽</div>
                <button className={styles.button2}>
                  <div className={styles.div59}>Забронировать</div>
                </button>
              </div>
            </div>
            <div className={styles.ticket}>
              <div className={styles.waytimeavia}>
                <div className={styles.avia}>
                  <img className={styles.logoIcon7} alt="" src="../icons/logo5.svg" />
                  <div className={styles.div53}>Qatar Airways</div>
                </div>
                <div className={styles.waytime}>
                  <div className={styles.way}>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv4}>
                        <div className={styles.div54}>23 ноября, Ср</div>
                        <span className={styles.span}>20:10</span>
                      </div>
                      <div className={styles.vKO}>{`Москва, Внуково (VKO) `}</div>
                    </div>
                    <div className={styles.line12}>
                      <img className={styles.vectorIcon} alt="" src="../icons/vector-272.svg" />
                      <img className={styles.vectorIcon1} alt="" src="../icons/vector-271.svg" />
                    </div>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv4}>
                        <div className={styles.div54}>23 ноября, Ср</div>
                        <span className={styles.span}>22:41</span>
                      </div>
                      <div className={styles.vKO}>Санкт-Петербург, Пулково (LED)</div>
                    </div>
                  </div>
                  <div className={styles.timestatus}>
                    <div className={styles.div56}>5 ч 31 мин</div>
                    <div className={styles.div57}>Прямой</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleDiv39} />
              <div className={styles.pricebutton}>
                <div className={styles.div58}>9 985 ₽</div>
                <button className={styles.button2}>
                  <div className={styles.div59}>Забронировать</div>
                </button>
              </div>
            </div>
            <button className={styles.button8}>
              <div className={styles.div102}>Показать ещё</div>
              <img className={styles.icons12px} alt="" src="../icons/icons-12px4.svg" />
            </button>
          </div>
        </div>
        <div className={styles.headerCatalogTickets}>
          <div className={styles.gradientHome}>
            <img className={styles.headerhome1Icon} alt="" src="../headerhome-1@2x.png" />
          </div>
          <div className={styles.home}>
            <header className={styles.header}>
              <img className={styles.icon} alt="" src="../icons/----211.svg" />
              <div className={styles.link}>
                <div className={styles.link1}>
                  <a className={styles.a}>Тарифы</a>
                </div>
                <div className={styles.link1}>
                  <a className={styles.a}>Помощь</a>
                </div>
                <div className={styles.link1}>
                  <a className={styles.a}>Блог</a>
                </div>
                <div className={styles.link1}>
                  <a className={styles.a}>Отзывы</a>
                </div>
                <div className={styles.link1}>
                  <a className={styles.a}>Контакты</a>
                </div>
              </div>
              <div className={styles.buttonHeader}>
                <div className={styles.buttonIcon} onClick={onButtonIconContainerClick}>
                  <img className={styles.icons24px} alt="" src="../icons/icons-24px7.svg" />
                  <div className={styles.div103}>Войти</div>
                </div>
                <button className={styles.icons24px1}>
                  <img className={styles.vector194Stroke} alt="" src="../icons/vector-194-stroke.svg" />
                  <img className={styles.vector195Stroke} alt="" src="../icons/vector-194-stroke.svg" />
                  <img className={styles.vector196Stroke} alt="" src="../icons/vector-194-stroke.svg" />
                </button>
              </div>
            </header>
            <div className={styles.searchDropdown}>
              <div className={styles.searchFieldbutton}>
                <div className={styles.field}>
                  <button className={styles.field1} onClick={onField1Click}>
                    <div className={styles.subtitleheading}>
                      <div className={styles.div104}>Откуда</div>
                      <div className={styles.div105}>Москва</div>
                    </div>
                    <img className={styles.icons16px} alt="" src="../icons/icons-16px36.svg" />
                  </button>
                  <div className={styles.line19}>
                    <div className={styles.rectangleDiv45} />
                  </div>
                  <div className={styles.field2}>
                    <div className={styles.subtitleheading}>
                      <div className={styles.div3}>Куда</div>
                      <div className={styles.div107}>Рим</div>
                    </div>
                    <img className={styles.icons16px} alt="" src="../icons/icons-16px36.svg" />
                  </div>
                  <div className={styles.line19}>
                    <div className={styles.rectangleDiv45} />
                  </div>
                  <CalendarSelect />
                  <div className={styles.line19}>
                    <div className={styles.rectangleDiv45} />
                  </div>
                  <button className={styles.field3} onClick={onField3Click}>
                    <div className={styles.subtitleheading2}>
                      <div className={styles.subtitleheading3}>
                        <div className={styles.div108}>Дата обратно</div>
                        <div className={styles.div109}>24 мая</div>
                      </div>
                    </div>
                    <img className={styles.icons16px} alt="" src="../icons/icons-16px36.svg" />
                  </button>
                  <div className={styles.line19}>
                    <div className={styles.rectangleDiv45} />
                  </div>
                  <div className={styles.field2}>
                    <div className={styles.subtitleheading}>
                      <div className={styles.div3}>Пассажиры, класс</div>
                      <div className={styles.div107}>1 пассажир</div>
                    </div>
                    <img className={styles.icons16px} alt="" src="../icons/icons-16px36.svg" />
                  </div>
                </div>
                <div className={styles.field5}>
                  <div className={styles.subtitleheading}>
                    <div className={styles.div112}>Москва - Рим</div>
                    <div className={styles.div113}>23 ноября - 24 ноября, 1 пассажир, Эконом</div>
                  </div>
                  <img className={styles.icons20px} alt="" src="../icons/icons-20px23.svg" />
                </div>
                <Button style={{ width: '164px' }}>Найти</Button>
                <div className={styles.fieldsearchmobile}>
                  <div className={styles.field6}>
                    <div className={styles.subtitleheading}>
                      <div className={styles.div3}>Откуда</div>
                      <div className={styles.div107}>Москва</div>
                    </div>
                    <img className={styles.icons16px} alt="" src="../icons/icons-16px36.svg" />
                  </div>
                  <div className={styles.line23}>
                    <div className={styles.rectangleDiv49} />
                  </div>
                  <div className={styles.field6}>
                    <div className={styles.subtitleheading}>
                      <div className={styles.div3}>Куда</div>
                      <div className={styles.div107}>Рим</div>
                    </div>
                    <img className={styles.icons16px} alt="" src="../icons/icons-16px36.svg" />
                  </div>
                  <div className={styles.line23}>
                    <div className={styles.rectangleDiv49} />
                  </div>
                  <div className={styles.fieldsData}>
                    <div className={styles.field2}>
                      <div className={styles.subtitleheading}>
                        <div className={styles.div3}>Дата туда</div>
                        <div className={styles.div107}>23 мая</div>
                      </div>
                      <img className={styles.icons16px} alt="" src="../icons/icons-16px49.svg" />
                    </div>
                    <div className={styles.line19}>
                      <div className={styles.rectangleDiv45} />
                    </div>
                    <div className={styles.field2}>
                      <div className={styles.subtitleheading}>
                        <div className={styles.div3}>Дата обратно</div>
                        <div className={styles.div107}>24 мая</div>
                      </div>
                      <img className={styles.icons16px} alt="" src="../icons/icons-16px36.svg" />
                    </div>
                  </div>
                  <div className={styles.line23}>
                    <div className={styles.rectangleDiv49} />
                  </div>
                  <div className={styles.field6}>
                    <div className={styles.subtitleheading}>
                      <div className={styles.div3}>Пассажиры, класс</div>
                      <div className={styles.div107}>1 пассажир</div>
                    </div>
                    <img className={styles.icons16px} alt="" src="../icons/icons-16px36.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component7;
