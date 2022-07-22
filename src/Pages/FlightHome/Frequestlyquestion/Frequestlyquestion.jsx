import React from 'react'
import Questions from './Questions'
import styles from "./Frequentlyquestion.module.css"

const Frequestlyquestion = () => {
  return (
    <div>
        <div className={styles.question_heading}>Frequently asked questions</div>
        <Questions/>
    </div>
  )
}

export default Frequestlyquestion