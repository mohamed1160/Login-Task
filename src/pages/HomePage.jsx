import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function HomePage() {
    const navigate = useNavigate();
    let jwt = sessionStorage.getItem("jwt");
    const [userInfo, setUserInfo] = useState();

    
    useEffect(() => {
        if (!jwt) {
            navigate("/login");
        }
        else {
            let domain = "http://82.112.241.233:1993";
            let endPoint = "/api/users/me";
            let url = domain + endPoint;
            axios.get(url, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            .then((res) => {
                setUserInfo(res.data);
                // console.log(res);
            })
            .catch((err) => {
                console.log(err);
                sessionStorage.clear();
                navigate("/login");
            })
        }
    })

    const logout = () => {
        sessionStorage.clear();
        navigate("/login");
    }
  return (
      <div>
          <div className="w-full bg-[#111418] h-screen flex items-center relative">
              <img src="https://i.pinimg.com/1200x/7f/5e/54/7f5e5406f8b7603bff9d66725af71f02.jpg" className="w-full h-full object-cover" alt="" />
              <div className="text-2xl font-bold text-white mb-4 absolute top-5 left-5">
                  Welcome <span className="text-2xl font-bold text-white drop-shadow-[0_0_20px_#fff] ">{userInfo?.username}</span>
              </div>
              <button className="btn px-3 py-5 hover:btn-error absolute top-5 right-5" onClick={logout}>
                  Log Out
              </button>
              
              <div className="max-w-4xl mx-auto text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <h2 className="text-4xl font-bold text-white mb-4">Discover Your Dream Car</h2>
                  <p className="text-lg text-[#a3a3a3] mb-8">Explore our premium collection of luxury and sports cars. Find the perfect vehicle that matches your style and performance needs.</p>
                  <button className="bg-[#605dff] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#5048cc] transition-colors">Browse Cars</button>
              </div>
          </div>
      </div>
  );
}
