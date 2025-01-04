
// eslint-disable-next-line react/prop-types
function Feature({ icon: Icon, title, description}) {

  return (
    <div className="flex flex-col items-center p-6 text-center">
      <div className="rounded-full bg-gray-100 p-3 mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h2 className="text-sm font-medium mb-1">{title}</h2>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

export default Feature