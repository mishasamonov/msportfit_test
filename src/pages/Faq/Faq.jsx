import faq from '../../data/faq.json';
import Accordion from '../../components/Accordion/Accordion';
import './Faq.scss';

function Faq() {
  const items = faq.map((item) => ({
    id: item.id,
    title: item.question,
    content: <p>{item.answer}</p>,
  }));

  return (
    <div className="faq">
      <div className="container">
        <div className="faq__header">
          <p className="faq__eyebrow">FAQ</p>
          <h2>Відповіді на популярні питання</h2>
        </div>
        <Accordion items={items} />
      </div>
    </div>
  );
}

export default Faq;


