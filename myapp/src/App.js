import './App.css';
import logo from './logo.svg'
import phone1 from './phone1.svg'

function App() {
  return (
    <>
      <div className="main-container">
        <header className="header-container">
          <div className="upper-header-container">
            <a href="#" k>
              <img alt="logo" src={logo} className="header-logo" />
            </a>
            <div className="email-container">
              <h4 className="h4">По вопросам и предложениям</h4>
              <a href="mailto:pionerrr@sila.ru" className="mailto">
                pionerrr@sila.ru
              </a>
            </div>
            <div className="number-container">
              <h4 className="h4">Для консультаций</h4>
              <a href="tel:+7 (495) 456-24-21" className="numberto">
                +7 (495) 456-24-21
              </a>
            </div>
          </div>
          <div className="hr">
            <hr />
          </div>
          <ul>
            <li>
              <a href="#">Главная</a>
            </li>
            <li>
              <a href="#">О предприятие</a>
            </li>
            <li>
              <a href="#">Новости</a>
            </li>
            <li>
            <a href="#">Продукция</a>
            </li>
            <li>
              <a href="#">Услуги</a>
            </li>
            <li>
              <a href="#">Поддержка</a>
            </li>
            <li>
              <a href="#">География поставок</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
            <li>
              <img src={phone1} alt="iphone" className="phonelogo" />
              <a href="tel:12378618391" className="recall">ПЕРЕЗВОНИТЕ МНЕ</a>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
}

export default App;
