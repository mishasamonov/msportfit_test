import { useState } from 'react';
import './Accordion.scss';

function Accordion({ items }) {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="accordion">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="accordion__item">
            <button className="accordion__header" onClick={() => setOpenId(isOpen ? null : item.id)} type="button">
              <span>{item.title}</span>
              <span className="accordion__chevron">{isOpen ? '–' : '+'}</span>
            </button>
            {isOpen && <div className="accordion__content">{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;


