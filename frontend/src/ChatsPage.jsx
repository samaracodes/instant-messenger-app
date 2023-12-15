import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '0cd805b0-4b26-44fd-bb47-c7cea19aaae4', 
        props.user.username, 
        props.user.secret)
    
    return (
        <div style={{ height: '100vh' }}> 
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{height: '100%'}} />
        </div>
    )
}

export default ChatsPage