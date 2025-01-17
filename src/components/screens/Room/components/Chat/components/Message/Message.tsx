import {convertTimestampToDate} from '@/helpers/convertTimestampToDate/convertTimestampToDate'
import {IMessage} from '@/types/IMessage'
import {memo} from 'react'
import styles from './Message.module.scss'

interface MessageProps {
  item: IMessage;
}

export const Message = memo<MessageProps>(({item}) => {

    const {text, timestamp, name} = item

    return (
      <div className={styles.message}>
        <div className={styles.top}>
          <span className={styles.name}>{name}</span>
          <span className={styles.time}>{convertTimestampToDate(timestamp, "HH:mm")}</span>
        </div>
        <p className={styles.text}>{text}</p>
      </div>
    )
})

Message.displayName = 'Message'