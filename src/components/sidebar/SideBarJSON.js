import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SideBarJSON = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Foods',
    path: '/foods',
    icon: <IoIcons.IoIosPaper />,
  },
  {
    title: 'Foods react-query',
    path: '/foods-react-query',
    icon: <FaIcons.FaCartPlus />,
  },
  {
    title: 'Foods react-table',
    path: '/foods-react-table',
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: 'Test requests',
    path: '/queries',
    icon: <FaIcons.FaEnvelopeOpenText />,
  },
  {
    title: 'Users',
    path: '/users',
    icon: <IoIcons.IoMdHelpCircle />,
  },
  {
    title: 'Users react-table',
    path: '/users-react-table',
    icon: <IoIcons.IoMdHelpCircle />,
  },
  {
    title: 'About',
    path: '/about',
    icon: <IoIcons.IoMdHelpCircle />,
  },
  
];
