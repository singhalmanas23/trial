import React from 'react';
import Head from 'next/head';

const HomePage = () => {
  const data = [
    { date: "29-07-2024", time: "09:00 AM", xa: "XA29", xb: "XB52", xc: "XC99", xd: "XD36", xe: "XE83", xf: "XF44", xg: "XG28", xh: "XH98", xi: "XI20", xj: "XJ70" },
    { date: "29-07-2024", time: "10:00 AM", xa: "XA30", xb: "XB53", xc: "XC100", xd: "XD37", xe: "XE84", xf: "XF45", xg: "XG29", xh: "XH99", xi: "XI21", xj: "XJ71" },
    { date: "29-07-2024", time: "11:00 AM", xa: "XA31", xb: "XB54", xc: "XC101", xd: "XD38", xe: "XE85", xf: "XF46", xg: "XG30", xh: "XH100", xi: "XI22", xj: "XJ72" },
    { date: "29-07-2024", time: "12:00 PM", xa: "XA32", xb: "XB55", xc: "XC102", xd: "XD39", xe: "XE86", xf: "XF47", xg: "XG31", xh: "XH101", xi: "XI23", xj: "XJ73" },
    { date: "29-07-2024", time: "01:00 PM", xa: "XA33", xb: "XB56", xc: "XC103", xd: "XD40", xe: "XE87", xf: "XF48", xg: "XG32", xh: "XH102", xi: "XI24", xj: "XJ74" },
    { date: "29-07-2024", time: "02:00 PM", xa: "XA34", xb: "XB57", xc: "XC104", xd: "XD41", xe: "XE88", xf: "XF49", xg: "XG33", xh: "XH103", xi: "XI25", xj: "XJ75" },
    { date: "29-07-2024", time: "03:00 PM", xa: "XA35", xb: "XB58", xc: "XC105", xd: "XD42", xe: "XE89", xf: "XF50", xg: "XG34", xh: "XH104", xi: "XI26", xj: "XJ76" },
    { date: "29-07-2024", time: "04:00 PM", xa: "XA36", xb: "XB59", xc: "XC106", xd: "XD43", xe: "XE90", xf: "XF51", xg: "XG35", xh: "XH105", xi: "XI27", xj: "XJ77" },
    { date: "29-07-2024", time: "05:00 PM", xa: "XA37", xb: "XB60", xc: "XC107", xd: "XD44", xe: "XE91", xf: "XF52", xg: "XG36", xh: "XH106", xi: "XI28", xj: "XJ78" },
    { date: "29-07-2024", time: "06:00 PM", xa: "XA38", xb: "XB61", xc: "XC108", xd: "XD45", xe: "XE92", xf: "XF53", xg: "XG37", xh: "XH107", xi: "XI29", xj: "XJ79" }
  ];

  return (
    <>
      <Head>
        <title>Anvishtarummy</title>
        <meta name="description" content="best rummy app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-blue-950 flex items-center justify-center p-4">
        <div className="bg-blue-950 shadow-md rounded-lg p-6 w-full">
          <header className="text-center mb-4">
            <h1 className="text-2xl font-bold text-white">Show Result</h1>
          </header>

          <div className="mb-4 flex space-x-4">
            <div>
              <label className="block text-gray-200 mb-2" htmlFor="startDate">Start Date</label>
              <input
                type="date"
                id="startDate"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-200 mb-2" htmlFor="endDate">End Date</label>
              <input
                type="date"
                id="endDate"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="self-end bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Go
            </button>
          </div>

          <p className="text-gray-200 mb-6 text-center">Result Of Date Mon 29 Jul 2024...</p>

          <main className="max-h-96 overflow-y-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-md">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-gray-300 bg-gray-200 text-left text-gray-800">Date</th>
                  <th className="py-2 px-4 border-b border-gray-300 bg-gray-200 text-left text-gray-800">Time</th>
                  <th className="py-2 px-4 border-b border-gray-300 bg-gray-200 text-left text-gray-800">XA</th>
                  <th className="py-2 px-4 border-b border-gray-300 bg-gray-200 text-left text-gray-800">XB</th>
                  <th className="py-2 px-4 border-b border-gray-300 bg-gray-200 text-left text-gray-800">XC</th>
                  <th className="py-2 px-4 border-b border-gray-300 bg-gray-200 text-left text-gray-800">XD</th>
                  <th className="py-2 px-4 border-b border-gray-300 bg-gray-200 text-left text-gray-800">XE</th>
                  <th className="py-2 px-4 border-b border-gray-300 bg-gray-200 text-left text-gray-800">XF</th>
                  <th className="py-2 px-4 border-b border-gray-300 bg-gray-200 text-left text-gray-800">XG</th>
                  <th className="py-2 px-4 border-b border-gray-300 bg-gray-200 text-left text-gray-800">XH</th>
                  <th className="py-2 px-4 border-b border-gray-300 bg-gray-200 text-left text-gray-800">XI</th>
                  <th className="py-2 px-4 border-b border-gray-300 bg-gray-200 text-left text-gray-800">XJ</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b border-gray-300">{item.date}</td>
                    <td className="py-2 px-4 border-b border-gray-300">{item.time}</td>
                    <td className="py-2 px-4 border-b border-gray-300">{item.xa}</td>
                    <td className="py-2 px-4 border-b border-gray-300">{item.xb}</td>
                    <td className="py-2 px-4 border-b border-gray-300">{item.xc}</td>
                    <td className="py-2 px-4 border-b border-gray-300">{item.xd}</td>
                    <td className="py-2 px-4 border-b border-gray-300">{item.xe}</td>
                    <td className="py-2 px-4 border-b border-gray-300">{item.xf}</td>
                    <td className="py-2 px-4 border-b border-gray-300">{item.xg}</td>
                    <td className="py-2 px-4 border-b border-gray-300">{item.xh}</td>
                    <td className="py-2 px-4 border-b border-gray-300">{item.xi}</td>
                    <td className="py-2 px-4 border-b border-gray-300">{item.xj}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </main>
        </div>
      </div>
    </>
  );
};

export default HomePage;
