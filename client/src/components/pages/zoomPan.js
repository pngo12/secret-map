import React, { Component } from "react"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"
import ZoomObject from "../static/world-50m.json"

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
}

class ZoomPan extends Component {
  constructor() {
    super()
    this.state = {
      center: [0,20],
      zoom: 1,
      region: [
        { name: "Europe", coordinates: [8.5417,47.3769] },
        { name: "Asia", coordinates: [103.8198,1.3521] },
        { name: "North America", coordinates: [-122.4194,37.7749] },
        { name: "Oceana", coordinates: [151.2093,-33.8688] },
        { name: "Africa", coordinates: [2.3185,19.5687] },
        { name: "South America", coordinates: [-58.3816,-34.6037] }
      ]
    }
    this.handleregionSelection = this.handleregionSelection.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }
  handleregionSelection(evt) {
    const regionId = evt.target.getAttribute("data-region")
    const region = this.state.region[regionId]
    this.setState({
      center: region.coordinates,
      zoom: 2,
    })
    console.log(region)
  }
  handleReset() {
    this.setState({
      center: [0,20],
      zoom: 1,
    })
  }
  render() {
    return (
      <div>
        <div style={wrapperStyles}>
          {
            this.state.region.map((region, i) => (
              <button
                key={i}
                className="button is-info is-small is-outlined"
                data-region={i}
                onClick={this.handleregionSelection}
                >
                { region.name }
              </button>
            ))
          }
          <button className="button is-danger is-small is-outlined" onClick={this.handleReset}>
            { "Reset" }
          </button>
        </div>
        <div style={wrapperStyles}>
          <ComposableMap
            projectionConfig={{
              scale: 205,
            }}
            width={980}
            height={551}
            style={{
              width: "100%",
              height: "auto",
            }}
            >
            <ZoomableGroup center={this.state.center} zoom={this.state.zoom}>
              <Geographies geography={ZoomObject}>
                {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
                  <Geography
                    key={i}
                    geography={geography}
                    projection={projection}
                    style={{
                      default: {
                        fill: "#ECEFF1",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      hover: {
                        fill: "#607D8B",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      pressed: {
                        fill: "#FF5722",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                    }}
                  />
                ))}
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
        </div>
      </div>
    )
  }
}

export default ZoomPan