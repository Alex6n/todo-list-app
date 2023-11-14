import { useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../../store/userSlice";

export default function Settings() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ name: "", email: "", password: "", dob: "", mqa: { question: "", answer: "" } });

  const handleSubmit = (e) => {
    const filteredUser = Object.fromEntries(Object.entries(user).filter(([key, value]) => value !== ''));
    const filteredMqa = Object.fromEntries( Object.entries(user.mqa).filter(([key, value]) => value !== '') );
    const filteredSettings = { ...filteredUser, mqa: filteredMqa, };
    dispatch(editUser(filteredSettings));
    e.preventDefault();
  }
  
  return (
    <div className="grid grid-col h-full items-center justify-center p-5 lg:p-14">
      <div className="bg-azure-radiance-950/30 rounded-md h-full px-20">

        <form onSubmit={(e) => handleSubmit(e)}>
            
          <div className="flex flex-col items-center justify-center gap-3 mt-10">
            <input type="text" placeholder="Username" className="text-center p-2 w-56 rounded-xl bg-azure-radiance-100 font-bold"
              value={user.name} onChange={e => setUser({ ...user, name: e.target.value })} />
            
            <input type="text" placeholder="Email" className="text-center p-2 w-56 rounded-xl bg-azure-radiance-100 font-bold"
              value={user.email} onChange={e => setUser({ ...user, email: e.target.value })} />
            
            <input type="text" placeholder="Password" className="text-center p-2 w-56 rounded-xl bg-azure-radiance-100 font-bold"
              value={user.password} onChange={e => setUser({ ...user, password: e.target.value })} />
            
            <input type="text" placeholder="Date of Birth" className="text-center p-2 w-56 rounded-xl bg-azure-radiance-100 font-bold"
              value={user.dob} onChange={e => setUser({ ...user, dob: e.target.value })} />
            
            <input type="text" placeholder="Security Question" className="text-center p-2 w-56 rounded-xl bg-azure-radiance-100 font-bold"
              value={user.mqa.question} onChange={e => setUser({ ...user, mqa: { ...user.mqa, question: e.target.value} })} />
            
            <input type="text" placeholder="Security Answer" className="text-center p-2 w-56 rounded-xl bg-azure-radiance-100 font-bold"
              value={user.mqa.answer} onChange={e => setUser({ ...user, mqa: { ...user.mqa, answer: e.target.value} })} />
            
            <input type="submit" value="Save Changes" class="special-tab px-5 font-bold"/>
          </div>

        </form>

      </div>
    </div>
  )
}
