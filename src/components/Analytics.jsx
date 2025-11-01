import React from "react";

const Analytics = () => {
  return (
    <div className=" bg-white border-1 text-gray-800 p-8">
      <h1 className="text-3xl font-semibold mb-10 text-center">
        📊 Estadisticas de la Tienda
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <h2 className="text-sm font-medium text-gray-500">Ventas Totales</h2>
          <p className="text-3xl font-bold text-gray-900 mt-2">$12.450</p>
          <span className="text-xs text-green-600 font-medium">+8% este mes</span>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <h2 className="text-sm font-medium text-gray-500">Nuevos Clientes</h2>
          <p className="text-3xl font-bold text-gray-900 mt-2">87</p>
          <span className="text-xs text-green-600 font-medium">+5% vs. mes anterior</span>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <h2 className="text-sm font-medium text-gray-500">Pedidos Pendientes</h2>
          <p className="text-3xl font-bold text-gray-900 mt-2">14</p>
          <span className="text-xs text-yellow-600 font-medium">3 en preparación</span>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <h2 className="text-sm font-medium text-gray-500">Productos Activos</h2>
          <p className="text-3xl font-bold text-gray-900 mt-2">142</p>
          <span className="text-xs text-gray-500 font-medium">10 sin stock</span>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">
          Productos más vendidos
        </h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left text-sm text-gray-500 uppercase tracking-wider py-3 px-4">
                Producto
              </th>
              <th className="text-left text-sm text-gray-500 uppercase tracking-wider py-3 px-4">
                Ventas
              </th>
              <th className="text-left text-sm text-gray-500 uppercase tracking-wider py-3 px-4">
                Ingresos
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50 transition">
              <td className="py-3 px-4">Notebook Acer Aspire</td>
              <td>125</td>
              <td>$187.500</td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="py-3 px-4">Monitor BenQ 22"</td>
              <td>94</td>
              <td>$94.000</td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="py-3 px-4">Mouse Logitech G305</td>
              <td>72</td>
              <td>$43.200</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Analytics;
