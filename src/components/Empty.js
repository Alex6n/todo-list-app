export default function Empty({text}) {
  return (
    <div className="flex flex-col items-center text-center">
        <img className="h-40 mb-1" src="https://cdn3d.iconscout.com/3d/premium/thumb/no-task-8703462-6995807.png" alt="Task Icon"></img>
        <p className="font-bold text-lg text-azure-radiance-900">{text}</p>
    </div>
  )
}
