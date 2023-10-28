import React from 'react';
import './App.css';
import logo from './logo.svg';
import phone1 from './phone1.svg';
import heroimage from './hero-image.svg';
import product from './product.svg';
import product1 from './product1.svg';
import firstproduct from './1product.svg';
import icon1 from './icon1.svg';
import product2 from './product2.svg';
import product3 from './product3.svg';
import product4 from './product4.svg';
import product5 from './product5.svg';
import product6 from './product6.svg';
import map from './map.svg'

function App() {

  return (
    <>
      <div className="main-container">
        <header className="header-container">
          <div className="upper-header-container">
            <a href="#">
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
              <a href="/">Главная</a>
            </li>
            <li>
              <a href="/about">О предприятие</a>
            </li>
            <li>
              <a href="/news">Новости</a>
            </li>
            <li>
            <a href="/products">Продукция</a>
            </li>
            <li>
              <a href="/uslugi">Услуги</a>
            </li>
            <li>
              <a href="/support">Поддержка</a>
            </li>
            <li>
              <a href="/geopraphy-deliver">География поставок</a>
            </li>
            <li>
              <a href="/contacts">Контакты</a>
            </li>
            <li>
              <img src={phone1} alt="iphone" className="phonelogo" />
              <a href="tel:12378618391" className="recall">ПЕРЕЗВОНИТЕ МНЕ</a>
            </li>
          </ul>
        </header>
        <div className="main-section">
          <div className="main-section-text">
            <div className="main-text">
              <h1>
                Российский завод силовых машин
              </h1>
            </div>
            <div className="extra-text">
              <h4 className="extra-text-h4">
                научно-производственное предприятие,
                занимающееся разработкой и производством силовых машин.
              </h4>
            </div>
          </div>
          <img className="main-image" src={heroimage} alt="hero"/>
        </div>


        <div className="second-section">
          <div className="about-product">
            <h1 className="about-product-h1">
              О предприятии
            </h1>
            <div className="upper-text-section">
              <p>
                За 20 лет развития в структуре завода сформирован мощный производственный потенциал,
                научно-технический центр, испытательная лаборатория, современная база,
                учебный центр и широкая сеть региональных и международных представительств в Российской Федерации,
                Республике Беларусь, Узбекистане и Казахстане.
              </p>
              <p>
                В номенклатуре выпускаемой НПП «ПИОНЕР» продукции найдется все, что необходимо для успешного решения
                задачи автоматизации технологических процессов на любом предприятии.
                Все средства измерения производства «ПИОНЕР» внесены в Государственный реестр СИ и имеют необходимые разрешительные документы.
              </p>
            </div>
            <div className="down-text-section">
              <p>
                Ежегодно НПП «ПИОНЕР» реализует несколько проектов по модернизации серийных и разработке новых приборов,
                призванные в наибольшей степени удовлетворять возрастающие требования наших заказчиков.
              </p>
            </div>
            <div className="image-products">
              <img src={product} loading="lazy" alt="product"/>
              <img src={product1} loading="lazy" alt="product1" />
            </div>
          </div>
        </div>


        <div className="third-section">
          <h1 className="about-product-h1">
            Продукция
          </h1>
          <div className="upper-products">
            <div className="product-1">
              <img src={firstproduct} alt="1product" className="firstproduct-img" />
              <h3>Сигнализатор уровня</h3>
              <a href="#" className="product-a">
                Подробнее
                <img src={icon1} alt="icon-1" className="icon1" />
              </a>
            </div>
            <div className="product-2">
              <img src={product2} alt="2product" className="secondproduct-img" />
              <h3 className="h3">Датчики давления</h3>
              <a href="#" className="product-b">
                Подробнее
                <img src={icon1} alt="icon-1" className="icon2" />
              </a>
            </div>
            <div className="product-3">
              <img src={product3} alt="3product" className="thirdproduct-img" />
              <h3 className="h3-prod3">ПИД-регуляторы</h3>
              <a href="#" className="product-c">
                Подробнее
                <img src={icon1} alt="icon-1" className="icon3" />
              </a>
            </div>
          </div>
          <div className="down-products">
            <div className="product-4">
              <img src={product4} alt="4product" className="fourthproduct-img" />
              <h3 className="h3-prod4">Калибратор давления</h3>
              <a href="#" className="product-d">
                Подробнее
                <img src={icon1} alt="icon-4" className="icon3" />
              </a>
            </div>
            <div className="product-5">
              <img src={product5} alt="5product" className="fifthproduct-img" />
              <h3 className="h3-prod5">Корректор расхода газа</h3>
              <a href="#" className="product-e">
                Подробнее
                <img src={icon1} alt="icon-4" className="icon3" />
              </a>
            </div>
            <div className="product-6">
              <img src={product6} alt="6product" className="sixthproduct-img" />
              <h3 className="h3-prod6">Манометры</h3>
              <a href="#" className="product-f">
                Подробнее
                <img src={icon1} alt="icon-4" className="icon3" />
              </a>
            </div>
          </div>
        </div>


        <div className="fourth-section">
          <h1 className="about-product-h1">Представительства</h1>
          <div className="map-container">
            <img src={map} alt="map" />
          </div>
        </div>

        <div className="fifth-section">
          <h1 className="about-product-h1">Новости</h1>
          <div className="news-container">
            <div className="firstnews"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
