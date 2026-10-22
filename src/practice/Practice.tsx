import { useState } from 'react';
import { Task1Counter } from './Task1Counter';
import { Task2Greeting } from './Task2Greeting';
import { Task3Search } from './Task3Search';
import { Task4Loading } from './Task4Loading';

export function Practice() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div style={{ padding: '20px', border: '2px solid #333', margin: '20px' }}>
      <h1>Практика: Хуки React</h1>
      
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <button onClick={() => setActiveTab(1)}>Задача 1</button>
        <button onClick={() => setActiveTab(2)}>Задача 2</button>
        <button onClick={() => setActiveTab(3)}>Задача 3</button>
        <button onClick={() => setActiveTab(4)}>Задача 4</button>
      </div>

      <hr />

      {activeTab === 1 && <Task1Counter />}
      {activeTab === 2 && <Task2Greeting />}
      {activeTab === 3 && <Task3Search />}
      {activeTab === 4 && <Task4Loading />}
    </div>
  );
}