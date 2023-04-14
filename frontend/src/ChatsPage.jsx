import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic('cbee3fee-ca01-4cd6-a61d-a09ed72346c4',
   props.user.username, 
   props.user.secret
   );

  return (
  <div style={{ height: '100vh' }}>
    <MultiChatSocket {...chatProps} />
    <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
  </div>
  )
}
export default ChatsPage
