import React, { Component } from "react"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"
import chroma from "chroma-js";
import ZoomObject from "../static/world-50m.json";
import Search from './search';

const wrapperStyles = {
    width: "100%",
    maxWidth: 1100,
    margin: "0 auto",
}

const colorScale = chroma
    .scale([
        '#f2718b'
    ])
    .mode('rgb')
    .colors(100)

class ZoomPan extends Component {
    constructor() {
        super()
        // this.handleMove = this.handleMove.bind(this)
        // this.handleLeave = this.handleLeave.bind(this)
        this.state = {
            center: [0, 20],
            zoom: 1,
            countries: [
            "United States",
            "Mexico",
            "China",
            "Egypt",
            "Australia",
            "Brazil",
            "Japan",
            "Korea",
            "India",
            "United Kingdom",
            "France",
            "Spain",
            "Germany",
            "Italy",
            "South Africa"],
            region: [
                { name: "Europe", coordinates: [8.5417, 47.3769] },
                { name: "Asia", coordinates: [103.8198, 1.3521] },
                { name: "North America", coordinates: [-122.4194, 37.7749] },
                { name: "Oceana", coordinates: [151.2093, -33.8688] },
                { name: "Africa", coordinates: [2.3185, 19.5687] },
                { name: "South America", coordinates: [-58.3816, -34.6037] }
            ]
        }
        this.handleregionSelection = this.handleregionSelection.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }

    // handleMove(geography, evt) {
    //     const x = evt.clientX
    //     const y = evt.clientY + window.pageYOffset
    //     this.props.dispatch(
    //         show({
    //             origin: { x, y },
    //             content: geography.properties.name
    //         })
    //     )
    // }

    // handleLeave() {
    //     this.props.dispatch(hide())
    // }

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
            center: [0, 20],
            zoom: 1,
        })
    }

    passToParent = (e) => {
        this.props.updateCountryName(e.properties.name)
        console.log(e.properties.name)
    }

    render() {
        return (
            <div>
                <div className="container" style={wrapperStyles}>
                    {
                        this.state.region.map((region, i) => (
                            <button
                                key={i}
                                id="continentButtons"
                                className="button is-info is-small is-outlined"
                                data-region={i}
                                onClick={this.handleregionSelection}
                            >
                                {region.name}
                            </button>
                        ))
                    }
                    <button id="continentButtons" className="button is-danger is-small is-outlined" onClick={this.handleReset}>
                        {"Reset"}
                    </button>
                </div>
                <div style={wrapperStyles} id="mapBox">
                    <ComposableMap
                        projectionConfig={{
                            scale: 245,
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
                                        // onMouseMove={this.handleMove}
                                        // onMouseLeave={this.handleLeave}
                                        style={{
                                            default: {
                                                fill: colorScale[this.state.countries.indexOf(geography.properties.name)] ? colorScale[this.state.countries.indexOf(geography.properties.name)] : "#ECEFF1",
                                                stroke: "#607D8B",
                                                strokeWidth: 0.75,
                                                outline: "none",
                                            },
                                            hover: {
                                                fill: "#607D8B",
                                                stroke: "#607D8B",
                                                strokeWidth: 0.75,
                                                outline: "none",
                                                show: {
                                                  content: geography.properties.name
                                                }
                                            },
                                            pressed: {
                                                fill: "#FF5722",
                                                stroke: "#607D8B",
                                                strokeWidth: 0.75,
                                                outline: "none",
                                            },
                                        }}
                                        onClick={this.passToParent}
                                    />
                                ))}
                            </Geographies>
                        </ZoomableGroup>
                    </ComposableMap>
                    {/* <Tooltip /> */}
                </div>
            </div>
        )
    }
}

// const mapStateToProps = state => ({

// })

export default ZoomPan;
