import Layout from '../layouts/layout'
import Link from 'next/link'
import Router from 'next/router'
import { useState, useEffect } from 'react'
import { Button } from 'antd'
import HelloMobx from '../components/HelloMobx'
import { initializeStore } from '../models/store'
import { getSnapshot } from 'mobx-state-tree'

import styles from './index.module.css'

export function getServerSideProps() {
  const store = initializeStore()

  store.user.toggle()

  console.log(getSnapshot(store))
  return {
    props: {
      initialState: getSnapshot(store)
    }
  }
}

export default function Home({initialState:{user}}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('useEffect')
    document.title = `You clicked ${count} times`;
  })

  const add = e => {
    setCount(count + 1)
  }
  const minus = e => {
    setCount(count - 1)
  }

  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Home Page</h1>
      </div>
      <div>{user.name}</div>
      <Link href='/posts/[id]' as='/posts/a'><a>go to posts</a></Link>
      <button onClick={()=> Router.push('/posts/a')}>goto posts</button>
      <img src="/images/profile.jpg"/>
      <button onClick={add}>add</button>
      <button onClick={minus}>minus</button>
      <p>You clicked {count} times</p>
      <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
      </div>
      <HelloMobx title='Mobx' linkTo='/api/hello'/>
    </Layout>
  )
}