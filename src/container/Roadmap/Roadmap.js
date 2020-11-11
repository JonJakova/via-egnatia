import React, { Component, Fragment } from "react";
import ImageMapper from 'react-image-mapper';
import map_image from './static/8k-map.png';
import { links } from './CONSTANTS';
import './static/Roadmap.css';
import './static/style.less';

const MAP = {
        name: 'my-map',
        areas: [
            { name: "Oslo", shape: 'circle', coords: [418, 1262, 41], preFillColor: "green", fillColor: "#0000ff" },
            { name: "Rome", shape: 'circle', coords: [495, 1877, 36], preFillColor: "green", fillColor: "#0000ff" }
        ],
    }

var url = "https://i.imgur.com/OMzZTcn.jpg";

class Roadmap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hoveredArea: null,
            msg: null,
            moveMsg: null
        }
    }

    render() {
        const width = _getWidth();
        return (
            <Fragment>
                <div className="roadmap">
                    <ImageMapper
                        src={url}
                        map={MAP}
                        width={width}
                        lineWidth={4}
                        strokeColor={"white"} />
                </div>
            </Fragment>
        )
    }
}

const _getWidth = () => window.innerWidth / 2;

const _getHeight = () => window.innerHeight /2;

export default Roadmap;