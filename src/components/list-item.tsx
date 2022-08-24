// import styles from './index.less';

export default function listItem(props: any) {
  console.log(props);

  const add = () => {
    props.add();
  };
  const del = () => {
    props.del(props.item.label);
  };
  return (
    <div>
      {props.item.label}
      <button onClick={del}>删除</button>
      <button onClick={add}>增加</button>
    </div>
  );
}
