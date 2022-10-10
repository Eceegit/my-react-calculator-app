import React from 'react'

            const getStyleNameBtn= btn =>{
                const className = {
                    "=": "equals-btn",
                    "x": "operations-btn",
                    "-": "operations-btn",
                    "+": "operations-btn",
                    "+-": "operations-btn",
                }
                return className[btn]
            }
const Button = ({value}) => {
  return (
    <button className={`${getStyleNameBtn(value)} calc-btn`}>{value}</button>
  ) 
}

export default Button