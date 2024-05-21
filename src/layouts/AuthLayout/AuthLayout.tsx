import { FC } from "react";

const AuthLayout: FC = () => {
  return (
    <div>
      <div className="w-full min-h-[100vh] bg-page-gradient flex ">
        <div className="max-w-[1280px] my-0 mx-auto flex flex-col justify-center items-center flex-wrap flex-1 text-center text-white font-inter ">
          <h1 className="text-3xl mb-4">
            Не смогли получить данные пользователя :(
          </h1>
          <p>Проверте работу сервера и обновите страницу !</p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
