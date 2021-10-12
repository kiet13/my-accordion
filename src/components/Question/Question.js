import React, {useState} from 'react'
import styles from './Question.module.scss'

export default function Question(props) {
  const [collapse, setCollapse] = useState(true);

  let info = null;
  let buttonClass = styles.Collapse;
  if (!collapse) {
    info = <p className={styles.Info}>{props.info}</p>;
    buttonClass = styles.Active;
  }

  

  return (
    <div className={styles.Question}>
      <div className={styles.QuestionHeading}>
        <h3 className={styles.Title}>{props.title}</h3>
        <button onClick={() => setCollapse(!collapse)} className={buttonClass}></button>
      </div>
      {info}
    </div>
  )
}
