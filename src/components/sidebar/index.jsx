import React from 'react';
import { Nav, Navbar } from "react-bootstrap";

import * as AiIcons from 'react-icons/ai';

import { SideBarJSON } from './SideBarJSON';

import './sidebar.scss';

function SideBar(props) {
  const { sidebar, togleSidebar } = props.mehanics;

  return (
    <Navbar bg="light" variant="light" className={sidebar ? 'sidenav active' : 'sidenav'} onClick={togleSidebar}> 
      <Nav variant="pills" className="flex-column">
        <Nav.Link className='menu-bars'>
          <AiIcons.AiOutlineClose />
        </Nav.Link>
        {SideBarJSON.map((item, index) => {
          return (
            <Nav.Link key={index} href={'#'+item.path}>
              {item.icon}
              <span>{item.title}</span>
            </Nav.Link>
          );
        })}
      </Nav>
    </Navbar>
  );
}

export default SideBar;
