import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Tooltip from "../components/Tooltip";
import Ticket from "../components/Ticket";
import TicketVariant from "../components/TicketVariant";
import styles from "./Component10.module.css";

const Component10: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonIconContainerClick = useCallback(() => {
    // Please sync "Личный кабинет-Персональные данные" to the project
  }, []);

  const onField1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onField2Click = useCallback(() => {
    navigate("/1");
  }, [navigate]);

  const onField3Click = useCallback(() => {
    navigate("/2");
  }, [navigate]);

  const onField4Click = useCallback(() => {
    navigate("/3");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/4");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <div className={styles.tickets}>
        <div className={styles.headerCatalogTickets}>
          <div className={styles.gradientHome}>
            <img
              className={styles.headerhome1Icon}
              alt=""
              src="../headerhome-1@2x.png"
            />
          </div>
          <div className={styles.home}>
            <header className={styles.header}>
              <img className={styles.icon} alt="" src="../icons/----214.svg" />
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
                <div
                  className={styles.buttonIcon}
                  onClick={onButtonIconContainerClick}
                >
                  <img
                    className={styles.icons24px}
                    alt=""
                    src="../icons/icons-24px10.svg"
                  />
                  <div className={styles.div1}>Войти</div>
                </div>
                <button className={styles.icons24px1}>
                  <img
                    className={styles.vector194Stroke}
                    alt=""
                    src="../icons/vector-194-stroke.svg"
                  />
                  <img
                    className={styles.vector195Stroke}
                    alt=""
                    src="../icons/vector-194-stroke.svg"
                  />
                  <img
                    className={styles.vector196Stroke}
                    alt=""
                    src="../icons/vector-194-stroke.svg"
                  />
                </button>
              </div>
            </header>
            <div className={styles.searchDropdown}>
              <div className={styles.searchFieldbutton}>
                <div className={styles.field}>
                  <button className={styles.field1} onClick={onField1Click}>
                    <div className={styles.subtitleheading}>
                      <div className={styles.div2}>Откуда</div>
                      <div className={styles.div3}>Москва</div>
                    </div>
                    <img
                      className={styles.icons16px}
                      alt=""
                      src="../icons/icons-16px.svg"
                    />
                  </button>
                  <div className={styles.line}>
                    <div className={styles.rectangleDiv} />
                  </div>
                  <div className={styles.field2} onClick={onField2Click}>
                    <div className={styles.subtitleheading}>
                      <div className={styles.div4}>Куда</div>
                      <div className={styles.div5}>Рим</div>
                    </div>
                    <img
                      className={styles.icons16px}
                      alt=""
                      src="../icons/icons-16px.svg"
                    />
                  </div>
                  <div className={styles.line}>
                    <div className={styles.rectangleDiv} />
                  </div>
                  <button className={styles.field3} onClick={onField3Click}>
                    <div className={styles.subtitleheading}>
                      <div className={styles.div2}>Дата туда</div>
                      <div className={styles.div3}>23 мая</div>
                    </div>
                    <img
                      className={styles.icons16px}
                      alt=""
                      src="../icons/icons-16px.svg"
                    />
                  </button>
                  <div className={styles.line}>
                    <div className={styles.rectangleDiv} />
                  </div>
                  <button className={styles.field3} onClick={onField4Click}>
                    <div className={styles.subtitleheading}>
                      <div className={styles.div2}>Дата обратно</div>
                      <div className={styles.div3}>24 мая</div>
                    </div>
                    <img
                      className={styles.icons16px}
                      alt=""
                      src="../icons/icons-16px.svg"
                    />
                  </button>
                  <div className={styles.line}>
                    <div className={styles.rectangleDiv} />
                  </div>
                  <div className={styles.field5}>
                    <div className={styles.subtitleheading}>
                      <div className={styles.div4}>Пассажиры, класс</div>
                      <div className={styles.div5}>1 пассажир</div>
                    </div>
                    <img
                      className={styles.icons16px}
                      alt=""
                      src="../icons/icons-16px.svg"
                    />
                  </div>
                </div>
                <div className={styles.field6}>
                  <div className={styles.subtitleheading}>
                    <div className={styles.div12}>Москва - Рим</div>
                    <div className={styles.div13}>
                      23 ноября - 24 ноября, 1 пассажир, Эконом
                    </div>
                  </div>
                  <img
                    className={styles.icons20px}
                    alt=""
                    src="../icons/icons-20px26.svg"
                  />
                </div>
                <button className={styles.button} onClick={onButtonClick}>
                  <div className={styles.div14}>Найти</div>
                </button>
                <div className={styles.fieldsearchmobile}>
                  <div className={styles.field7}>
                    <div className={styles.subtitleheading}>
                      <div className={styles.div4}>Откуда</div>
                      <div className={styles.div5}>Москва</div>
                    </div>
                    <img
                      className={styles.icons16px}
                      alt=""
                      src="../icons/icons-16px.svg"
                    />
                  </div>
                  <div className={styles.line4}>
                    <div className={styles.rectangleDiv4} />
                  </div>
                  <div className={styles.field7}>
                    <div className={styles.subtitleheading}>
                      <div className={styles.div4}>Куда</div>
                      <div className={styles.div5}>Рим</div>
                    </div>
                    <img
                      className={styles.icons16px}
                      alt=""
                      src="../icons/icons-16px.svg"
                    />
                  </div>
                  <div className={styles.line4}>
                    <div className={styles.rectangleDiv4} />
                  </div>
                  <div className={styles.fieldsData}>
                    <div className={styles.field5}>
                      <div className={styles.subtitleheading}>
                        <div className={styles.div4}>Дата туда</div>
                        <div className={styles.div5}>23 мая</div>
                      </div>
                      <img
                        className={styles.icons16px}
                        alt=""
                        src="../icons/icons-16px7.svg"
                      />
                    </div>
                    <div className={styles.line}>
                      <div className={styles.rectangleDiv} />
                    </div>
                    <div className={styles.field5}>
                      <div className={styles.subtitleheading}>
                        <div className={styles.div4}>Дата обратно</div>
                        <div className={styles.div5}>24 мая</div>
                      </div>
                      <img
                        className={styles.icons16px}
                        alt=""
                        src="../icons/icons-16px.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.line4}>
                    <div className={styles.rectangleDiv4} />
                  </div>
                  <div className={styles.field7}>
                    <div className={styles.subtitleheading}>
                      <div className={styles.div4}>Пассажиры, класс</div>
                      <div className={styles.div5}>1 пассажир</div>
                    </div>
                    <img
                      className={styles.icons16px}
                      alt=""
                      src="../icons/icons-16px.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.filtertickets}>
          <div className={styles.filter}>
            <button className={styles.button1}>
              <img
                className={styles.icons16px}
                alt=""
                src="../icons/icons-16px10.svg"
              />
              <div className={styles.div25}>Фильтр</div>
            </button>
            <div className={styles.filter1}>
              <div className={styles.filter2}>
                <div className={styles.filter3}>
                  <div className={styles.nameFilter}>
                    <div className={styles.div26}>Цена</div>
                    <img
                      className={styles.icons16px}
                      alt=""
                      src="../icons/icons-16px11.svg"
                    />
                  </div>
                  <div className={styles.filterLists}>
                    <div className={styles.list}>
                      <div className={styles.checkbox}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv8} />
                        </div>
                        <div className={styles.div4}>1 пересадка</div>
                      </div>
                      <div className={styles.checkbox}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv8} />
                        </div>
                        <div className={styles.div4}>2 пересадки</div>
                      </div>
                      <div className={styles.checkbox}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv8} />
                        </div>
                        <div className={styles.div4}>3 пересадки</div>
                      </div>
                      <div className={styles.checkbox}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv8} />
                        </div>
                        <div className={styles.div4}>4 пересадки</div>
                      </div>
                    </div>
                    <div className={styles.slider}>
                      <div className={styles.rectangleDiv12} />
                    </div>
                  </div>
                  <div className={styles.lineFilter}>
                    <div className={styles.price}>
                      <div className={styles.div31}>2 985 ₽</div>
                      <div className={styles.div32}>19 985 ₽</div>
                    </div>
                    <div className={styles.line8}>
                      <div className={styles.line9}>
                        <div className={styles.rectangleDiv13} />
                      </div>
                      <div className={styles.point}>
                        <img
                          className={styles.bulletIcon}
                          alt=""
                          src="../icons/bullet.svg"
                        />
                        <img
                          className={styles.bulletIcon}
                          alt=""
                          src="../icons/bullet.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.filter4}>
                  <div className={styles.nameFilter1}>
                    <div className={styles.div26}>Пересадки</div>
                    <img
                      className={styles.icons16px}
                      alt=""
                      src="../icons/icons-16px11.svg"
                    />
                  </div>
                  <div className={styles.filterLists1}>
                    <div className={styles.list}>
                      <div className={styles.checkbox4}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv8} />
                        </div>
                        <div className={styles.div4}>Без пересадок</div>
                      </div>
                      <div className={styles.checkbox4}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv8} />
                        </div>
                        <div className={styles.div4}>1 пересадок</div>
                      </div>
                      <div className={styles.checkbox4}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv8} />
                        </div>
                        <div className={styles.div4}>2 и более</div>
                      </div>
                      <div className={styles.checkbox4}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv8} />
                        </div>
                        <div className={styles.div4}>Без ночных пересадок</div>
                      </div>
                      <div className={styles.checkbox4}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv8} />
                        </div>
                        <div className={styles.div4}>Без смены аэропорта</div>
                      </div>
                    </div>
                    <div className={styles.slider1}>
                      <div className={styles.rectangleDiv12} />
                    </div>
                  </div>
                </div>
                <div className={styles.filter3}>
                  <div className={styles.nameFilter}>
                    <div className={styles.div26}>Длительность пересадки</div>
                    <img
                      className={styles.icons16px}
                      alt=""
                      src="../icons/icons-16px11.svg"
                    />
                  </div>
                  <div className={styles.filterLists}>
                    <div className={styles.list}>
                      <div className={styles.checkbox}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv8} />
                        </div>
                        <div className={styles.div4}>1 пересадка</div>
                      </div>
                      <div className={styles.checkbox}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv8} />
                        </div>
                        <div className={styles.div4}>2 пересадки</div>
                      </div>
                      <div className={styles.checkbox}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv8} />
                        </div>
                        <div className={styles.div4}>3 пересадки</div>
                      </div>
                      <div className={styles.checkbox}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv8} />
                        </div>
                        <div className={styles.div4}>4 пересадки</div>
                      </div>
                    </div>
                    <div className={styles.slider}>
                      <div className={styles.rectangleDiv12} />
                    </div>
                  </div>
                  <div className={styles.lineFilter}>
                    <div className={styles.price}>
                      <div className={styles.div31}>1 ч 15 мин</div>
                      <div className={styles.div32}>12 ч 40 мин</div>
                    </div>
                    <div className={styles.line8}>
                      <div className={styles.line11}>
                        <div className={styles.rectangleDiv13} />
                      </div>
                      <div className={styles.point1}>
                        <img
                          className={styles.bulletIcon}
                          alt=""
                          src="../icons/bullet.svg"
                        />
                        <img
                          className={styles.bulletIcon}
                          alt=""
                          src="../icons/bullet.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.filter6}>
                  <div className={styles.nameFilter3}>
                    <div className={styles.div26}>Авиакомпании</div>
                    <img
                      className={styles.icons16px}
                      alt=""
                      src="../icons/icons-16px11.svg"
                    />
                  </div>
                  <div className={styles.filterLists3}>
                    <div className={styles.list3}>
                      <div className={styles.checkbox4}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv8} />
                        </div>
                        <img
                          className={styles.logoIcon}
                          alt=""
                          src="../icons/logo.svg"
                        />
                        <div className={styles.div4}>Победа</div>
                      </div>
                      <div className={styles.checkbox4}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv8} />
                        </div>
                        <img
                          className={styles.logoIcon}
                          alt=""
                          src="../icons/logo112.svg"
                        />
                        <div className={styles.div4}>S7 Airlines</div>
                      </div>
                      <div className={styles.checkbox4}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv8} />
                        </div>
                        <img
                          className={styles.logoIcon}
                          alt=""
                          src="../icons/logo2.svg"
                        />
                        <div className={styles.div4}>Nordwind</div>
                      </div>
                      <div className={styles.checkbox4}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv8} />
                        </div>
                        <img
                          className={styles.logoIcon}
                          alt=""
                          src="../icons/logo114.svg"
                        />
                        <div className={styles.div4}>Turkish airlines</div>
                      </div>
                      <div className={styles.checkbox4}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv8} />
                        </div>
                        <img
                          className={styles.logoIcon}
                          alt=""
                          src="../icons/logo4.svg"
                        />
                        <div className={styles.div4}>SAS</div>
                      </div>
                      <div className={styles.checkbox4}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv8} />
                        </div>
                        <img
                          className={styles.logoIcon}
                          alt=""
                          src="../icons/logo5.svg"
                        />
                        <div className={styles.div4}>Qatar Airways</div>
                      </div>
                      <div className={styles.checkbox4}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv8} />
                        </div>
                        <img
                          className={styles.logoIcon}
                          alt=""
                          src="../icons/logo117.svg"
                        />
                        <div className={styles.div4}>Lufthansa</div>
                      </div>
                      <div className={styles.checkbox4}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv8} />
                        </div>
                        <div className={styles.div4}>2 пересадки</div>
                      </div>
                      <div className={styles.checkbox4}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv8} />
                        </div>
                        <div className={styles.div4}>3 пересадки</div>
                      </div>
                      <div className={styles.checkbox4}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv8} />
                        </div>
                        <div className={styles.div4}>4 пересадки</div>
                      </div>
                    </div>
                    <div className={styles.slider}>
                      <div className={styles.rectangleDiv12} />
                    </div>
                  </div>
                  <div className={styles.rectangleDiv37} />
                </div>
                <div className={styles.filter7}>
                  <div className={styles.nameFilter}>
                    <div className={styles.div26}>Вылет и прибытие</div>
                    <img
                      className={styles.icons16px}
                      alt=""
                      src="../icons/icons-16px11.svg"
                    />
                  </div>
                  <div className={styles.filterLists}>
                    <div className={styles.list}>
                      <div className={styles.checkbox}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv8} />
                        </div>
                        <div className={styles.div4}>1 пересадка</div>
                      </div>
                      <div className={styles.checkbox}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv8} />
                        </div>
                        <div className={styles.div4}>2 пересадки</div>
                      </div>
                      <div className={styles.checkbox}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv8} />
                        </div>
                        <div className={styles.div4}>3 пересадки</div>
                      </div>
                      <div className={styles.checkbox}>
                        <div className={styles.icons20px}>
                          <div className={styles.rectangleDiv8} />
                        </div>
                        <div className={styles.div4}>4 пересадки</div>
                      </div>
                    </div>
                    <div className={styles.slider}>
                      <div className={styles.rectangleDiv12} />
                    </div>
                  </div>
                  <div className={styles.group}>
                    <div className={styles.div62}>ТУДА</div>
                    <div className={styles.lineFilter}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div4}>Вылет из Москвы</div>
                        <div className={styles.price2}>
                          <div className={styles.div31}>00:00</div>
                          <div className={styles.div32}>23:59</div>
                        </div>
                      </div>
                      <div className={styles.line8}>
                        <div className={styles.line9}>
                          <div className={styles.rectangleDiv13} />
                        </div>
                        <div className={styles.point}>
                          <img
                            className={styles.bulletIcon}
                            alt=""
                            src="../icons/bullet.svg"
                          />
                          <img
                            className={styles.bulletIcon}
                            alt=""
                            src="../icons/bullet.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.lineFilter}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div4}>
                          Прибытие в Санкт-Петербург
                        </div>
                        <div className={styles.price2}>
                          <div className={styles.div31}>00:00</div>
                          <div className={styles.div32}>12:00</div>
                        </div>
                      </div>
                      <div className={styles.line8}>
                        <div className={styles.line11}>
                          <div className={styles.rectangleDiv13} />
                        </div>
                        <div className={styles.point1}>
                          <img
                            className={styles.bulletIcon}
                            alt=""
                            src="../icons/bullet.svg"
                          />
                          <img
                            className={styles.bulletIcon}
                            alt=""
                            src="../icons/bullet.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.group}>
                    <div className={styles.div62}>ОБРАТНО</div>
                    <div className={styles.lineFilter}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div4}>
                          Вылет из Санкт-Петербург
                        </div>
                        <div className={styles.price2}>
                          <div className={styles.div31}>00:00</div>
                          <div className={styles.div32}>12:00</div>
                        </div>
                      </div>
                      <div className={styles.line8}>
                        <div className={styles.line11}>
                          <div className={styles.rectangleDiv13} />
                        </div>
                        <div className={styles.point1}>
                          <img
                            className={styles.bulletIcon}
                            alt=""
                            src="../icons/bullet.svg"
                          />
                          <img
                            className={styles.bulletIcon}
                            alt=""
                            src="../icons/bullet.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.lineFilter}>
                      <div className={styles.frameDiv}>
                        <div className={styles.div4}>Прибытие в Москву</div>
                        <div className={styles.price2}>
                          <div className={styles.div31}>00:00</div>
                          <div className={styles.div32}>12:00</div>
                        </div>
                      </div>
                      <div className={styles.line8}>
                        <div className={styles.line11}>
                          <div className={styles.rectangleDiv13} />
                        </div>
                        <div className={styles.point1}>
                          <img
                            className={styles.bulletIcon}
                            alt=""
                            src="../icons/bullet.svg"
                          />
                          <img
                            className={styles.bulletIcon}
                            alt=""
                            src="../icons/bullet.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className={styles.arrowFuther}>
              <img
                className={styles.icons16px}
                alt=""
                src="../icons/icons-16px16.svg"
              />
              <button className={styles.reviewText}>Сбросить фильтр</button>
            </button>
          </div>
          <div className={styles.tickets1}>
            <button className={styles.button1}>
              <img
                className={styles.icons16px}
                alt=""
                src="../icons/icons-16px10.svg"
              />
              <div className={styles.div25}>Фильтр</div>
            </button>
            <div className={styles.ticket}>
              <div className={styles.waytimeavia}>
                <div className={styles.avia}>
                  <img
                    className={styles.logoIcon7}
                    alt=""
                    src="../icons/logo2.svg"
                  />
                  <div className={styles.div77}>Nordwind</div>
                </div>
                <div className={styles.waytime}>
                  <div className={styles.way}>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv4}>
                        <div className={styles.div78}>23 ноября, Ср</div>
                        <span className={styles.span}>11:12</span>
                      </div>
                      <div
                        className={styles.vKO}
                      >{`Москва, Внуково (VKO) `}</div>
                    </div>
                    <div className={styles.line20}>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="../icons/vector-2721.svg"
                      />
                      <div className={styles.pointTransfer}>
                        <Tooltip />
                        <img
                          className={styles.pointTransferIcon}
                          alt=""
                          src="../icons/point-transfer11.svg"
                        />
                      </div>
                      <img
                        className={styles.vectorIcon1}
                        alt=""
                        src="../icons/vector-2711.svg"
                      />
                    </div>
                    <div className={styles.timesubtitle}>
                      <div className={styles.frameDiv4}>
                        <div className={styles.div78}>24 ноября, Ср</div>
                        <span className={styles.span}>05:22</span>
                      </div>
                      <div className={styles.vKO}>
                        Санкт-Петербург, Пулково (LED)
                      </div>
                    </div>
                  </div>
                  <div className={styles.timestatus}>
                    <div className={styles.div80}>13 ч 10 мин</div>
                    <div className={styles.div81}>1 пересадка</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleDiv47} />
              <div className={styles.pricedetailsButton}>
                <div className={styles.pricebutton}>
                  <div className={styles.div82}>12 985 ₽</div>
                  <button className={styles.button3}>
                    <div className={styles.div83}>Забронировать</div>
                  </button>
                </div>
                <div className={styles.arrowFuther1}>
                  <button className={styles.reviewText1}>
                    Детали перелета
                  </button>
                  <img
                    className={styles.icons16px}
                    alt=""
                    src="../icons/icons-16px18.svg"
                  />
                </div>
              </div>
            </div>
            <Ticket companyName="Победа" price="9 985 ₽" />
            <TicketVariant />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component10;
