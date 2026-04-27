import React from "react";
import cancelImg from "../assets/cancel.svg"

interface Props {
    modal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserCard: React.FC<Props> = (
    {
        modal,
        setModal,
    }
) => {
    return modal ? (
        <div className="modal-backdrop" onClick={() => setModal(false)}>
            <div className="card" onClick={(e) => e.stopPropagation()}>
                <div className="card-header">
                    <p className="card__name">Евгения Савченко</p>
                    <img src={cancelImg}
                         className="card__cancel"
                         onClick={() => setModal(false)}
                         alt="Закрыть карточку"/>
                </div>
                <div className="card__description">

                    <div className="card-number-wrapper">
                        <p>Телефон:</p>
                        <p>+7 (918) 078-17-05</p>
                    </div>
                    <div className="card-mail-wrapper">
                        <p>Почта:</p>
                        <p>yysavch1@mts.ru</p>
                    </div>
                    <div className="card-data-wrapper">
                        <p>Дата приема:</p>
                        <p>15.10.2020</p>
                    </div>
                    <div className="card-job-wrapper">
                        <p>Должность:</p>
                        <p>Дизайнер</p>
                    </div>
                    <div className="card-division-wrapper">
                        <p>Подразделение:</p>
                        <p>Трайб автоматизированных систем контактных центров</p>
                    </div>
                </div>
                <div className="card__info">
                    <p className="info-title">Дополнительная информация:</p>
                    <p className="info-text">Разработчики используют текст в качестве заполнителя макта страницы.
                        Разработчики используют текст в качестве заполнителя макта страницы.</p>
                </div>
            </div>
        </div>
    ) : null;
};

export default UserCard;