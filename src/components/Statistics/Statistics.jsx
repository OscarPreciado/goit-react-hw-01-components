import estilos from './Statistics.module.css';

export const Statistics = ({ title, statistics }) => {
  return (
    <section class="statistics">
      <h2 className={estilos.title}>{title}</h2>

      <ul className={estilos.stat_list}>
        {statistics.map(statistics => (
          <li className={estilos.stats_item}>
            <span className={estilos.labels}>{statistics.label}</span>
            <span className={estilos.quantity}>{statistics.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

