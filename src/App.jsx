import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  const gridData = [
    { num: "04", title: "Incident reported" },
    { num: "06", title: "Check In" },
    { num: "04", title: "Services open" },
  ];

  return (
    <main className="flex">
      <Sidebar />

      {/* data table section  */}
      <div className="bg-[#F4F6F6] p-[45px] w-full h-screen overflow-y-auto">
        {/* header section  */}
        <div className="flex items-center justify-between">
          <div className="flex gap-[40px] items-center">
            <div className="backBtn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="15"
                fill="none"
                viewBox="0 0 18 15"
              >
                <path
                  fill="#4690FF"
                  stroke="#fff"
                  strokeWidth="0.3"
                  d="M5.227 5.648l2.464-2.76h0c.558-.627.558-1.647 0-2.275-.553-.617-1.436-.617-1.99 0 0 0 0 0 0 0L.572 6.363h0l-.004.004C.293 6.652.15 7.045.15 7.489c0 .443.142.832.419 1.123h0l.003.004 5.13 5.771s0 0 0 0c.548.617 1.435.617 1.984 0 .558-.628.558-1.648 0-2.276L5.222 9.352l-.224-.25H16.43c.771 0 1.42-.7 1.42-1.602 0-.903-.649-1.602-1.415-1.602H5.004l.223-.25z"
                ></path>
              </svg>
            </div>
            <p className="header-Text">Incidents.</p>
          </div>
          <div className="flex items-center gap-[20px]">
            <button className="headerBtn flex items-center gap-[7px]">
              <div className="circle">B</div>
              <p className="headerBtnText">Non Bio Medical</p>
            </button>
            <button className="hederDropDown">
              <p>Vijayanagar</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="15"
                fill="none"
                viewBox="0 0 18 15"
              >
                <path
                  fill="#1B2535"
                  d="M15.346 3.967a1.288 1.288 0 00-.822-.212c-.296.022-.57.142-.762.332L9 8.847l-4.762-4.76a1.208 1.208 0 00-.762-.333 1.282 1.282 0 00-.822.214.9.9 0 00-.4.635.838.838 0 00.257.685l5.625 5.625c.106.106.238.19.387.249a1.314 1.314 0 00.954 0c.149-.058.281-.143.387-.249l5.625-5.625a.838.838 0 00.256-.685.902.902 0 00-.399-.636z"
                ></path>
              </svg>
            </button>
            <div className="whiteCircle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="none"
                viewBox="0 0 22 22"
              >
                <g fill="#1B2535" clipPath="url(#clip0_1_1014)">
                  <path d="M8.938 3.438H4.811c-.759 0-1.375.615-1.375 1.374v4.125c0 .76.616 1.376 1.376 1.376h4.125c.759 0 1.374-.616 1.374-1.376V4.814c0-.76-.615-1.375-1.374-1.375zM8.938 11.688H4.811c-.759 0-1.375.615-1.375 1.374v4.126c0 .759.616 1.375 1.376 1.375h4.125c.759 0 1.374-.616 1.374-1.375v-4.125c0-.76-.615-1.376-1.374-1.376zM17.188 3.438h-4.125c-.76 0-1.376.615-1.376 1.374v4.125c0 .76.616 1.376 1.376 1.376h4.124c.76 0 1.375-.616 1.375-1.376V4.814c0-.76-.615-1.375-1.375-1.375zM12.375 15.813a.687.687 0 00.688-.688v-2.75a.687.687 0 10-1.376 0v2.75a.687.687 0 00.688.688z"></path>
                  <path d="M17.875 13.063h-2.063v-.688a.687.687 0 10-1.374 0v4.813h-2.063a.687.687 0 100 1.375h2.75a.687.687 0 00.688-.688v-3.438h2.062a.687.687 0 100-1.374zM17.875 15.813a.687.687 0 00-.688.687v1.375a.687.687 0 101.375 0V16.5a.687.687 0 00-.687-.688z"></path>
                </g>
                <defs>
                  <clipPath id="clip0_1_1014">
                    <path fill="#fff" d="M0 0H22V22H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="whiteCircle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  fill="#1B2535"
                  d="M11.299 16.111H8.625c-.535 0-.993.611-.687 1.146.458.687 1.222 1.146 2.062 1.146a2.28 2.28 0 001.986-1.146c.306-.535-.076-1.146-.687-1.146zM17.486 13.59l-.305-.382c-1.223-1.604-1.834-3.514-1.834-5.5v-.534c0-2.75-1.986-5.195-4.736-5.5-3.208-.382-5.958 2.139-5.958 5.27v.764c0 1.986-.611 3.896-1.834 5.5l-.305.382c-.153.153-.23.459-.153.611.23.688.84 1.146 1.528 1.146H16.11c.688 0 1.299-.458 1.451-1.146.077-.229 0-.458-.076-.61z"
                ></path>
              </svg>
            </div>
            <div className="circle">A</div>
          </div>
        </div>

        {/* grid section  */}
        <div className="grid grid-cols-3 gap-[11px] mt-[55px]">
          {gridData.map((item, index) => {
            return (
              <div className="bg-white py-[26px] px-[23px]" key={index}>
                <p className="num">{item.num || "-"}</p>
                <div className="flex items-center justify-between mt-[13px]">
                  <p className="gridText">{item.title || "-"}</p>
                  <svg
                    className="cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="15"
                    fill="none"
                    viewBox="0 0 18 15"
                  >
                    <path
                      fill="#1B2535"
                      stroke="#fff"
                      strokeWidth="0.3"
                      d="M12.773 5.648l-2.464-2.76h0c-.558-.627-.558-1.647 0-2.275.553-.617 1.436-.617 1.99 0 0 0 0 0 0 0l5.129 5.75h0l.004.004c.275.285.418.678.418 1.122 0 .443-.142.832-.419 1.123h0l-.003.004-5.13 5.771s0 0 0 0c-.548.617-1.435.617-1.984 0-.558-.628-.558-1.648 0-2.276l2.464-2.759.224-.25H1.57c-.771 0-1.42-.7-1.42-1.602 0-.903.649-1.602 1.415-1.602H12.996l-.223-.25z"
                    ></path>
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        {/* search section  */}
        <div className="flex items-center gap-[10px] mt-[45px]">
          <div className="py-[27px] px-[37px] bg-white flex items-center gap-[35px]">
            <div className="relative">
              <svg
                className="absolute top-[25%] left-[10px]"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  fill="#1B2535"
                  d="M16.84 15.46l-3.676-3.675A6.79 6.79 0 0014.525 7.7 6.833 6.833 0 007.7.875 6.833 6.833 0 00.875 7.7 6.833 6.833 0 007.7 14.525a6.79 6.79 0 004.085-1.36l3.675 3.675a.977.977 0 001.38-1.38zM2.825 7.7a4.875 4.875 0 119.75 0 4.875 4.875 0 01-9.75 0z"
                ></path>
              </svg>
              <input
                className="inputFeildText"
                type="text"
                placeholder="Search"
              />
            </div>

            <button className="flex items-center justify-between gap-[21px]">
              <p className="monthText">September</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="15"
                fill="none"
                viewBox="0 0 18 15"
              >
                <path
                  fill="#1B2535"
                  d="M15.346 3.967a1.288 1.288 0 00-.822-.212c-.296.022-.57.142-.762.332L9 8.847l-4.762-4.76a1.208 1.208 0 00-.762-.333 1.282 1.282 0 00-.822.214.9.9 0 00-.4.635.838.838 0 00.257.685l5.625 5.625c.106.106.238.19.387.249a1.314 1.314 0 00.954 0c.149-.058.281-.143.387-.249l5.625-5.625a.838.838 0 00.256-.685.902.902 0 00-.399-.636z"
                ></path>
              </svg>
            </button>
            <button className="flex items-center justify-between gap-[21px]">
              <p className="timeText ">2023</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="15"
                fill="none"
                viewBox="0 0 18 15"
              >
                <path
                  fill="#1B2535"
                  d="M15.346 3.967a1.288 1.288 0 00-.822-.212c-.296.022-.57.142-.762.332L9 8.847l-4.762-4.76a1.208 1.208 0 00-.762-.333 1.282 1.282 0 00-.822.214.9.9 0 00-.4.635.838.838 0 00.257.685l5.625 5.625c.106.106.238.19.387.249a1.314 1.314 0 00.954 0c.149-.058.281-.143.387-.249l5.625-5.625a.838.838 0 00.256-.685.902.902 0 00-.399-.636z"
                ></path>
              </svg>
            </button>
            <div className="flex items-center gap-[37px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                fill="none"
                viewBox="0 0 21 21"
              >
                <path
                  fill="#1B2535"
                  d="M19.566 4.048a1.307 1.307 0 00-1.2-.767H2.634c-.523 0-.983.294-1.2.767a1.294 1.294 0 00.194 1.396l6.247 7.268v5.663a.656.656 0 001.02.546l3.938-2.625a.657.657 0 00.292-.546v-3.038l6.247-7.267c.336-.393.41-.929.194-1.397z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="18"
                fill="none"
                viewBox="0 0 19 18"
              >
                <path
                  fill="#1B2535"
                  stroke="#fff"
                  strokeWidth="0.15"
                  d="M6.942 3.711l2.056 1.74s0 0 0 0c.482.406 1.266.406 1.748 0a.95.95 0 00.355-.724.95.95 0 00-.355-.724s0 0 0 0L6.461.383h0L6.46.38C6.24.18 5.936.075 5.596.075c-.34 0-.639.104-.863.306h0L4.73.382l-4.3 3.62s0 0 0 0c-.475.4-.475 1.046 0 1.445.482.407 1.265.407 1.747 0 0 0 0 0 0 0l2.056-1.74.124-.104v7.995c0 .561.537 1.033 1.23 1.033s1.23-.472 1.23-1.03V3.607l.124.104zM14.75 17.62h-.001l-.002.002c-.197.2-.467.303-.77.303a1.06 1.06 0 01-.768-.303h0l-.002-.002L9.337 14a.98.98 0 010-1.45 1.155 1.155 0 011.557 0l1.85 1.74.127.118V6.402c0-.568.487-1.033 1.1-1.033.613 0 1.1.465 1.1 1.03v8.006l.126-.119 1.85-1.74a1.155 1.155 0 011.557 0 .984.984 0 010 1.454s0 0 0 0l-3.855 3.62z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="none"
                viewBox="0 0 22 22"
              >
                <g
                  fill="#1B2535"
                  stroke="#fff"
                  strokeWidth="0.5"
                  clipPath="url(#clip0_1_1034)"
                >
                  <path d="M19.5 13.75v4.375h-17V13.75c0-.298-.119-.585-.33-.796m17.33.796l-17.33-.796m17.33.796a1.124 1.124 0 01.694-1.04l-.095-.23.095.23c.137-.056.283-.085.43-.085h.001M19.5 13.75l1.125-1.125m-18.454.33a1.125 1.125 0 00-1.921.795v5.5m1.92-6.296L.25 19.25m20.375-6.625a1.124 1.124 0 011.125 1.125v5.5a1.124 1.124 0 01-1.125 1.125h0-19.25 0A1.124 1.124 0 01.25 19.25v0m20.375-6.625L.25 19.25m1.125 1.375h19.25A1.374 1.374 0 0022 19.25v-5.5L1.375 20.625z"></path>
                  <path d="M10.205 14.545h0L6.08 10.421s0 0 0 0A1.125 1.125 0 017.67 8.83s0 0 0 0l1.778 1.777.427.427V2.75a1.125 1.125 0 112.25 0V11.034l.427-.427 1.777-1.777s0 0 0 0a1.125 1.125 0 011.591 1.59s0 0 0 0l-4.125 4.125h0a1.123 1.123 0 01-1.59 0z"></path>
                </g>
                <defs>
                  <clipPath id="clip0_1_1034">
                    <path fill="#fff" d="M0 0H22V22H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-end bg-white w-full py-[21px] px-[32px]">
            <button className="addIncidentBtn">
              Add incident{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="none"
                viewBox="0 0 22 22"
              >
                <path
                  fill="#fff"
                  d="M17.935 12.375h-5.56v5.56c0 .726-.614 1.315-1.375 1.315-.76 0-1.375-.589-1.375-1.315v-5.56h-5.56c-.726 0-1.315-.614-1.315-1.375 0-.76.589-1.375 1.315-1.375h5.56v-5.56c0-.726.614-1.315 1.375-1.315.76 0 1.375.589 1.375 1.315v5.56h5.56c.726 0 1.315.614 1.315 1.375 0 .76-.589 1.375-1.315 1.375z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* table  */}
        <div className="px-[35px] bg-white py-[27px] mt-[10px]">
          <table className="myTable">
            <thead>
              <tr>
                <th>Asset</th>
                <th>Code</th>
                <th>Department</th>
                <th>Date & Time</th>
                <th>Down Time</th>
                <th>Status</th>
                <th>Report</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ge ECG Machine</td>
                <td>AG-7645698</td>
                <td>Blood Center</td>
                <td>03/04/2023 @ 12.30</td>
                <td className="time">10 hr : 24 m : 32 s </td>
                <td className="cleared">Cleared</td>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="none"
                    viewBox="0 0 22 22"
                  >
                    <g
                      fill="#1B2535"
                      stroke="#fff"
                      strokeWidth="0.5"
                      clipPath="url(#clip0_1_1034)"
                    >
                      <path d="M19.5 13.75v4.375h-17V13.75c0-.298-.119-.585-.33-.796m17.33.796l-17.33-.796m17.33.796a1.124 1.124 0 01.694-1.04l-.095-.23.095.23c.137-.056.283-.085.43-.085h.001M19.5 13.75l1.125-1.125m-18.454.33a1.125 1.125 0 00-1.921.795v5.5m1.92-6.296L.25 19.25m20.375-6.625a1.124 1.124 0 011.125 1.125v5.5a1.124 1.124 0 01-1.125 1.125h0-19.25 0A1.124 1.124 0 01.25 19.25v0m20.375-6.625L.25 19.25m1.125 1.375h19.25A1.374 1.374 0 0022 19.25v-5.5L1.375 20.625z"></path>
                      <path d="M10.205 14.545h0L6.08 10.421s0 0 0 0A1.125 1.125 0 017.67 8.83s0 0 0 0l1.778 1.777.427.427V2.75a1.125 1.125 0 112.25 0V11.034l.427-.427 1.777-1.777s0 0 0 0a1.125 1.125 0 011.591 1.59s0 0 0 0l-4.125 4.125h0a1.123 1.123 0 01-1.59 0z"></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_1034">
                        <path fill="#fff" d="M0 0H22V22H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default App;
