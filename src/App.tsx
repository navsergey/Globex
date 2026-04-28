import './App.css'
import Search from "./components/Search.tsx";
import UserItem from "./components/UserItem.tsx";
import UserCard from "./components/UserCard.tsx";
import React, {useEffect, useState} from "react";
import {getUserByName, getUsers} from "./api/api.service.ts";
import type {Employee, Employees} from "./api/api.types.ts"
function App() {
    const [modal, setModal] = React.useState(false);
    const [data, setData] = React.useState<Employees>([]);
    const [selectedUser, setSelectedUser] = React.useState<Employee | null>(null);
    const [search, setSearch] = useState("");
    console.log(search)

    useEffect(() => {
        const fetchUsers = async () => {
            const {data} = await getUsers();
            setData(data);

        }
        void fetchUsers();
    }, []);

    useEffect(()=> {
        const fetchUser = async () => {
            const {data} = await getUserByName(search)
            setData(data);
        }
        void fetchUser();
    },[search])

    return (
        <>
            <div className="container">
                <div className="container-inner">
                    <Search
                        search = {search}
                        setSearch = {setSearch}
                    />
                    <div className="items-wrapper">
                        {
                            data.map((user) => {
                                return (
                                    <UserItem
                                        onClick={() => {
                                            setSelectedUser(user);
                                            setModal(true);
                                        }}
                                        key={user.email}
                                        user_name={user.name}
                                        user_number={user.phone}
                                        user_mail={user.email}
                                    />
                                )
                            })
                        }
                    </div>
                    <UserCard
                        modal={modal}
                        setModal={setModal}
                        user={selectedUser}
                    />
                </div>
            </div>
        </>
    )
}

export default App
