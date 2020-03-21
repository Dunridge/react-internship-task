import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import CardRow from './components/CardRow';
import ServicesCard from './components/ServicesCard';
import {ReactComponent as FacebookLogoSvg } from "./resources/facebook-app-logo.svg";

class App extends React.Component {
    state = {
        //consider using Redux
        serviceTitles: [
            'Производства оборудования',
            'Металлическая мебель',
            'Металлоконструкции',
            'Металообработка',
            'Раскрой металла',
            'Конструкторское бюро',
            'Аренда техники',
            'Ремонт техники'
        ],
        serviceCardTitles: ['Почему мы?', 'Наши приемущества'],
        serviceCardInfo: `Люди - профессионалы с большим опытом роботы. Полный
          спектр работ по металлообработке в одном месте - 
          комплексный индивидуальний подход. Конструкторский отдел.
          Логистика. Многолетный опыт машиностроения - создание 
          промышленого`
    };

    componentDidMount() {
        // for checking the content
        console.log(this.state.serviceTitles);
        console.log(this.state.serviceCardInfo);
    }

    render() {
        return (
            <div className="App">
                <div className="nav-info">
                    <Navbar />
                    <Carousel />
                </div>

                <div className="services">
                    <div className="info-cards">
                        <h1>Услуги</h1>
                        <CardRow cards={this.state.serviceTitles.slice(0, 3)} />
                        <CardRow cards={this.state.serviceTitles.slice(3, 6)} />
                        <CardRow cards={this.state.serviceTitles.slice(6, 8)} />
                        <div>Быстрый расчет цены по чертежу</div>
                        <h1>Наша компания</h1>
                    </div>
                    <div className="services-section">
                        <ServicesCard
                            cardTitle={this.state.serviceCardTitles[0]}
                            cardInfo={this.state.serviceCardInfo}
                        />
                        <ServicesCard
                            cardTitle={this.state.serviceCardTitles[1]}
                            cardInfo={this.state.serviceCardInfo}
                        />
                    </div>
                    <div className="footer">
                        <div>
                            <h3>О компании</h3>
                            <div>Наши роботы</div>
                            <div>Контакты</div>
                            <div>Доставка</div>
                            <div>Форма заказа</div>
                        </div>
                        <div>
                            <h3>Услуги</h3>
                            <div>
                                <div>
                                    <div>Производство оборудования</div>
                                    <div>Металлическая мебель</div>
                                    <div>Металлоконструкции</div>
                                    <div>Металлообработка</div>
                                </div>
                                <div>
                                    <div>Раскрой метала</div>
                                    <div>Конструкторское бюро</div>
                                    <div>Аренда техники</div>
                                    <div>Ремонт техники</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3>Контактная информация</h3>
                            <div>Заводская улица, 2В, Буча</div>
                            <div>Киевская область, 08292</div>
                            <div>ПН - ПТ: 09:00 - 18:00</div>
                            <div>+38(097)123-45-67</div>
                            <div className="icons">
                            <FacebookLogoSvg/>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <div>Developed by</div>
                        <div>Stubbs</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
