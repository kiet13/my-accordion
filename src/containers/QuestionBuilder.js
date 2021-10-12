import React, {useState} from 'react';
import styles from './QuestionBuilder.module.scss';
import data from '../data';
import QuestionList from '../components/QuestionList/QuestionList';

export default function QuestionBuilder() {
  console.log(data);
  const [questions] = useState(data);
  return (
    <div className={styles.QuestionBuilder}>
      <h1 className={styles.QuestionHeading}>Question and answer about login</h1>
      <QuestionList questions={questions}/>
    </div>
  )
}
