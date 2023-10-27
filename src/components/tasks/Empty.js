export default function Empty({text}) {
  return (
    <div className="flex flex-col items-center text-center">
        <img className="h-40 mb-1" src={require('../../assets/no-task-green.png')} alt="Task Icon"></img>
        <p className="font-bold text-lg text-azure-radiance-900">{text}</p>
    </div>
  )
}
