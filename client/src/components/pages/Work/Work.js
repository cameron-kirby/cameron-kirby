import React, { useRef, useEffect } from "react"
import { StyledWork } from './Work.styled'

const workdata = [{
    img_src: "https://via.placeholder.com/346x230",
    img_height: 230,
    title: "Operational Insights",
    body: "This is a dummy work item!",
    size:"small"
},{
    img_src: "https://via.placeholder.com/346x432",
    img_height: 432,
    title: "Work item 2",
    body: "This is a dummy work item!",
    size:"large"
},{
    img_src: "https://via.placeholder.com/346x230",
    img_height: 230,
    title: "Work item 3",
    body: "This is a dummy work item!",
    size:"small"
},{
    img_src: "https://via.placeholder.com/346x230",
    img_height: 230,
    title: "Work item 4",
    body: "This is a dummy work item!",
    size:"small"
},{
    img_src: "https://via.placeholder.com/346x432",
    img_height: 432,
    title: "Work item 5",
    body: "This is a dummy work item!",
    size:"large"
}]

const Work = ({ useWindowDimensions }) => {
    const { width } = useWindowDimensions();
    const masonryNode = useRef();

    useEffect(()=> {
        const masonryCollection = masonryNode.current.children
        const yOffset = masonryCollection[0].getBoundingClientRect().top
        const columnSize = (width - (3*55)) / 2
        const leftBound = `${(columnSize + 55)}px`
        for (let i = 0; i < masonryCollection.length; i++){
            masonryCollection[i].style.left = ((i+1)%2===0) ? leftBound : "0px";
            if (i > 1) {
                masonryCollection[i].style.top = `${(masonryCollection[i-2].getBoundingClientRect().bottom) - yOffset}px`
            } else {
                masonryCollection[i].style.top = "0px"
            }
        }
    }, [width])

    return (
        <StyledWork>
            <div className="filters">
                <ul>
                    <li className="is-active">
                        <button>All work</button>
                    </li>
                    <li>
                        <button>Filter 2</button>
                    </li>
                    <li>
                        <button>Filter 3</button>
                    </li>
                </ul>
            </div>
            <div className="work">
                <div className="masonry" ref={masonryNode}>
                    {workdata.map((data, index) => {
                        return(
                            <div className="work-item" style={{
                                position: "absolute",
                            }} key={index}>
                                <div className="work-item-media">
                                    <img src={data.img_src} alt={data.title} width="346px" height={data.img_height+"px"}></img>
                                </div>
                                <div className="work-item-body">
                                    <h3>{data.title}</h3>
                                    <p>{data.body}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </StyledWork>
    );
}

export default Work;