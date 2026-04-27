import './App.css'
import searchImg from './assets/search-img.svg'
import phoneImg from './assets/phone-img.svg'
import mailImg from './assets/mail-img.svg'

function App() {
  return (
    <>
        <div className="container">
            <div className="container-inner">
                <div className="search-wrapper">
                    <input className="search__text" type="text" />
                    <img src={searchImg} className="search__image" alt="Поиск"/>
                </div>
                <div className="items-wrapper">
                    <div className="item-wrapper">
                        <p className="item__name">Евгения Савченко</p>
                        <div className="contacts-wrapper">
                            <div className="item__number">
                                <span className="icon-box">
                                    <img src={phoneImg} className="img-number" alt="Телефон"/>
                                </span>
                                <p className="number">+7 (918) 078-17-05</p>
                            </div>
                            <div className="item__mail">
                                <span className="icon-box">
                                    <img src={mailImg} className="img-mail" alt="Почта"/>
                                </span>
                                <p className="mail">yysavchenk@mail.ru</p>
                            </div>
                        </div>
                    </div>
                    <div className="item-wrapper">
                        <p className="item__name">Евгения Савченко</p>
                        <div className="contacts-wrapper">
                            <div className="item__number">
                                <span className="icon-box">
                                    <img src={phoneImg} className="img-number" alt="Телефон"/>
                                </span>
                                <p className="number">+7 (918) 078-17-05</p>
                            </div>
                            <div className="item__mail">
                                <span className="icon-box">
                                    <img src={mailImg} className="img-mail" alt="Почта"/>
                                </span>
                                <p className="mail">yysavchenk@mail.ru</p>
                            </div>
                        </div>
                    </div>
                    <div className="item-wrapper">
                        <p className="item__name">Евгения Савченко</p>
                        <div className="contacts-wrapper">
                            <div className="item__number">
                                <span className="icon-box">
                                    <img src={phoneImg} className="img-number" alt="Телефон"/>
                                </span>
                                <p className="number">+7 (918) 078-17-05</p>
                            </div>
                            <div className="item__mail">
                                <span className="icon-box">
                                    <img src={mailImg} className="img-mail" alt="Почта"/>
                                </span>
                                <p className="mail">yysavchenk@mail.ru</p>
                            </div>
                        </div>
                    </div>
                    <div className="item-wrapper">
                        <p className="item__name">Евгения Савченко</p>
                        <div className="contacts-wrapper">
                            <div className="item__number">
                                <span className="icon-box">
                                    <img src={phoneImg} className="img-number" alt="Телефон"/>
                                </span>
                                <p className="number">+7 (918) 078-17-05</p>
                            </div>
                            <div className="item__mail">
                                <span className="icon-box">
                                    <img src={mailImg} className="img-mail" alt="Почта"/>
                                </span>
                                <p className="mail">yysavchenk@mail.ru</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
