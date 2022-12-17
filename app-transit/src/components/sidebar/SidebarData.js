import React, { useState } from 'react';
import * as BiIcons from 'react-icons/bi';
import * as BsIcons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';
import * as HiIcons from 'react-icons/hi';

export const SidebarData = [
    {
        title: 'Inicio',
        path: '/',
        icon: <FaIcons.FaHome />,
        cName: 'nav-text'
    },
    {
        title: 'Reportes',
        path: '/reports',
        icon: <HiIcons.HiDocumentReport />,
        cName: 'nav-text'
    },
    {
        title: 'Estadísticas',
        path: '/stats',
        icon: <BiIcons.BiStats />,
        cName: 'nav-text'
    },
    {
        title: 'Configuración',
        path: '/config',
        icon: <BsIcons.BsFillGearFill />,
        cName: 'nav-text'
    }
]