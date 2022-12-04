import React, { useState, lazy, Suspense } from "react";
import { MenuProps } from "antd";

const Menu = lazy(() => import("shell/Menu"));

const AppOne: React.FC = () => {
  const [current, setCurrent] = useState("mail");
  const items: MenuProps["items"] = [
    {
      label: "Página Inicial",
      key: "mail",
      // icon: <MailOutlined />,
    },
    {
      label: "Dashboard",
      key: "app",
      // icon: <AppstoreOutlined />,
      disabled: true,
    },
    {
      label: "Marketplace",
      key: "SubMenu",
      // icon: <SettingOutlined />,
      children: [
        {
          type: "group",
          label: "Item 1",
          children: [
            {
              label: "Option 1",
              key: "setting:1",
            },
            {
              label: "Option 2",
              key: "setting:2",
            },
          ],
        },
        {
          type: "group",
          label: "Item 2",
          children: [
            {
              label: "Option 3",
              key: "setting:3",
            },
            {
              label: "Option 4",
              key: "setting:4",
            },
          ],
        },
      ],
    },
    {
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Configurações
        </a>
      ),
      key: "alipay",
    },
  ];

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const renderLoader = () => <p> Carregando ..</p>;

  return (
    <Suspense fallback={renderLoader()}>
      <Menu
        data-testid="app1"
        onClick={onClick}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </Suspense>
  );
};

export default AppOne;
