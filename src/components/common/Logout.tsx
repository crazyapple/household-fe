import React from 'react';
import { useAppDispatch } from '../../hooks';
import { authActions } from '../../store/reducers';

function Logout() {
  const dispatch = useAppDispatch();

  return (
    <button
      className="btn-reset"
      onClick={() => {
        dispatch(authActions.logout());
        localStorage.clear();
      }}>
      Đăng xuất
    </button>
  );
}

export default Logout;
