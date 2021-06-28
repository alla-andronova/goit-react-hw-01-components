import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import Section from '../Section/Section';
import makeRandomColor from '../././././../utils/collorizer';

export default function Statistics({ title, items }) {
  return (
    <Section title={title}>
      <ul className={s.list}>
        {items.map(({ id, label, percentage }) => (
          <li
            key={id}
            style={{ backgroundColor: makeRandomColor() }}
            className={s.item}
          >
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
