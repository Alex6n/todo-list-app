import { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai'; 
import { useDispatch, useSelector } from 'react-redux';
import { editProfile } from '../../store/userSlice';

export default function Profile() {
  const profileImg = useSelector(state => state.user.profile.img);
  const dispach = useDispatch();
  const [profile, setProfile] = useState({ name: "", img: profileImg });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispach(editProfile(profile));
  }
  
  return (
    <div className="grid grid-col h-full items-center justify-center p-5 lg:p-14">
      <div className="bg-azure-radiance-950/30 rounded-md h-full px-20">

        <form onSubmit={(e) => handleSubmit(e)}>
          {/* Profile Picture */}
          <div className="flex flex-col items-center justify-center m-10">
            <div className="group flex flex-col items-center justify-center w-fit"> {/* selecting image should be done */}
              <button className="absolute text-6xl text-gray-800 transition-opacity group-hover:opacity-100 opacity-0 duration-500">
                {/* absolute class to need to be fixed */}
                <AiOutlinePlusCircle/>
              </button>
              <img className="h-40 pr-1 rounded-full object-cover justify-self-center transition-opacity duration-300 group-hover:opacity-30"
                alt="Profile Image"
                src={require(`../../assets/${profile.img}`)} />
            </div>
            <p className="font-bold text-azure-radiance-950 text-lg mt-2">Profile Picture</p>
          </div>

          {/* Profile Name */}
          <div className="flex flex-col items-center justify-center gap-3">
            <input type="text" placeholder="Profile Name" className="text-center p-2 w-56 rounded-xl bg-azure-radiance-100 font-bold"
              value={profile.name} onChange={e => setProfile({ ...profile, name: e.target.value })} />
            <input type="submit" value="Save Changes" class="special-tab px-5 font-bold"/>
          </div>
        </form>

      </div>
    </div>
  )
}
