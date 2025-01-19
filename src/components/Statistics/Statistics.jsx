import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
// import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';


const Statistics = ({stats}) => {
const icons = [FaRegThumbsUp, MdPeople, MdOutlineProductionQuantityLimits, GiTreeDoor];

  return (
    <>
      {stats.title && <h3 className={style.title}>{stats.title}</h3>}

      <ul className={style.list}>
        {stats.map ((state, index) => (
          <li key={state.id} className={style.item}>
            <StatisticsItem icon={icons[index]} {...state}/>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Statistics;
