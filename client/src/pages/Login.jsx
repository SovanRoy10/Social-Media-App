export default function Login() {
  return (
    <div className="login w-[100%] h-[100vh] bg-[#f0f2f5] flex items-center justify-center">
      <div className="w-[70%] h-[70%] flex">
        <div className="loginLeft flex-[1] flex flex-col justify-center gap-5">
          <h3 className="loginLogo text-[50px] font-bold text-[#1775ee]">
            YoyoSocial
          </h3>
          <span className="loginDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, saepe!
          </span>
        </div>

        <div className="loginRight flex-[1] flex flex-col justify-center">
          <div className="loginBox h-[300px] p-[20px] bg-white rounded-[10px] flex flex-col justify-between">
            <input
              placeholder="Email"
              type="text"
              className="h-[50px] rounded-lg border-2 border-gray-400 text-[18px] pl-[20px] focus:outline-none"
            />
            <input
              placeholder="Password"
              type="text"
              className="h-[50px] rounded-lg border-2 border-gray-400 text-[18px] pl-[20px] focus:outline-none"
            />
            <button className="loginButton h-[50px] bg-[#1775ee] text-white rounded-xl text-xl font-semibold">
              Log In
            </button>
            <span className="loginForgot text-center text-[#1775ee] hover:underline underline-offset-2">
              Forgot Password ?{" "}
            </span>
            <button className="h-[50px] bg-[#42b72a] text-white rounded-xl text-xl font-semibold w-fit mx-auto px-2 py-1">
              Create a new account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
