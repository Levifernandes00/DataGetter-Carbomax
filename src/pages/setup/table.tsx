import { useRouter } from 'next/router';
import React from 'react';

const Table: React.FC = () => {
  const router = useRouter()
  const { number } = router.query


  return (
    <div className="h-screen py-2 px-5 overflow-x-auto relative bg-gray-600">
      <div className="relative bg-gray-800 text-white w-full px-5 py-5 rounded shadow">
        <h1 className='font-bold text-center text-xl mb-10'>INPUT CHANNEL {number}</h1>
        <table className="w-full text-sm text-left rounded-lg text-gray-400 ">
            <thead className="text-xs uppercase bg-gray-900 text-gray-400">
              <tr>
                  <th scope="col" className="py-3 px-6 text-center">
                    Step
                  </th>
                  <th scope="col" className="py-3 px-6 text-center">
                    1º
                  </th>
                  <th scope="col" className="py-3 px-6 text-center">
                    2º
                  </th>
                  <th scope="col" className="py-3 px-6 text-center">
                    3º
                  </th>
                  <th scope="col" className="py-3 px-6 text-center">
                    4º
                  </th>
                  <th scope="col" className="py-3 px-6 text-center">
                    5º
                  </th>
                  <th scope="col" className="py-3 px-6 text-center">
                    6º
                  </th>
                  <th scope="col" className="py-3 px-6 text-center">
                    7º
                  </th>
                  <th scope="col" className="py-3 px-6 text-center">
                    8º
                  </th>
                  <th scope="col" className="py-3 px-6 text-center">
                    9º
                  </th>
                  <th scope="col" className="py-3 px-6 text-center">
                    10º
                  </th>
              </tr>
            </thead>
            <tbody>
              <tr  className=" border-b bg-gray-800 border-gray-700 text-white font-medium text-center">
                <th scope="row" className="py-4 px-6 w-12">
                  Test
                </th>
                <td>
                  <select className="border text-sm rounded-lg block w-28 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="0">Not Used</option>
                    <option value="1">Between SP High & SP Low</option>
                    <option value="2">Above SP High</option>
                    <option value="3">Below SP Low</option>
                    <option value="4">Variation</option>
                    <option value="5">Above Previous</option>
                    <option value="6">Below Previous</option>
                    <option value="7">Same as Previous</option>
                  </select>
                </td>
                <td>
                  <select className="border text-sm rounded-lg block w-28 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="0">Not Used</option>
                    <option value="1">Between SP High & SP Low</option>
                    <option value="2">Above SP High</option>
                    <option value="3">Below SP Low</option>
                    <option value="4">Variation</option>
                    <option value="5">Above Previous</option>
                    <option value="6">Below Previous</option>
                    <option value="7">Same as Previous</option>
                  </select>
                </td>
                <td>
                  <select className="border text-sm rounded-lg block w-28 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="0">Not Used</option>
                    <option value="1">Between SP High & SP Low</option>
                    <option value="2">Above SP High</option>
                    <option value="3">Below SP Low</option>
                    <option value="4">Variation</option>
                    <option value="5">Above Previous</option>
                    <option value="6">Below Previous</option>
                    <option value="7">Same as Previous</option>
                  </select>
                </td>
                <td>
                  <select className="border text-sm rounded-lg block w-28 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="0">Not Used</option>
                    <option value="1">Between SP High & SP Low</option>
                    <option value="2">Above SP High</option>
                    <option value="3">Below SP Low</option>
                    <option value="4">Variation</option>
                    <option value="5">Above Previous</option>
                    <option value="6">Below Previous</option>
                    <option value="7">Same as Previous</option>
                  </select>
                </td>
                <td>
                  <select className="border text-sm rounded-lg block w-28 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="0">Not Used</option>
                    <option value="1">Between SP High & SP Low</option>
                    <option value="2">Above SP High</option>
                    <option value="3">Below SP Low</option>
                    <option value="4">Variation</option>
                    <option value="5">Above Previous</option>
                    <option value="6">Below Previous</option>
                    <option value="7">Same as Previous</option>
                  </select>
                </td>
                <td>
                  <select className="border text-sm rounded-lg block w-28 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="0">Not Used</option>
                    <option value="1">Between SP High & SP Low</option>
                    <option value="2">Above SP High</option>
                    <option value="3">Below SP Low</option>
                    <option value="4">Variation</option>
                    <option value="5">Above Previous</option>
                    <option value="6">Below Previous</option>
                    <option value="7">Same as Previous</option>
                  </select>
                </td>
                <td>
                  <select className="border text-sm rounded-lg block w-28 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="0">Not Used</option>
                    <option value="1">Between SP High & SP Low</option>
                    <option value="2">Above SP High</option>
                    <option value="3">Below SP Low</option>
                    <option value="4">Variation</option>
                    <option value="5">Above Previous</option>
                    <option value="6">Below Previous</option>
                    <option value="7">Same as Previous</option>
                  </select>
                </td>
                <td>
                  <select className="border text-sm rounded-lg block w-28 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="0">Not Used</option>
                    <option value="1">Between SP High & SP Low</option>
                    <option value="2">Above SP High</option>
                    <option value="3">Below SP Low</option>
                    <option value="4">Variation</option>
                    <option value="5">Above Previous</option>
                    <option value="6">Below Previous</option>
                    <option value="7">Same as Previous</option>
                  </select>
                </td>
                <td>
                  <select className="border text-sm rounded-lg block w-28 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="0">Not Used</option>
                    <option value="1">Between SP High & SP Low</option>
                    <option value="2">Above SP High</option>
                    <option value="3">Below SP Low</option>
                    <option value="4">Variation</option>
                    <option value="5">Above Previous</option>
                    <option value="6">Below Previous</option>
                    <option value="7">Same as Previous</option>
                  </select>
                </td>
                <td>
                  <select className="border text-sm rounded-lg block w-28 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="0">Not Used</option>
                    <option value="1">Between SP High & SP Low</option>
                    <option value="2">Above SP High</option>
                    <option value="3">Below SP Low</option>
                    <option value="4">Variation</option>
                    <option value="5">Above Previous</option>
                    <option value="6">Below Previous</option>
                    <option value="7">Same as Previous</option>
                  </select>
                </td>
              </tr>
              <tr  className=" border-b bg-gray-800 border-gray-700 text-white font-medium text-center">
                <th scope="row" className="py-2 px-2 w-12">
                  SP High
                </th>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"900,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"900,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"900,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"900,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"900,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"900,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"900,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"900,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"900,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"900,0"} id="b11" />
                </td>
              </tr>
              <tr  className=" border-b bg-gray-800 border-gray-700 text-white font-medium text-center">
                <th scope="row" className="py-2 px-2 w-12">
                  SP Low
                </th>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"0,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"0,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"0,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"0,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"0,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"0,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"0,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"0,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"0,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"0,0"} id="b11" />
                </td>
              </tr>
              <tr  className=" border-b bg-gray-800 border-gray-700 text-white font-medium text-center">
                <th scope="row" className="py-2 px-2 w-12">
                  Hysteresis
                </th>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"0,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"0,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"0,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"0,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"0,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"0,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"0,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"0,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"0,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"0,0"} id="b11" />
                </td>
              </tr>
              <tr  className=" border-b bg-gray-800 border-gray-700 text-white font-medium text-center">
                <th scope="row" className="py-2 px-2 w-12">
                  Repetition
                </th>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"1,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"1,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"1,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"1,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"1,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"1,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"1,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"1,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"1,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"1,0"} id="b11" />
                </td>
              </tr>
              <tr  className=" border-b bg-gray-800 border-gray-700 text-white font-medium text-center">
                <th scope="row" className="py-2 px-2 w-12">
                  Step Time
                </th>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"0,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"0,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"0,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"0,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"0,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"0,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"0,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"0,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"0,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"0,0"} id="b11" />
                </td>
              </tr>
              <tr  className=" border-b bg-gray-800 border-gray-700 text-white font-medium text-center">
                <th scope="row" className="py-2 px-2 w-12">
                  Timeout
                </th>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"200,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"200,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"200,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"200,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"200,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"200,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"200,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"200,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"200,0"} id="b11" />
                </td>
                <td >
                  <input name="Text1" className='w-28 bg-gray-700 rounded px-1 py-1' type="text" value={"200,0"} id="b11" />
                </td>
              </tr>
              <tr  className=" border-b bg-gray-800 border-gray-700 text-white font-medium text-center">
                <th scope="row" className="py-4 px-6 w-12">
                  Variable
                </th>
                <td>
                  <select className="border text-sm rounded-lg block w-28 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="0">Not Used</option>
                    <option value="1">Temperature</option>
                    <option value="2">Derivative</option>
                  </select>
                </td>
                <td>
                  <select className="border text-sm rounded-lg block w-28 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="0">Not Used</option>
                    <option value="1">Temperature</option>
                    <option value="2">Derivative</option>
                  </select>
                </td>
                <td>
                  <select className="border text-sm rounded-lg block w-28 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="0">Not Used</option>
                    <option value="1">Temperature</option>
                    <option value="2">Derivative</option>
                  </select>
                </td>
                <td>
                  <select className="border text-sm rounded-lg block w-28 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="0">Not Used</option>
                    <option value="1">Temperature</option>
                    <option value="2">Derivative</option>
                  </select>
                </td>
                <td>
                  <select className="border text-sm rounded-lg block w-28 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="0">Not Used</option>
                    <option value="1">Temperature</option>
                    <option value="2">Derivative</option>
                  </select>
                </td>
                <td>
                  <select className="border text-sm rounded-lg block w-28 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="0">Not Used</option>
                    <option value="1">Temperature</option>
                    <option value="2">Derivative</option>
                  </select>
                </td>
                <td>
                  <select className="border text-sm rounded-lg block w-28 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="0">Not Used</option>
                    <option value="1">Temperature</option>
                    <option value="2">Derivative</option>
                  </select>
                </td>
                <td>
                  <select className="border text-sm rounded-lg block w-28 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="0">Not Used</option>
                    <option value="1">Temperature</option>
                    <option value="2">Derivative</option>
                  </select>
                </td>
                <td>
                  <select className="border text-sm rounded-lg block w-28 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="0">Not Used</option>
                    <option value="1">Temperature</option>
                    <option value="2">Derivative</option>
                  </select>
                </td>
                <td>
                  <select className="border text-sm rounded-lg block w-28 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="0">Not Used</option>
                    <option value="1">Temperature</option>
                    <option value="2">Derivative</option>
                  </select>
                </td>
              </tr>
              <tr  className=" border-b bg-gray-800 border-gray-700 text-white font-medium text-center">
                <th scope="row" className="py-4 px-6 w-12">
                  Set to
                </th>
                <td>
                  <select className="border text-sm rounded-lg block w-28 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="0">Not Used</option>
                    <option value="1">Peak</option>
                    <option value="2">Liquidus</option>
                    <option value="3">Solidus</option>
                    <option value="4">Final</option>
                    <option value="5">TEU</option>
                    <option value="6">TER</option>
                    <option value="7">REC</option>
                    <option value="8">Temp. Window</option>
                  </select>
                </td>
                <td>
                  <select className="border text-sm rounded-lg block w-28 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="0">Not Used</option>
                    <option value="1">Peak</option>
                    <option value="2">Liquidus</option>
                    <option value="3">Solidus</option>
                    <option value="4">Final</option>
                    <option value="5">TEU</option>
                    <option value="6">TER</option>
                    <option value="7">REC</option>
                    <option value="8">Temp. Window</option>
                  </select>
                </td>
                <td>
                  <select className="border text-sm rounded-lg block w-28 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="0">Not Used</option>
                    <option value="1">Peak</option>
                    <option value="2">Liquidus</option>
                    <option value="3">Solidus</option>
                    <option value="4">Final</option>
                    <option value="5">TEU</option>
                    <option value="6">TER</option>
                    <option value="7">REC</option>
                    <option value="8">Temp. Window</option>
                  </select>
                </td>
                <td>
                  <select className="border text-sm rounded-lg block w-28 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="0">Not Used</option>
                    <option value="1">Peak</option>
                    <option value="2">Liquidus</option>
                    <option value="3">Solidus</option>
                    <option value="4">Final</option>
                    <option value="5">TEU</option>
                    <option value="6">TER</option>
                    <option value="7">REC</option>
                    <option value="8">Temp. Window</option>
                  </select>
                </td>
                <td>
                  <select className="border text-sm rounded-lg block w-28 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="0">Not Used</option>
                    <option value="1">Peak</option>
                    <option value="2">Liquidus</option>
                    <option value="3">Solidus</option>
                    <option value="4">Final</option>
                    <option value="5">TEU</option>
                    <option value="6">TER</option>
                    <option value="7">REC</option>
                    <option value="8">Temp. Window</option>
                  </select>
                </td>
                <td>
                  <select className="border text-sm rounded-lg block w-28 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="0">Not Used</option>
                    <option value="1">Peak</option>
                    <option value="2">Liquidus</option>
                    <option value="3">Solidus</option>
                    <option value="4">Final</option>
                    <option value="5">TEU</option>
                    <option value="6">TER</option>
                    <option value="7">REC</option>
                    <option value="8">Temp. Window</option>
                  </select>
                </td>
                <td>
                  <select className="border text-sm rounded-lg block w-28 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="0">Not Used</option>
                    <option value="1">Peak</option>
                    <option value="2">Liquidus</option>
                    <option value="3">Solidus</option>
                    <option value="4">Final</option>
                    <option value="5">TEU</option>
                    <option value="6">TER</option>
                    <option value="7">REC</option>
                    <option value="8">Temp. Window</option>
                  </select>
                </td>
                <td>
                  <select className="border text-sm rounded-lg block w-28 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="0">Not Used</option>
                    <option value="1">Peak</option>
                    <option value="2">Liquidus</option>
                    <option value="3">Solidus</option>
                    <option value="4">Final</option>
                    <option value="5">TEU</option>
                    <option value="6">TER</option>
                    <option value="7">REC</option>
                    <option value="8">Temp. Window</option>
                  </select>
                </td>
                <td>
                  <select className="border text-sm rounded-lg block w-28 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="0">Not Used</option>
                    <option value="1">Peak</option>
                    <option value="2">Liquidus</option>
                    <option value="3">Solidus</option>
                    <option value="4">Final</option>
                    <option value="5">TEU</option>
                    <option value="6">TER</option>
                    <option value="7">REC</option>
                    <option value="8">Temp. Window</option>
                  </select>
                </td>
                <td>
                  <select className="border text-sm rounded-lg block w-28 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="0">Not Used</option>
                    <option value="1">Peak</option>
                    <option value="2">Liquidus</option>
                    <option value="3">Solidus</option>
                    <option value="4">Final</option>
                    <option value="5">TEU</option>
                    <option value="6">TER</option>
                    <option value="7">REC</option>
                    <option value="8">Temp. Window</option>
                  </select>
                </td>
              </tr>
            </tbody>
        </table>
        <div className='my-10 w-full flex row justify-around items-center'>
          <button onClick={() => router.back()} className="mx-5 w-full max-w-md text-black bg-gray-200 hover:bg-gray-300 font-medium rounded-lg text-sm  px-5 py-2 my-1  focus:outline-none">Cancel</button>
          <button className="mx-5 w-full max-w-md  text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2 my-1  focus:outline-none">Save</button>
        </div>

      </div>
    </div>
  );
}

export default Table;
