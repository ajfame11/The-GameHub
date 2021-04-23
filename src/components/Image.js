const Image = (props) => {
    const {url, width} = props
    
    return (
        <div style= {{height:'200px', overflow:'hidden'}}>
            <img src={url} alt="" width = {width} height='auto'/> <br/>
        </div>
    )
}

export default Image