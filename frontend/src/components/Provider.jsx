const Provider = ({ provider, index }) => {
  return (
    <div className="size-[3rem] rounded-md overflow-hidden" index={index}>
      <img alt={provider.name} src={provider.img} />
    </div>
  )
}

export default Provider
