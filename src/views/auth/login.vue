<template>
  <div class="login-page">
    <div class="login-box">
      <div class="login-image">
        <img src="../../assets/image/login.jpg" />
      </div>
      <Form class="login-from" @submit="onSubmit" :validation-schema="schema">
        <h2>会员登录</h2>
        <Field
          name="username"
          label="用户名"
          placeholder="请输入用户名"
          class="hd-input"
        />
        <ErrorMessage name="username" class="hd-error"></ErrorMessage>
        <Field
          name="password"
          label="密码"
          type="text"
          placeholder="请输入密码"
          class="hd-input"
        />
        <ErrorMessage name="password" class="hd-error"></ErrorMessage>
        <button class="login-button">登&nbsp;录</button>

        <div class="login-link">
          <div class="divsvg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M385.2 167.6c6.4 0 12.6.3 18.8 1.1C387.4 90.3 303.3 32 207.7 32 100.5 32 13 104.8 13 197.4c0 53.4 29.3 97.5 77.9 131.6l-19.3 58.6 68-34.1c24.4 4.8 43.8 9.7 68.2 9.7 6.2 0 12.1-.3 18.3-.8-4-12.9-6.2-26.6-6.2-40.8-.1-84.9 72.9-154 165.3-154zm-104.5-52.9c14.5 0 24.2 9.7 24.2 24.4 0 14.5-9.7 24.2-24.2 24.2-14.8 0-29.3-9.7-29.3-24.2.1-14.7 14.6-24.4 29.3-24.4zm-136.4 48.6c-14.5 0-29.3-9.7-29.3-24.2 0-14.8 14.8-24.4 29.3-24.4 14.8 0 24.4 9.7 24.4 24.4 0 14.6-9.6 24.2-24.4 24.2zM563 319.4c0-77.9-77.9-141.3-165.4-141.3-92.7 0-165.4 63.4-165.4 141.3S305 460.7 397.6 460.7c19.3 0 38.9-5.1 58.6-9.9l53.4 29.3-14.8-48.6C534 402.1 563 363.2 563 319.4zm-219.1-24.5c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.8 0 24.4 9.7 24.4 19.3 0 10-9.7 19.6-24.4 19.6zm107.1 0c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.5 0 24.4 9.7 24.4 19.3.1 10-9.9 19.6-24.4 19.6z"
              />
            </svg>
          </div>
          <div class="div-alink">
            <a href="">网站首页</a>
            <a href="">找回密码</a>
            <a href="">注册账号</a>
          </div>
        </div>
      </Form>
    </div>
  </div>
</template>

<script setup lang="ts">
import userApi from "@/api/user";
import validate from "@/plugins/validate";
import utils from "@/utils";
const { Form, Field, ErrorMessage } = validate;
const schema = {
  username: { required: true },
  password: { required: true, min: 3 },
};
const onSubmit = async (values: any) => {
  const {
    data: { token },
  } = await userApi.login(values);
  utils.store.set("token", {
    token,
    expire: 1000,
  });
  console.log(token);
};
</script>

<style scoped lang="scss">
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #bdc8d6;
  .login-box {
    display: flex;
    width: 720px;
    height: 400px;
    background-color: #fefefe;
    border-radius: 10px;
    overflow: hidden;
    .login-image {
      flex: 1.1;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .login-from {
      display: flex;
      box-sizing: border-box;
      padding: 18px;
      flex-direction: column;
      flex: 1;
      h2 {
        margin: 20px auto;
        color: rgb(113, 113, 113);
        font-size: 25px;
        font-weight: 500;
        text-shadow: rgba(114, 114, 115, 0.418) 1px 1px 5px;
      }
      .hd-input {
        width: 100%;
        margin: 15px 0px;
        box-sizing: border-box;
        padding: 8px 5px;
        outline: none;
        border: 1.5px solid rgb(159, 182, 182);
        border-radius: 4px;
        //设置外边线
        &:focus {
          outline: #622fce solid 2.5px;
          //外边线偏移量
          outline-offset: 3px;
          transition: 0.1s;
          border-color: rgb(255, 255, 255);
        }
      }
      .hd-error {
        border-radius: 6px;
        padding: 3px 4px;
        color: red;
        font-size: 14px;
        margin-top: -7px;
      }
      .login-button {
        width: 100%;
        padding: 8px;
        color: #c2cede;
        font-size: 17px;
        border: none;
        border-radius: 6px;
        background-color: #6f0de8;
        margin-top: 17px;
        &:hover {
          transition: 0.3s;
          background-color: #6f0de8;
          opacity: 0.8;
          cursor: pointer;
        }
      }
      .login-link {
        margin-top: 25px;
        display: flex;
        flex-direction: column;

        .divsvg {
          position: relative;
          margin-left: 50%;
          right: 20px;
          top: -10px;
          width: 40px;
          flex: 1;
          &:hover {
            cursor: pointer;
          }
        }
        .div-alink {
          flex: 2;
          display: flex;
          justify-content: space-evenly;
          a {
            color: #717172;
            font-size: 18px;
            &:hover {
              color: #1190ff;
            }
          }
        }
      }
    }
  }
}
</style>
