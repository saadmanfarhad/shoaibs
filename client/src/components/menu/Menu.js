import React, { useEffect, useState } from 'react';
import MenuItem from './MenuItem';
import axios from 'axios';

const Menu = () => {
  const [menu, setMenu] = useState(undefined);

  useEffect(() => {
    const items = [
      {
        name: 'Pizza',
        price: '20',
        type: 'Italian',
        img:
          'https://i.picsum.photos/id/969/400/400.jpg?hmac=DDkXJzyjx2-VfaiggGR_3wFXvtI3teTQVb8nv_eleZ8',
        description: 'Yummy Pizza!!!'
      },
      {
        name: 'Pizza',
        price: '20',
        type: 'Italian',
        img:
          'https://i.picsum.photos/id/969/400/400.jpg?hmac=DDkXJzyjx2-VfaiggGR_3wFXvtI3teTQVb8nv_eleZ8',
        description: 'Yummy Pizza!!!'
      },
      {
        name: 'Pizza',
        price: '20',
        type: 'Italian',
        img:
          'https://i.picsum.photos/id/969/400/400.jpg?hmac=DDkXJzyjx2-VfaiggGR_3wFXvtI3teTQVb8nv_eleZ8',
        description: 'Yummy Pizza!!!'
      },
      {
        name: 'Pizza',
        price: '20',
        type: 'Italian',
        img:
          'https://i.picsum.photos/id/969/400/400.jpg?hmac=DDkXJzyjx2-VfaiggGR_3wFXvtI3teTQVb8nv_eleZ8',
        description:
          'Yummy Pizzaasdasd asda sdasd asdaaaaaaaaaaaaaaaaasd asd asdas dasdqwoind iansd ansdpanw pasndpi anw fpianscpi ansfp idnaspiic naspinf paisnc piasncpaisnd pian fpians pia n fpinap ifnapscnapnapnf apins pian fpin!!!'
      },
      {
        name: 'Pizza',
        price: '20',
        type: 'Italian',
        img:
          'https://i.picsum.photos/id/969/400/400.jpg?hmac=DDkXJzyjx2-VfaiggGR_3wFXvtI3teTQVb8nv_eleZ8',
        description:
          'Yummy Pizzaasdasd asda sdasd asdaaaaaaaaaaaaaaaaasd asd asdas dasdqwoind iansd ansdpanw pasndpi anw fpianscpi ansfp idnaspiic naspinf paisnc piasncpaisnd pian fpians pia n fpinap ifnapscnapnapnf apins pian fpin!!!'
      }
    ];
    setMenu(items);
  }, []);

  return menu ? (
    <>
      <header className="tc ph4">
        <h1 className="f3 f2-m f1-l fw2 black-90 mv3">Menu</h1>
      </header>
      <div className="cf">
        {menu.map(m => (
          <div className="fl w-50 tc">
            <MenuItem menu={m} />
          </div>
        ))}
      </div>
    </>
  ) : (
    <div>Loading...</div>
  );
};

export default Menu;
