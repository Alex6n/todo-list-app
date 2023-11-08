import Profile from './account/Profile';
import Loader from './tasks/Loader'

export default function Main() {
  return (
    <div className="bg-gradient-to-tr from-azure-radiance-400 to-azure-radiance-200 h-screen w-screen overflow-auto">
      <Profile />
    </div>
  
  );
}
