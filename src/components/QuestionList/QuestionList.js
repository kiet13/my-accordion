import React from 'react'
import Question from '../Question/Question'
import styles from './QuestionList.module.scss';

export default function QuestionList(props) {
  const questions = props.questions.map(question => {
    return <Question key={question.id} title={question.title} info={question.info} />
  })
  
  return (
    <div className={styles.QuestionList}>
      {questions}
    </div>
  )
}
