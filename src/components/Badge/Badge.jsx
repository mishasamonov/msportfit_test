import './Badge.scss';

function Badge({ label, tone = 'accent' }) {
  return <span className={`badge badge--${tone}`}>{label}</span>;
}

export default Badge;


