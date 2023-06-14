

const Card = ({image, title}) => {
  return (
    <div className="card-info">
    <img className="card-img" src={image} alt={title} />
    <div className="card-body">
     <h2 className="card-title">{title}</h2>
     <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quaerat cum sapiente omnis, eveniet ut fugiat? Perferendis pariatur qui velit ab modi et neque quidem a consequuntur. Distinctio, vitae temporibus.</p>
    </div>

    </div>
  )
}

export default Card