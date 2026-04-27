import phoneImg from "../assets/phone-img.svg";
import mailImg from "../assets/mail-img.svg";
import React from "react";

interface Props {
    user_name: string;
    user_number: string;
    user_mail: string;
    onClick: () => void;
}

const UserItem: React.FC<Props> = (
    {
        user_name,
        user_number,
        user_mail,
        onClick,
    }
) => {
    return (
        <div className="item-wrapper" onClick={onClick}>
            <p className="item__name">{user_name}</p>
            <div className="contacts-wrapper">
                <div className="item__number">
                    <span className="icon-box">
                        <img src={phoneImg} className="img-number" alt="Телефон"/>
                    </span>
                    <p className="number">{user_number}</p>
                </div>
                <div className="item__mail">
                    <span className="icon-box">
                        <img src={mailImg} className="img-mail" alt="Почта"/>
                    </span>
                    <p className="mail">{user_mail}</p>
                </div>
            </div>
        </div>
    );
};

export default UserItem;