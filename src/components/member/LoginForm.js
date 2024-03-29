import { InputText } from '../commons/InputStyle';
import { BigButton } from '../commons/ButtonStyle';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FiLock, FiKey, FiUserPlus } from 'react-icons/fi';
import styled from 'styled-components';
import React, { useRef, useEffect, useState } from 'react';
import loadable from '@loadable/component';

const Message = loadable(() => import('../commons/Message'));

const FormBox = styled.form`
  width: 300px;
  padding-bottom: 80px;

  .links {
    border: 1px solid #d5d5d5;
    border-left: 0;
    border-right: 0;
    padding: 10px 0;
    margin-top: 10px;
    display: flex;

    a {
      flex-grow: 1;
      width: 0;
      text-align: center;

      svg {
        vertical-align: middle;
      }
    }
  }
`;

const LoginText = styled(InputText)`
  display: block;
  & + & {
    margin-top: 5px;
  }
`;

const LoginForm = ({ onSubmit, errors }) => {
  const { t } = useTranslation();

  errors = errors || {};

  const refEmail = useRef();

  useEffect(() => {
    refEmail.current.focus();
  }, [refEmail]);

  return (
    <FormBox onSubmit={onSubmit}>

      <LoginText
        type="text"
        name="email"
        placeholder={t('이메일')}
        ref={refEmail}
      />
      {errors.email && errors.email.message && (
        <Message>{errors.email.message}</Message>
      )}
      <LoginText type="password" name="password" placeholder={t('비밀번호')} />
      {errors.password && errors.password.message && (
        <Message>{errors.password.message}</Message>
      )}

      <BigButton type="submit" size="medium" className="mt5">
        {t('로그인')}
      </BigButton>
      <div className="links">
        <Link to="/find_id">
          <FiLock /> {t('아이디 찾기')}
        </Link>
        <Link to="/find_pw">
          <FiKey /> {t('비밀번호 찾기')}
        </Link>
        <Link to="/join">
          <FiUserPlus /> {t('회원가입')}
        </Link>
      </div>
      {errors.global && errors.global.message && (
        <Message>{errors.global.message}</Message>
      )}
    </FormBox>
  );
};

export default React.memo(LoginForm);
