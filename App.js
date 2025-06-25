
import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans p-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-rose-600">BelezaFácil Pro</h1>
        <p className="text-sm text-gray-500">Seu salão na palma da mão ✂️</p>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button className="bg-rose-500 hover:bg-rose-600 text-white py-4 px-6 rounded-2xl shadow-xl text-lg">
          📅 Minha Agenda
        </button>
        <button className="bg-rose-500 hover:bg-rose-600 text-white py-4 px-6 rounded-2xl shadow-xl text-lg">
          👩‍🦱 Meus Clientes
        </button>
        <button className="bg-rose-500 hover:bg-rose-600 text-white py-4 px-6 rounded-2xl shadow-xl text-lg">
          💰 Ganhos do Mês
        </button>
        <button className="bg-rose-500 hover:bg-rose-600 text-white py-4 px-6 rounded-2xl shadow-xl text-lg">
          📢 Divulgar no Instagram
        </button>
        <button className="bg-rose-500 hover:bg-rose-600 text-white py-4 px-6 rounded-2xl shadow-xl text-lg">
          🎁 Promoções Ativas
        </button>
      </main>

      <footer className="text-center mt-10 text-gray-400 text-sm">
        © 2025 BelezaFácil Pro. Todos os direitos reservados.
      </footer>
    </div>
  );
}
