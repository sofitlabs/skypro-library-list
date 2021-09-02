import { Layout } from "antd";
import { Link } from "react-router-dom";
import "./Layout.scss";
import Text from "antd/lib/typography/Text";

const { Header, Footer, Content } = Layout;

export const AppLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <Layout className="layout">
      <Header>
        <Link to="/">
          <Text type="success" className="header__title">
            Library list
          </Text>
        </Link>
      </Header>
      <Content>{children}</Content>
      <Footer className="layout__footer">
        Made with love by Fedorov Kirill
      </Footer>
    </Layout>
  );
};
