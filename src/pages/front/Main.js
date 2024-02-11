import LoginContainer from '../../containers/member/LoginContainer';
import UserContext from '../../modules/user';
import { useContext } from 'react';

const Main = () => {
  const {
    state: { isLogin, userInfo },
    actions: { setIsLogin, setUserInfo },
  } = useContext(UserContext);

  return isLogin ? (
    <h1>메인페이지 : {userInfo.userNm}</h1>
  ) : (
    <LoginContainer
      setIsLogin={setIsLogin}
      setUserInfo={setUserInfo}
    ></LoginContainer>
  );
};

export default Main;
