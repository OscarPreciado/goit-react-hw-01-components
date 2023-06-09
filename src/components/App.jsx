import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

const styleTest = {
  marginTop: 100,
  marginBottom: 50,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 40,
  color: '#010101',
};

export const App = ({ user, statistics, friends, transactions }) => {
  return (
    <>
      <section style={styleTest}>
        {/* <Perfil user={user} /> */}
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </section>

      <section style={styleTest}>
        <Statistics title="UPLOAD STATS" statistics={statistics} />
      </section>

      <section style={styleTest}>
        <FriendList friends={friends} />
      </section>

      <section style={styleTest}>
        <TransactionHistory transactions={transactions} />
      </section>
    </>
  );
};
