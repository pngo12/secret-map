import React, { Component } from "react"
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
} from "react-simple-maps"
import { connect } from 'react-redux';
import { searchForCountryOrProduct, getCountry } from '../../redux/actions';
import ZoomObject from "../static/world-50m.json";
import './dashboard.css';

const wrapperStyles = {
    width: "100%",
    maxWidth: 1100,
    margin: "0 auto",
}

class WorldMap extends Component {
    constructor() {
        super()
        this.state = {
            countries: [],
            colorCountries: {},
            center: [0, 20],
            zoom: 1,
            region: [
                { name: "Europe", coordinates: [8.5417, 47.3769] },
                { name: "Asia", coordinates: [103.8198, 25.3521] },
                { name: "North America", coordinates: [-100.4194, 40.7749] },
                { name: "Oceana", coordinates: [140.2093, -20.8688] },
                { name: "Africa", coordinates: [25.3185, 1.5687] },
                { name: "South America", coordinates: [-58.3816, -20.6037] }
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
    }

    handleReset() {
        this.setState({
            center: [0, 20],
            zoom: 1,
        })
    }

    passToParent = e => {
        this.props.updateCountryName(e.properties.name)
        this.props.searchForCountryOrProduct(e.properties.name)
        console.log(e.properties.name)
    }

    componentDidMount() {
        this.props.getCountry()
    }

    componentDidUpdate(prevProps) {

        if (this.props.cache !== prevProps.cache) {
            let colorCountries = { ...this.state.colorCountries };
            // reset the colors
            for (let name in colorCountries) {
                colorCountries[name] = '#a8c9ff'
            }
            // remap the new highlighted colors
            for (let countryName in this.props.highlightCountries) {
                colorCountries[countryName] = this.props.highlightCountries[countryName];
            }
            this.setState({
                colorCountries
            })
        } else if (prevProps.countries.length !== this.props.countries.length) {
            let colorCountries = {}
            let countries = this.props.countries.map(country => country.name)
            countries.forEach(country => {
                colorCountries[country] = '#a8c9ff'
            })
            this.setState({
                countries,
                colorCountries
            })
        }

    }

    getColor = (highlightCountries, geographyName) => {
        let colorCountries = { ...this.state.colorCountries };
        for (let countryName in highlightCountries) {
            colorCountries[countryName] = highlightCountries[countryName];
        }
        if (colorCountries[geographyName]) {
            return colorCountries[geographyName]
        } else {
            return "#ECEFF1"
        }
    }

    render() {
        let { countries, colorCountries } = this.state;
        let { highlightCountries } = this.props;
        console.log("(1) countries color:", colorCountries)
        console.log("(2) highlight color:", highlightCountries);
        return (
            <div>
                <div className="buttonRow container" style={wrapperStyles}>
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
                {countries.length !== 0 &&
                    <div style={wrapperStyles} id="mapBox">
                        <ComposableMap
                            projectionConfig={{ scale: 245 }}
                            width={980}
                            height={551}
                            style={{
                                width: "100%",
                                height: "auto",
                            }}
                        >
                            <ZoomableGroup center={this.state.center} zoom={this.state.zoom}>
                                <Geographies geography={ZoomObject} disableOptimization>
                                    {(geographies, projection) => geographies.map((geography, i) => {
                                        return geography.id !== "ATA" && (
                                            <Geography
                                                key={i}
                                                cacheId={`geography-${i}`}
                                                onClick={this.passToParent}
                                                geography={geography}
                                                projection={projection}
                                                style={{
                                                    default: {
                                                        fill: colorCountries[geography.properties.name] ? colorCountries[geography.properties.name] : "#ECEFF1",
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
                                            />
                                        )
                                    })}
                                </Geographies>
                            </ZoomableGroup>
                        </ComposableMap>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    countries: state.countries,
    highlightCountries: state.highlightCountries,
    cache: state.cache
})

const mapDispatchToProps = dispatch => ({
    searchForCountryOrProduct: searchTerm => dispatch(searchForCountryOrProduct(searchTerm)),
    getCountry: () => dispatch(getCountry())
})

export default connect(mapStateToProps, mapDispatchToProps)(WorldMap);