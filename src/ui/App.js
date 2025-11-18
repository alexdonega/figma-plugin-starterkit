import { useState, useEffect } from 'react';
function App() {
    const [count, setCount] = useState(5);
    const [color, setColor] = useState('orange');
    useEffect(() => {
        import('figma-plugin-ds').then((module) => {
            module.selectMenu.init();
        });
    }, []);
    const handleCreate = () => {
        parent.postMessage({
            pluginMessage: {
                type: 'create-rectangles',
                count,
                color,
            },
        }, '*');
    };
    return (<div style={{ padding: '16px' }}>
      <div className="section-title">Criar Retângulos</div>

      <div style={{ marginTop: '12px' }}>
        <div className="label">Quantidade</div>
        <div className="input" style={{ marginTop: '4px' }}>
          <input type="number" className="input__field" value={count} min="1" max="100" onChange={(e) => setCount(parseInt(e.target.value) || 1)}/>
        </div>
      </div>

      <div style={{ marginTop: '12px' }}>
        <div className="label">Cor dos retângulos</div>
        <select className="select-menu" value={color} onChange={(e) => setColor(e.target.value)} style={{ marginTop: '4px' }}>
          <option value="orange">Laranja</option>
          <option value="blue">Azul</option>
          <option value="red">Vermelho</option>
          <option value="green">Verde</option>
        </select>
      </div>

      <div style={{ marginTop: '12px' }}>
        <div className="switch">
          <input className="switch__toggle" type="checkbox" id="randomToggle"/>
          <label className="switch__label" htmlFor="randomToggle">
            Posições aleatórias
          </label>
        </div>
      </div>

      <button className="button button--primary" onClick={handleCreate} style={{ marginTop: '16px' }}>
        Criar Retângulos
      </button>

      <div className="onboarding-tip" style={{ marginTop: '16px' }}>
        <div className="icon icon--styles"></div>
        <div className="onboarding-tip__msg">
          Dica: Você pode criar até 100 retângulos de uma vez!
        </div>
      </div>
    </div>);
}
export default App;
