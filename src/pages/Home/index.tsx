import React, { Fragment, useState } from 'react';
import { Sidebar, SidebarItem } from "../../components/Sidebar/Sidebar";
import {
  LifeBuoy,
  UserCircle,
  Receipt,
  Settings,
  Home,
  Landmark,
  LogOut,
} from "lucide-react"
import { PersonTable } from "../../components/Table/PersonTable/PersonTable";
import { CategoryTable } from "../../components/Table/CategoryTable/CategoryTable";
import { HouseholdTable } from "../../components/Table/HouseholdTable/HouseholdTable";
import { ReceiptTable } from "../../components/Table/ReceiptTable/ReceiptTable";
import { ROUTES } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { authActions, selectAuthenticated } from '../../store/reducers';
import { Navigate } from 'react-router-dom';

function HomePage() {
  
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(selectAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} />;
  }

  const logout = (e) => {
    dispatch(authActions.logout());
    localStorage.removeItem('isAuth');
    console.log(isAuthenticated);
  }

  const [person, setPerson] = useState(true);
  const [household, setHousehold] = useState(false);
  const [category, setCategory] = useState(false);
  const [receipt, setReceipt] = useState(false);

  return (
    <Fragment>
      <main className="App">
        <div className="flex flex-row">
         <Sidebar>
            <SidebarItem icon={<UserCircle size={30} />} text="Person" active={person} main={setPerson} others={[setHousehold, setCategory, setReceipt]}/>
            <SidebarItem icon={<Home size={30} />} text="Household" active={household} main={setHousehold} others={[setPerson, setCategory, setReceipt]}/>
            <SidebarItem icon={<Landmark size={30} />} text="Category" active={category} main={setCategory} others={[setHousehold, setPerson, setReceipt]}/>
            <SidebarItem icon={<Receipt size={30} />} text="Receipt" active={receipt} main={setReceipt} others={[setHousehold, setCategory, setPerson]}/>
            <hr className="my-3"/>
            <SidebarItem icon={<Settings size={30} />} text="Settings" active={false} main={null} others={null}/>
            <SidebarItem icon={<LifeBuoy size={30} />} text="Help" active={false} main={null} others={null}/>
            <hr className="my-3"/>        
            <SidebarItem icon={<LogOut size={30} />} text="Logout" active={false} main={logout} others={null}/>
          </Sidebar>
          {person && <PersonTable />}
          {household && <HouseholdTable />}
          {category && <CategoryTable />}
          {receipt && <ReceiptTable />}
          
        </div>
      </main>
    </Fragment>
  );
}

export default HomePage;
