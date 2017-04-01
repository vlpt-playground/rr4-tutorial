import React from 'react';
import { Redirect } from 'react-router-dom';

const logged = true;

const MyPage = () => {
    return (
        <div>
            {
                !logged && <Redirect to="/login"/>
            }
            마이페이지
        </div>
    );
};

export default MyPage;