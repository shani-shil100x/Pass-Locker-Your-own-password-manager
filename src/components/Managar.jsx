import React from "react";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const Managar = () => {
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const ref = useRef();
  const passwordRef = useRef();
  const [passwordArray, setpasswordArray] = useState([]);
  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);
  const copyText = (text) => {
    toast("Copied to clipboard!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigator.clipboard.writeText(text);
  };
  // show and hide password
  const showpassword = () => {
    console.log(ref.current.src);
    passwordRef.current.type = "text";
    if (ref.current.src.includes("hide.png")) {
      ref.current.src = "icons/eye.png";
      passwordRef.current.type = "text";
    } else {
      ref.current.src = "icons/hide.png";
      passwordRef.current.type = "password";
    }
  };

  // save password function
  const savePassword = () => {
    if (!form.site || !form.username || !form.password) {
      toast("Please fill the form first!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      setpasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
      localStorage.setItem(
        "passwords",
        JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
      );
      console.log([...passwordArray, form]);
      setform({ site: "", username: "", password: "" });
      toast("Password saved successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  // delete password
  const deletePassword = (id) => {
    let c = confirm("Do you really want to delete this password?");
    if (c) {
      setpasswordArray(passwordArray.filter((item) => item.id != id));
      localStorage.setItem(
        "passwords",
        JSON.stringify(passwordArray.filter((item) => item.id != id))
      );
      toast("Password Deleted Successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  // edit password
  const editPassword = (id) => {
    setform(passwordArray.filter((i) => i.id === id)[0]);
    setpasswordArray(passwordArray.filter((item) => item.id != id));
    toast("Edit Password!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  // handle input change
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="mx-auto md:max-w-xl p-2 md:p-0 md:container">
        <h1 className="text-2xl text-center text-white font-bold pt-4">
          <span className="text-gray-500">&lt;</span>
          <span className="text-black">Pass</span>
          <span className=" text-gray-500">-Locker/&gt;</span>
        </h1>
        <p className="text-gray-500 text-center font-medium">
          Your own Password Managar
        </p>
        <div className="text-black flex flex-col p-4 space-y-4 sm:space-y-4">
          <input
            onChange={handleChange}
            value={form.site}
            type="text"
            name="site"
            id="site"
            placeholder="Enter website URL"
            className="bg-white border border-green-500 rounded-full px-2 "
          />
          <div className="flex flex-wrap sm:flex-nowrap sm:flex-row flex-col w-full justify-between gap-3 mx-auto ">
            <input
              onChange={handleChange}
              value={form.username}
              type="text"
              name="username"
              id="username"
              placeholder="Enter username"
              className="bg-white w-full rounded-full border border-green-600 px-2 "
            />
            <div className="relative w-full sm:w-1/2 ">
              <input
                onChange={handleChange}
                value={form.password}
                ref={passwordRef}
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
                className="bg-white w-full rounded-full border border-green-600 px-2 "
              />
              <span
                onClick={showpassword}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 "
              >
                <img
                  src="icons/hide.png"
                  alt="eye"
                  className="w-6 p-1 cursor-pointer"
                  ref={ref}
                />
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="flex justify-center items-center bg-green-500 border border-gray-800 text-black text-[12px] font-medium rounded-full w-fit gap-1 px-3 mx-auto py-0.5 cursor-pointer hover:bg-green-400"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
              className="w-4 h-4"
            ></lord-icon>
            Save
          </button>
        </div>
        <div className="passwords">
          <h2 className="text-center font-bold text-gray-700 text-2xl pb-2 mt-[-10px]">
            🔐 Your Passwords
          </h2>
          {passwordArray.length == 0 && (
            <div className=" text-gray-600">
              <p className="text-md font-medium">🔐 No Passwords to Show</p>
              <p className="text-[10px] text-gray-500 pl-9">
                Let’s add your first one below 👇
              </p>
            </div>
          )}
          {passwordArray.length != 0 && (
            <div className="overflow-x-auto md:overflow-visible ">
              <table className="table-auto w-full border-collapse border border-gray-300 shadow-md rounded-lg overflow-hidden">
                <thead className="bg-slate-500 text-white text-sm">
                  <tr>
                    <th className="px-4 py-1 text-left">Website URL</th>
                    <th className="px-4 py-1 text-left">Username</th>
                    <th className="px-4 py-1 text-left">Password</th>
                    <th className="px-4 py-1 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-purple-100 text-[12px]">
                  {passwordArray.map((item, index) => {
                    return (
                      <tr key={index} className="hover:bg-gray-100">
                        <td className="border-t px-4 py-1">
                          <div className="flex items-center  ">
                            <a href={item.site} target="_blank">
                              {item.site}
                            </a>
                            <div
                              className="lordiconcopy size-7 cursor-pointer"
                              onClick={() => {
                                copyText(item.site);
                              }}
                            >
                              <lord-icon
                                style={{
                                  width: "20px",
                                  height: "20px",
                                  paddingTop: "6px",
                                  paddingLeft: "5px",
                                }}
                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                trigger="hover"
                              ></lord-icon>
                            </div>
                          </div>
                        </td>
                        <td className="border-t px-4 py-1">
                          <div className="flex items-center  ">
                            <span>{item.username}</span>
                            <div
                              className="lordiconcopy size-7 cursor-pointer"
                              onClick={() => {
                                copyText(item.username);
                              }}
                            >
                              <lord-icon
                                style={{
                                  width: "20px",
                                  height: "20px",
                                  paddingTop: "6px",
                                  paddingLeft: "5px",
                                }}
                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                trigger="hover"
                              ></lord-icon>
                            </div>
                          </div>
                        </td>
                        <td className="border-t px-4 py-1">
                          <div className="flex items-center  ">
                            <span>{item.password}</span>
                            <div
                              className="lordiconcopy size-7 cursor-pointer"
                              onClick={() => {
                                copyText(item.password);
                              }}
                            >
                              <lord-icon
                                style={{
                                  width: "20px",
                                  height: "20px",
                                  paddingTop: "6px",
                                  paddingLeft: "5px",
                                }}
                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                trigger="hover"
                              ></lord-icon>
                            </div>
                          </div>
                        </td>
                        <td className=" border-t px-4 py-1 space-x-3 flex ">
                          <span
                            className="cursor-pointer"
                            onClick={() => {
                              editPassword(item.id);
                            }}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/gwlusjdu.json"
                              trigger="hover"
                              style={{ width: "20px", height: "20px" }}
                            ></lord-icon>
                          </span>
                          <span
                            className="cursor-pointer"
                            onClick={() => {
                              deletePassword(item.id);
                            }}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/skkahier.json"
                              trigger="hover"
                              style={{ width: "20px", height: "20px" }}
                            ></lord-icon>
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Managar;
