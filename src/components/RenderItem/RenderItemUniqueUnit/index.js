import { UniqueUnit } from '../../../pages'
import PropTypes from 'prop-types'
import React from 'react'
import { NavLink } from 'react-router-dom'
class RenderItemUniqueUnit extends React.Component {
  state = {
    unique_unit: {
      0: false,
      1: false,
    },
  }
  render() {
    const { unique_unit, history } = this.props
    const hendleUniqueUnit = (e) => {
      const i = e.target.attributes[0].value
      this.setState((prevState) => ({
        ...prevState,
        unique_unit: {
          [i]: !prevState.unique_unit[i],
        },
      }))
    }
    return (
      <div className="result_inner">
        <p>Unique unit:</p>
        <ul>
          {unique_unit.map((x, i) => {
            const url = x.substr(55)
            console.log(url)

            return (
              <li key={x}>
                <div>
                  <button onClick={hendleUniqueUnit} i={i}>
                    {!this.state.unique_unit[i]
                      ? x.split('/')[x.split('/').length - 1].replace('_', ' ')
                      : 'close'}
                  </button>
                </div>
                {this.state.unique_unit[i] && <UniqueUnit url={x} />}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

RenderItemUniqueUnit.propTypes = {
  unique_unit: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
    .isRequired,
}
export default RenderItemUniqueUnit
