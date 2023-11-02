import { useState, createContext } from 'react';

const user = {
  userName: '',
  setUserName: () => { }
}

const channel = {
  channel: 0,
  setIncrementChannel: () => { }
}

export const UserContext = createContext(user);
export const ChannelContext = createContext(channel);


export default function StoreProvider({ children }) {

  const [userName, setUserName] = useState('John Smith')
  const [channel, setChannel] = useState(0)

  const addChannel = () => setChannel(st => st + 1)

  const userValues = {
    userName,
    setUserName,
  }
  const channelValues = {
    channel,
    setIncrementChannel: addChannel
  }

  return <>
  <UserContext.Provider value={userValues}>
    <ChannelContext.Provider value={channelValues}>
      {children}
    </ChannelContext.Provider>
  </UserContext.Provider>
  </>
}