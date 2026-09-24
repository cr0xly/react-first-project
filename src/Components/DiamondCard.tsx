interface DiamondCardProps {
    image: string
    productName: string
    price: string
    sale?: boolean
}
export default function DiamondCard(props:DiamondCardProps){
    return (
        <div className="DiamondCard">
            <img 
            src={props.image} 
            alt="ring1"
            width="100px"
            />
            <h2>{props.productName}</h2>
            <p>{props.price}</p>
            <p style={{color: "red", fontWeight: "bolder"}}>
                {props.sale && "SALE"}
            </p>
        </div>
    )
}