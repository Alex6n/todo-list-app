export default function Settings() {

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  return (
    <div className="grid grid-col h-full items-center justify-center p-5 lg:p-14">
      <div className="bg-azure-radiance-950/30 rounded-md h-full px-20">

        <form onSubmit={(e) => handleSubmit(e)}>
            
          {/* Username */}
          {/* Email */}
          {/* Phone */}
          {/* Password */}
          {/* Date of birth */}
          {/* Memorable Q&A */}

        </form>

      </div>
    </div>
  )
}
