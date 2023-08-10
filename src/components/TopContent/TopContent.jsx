import React from 'react'
import { Categories } from '../Categories/Categories'
import { Container } from '../Container/Container'
import { Sort } from '../Sort/Sort'
import styles from './TopContent.module.scss'

export const TopContent = () => {
  return (
    <Container>
        <div className={styles.topContent}>
            <Categories />
            <Sort />
        </div>
    </Container>
  )
}
