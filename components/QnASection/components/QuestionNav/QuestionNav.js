import { useState } from 'react'
import styles from './QuestionNav.module.scss'

export default function QuestionNav({ set, length }) {

  const [preItemId, setPreItemId] = useState("item0")

  const handleCurrentItem = (index) => {
    const item = document.getElementById("item" + index);
    item.classList.add(styles.active);
    setPreItemId("item" + index)
    if (item.id != preItemId) {
      const preItem = document.getElementById(preItemId).classList;
      preItem.remove(styles.active);
    }

    set(index)
  }

  const items = []
  for (let i = 0; i < length; i++) {
    items.push(<div id={"item" + i} key={i} className={i == 0 ? (styles.item + " " + styles.active) : styles.item} onClick={() => handleCurrentItem(i)}>{i + 1}</div>)
  }

  return (
    <div className={styles.questionNav}>
      <div className={styles.title}>Danh sách câu hỏi</div>
      <div className={styles.inner}>
        {items}
      </div>
    </div>
  )
}