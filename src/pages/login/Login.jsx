import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../../redux/slices/authSlice";
import { useNavigate, Navigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    loading,
    user,
    error: authError,
    isLoggedIn,
  } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLoggedIn) {
      // Show success toast
      toast.success("Login successful!");

      // Navigate to the home page after a delay (e.g., 2 seconds)
      const navigateTimeout = setTimeout(() => {
        navigate("/");
      }, 2000);

      // Clear the timeout when the component unmounts or when navigating
      return () => {
        clearTimeout(navigateTimeout);
      };
    } else if (authError) {
      toast.error(authError);
    }
  }, [isLoggedIn, authError, navigate]);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform validation
    if (!username || !password) {
      setError("Please enter both username and password.");
    }

    try {
      // Dispatch the login action
      await dispatch(userLogin({ username, password }));
    } catch (error) {
      setError("Invalid username and password");
      console.error("Login failed:", error);
      return;
    }
  };

  return (
    <div className="container mt-5 pt-5">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title text-center">Login</h2>
              <form onSubmit={handleSubmit} className="p-3">
                <div className="form-group py-2">
                  <label
                    htmlFor="username"
                    className="text-left pb-3 fw-semibold fs-5"
                  >
                    Username:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter your username"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </div>
                <div className="form-group my-2">
                  <label htmlFor="password" className="pb-3 fw-semibold fs-5">
                    Password:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                {error && (
                  <div className="alert alert-danger my-2">{error}</div>
                )}
                {authError && !error && (
                  <div className="alert alert-danger my-2">{authError}</div>
                )}
                <button
                  type="submit"
                  className="btn btn-success my-2 text-center fs-6"
                >
                  {loading ? (
                    <Spinner animation="border" role="status" size="sm">
                      <span className="visually-hidden">Loading...</span>{" "}
                    </Spinner>
                  ) : (
                    "Login"
                  )}
                </button>
              </form>
              {/* {user ? <Navigate to="/" replace={true} /> : null} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
