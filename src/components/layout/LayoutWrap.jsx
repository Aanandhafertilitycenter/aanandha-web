import HeaderComponent from './Header';
import FooterComponent from './Footer';
import { Flex,Layout } from 'antd';
import AppRoutes from '../../router/AppRoutes';

const { Header,Footer, Sider, Content } = Layout;

const LayoutWrap = () =>{

    const footerStyle = {
      textAlign: 'center',
      color: '#fff',
      backgroundColor: '#4096ff',
    };
    const layoutStyle = {
      borderRadius: 8,
      overflow: 'hidden',
      width: 'calc(100% - 8px)',
      maxWidth: 'calc(100% - 8px)',
      height:'100vh',
    };
    const headerStyle = {
      textAlign: 'center',
      color: '#fff',
      height: 70,
      // lineHeight: '64px',
      backgroundColor: '#4096ff',
      paddingLeft: '0px',
      paddingRight: '0px'
    };
    const contentStyle = {
      textAlign: 'center',
      minHeight: 120,
      lineHeight: '120px',
      color: '#fff',
      display:'flex',
      overflow:'auto',
      scrollbarWidth:'none',
      backgroundColor: '#f9f9f9',
      // backgroundColor: '#0958d9',
    };

    return(
        <>
          <Flex gap="middle" wrap>
            <Layout style={layoutStyle}>
              <Header style={headerStyle}>{<HeaderComponent />}</Header>
              <Content style={contentStyle}>{<AppRoutes />}
              </Content>
              {/* <Footer style={footerStyle}>{<FooterComponent />}</Footer> */}
            </Layout>
          </Flex>
        </>
    )
}

export default LayoutWrap;