import { inject, observer } from 'mobx-react'
import Link from 'next/link'
import React from 'react'
import { IStore } from '../models/store'

interface IOwnProps {
  store?: IStore
  title: string
  linkTo: string
}

@inject('store')
@observer
class HelloMobx extends React.Component<IOwnProps> {
  public render() {
    if (!this.props.store) {
      return <div>Store not defined</div>
    }
    return (
      <div>
        <h1>{this.props.title}</h1>
        <nav>
          <Link href={this.props.linkTo}>
            <a>Navigate</a>
          </Link>
        </nav>
        <div>{this.props.store.user.name}</div>
        <div>{this.props.store.user.fullName}</div>
        <div onClick={()=>{this.props.store.user.toggle()}}>change</div>
      </div>
    )
  }
}

export default HelloMobx
