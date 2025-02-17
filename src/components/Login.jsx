import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}\nRemember me: ${rememberMe}`);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="hidden md:flex md:flex-1 items-center justify-start p-6 md:p-10">
        <h1 className="text-2xl md:text-3xl font-bold">
          Welcome to your expert community
        </h1>
      </div>
      <div className="flex-1 flex items-center justify-center p-4 md:p-0">
        <div className="w-full max-w-md p-4 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">
            SIGN <span className="text-blue-600">IN</span>
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="relative">
              <input
                type="text"
                value={email}
                placeholder="USERNAME"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm md:text-base"
                required
              />
            </div>
            <div className="relative">
              <input
                type="password"
                value={password}
                placeholder="PASSWORD"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm md:text-base"
                required
              />
            </div>
            <button 
              type="submit"
              className="w-full py-2 md:py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm md:text-base"
            >
              SIGN IN
            </button>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between text-xs md:text-sm space-y-2 md:space-y-0">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="mr-2"
                />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-gray-600 hover:underline">
                Forgot password?
              </a>
            </div>
          </form>
          <div className="mt-4 md:mt-6 text-center text-xs md:text-sm text-gray-600">
            Don't have an account? <a href="#" className="text-blue-600 hover:underline">Register</a>
          </div>
          <div className="flex justify-center space-x-4 mt-4 md:mt-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-6 h-6 md:w-8 md:h-8 object-contain cursor-pointer"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-6 h-6 md:w-8 md:h-8 cursor-pointer"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg" alt="Twitter" className="w-6 h-6 md:w-8 md:h-8 cursor-pointer"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
