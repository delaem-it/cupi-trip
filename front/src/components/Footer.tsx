import { FunctionComponent } from "react";
import IconButton from "../components/IconButton";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer1}>
        <div className={styles.links}>
          <div className={styles.logo}>
            <img className={styles.icon} alt="" src="../icons/----21.svg" />
            <div className={styles.div}>
              Онлайн-сервис бронирования авиабилетов для визы
            </div>
          </div>
          <div className={styles.frameLink}>
            <div className={styles.frameLink1}>
              <div className={styles.div1}>Помощь</div>
              <div className={styles.link}>
                <div className={styles.link1}>
                  <a className={styles.a}>Популярные вопросы</a>
                </div>
                <div className={styles.link1}>
                  <a className={styles.a}>Авиабилеты</a>
                </div>
                <div className={styles.link1}>
                  <a className={styles.a}>Оплата и возврат</a>
                </div>
              </div>
            </div>
            <div className={styles.frameLink2}>
              <div className={styles.div1}>Сотрудничество</div>
              <div className={styles.link4}>
                <a className={styles.a}>Партнерская программа</a>
              </div>
            </div>
          </div>
          <div className={styles.frameLink3}>
            <div className={styles.div1}>Клиентам</div>
            <div className={styles.link}>
              <div className={styles.link1}>
                <a className={styles.a}>О сервисе</a>
              </div>
              <div className={styles.link1}>
                <a className={styles.a}>Тариф</a>
              </div>
              <div className={styles.link1}>
                <a className={styles.a}>Блог</a>
              </div>
              <div className={styles.link1}>
                <a className={styles.a}>Отзывы</a>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameLink4}>
              <div className={styles.div}>Мы в социальных сетях</div>
              <div className={styles.socialNetworks}>
                <IconButton icon="../icons/icons-20px1.svg" />
                <IconButton icon="../icons/icons-20px2.svg" />
              </div>
            </div>
            <div className={styles.frameLink4}>
              <div className={styles.div}>Мы принимаем</div>
              <div className={styles.socialNetworks1}>
                <img
                  className={styles.visaIcon}
                  alt=""
                  src="../icons/visa.svg"
                />
                <img
                  className={styles.groupIcon}
                  alt=""
                  src="../icons/group.svg"
                />
                <img
                  className={styles.mirLogo1Icon}
                  alt=""
                  src="../icons/mirlogo-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleDiv} />
        <div className={styles.links1}>
          <div className={styles.div6}>©“КУПИТРИП”2014-2022</div>
          <div className={styles.links2}>
            <div className={styles.div7}>Договор оферты</div>
            <div className={styles.div7}>Политика безопасности и возврата</div>
            <div className={styles.div7}>Обработка персональных данных</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
