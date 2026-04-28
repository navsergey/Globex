import React from "react";
import cancelImg from "../assets/cancel.svg"
import type {Employee} from "../api/api.types.ts";

interface Props {
    modal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    user: Employee | null;
}

const UserCard: React.FC<Props> = (
    {
        modal,
        setModal,
        user,
    }
) => {
    if (!modal || !user) {
        return null;
    }

    return (
        <div className="modal-backdrop" onClick={() => setModal(false)}>
            <div className="card" onClick={(e) => e.stopPropagation()}>
                <div className="card-header">
                    <p className="card__name">{user.name}</p>
                    <img src={cancelImg}
                         className="card__cancel"
                         onClick={() => setModal(false)}
                         alt="Закрыть карточку"/>
                </div>
                <div className="card__description">

                    <div className="card-number-wrapper">
                        <p>Телефон:</p>
                        <p>{user.phone}</p>
                    </div>
                    <div className="card-mail-wrapper">
                        <p>Почта:</p>
                        <p>{user.email}</p>
                    </div>
                    <div className="card-data-wrapper">
                        <p>Дата приема:</p>
                        <p>{user.hire_date}</p>
                    </div>
                    <div className="card-job-wrapper">
                        <p>Должность:</p>
                        <p>{user.position_name}</p>
                    </div>
                    <div className="card-division-wrapper">
                        <p>Подразделение:</p>
                        <p>{user.department}</p>
                    </div>
                </div>
                <div className="card__info">
                    <p className="info-title">Дополнительная информация:</p>
                    <p className="info-text">{user.address}</p>
                </div>
            </div>
        </div>
    );
};

export default UserCard;