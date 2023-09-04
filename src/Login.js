import React from 'react'
import './Login.css'
import logo from './logo.png'

const Login = () => {
  return (
    <div className="container">
      <input type="checkbox" id="flip" />
      <div className="cover">
        <div className="front">
         
          <div className="text">
          <img src={logo} alt="" />
          
          </div>
        </div>
      </div>
      <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="title">تسجيل الدخول</div>
            <form action="#">
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fas fa-envelope"></i>
                  <input type="text" placeholder="رقم الهويه" required />
                </div>
                <div className="input-box">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder="كلمه المرور" required />
                </div>
                <div className="text"><a href="#">نسيت كلمه المرور؟</a></div>
                <div className="button input-box">
                  <input type="submit" value="تآكيد" />
                </div>
                <div className="text sign-up-text">ما عندك حساب ؟ <label htmlFor="flip">انشاء حساب
            </label></div>
              </div>
            </form>
          </div>
          <div className="signup-form">
            <div className="title"> انشاء حساب</div>
            <form action="#">
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fas fa-user"></i>
                  <input type="text" placeholder="رقم الهويه" required />
                </div>
                <div className="input-box">
                  <i className="fas fa-envelope"></i>
                  <input type="text" placeholder="اسم المستخدم" required />
                </div>
                <div className="input-box">
                  <i className="fas fa-envelope"></i>
                  <input type="text" placeholder="ادخل الايميل" required />
                </div>
                <div className="input-box">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder="كلمه المرور" required />
                </div>
                <div className="button input-box">
                  <input type="submit" value="حفظ" />
                </div>
                <div className="text sign-up-text">عندك حساب ؟ <label htmlFor="flip">تسجيل الدخول</label></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login