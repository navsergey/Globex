import './App.css'
import Search from "./components/Search.tsx";
import users from '../consts.ts'
import UserItem from "./components/UserItem.tsx";
import UserCard from "./components/UserCard.tsx";
import React from "react";

function App() {
    const [modal, setModal] = React.useState(false);
    return (
        <>
            <div className="container">
                <div className="container-inner">
                    <Search/>
                    <div className="items-wrapper">
                        {
                            users.map((user) => {
                                return (
                                    <UserItem
                                        onClick={() => setModal(true)}
                                        key={user.user_mail}
                                        user_name={user.user_name}
                                        user_number={user.user_number}
                                        user_mail={user.user_mail}
                                    />
                                )
                            })
                        }
                    </div>
                    <UserCard
                        modal={modal}
                        setModal={setModal}
                    />
                </div>
            </div>
        </>
    )
}

export default App
