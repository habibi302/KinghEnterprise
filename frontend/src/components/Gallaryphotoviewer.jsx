import { ImageViewer } from "react-image-viewer-dv"
import img from '../images/print.jpg';

export default function Gallaryphotoviewer(){
    return (<div>
        <ImageViewer>
            <img src={img}  alt="Your image" />
        </ImageViewer>
    </div>);
}
