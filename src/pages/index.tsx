import './index.less';
import ListItem from '../components/list-item';
import { useState } from 'react';
export default function IndexPage() {
  const [list, setList] = useState([]);

  const [index, setIndex] = useState(0);

  const addHandleClick = () => {
    setList([...list, { label: index }]);
    const newIndex = index + 1;
    setIndex(newIndex);
  };

  const delhandleClick = (label) => {
    const newList = list.filter((v) => v.label !== label);
    setList([...newList]);
  };
  return (
    <div>
      {list.map((item, index) => (
        <div key={item.label}>
          <ListItem
            key={item.label}
            item={item}
            add={addHandleClick}
            del={delhandleClick}
          />
          {/* <span>123</span> */}
        </div>
      ))}
      <button onClick={addHandleClick}>新增</button>
    </div>
  );
}
