import React from 'react'


class ImageCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = { spans: 0 }
        this.imageref = React.createRef()
    }

    componentDidMount() {
        this.imageref.current.addEventListener('load', this.setspans)
    }

    setspans = () => {
        const height = this.imageref.current.clientHeight
        const spans = Math.ceil(height / 150)
        this.setState({ spans })
    }
    render() {
        return (
            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                <img ref={this.imageref}  alt={this.props.image.description} src={this.props.image.urls.regular} />
            </div>
        )
    }

}

export default ImageCard