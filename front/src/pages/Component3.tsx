import { FunctionComponent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import FilterSidebar from '../components/Filter/FilterSidebar';
import SearchMessage from '../components/SearchMessage';
import styles from './Component3.module.css';

const Component3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonIconContainerClick = useCallback(() => {
    // Please sync "Личный кабинет-Персональные данные" to the project
  }, []);

  const onField1Click = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const onField2Click = useCallback(() => {
    navigate('/1');
  }, [navigate]);

  const onField3Click = useCallback(() => {
    navigate('/2');
  }, [navigate]);

  const onField4Click = useCallback(() => {
    navigate('/3');
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate('/6');
  }, [navigate]);

  return (
    <div className={styles.div}>
      <div className={styles.tickets}>
        <div className={styles.headerCatalogTickets}>
          <div className={styles.gradientHome}>
            <img className={styles.headerhome1Icon} alt="" src="../headerhome-1@2x.png" />
          </div>
          <div className={styles.home}>
            <header className={styles.header}>
              <img className={styles.icon} alt="" src="../icons/----25.svg" />
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
                  <img className={styles.icons24px} alt="" src="../icons/icons-24px3.svg" />
                  <div className={styles.div1}>Войти</div>
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
                      <div className={styles.div2}>Откуда</div>
                      <div className={styles.div3}>Москва</div>
                    </div>
                    <img className={styles.icons16px} alt="" src="../icons/icons-16px36.svg" />
                  </button>
                  <div className={styles.line}>
                    <div className={styles.rectangleDiv} />
                  </div>
                  <div className={styles.field2} onClick={onField2Click}>
                    <div className={styles.subtitleheading}>
                      <div className={styles.div4}>Куда</div>
                      <div className={styles.div5}>Рим</div>
                    </div>
                    <img className={styles.icons16px} alt="" src="../icons/icons-16px36.svg" />
                  </div>
                  <div className={styles.line}>
                    <div className={styles.rectangleDiv} />
                  </div>
                  <button className={styles.field3} onClick={onField3Click}>
                    <div className={styles.subtitleheading}>
                      <div className={styles.div2}>Дата туда</div>
                      <div className={styles.div3}>23 мая</div>
                    </div>
                    <img className={styles.icons16px} alt="" src="../icons/icons-16px36.svg" />
                  </button>
                  <div className={styles.line}>
                    <div className={styles.rectangleDiv} />
                  </div>
                  <button className={styles.field3} onClick={onField4Click}>
                    <div className={styles.subtitleheading}>
                      <div className={styles.div2}>Дата обратно</div>
                      <div className={styles.div3}>24 мая</div>
                    </div>
                    <img className={styles.icons16px} alt="" src="../icons/icons-16px36.svg" />
                  </button>
                  <div className={styles.line}>
                    <div className={styles.rectangleDiv} />
                  </div>
                  <div className={styles.field5}>
                    <div className={styles.subtitleheading}>
                      <div className={styles.div4}>Пассажиры, класс</div>
                      <div className={styles.div5}>1 пассажир</div>
                    </div>
                    <img className={styles.icons16px} alt="" src="../icons/icons-16px36.svg" />
                  </div>
                </div>
                <div className={styles.field6}>
                  <div className={styles.subtitleheading}>
                    <div className={styles.div12}>Москва - Рим</div>
                    <div className={styles.div13}>23 ноября - 24 ноября, 1 пассажир, Эконом</div>
                  </div>
                  <img className={styles.icons20px} alt="" src="../icons/icons-20px7.svg" />
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
                    <img className={styles.icons16px} alt="" src="../icons/icons-16px36.svg" />
                  </div>
                  <div className={styles.line4}>
                    <div className={styles.rectangleDiv4} />
                  </div>
                  <div className={styles.field7}>
                    <div className={styles.subtitleheading}>
                      <div className={styles.div4}>Куда</div>
                      <div className={styles.div5}>Рим</div>
                    </div>
                    <img className={styles.icons16px} alt="" src="../icons/icons-16px36.svg" />
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
                      <img className={styles.icons16px} alt="" src="../icons/icons-16px49.svg" />
                    </div>
                    <div className={styles.line}>
                      <div className={styles.rectangleDiv} />
                    </div>
                    <div className={styles.field5}>
                      <div className={styles.subtitleheading}>
                        <div className={styles.div4}>Дата обратно</div>
                        <div className={styles.div5}>24 мая</div>
                      </div>
                      <img className={styles.icons16px} alt="" src="../icons/icons-16px36.svg" />
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
                    <img className={styles.icons16px} alt="" src="../icons/icons-16px36.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.filtertickets}>
          <FilterSidebar filterCursor="pointer" />
          <SearchMessage />
        </div>
        <footer className={styles.footer}>
          <div className={styles.footer1}>
            <div className={styles.links}>
              <div className={styles.logo}>
                <img className={styles.icon} alt="" src="../icons/----26.svg" />
                <div className={styles.div25}>Онлайн-сервис бронирования авиабилетов для визы</div>
              </div>
              <div className={styles.frameLink}>
                <div className={styles.frameLink1}>
                  <div className={styles.div26}>Помощь</div>
                  <div className={styles.link6}>
                    <div className={styles.link7}>
                      <a className={styles.a5}>Популярные вопросы</a>
                    </div>
                    <div className={styles.link7}>
                      <a className={styles.a5}>Авиабилеты</a>
                    </div>
                    <div className={styles.link7}>
                      <a className={styles.a5}>Оплата и возврат</a>
                    </div>
                  </div>
                </div>
                <div className={styles.frameLink2}>
                  <div className={styles.div26}>Сотрудничество</div>
                  <div className={styles.link10}>
                    <a className={styles.a5}>Партнерская программа</a>
                  </div>
                </div>
              </div>
              <div className={styles.frameLink3}>
                <div className={styles.div26}>Клиентам</div>
                <div className={styles.link6}>
                  <div className={styles.link7}>
                    <a className={styles.a5}>О сервисе</a>
                  </div>
                  <div className={styles.link7}>
                    <a className={styles.a5}>Тариф</a>
                  </div>
                  <div className={styles.link7}>
                    <a className={styles.a5}>Блог</a>
                  </div>
                  <div className={styles.link7}>
                    <a className={styles.a5}>Отзывы</a>
                  </div>
                </div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.frameLink4}>
                  <div className={styles.div25}>Мы в социальных сетях</div>
                  <div className={styles.socialNetworks}>
                    <button className={styles.iconButton}>
                      <img className={styles.icons20px1} alt="" src="../icons/icons-20px8.svg" />
                    </button>
                    <button className={styles.iconButton}>
                      <img className={styles.icons20px1} alt="" src="../icons/icons-20px9.svg" />
                    </button>
                  </div>
                </div>
                <div className={styles.frameLink4}>
                  <div className={styles.div25}>Мы принимаем</div>
                  <div className={styles.socialNetworks1}>
                    <img className={styles.visaIcon} alt="" src="../icons/visa2.svg" />
                    <img className={styles.groupIcon} alt="" src="../icons/group2.svg" />
                    <img className={styles.mirLogo1Icon} alt="" src="../icons/mirlogo-12.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rectangleDiv8} />
            <div className={styles.links1}>
              <div className={styles.div31}>©“КУПИТРИП”2014-2022</div>
              <div className={styles.links2}>
                <div className={styles.div4}>Договор оферты</div>
                <div className={styles.div4}>Политика безопасности и возврата</div>
                <div className={styles.div4}>Обработка персональных данных</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Component3;
