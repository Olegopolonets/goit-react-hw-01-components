import { Profile } from './Task_1_Profile/Profile';
import dataUser from '../data/user.json';
import { Statistics } from './Task_2_Statistics/Statistics';
import dataStatistics from '../data/statistics_data.json';
import { FriendsList } from './Task_3_FriendsList/FriendsList';
import dataFriends from '../data/friends.json';
import { TransactionHistory } from './Task_4_Transactions/TransactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <h2>Task 1. Social network profile</h2>
      <Profile user={dataUser} />

      <h2>Task 2. Statistics section</h2>
      <Statistics title="Upload stats" stats={dataStatistics} />

      <h2>Task 3 - List of friends</h2>
      <FriendsList friends={dataFriends} />

      <h2>Task 4. History of transactions</h2>
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
