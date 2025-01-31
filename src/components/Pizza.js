import React from "react"

const Pizza = (props) => {
  // console.log(props.pizza);
  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{props.pizza.vegetarian ? "Yes" : "Nope"}</td>
      <td><button onClick={()=> props.editClickHandle(props.pizza)}type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
